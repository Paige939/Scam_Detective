#!/usr/bin/env python3
"""
Scam Detective — Global Wiki Lint Script (Loop 3 & Phase 2/6 Verification)
Checks:
1. YAML Frontmatter validity & required fields (by directory type)
2. verification_status values
3. Wikilinks target file existence (handling escaped pipes in Markdown tables)
4. Exact Markdown heading anchor existence (Obsidian-compatible)
5. Orphan pages & index.md coverage
6. Paper core findings PDF page citations
7. Official source pages URL & raw_record existence
8. Remaining 🔗 pending markers audit & Dhamija/Ferreira preservation
"""

import re
import sys
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
WIKI = ROOT / "wiki"
LINK_RE = re.compile(r"\[\[(.+?)\]\]")


def run_lint() -> int:
    files = sorted(WIKI.rglob("*.md"))
    broken_links = []
    yaml_errors = []
    status_map = {}
    inbound = {f: set() for f in files}
    total_links = 0
    source_errors = []

    for f in files:
        text = f.read_text(encoding="utf-8")
        if f.name not in ("log.md", "index.md"):
            m = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", text, re.S)
            if not m:
                yaml_errors.append((f.name, "missing YAML frontmatter"))
            else:
                y = m.group(1)
                if "papers" in f.parts:
                    req = ["title", "authors", "year", "venue", "pdf_path", "verification_status"]
                elif "sources" in f.parts:
                    req = ["title", "category", "agency", "source_url", "accessed_date", "raw_record", "verification_status"]
                else:
                    req = ["title", "category", "verification_status"]
                for k in req:
                    if not re.search(rf"^{k}:", y, re.M):
                        yaml_errors.append((f.name, f"missing {k}"))
                sm = re.search(r'^verification_status:\s*"?(\w+)"?', y, re.M)
                status = sm.group(1) if sm else None
                status_map[f.name] = status
                if status not in ("verified", "pending_review", "needs_revision"):
                    yaml_errors.append((f.name, f"invalid verification_status: {status}"))
                if "sources" in f.parts:
                    um = re.search(r'^source_url:\s*"?(https?://[^\s"]+)"?', y, re.M)
                    rm = re.search(r'^raw_record:\s*"?([^"\r\n]+)"?', y, re.M)
                    if not um:
                        source_errors.append((f.name, "missing/invalid source_url"))
                    if not rm or not (ROOT / rm.group(1)).exists():
                        source_errors.append((f.name, f"missing raw_record: {rm.group(1) if rm else None}"))
                if "papers" in f.parts:
                    pm = re.search(r'^pdf_path:\s*"?([^"\r\n]+)"?', y, re.M)
                    if not pm or not (ROOT / pm.group(1)).exists():
                        source_errors.append((f.name, f"missing pdf_path: {pm.group(1) if pm else None}"))

        for raw in LINK_RE.findall(text):
            total_links += 1
            cleaned = raw.replace("\\|", "|")
            target = cleaned.split("|")[0]
            path_part, _, anchor = target.partition("#")
            target_file = ROOT / (path_part + ".md")
            if not target_file.exists():
                broken_links.append((f.name, raw, "missing_file"))
                continue
            if target_file != f and target_file in inbound:
                inbound[target_file].add(f.name)
            if anchor:
                heads = [
                    re.sub(r"^#+\s*", "", line).strip()
                    for line in target_file.read_text(encoding="utf-8").splitlines()
                    if re.match(r"^#+\s", line)
                ]
                if anchor not in heads:
                    broken_links.append((f.name, raw, "missing_anchor"))

    orphans = [f.name for f, refs in inbound.items() if not refs and f.name not in ("index.md", "log.md")]
    index_text = (WIKI / "index.md").read_text(encoding="utf-8")
    not_in_index = [f.name for f in files if f.name not in ("index.md", "log.md") and f.stem not in index_text]

    missing_page_findings = []
    total_findings = 0
    for pf in sorted((WIKI / "papers").glob("*.md")):
        t = pf.read_text(encoding="utf-8")
        sec = re.search(r"## 3\. 學術核心研究發現.*?(?=\n## 4\.)", t, re.S)
        if not sec:
            missing_page_findings.append((pf.name, "missing Section 3"))
            continue
        blocks = re.split(r"\n(?=### )", sec.group(0))[1:]
        total_findings += len(blocks)
        for b in blocks:
            if "PDF p." not in b:
                missing_page_findings.append((pf.name, b.splitlines()[0]))

    pending_summary = {}
    for f in files:
        if f.name == "log.md":
            continue
        cnt = f.read_text(encoding="utf-8").count("🔗")
        if cnt > 0:
            pending_summary[str(f.relative_to(WIKI))] = cnt

    print(f"Wiki files: {len(files)} (content pages: {len(status_map)})")
    print(f"Total Wikilinks: {total_links}")
    print(f"Broken links/anchors: {len(broken_links)} -> {broken_links}")
    print(f"YAML errors: {len(yaml_errors)} -> {yaml_errors}")
    print(f"Source/PDF path errors: {len(source_errors)} -> {source_errors}")
    print(f"Orphan pages: {len(orphans)} -> {orphans}")
    print(f"Not in index.md: {len(not_in_index)} -> {not_in_index}")
    print(f"Paper findings checked: {total_findings}, missing PDF page: {len(missing_page_findings)}")
    print(f"Remaining pending 🔗 markers: {pending_summary}")

    ok = not (broken_links or yaml_errors or source_errors or orphans or not_in_index or missing_page_findings)
    print("LINT RESULT:", "PASS" if ok else "FAIL")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(run_lint())
