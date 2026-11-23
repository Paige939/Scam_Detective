/**
 * Scam Detective — Unit 4 Interactive Quiz Engine
 * Implements Kumaraguru et al. (2009) "Teachable Moment" immediate feedback
 * with strict score tracking, rule-based study advice, and full reset.
 */

window.ScamQuiz = (function () {
  let state = {
    currentIdx: 0,
    answers: {},
    finished: false
  };

  function getQuestions() {
    return (window.SCAM_DETECTIVE_DATA && window.SCAM_DETECTIVE_DATA.quizQuestions) || [];
  }

  function getAdviceRules() {
    return (window.SCAM_DETECTIVE_DATA && window.SCAM_DETECTIVE_DATA.adviceRules) || {};
  }

  function computeScore() {
    const qs = getQuestions();
    let score = 0;
    const missedKeys = [];
    qs.forEach((q) => {
      const chosen = state.answers[q.id];
      if (chosen === q.correctIndex) {
        score += 1;
      } else if (typeof chosen === "number" && !missedKeys.includes(q.adviceKey)) {
        missedKeys.push(q.adviceKey);
      }
    });
    return { score, total: qs.length, missedKeys };
  }

  function getRankTitle(score, total) {
    const ratio = total ? score / total : 0;
    if (ratio === 1) return "首席防詐大偵探（滿分通關！）";
    if (ratio >= 0.75) return "資深認知防禦偵探";
    if (ratio >= 0.5) return "見習防詐調查員";
    return "學院新生（建議複習重點單元後再戰）";
  }

  function render() {
    const host = document.getElementById("quiz-stage");
    if (!host) return;
    const qs = getQuestions();
    if (!qs.length) return;

    if (state.finished) {
      renderSummary(host);
      return;
    }

    const q = qs[state.currentIdx];
    const chosen = state.answers[q.id];
    const answered = typeof chosen === "number";
    const { score } = computeScore();

    host.innerHTML = `
      <div class="quiz-meta">
        <span><strong>第 ${state.currentIdx + 1} / ${qs.length} 題</strong> ・ <span class="pill-badge">${q.category}</span></span>
        <span>目前得分：<strong>${score} / ${qs.length}</strong></span>
      </div>
      <div class="grid-2" style="align-items:start;">
        <div>
          <img src="${q.image}" alt="${q.category} 教學示意圖" class="case-img" />
          <p class="img-caption">※ 教學情境插圖（非研究證據）</p>
        </div>
        <div>
          <p style="margin-top:0;font-size:1rem;"><strong>案件情境：</strong>${q.scenario}</p>
          <div class="option-list" role="radiogroup" aria-label="測驗選項">
            ${q.options.map((opt, idx) => {
              let cls = "option-btn";
              if (answered) {
                if (idx === q.correctIndex) cls += " correct";
                else if (idx === chosen) cls += " wrong";
              }
              return `<button type="button" class="${cls}" data-quiz-opt="${idx}" ${answered ? "disabled" : ""} aria-pressed="${chosen === idx}">
                <strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}
              </button>`;
            }).join("")}
          </div>
        </div>
      </div>
      <div class="feedback-box ${answered ? "show" : ""}" id="quiz-feedback" aria-live="polite">
        ${answered ? `
          <div class="callout ${chosen === q.correctIndex ? "ok" : "danger"}" style="margin-top:0;">
            <strong>${chosen === q.correctIndex ? "✅ 判斷正確！可教時刻加分" : "❌ 判斷失誤！立刻來看關鍵線索"}</strong>
          </div>
          <p style="margin:0.5rem 0;">${q.explanation}</p>
          <p style="margin:0;font-size:0.82rem;color:var(--text-dim);"><strong>證據來源：</strong>${q.source}</p>
        ` : ""}
      </div>
      <div class="unit-nav-footer" style="margin-top:1rem;padding-top:0.85rem;">
        <button type="button" class="btn" id="quiz-prev-btn" ${state.currentIdx === 0 ? "disabled" : ""}>← 上一題</button>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <button type="button" class="btn" id="quiz-reset-inline">↻ 重新挑戰</button>
          ${state.currentIdx < qs.length - 1
            ? `<button type="button" class="btn btn-primary" id="quiz-next-btn" ${answered ? "" : "disabled"}>下一題 →</button>`
            : `<button type="button" class="btn btn-primary" id="quiz-finish-btn" ${answered ? "" : "disabled"}>查看最終成績 🏆</button>`}
        </div>
      </div>
    `;

    host.querySelectorAll("[data-quiz-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-quiz-opt"));
        state.answers[q.id] = idx;
        render();
        if (window.ScamApp && typeof window.ScamApp.updateProgress === "function") {
          window.ScamApp.updateProgress();
        }
      });
    });

    const prevBtn = document.getElementById("quiz-prev-btn");
    if (prevBtn) prevBtn.addEventListener("click", () => { if (state.currentIdx > 0) { state.currentIdx--; render(); } });

    const nextBtn = document.getElementById("quiz-next-btn");
    if (nextBtn) nextBtn.addEventListener("click", () => { if (state.currentIdx < qs.length - 1) { state.currentIdx++; render(); } });

    const finishBtn = document.getElementById("quiz-finish-btn");
    if (finishBtn) finishBtn.addEventListener("click", () => {
      state.finished = true;
      render();
      if (window.ScamApp && typeof window.ScamApp.markUnitDone === "function") {
        window.ScamApp.markUnitDone("unit4");
      }
    });

    const resetInline = document.getElementById("quiz-reset-inline");
    if (resetInline) resetInline.addEventListener("click", reset);
  }

  function renderSummary(host) {
    const { score, total, missedKeys } = computeScore();
    const rules = getAdviceRules();
    const rank = getRankTitle(score, total);

    const adviceItems = missedKeys.length
      ? missedKeys.map((k) => `<li>${rules[k]}</li>`).join("")
      : `<li>全部 ${total} 題皆答對！依據 Kumaraguru et al. (2009) 的研究，定期複習可幫助長期維持對釣魚攻擊的警覺，建議未來收到可疑訊息時持續套用本學院檢核清單。</li>`;

    host.innerHTML = `
      <div class="score-banner">
        <div class="eyebrow" style="margin-bottom:0.4rem;">案件結案報告</div>
        <div class="score-big">${score} / ${total} 分</div>
        <p style="margin:0.35rem 0 0;font-size:1.05rem;font-weight:700;">稱號：${rank}</p>
      </div>
      <div class="callout ok">
        <strong>📚 個人化學習建議（依本輪錯題類別規則產生）：</strong>
        <ul style="margin:0.5rem 0 0;padding-left:1.25rem;">${adviceItems}</ul>
      </div>
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:1rem;">
        <button type="button" class="btn btn-primary" id="quiz-retry-btn">↻ 重新挑戰 8 題測驗</button>
        <button type="button" class="btn" id="quiz-review-btn">🔍 回到第 1 題檢視解析</button>
        <button type="button" class="btn" id="quiz-home-btn">🏠 返回學院首頁</button>
      </div>
    `;

    document.getElementById("quiz-retry-btn").addEventListener("click", reset);
    document.getElementById("quiz-review-btn").addEventListener("click", () => {
      state.finished = false;
      state.currentIdx = 0;
      render();
    });
    document.getElementById("quiz-home-btn").addEventListener("click", () => {
      if (window.ScamApp) window.ScamApp.goTo("home");
    });
  }

  function reset() {
    state = { currentIdx: 0, answers: {}, finished: false };
    render();
    if (window.ScamApp && typeof window.ScamApp.updateProgress === "function") {
      window.ScamApp.updateProgress();
    }
  }

  function getProgressRatio() {
    const qs = getQuestions();
    if (!qs.length) return 0;
    return Object.keys(state.answers).length / qs.length;
  }

  return { init: render, reset, computeScore, getProgressRatio, _state: () => state };
})();
