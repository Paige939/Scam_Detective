#!/usr/bin/env python3
"""
Scam Detective — HTML Presentation Static & Logic Validator (Loop 4 & Phase 6)
Checks:
1. Entry HTML, CSS, JS file existence & relative path resolution
2. All <img> paths in HTML and content.js exist on disk
3. No credential-harvesting <input type="password"> fields
4. No leaked pending/unverified markers (🔗, pending_review, needs_revision)
5. All Wiki source paths listed in content.js exist & are marked verified
6. Node.js syntax check & Quiz logic/scoring/reset verification (if node is available)
"""

import re
import sys
import shutil
import pathlib
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
PRES = ROOT / "presentation"


def main() -> int:
    errors = []
    index_html = PRES / "index.html"
    if not index_html.exists():
        print("FAIL: presentation/index.html not found")
        return 1

    html = index_html.read_text(encoding="utf-8")
    content_js = (PRES / "js" / "content.js").read_text(encoding="utf-8")
    quiz_js = (PRES / "js" / "quiz.js").read_text(encoding="utf-8")
    app_js = (PRES / "js" / "app.js").read_text(encoding="utf-8")
    style_css = (PRES / "css" / "style.css").read_text(encoding="utf-8")

    # 1. Local CSS/JS/IMG references in index.html
    refs = re.findall(r'(?:href|src)="([^"]+)"', html)
    local_refs = [r for r in refs if not r.startswith(("http://", "https://", "#"))]
    for r in local_refs:
        target = (PRES / r).resolve()
        if not target.exists():
            errors.append(f"Missing referenced file in index.html: {r}")

    # 2. Image references in content.js
    js_imgs = re.findall(r'image:\s*"([^"]+)"', content_js)
    all_imgs = set(r for r in local_refs if r.endswith(".png")) | set(js_imgs)
    for img in sorted(all_imgs):
        if not (PRES / img).resolve().exists():
            errors.append(f"Missing image asset: {img}")

    # Check all 6 assets/ PNGs are used
    expected_assets = {
        "../assets/01_phishing_sms.png",
        "../assets/02_fake_website.png",
        "../assets/03_investment_scam.png",
        "../assets/04_social_engineering.png",
        "../assets/05_malware.png",
        "../assets/06_shopping_scam.png",
    }
    unused = expected_assets - all_imgs
    if unused:
        errors.append(f"Unused assets: {sorted(unused)}")

    # 3. Security: no real password input
    if re.search(r'<input[^>]*type=["\']password["\']', html, re.I):
        errors.append("Security violation: <input type='password'> found in presentation")

    # 4. Pending leak check
    combined_ui = html + "\n" + content_js + "\n" + quiz_js + "\n" + app_js
    for bad in ("🔗", "pending_review", "needs_revision", "待 165 官方補強"):
        if bad in combined_ui:
            errors.append(f"Leaked pending marker in presentation: {bad}")

    # 5. Wiki traceability check in content.js
    wiki_refs = re.findall(r'wiki/[a-zA-Z0-9_\-/]+\.md', content_js)
    for wr in sorted(set(wiki_refs)):
        wp = ROOT / wr
        if not wp.exists():
            errors.append(f"Missing referenced Wiki page: {wr}")
        else:
            wt = wp.read_text(encoding="utf-8")
            if 'verification_status: "verified"' not in wt:
                errors.append(f"Referenced Wiki page not verified: {wr}")

    # 6. Node.js syntax & quiz engine logic check
    node_bin = shutil.which("node")
    node_result = "NOT TESTED (node not found)"
    if node_bin:
        for jf in ("content.js", "quiz.js", "app.js"):
            p = subprocess.run([node_bin, "--check", str(PRES / "js" / jf)], capture_output=True, text=True)
            if p.returncode != 0:
                errors.append(f"JS syntax error in {jf}: {p.stderr.strip()}")
        test_code = r"""
        global.window = {};
        global.document = {
          addEventListener: () => {},
          getElementById: () => null,
          querySelectorAll: () => [],
          querySelector: () => null
        };
        require('./presentation/js/content.js');
        require('./presentation/js/quiz.js');
        const d = global.window.SCAM_DETECTIVE_DATA;
        if (!d || d.units.length !== 4) throw new Error('Expected 4 units');
        if (d.quizQuestions.length < 8) throw new Error('Expected >= 8 quiz questions');
        for (const q of d.quizQuestions) {
          if (!q.scenario || q.options.length < 2) throw new Error('Invalid options in ' + q.id);
          if (q.correctIndex < 0 || q.correctIndex >= q.options.length) throw new Error('Bad correctIndex in ' + q.id);
          if (!q.explanation || !q.source || !d.adviceRules[q.adviceKey]) throw new Error('Missing metadata in ' + q.id);
        }
        const quiz = global.window.ScamQuiz;
        quiz.reset();
        const st = quiz._state();
        d.quizQuestions.forEach((q, i) => { st.answers[q.id] = i % 2 === 0 ? q.correctIndex : (q.correctIndex + 1) % q.options.length; });
        const res = quiz.computeScore();
        if (res.score !== 4 || res.total !== 8 || res.missedKeys.length === 0) throw new Error('Scoring failed: ' + JSON.stringify(res));
        quiz.reset();
        const res2 = quiz.computeScore();
        if (res2.score !== 0 || Object.keys(quiz._state().answers).length !== 0) throw new Error('Reset failed');
        console.log('NODE_QUIZ_OK', d.units.length, d.quizQuestions.length, d.sourcesCatalog.length);
        """
        p = subprocess.run([node_bin, "-e", test_code], cwd=str(ROOT), capture_output=True, text=True)
        if p.returncode != 0:
            errors.append(f"Node logic test failed: {p.stderr.strip()}")
            node_result = "FAIL"
        else:
            node_result = f"PASS ({p.stdout.strip()})"

    print(f"HTML local refs checked: {len(local_refs)}")
    print(f"Image assets verified: {len(all_imgs)} / 6")
    print(f"Wiki references verified: {len(set(wiki_refs))}")
    print(f"CSS size: {len(style_css)} chars")
    print(f"Node.js syntax & quiz logic test: {node_result}")
    print(f"Errors: {len(errors)} -> {errors}")
    print("HTML VALIDATION RESULT:", "PASS" if not errors else "FAIL")
    return 0 if not errors else 1


if __name__ == "__main__":
    sys.exit(main())
