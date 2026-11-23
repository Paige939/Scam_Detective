/**
 * Scam Detective — Main Interactive Application Controller
 * Handles routing across Home + 4 Units, interactive labs, progress tracking,
 * Source Drawer, and keyboard accessibility.
 */

window.ScamApp = (function () {
  const ORDER = ["home", "unit1", "unit2", "unit3", "unit4"];
  const completedUnits = new Set();
  const foundClues = new Set();
  const foundHotspots = new Set();
  let currentView = "home";
  let timelineIdx = 0;

  function goTo(viewId) {
    if (!ORDER.includes(viewId)) return;
    currentView = viewId;

    document.querySelectorAll(".view-panel").forEach((el) => {
      const isMatch = el.id === `view-${viewId}`;
      el.classList.toggle("active", isMatch);
      el.setAttribute("aria-hidden", String(!isMatch));
    });

    document.querySelectorAll(".unit-tab").forEach((tab) => {
      const target = tab.getAttribute("data-nav");
      const active = target === viewId;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function markUnitDone(unitId) {
    completedUnits.add(unitId);
    const tab = document.querySelector(`.unit-tab[data-nav="${unitId}"]`);
    if (tab) {
      tab.classList.add("done");
      const st = tab.querySelector(".tab-status");
      if (st) st.textContent = "✓";
    }
    updateProgress();
  }

  function updateProgress() {
    const baseDone = completedUnits.size;
    const quizBonus = !completedUnits.has("unit4") && window.ScamQuiz ? window.ScamQuiz.getProgressRatio() : 0;
    const pct = Math.min(100, Math.round(((baseDone + quizBonus) / 4) * 100));
    const fill = document.getElementById("global-progress-fill");
    const label = document.getElementById("global-progress-text");
    if (fill) fill.style.width = `${pct}%`;
    if (label) label.textContent = `學院任務進度：${pct}%（已完成 ${baseDone} / 4 單元）`;
  }

  /* Unit 1: Admission Intuition Drill */
  function initUnit1() {
    const container = document.getElementById("u1-options");
    const feedback = document.getElementById("u1-feedback");
    if (!container || !feedback) return;

    const signals = window.SCAM_DETECTIVE_DATA.unit1Signals;
    container.innerHTML = signals.map((s) => `
      <button type="button" class="option-btn" data-u1-id="${s.id}">
        ${s.label}
      </button>
    `).join("");

    container.querySelectorAll("[data-u1-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-u1-id");
        const item = signals.find((s) => s.id === id);
        if (!item) return;

        container.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected", "correct", "wrong"));
        btn.classList.add(item.safe ? "correct" : "wrong");

        feedback.innerHTML = `
          <div class="callout ${item.safe ? "ok" : "warn"}" style="margin-top:0;">
            <strong>${item.safe ? "✅ 安全的防詐判斷！" : "⚠️ 直覺落入陷阱！"}</strong>
          </div>
          <p style="margin:0.45rem 0;">${item.feedback}</p>
          <p style="margin:0;font-size:0.8rem;color:var(--text-dim);"><strong>研究出處：</strong>${item.source}</p>
        `;
        feedback.classList.add("show");
        markUnitDone("unit1");
      });
    });
  }

  /* Unit 2A: Message Clue Inspector */
  function initUnit2Clues() {
    const clues = window.SCAM_DETECTIVE_DATA.unit2Clues;
    const fb = document.getElementById("u2-clue-feedback");
    const counter = document.getElementById("u2-clue-count");
    if (!fb) return;

    document.querySelectorAll("[data-clue-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-clue-id");
        const item = clues.find((c) => c.id === id);
        if (!item) return;

        foundClues.add(id);
        btn.classList.add("found");
        if (counter) counter.textContent = `已解剖線索：${foundClues.size} / ${clues.length}`;

        fb.innerHTML = `
          <div class="callout" style="margin-top:0;"><strong>🔎 ${item.principle}</strong></div>
          <p style="margin:0.45rem 0;">${item.explain}</p>
          <p style="margin:0;font-size:0.8rem;color:var(--text-dim);"><strong>出處：</strong>${item.source}</p>
        `;
        fb.classList.add("show");

        if (foundClues.size >= 3) markUnitDone("unit2");
      });
    });
  }

  /* Unit 2B: Romance Scam Interactive Timeline */
  function renderTimeline() {
    const items = window.SCAM_DETECTIVE_DATA.unit2Timeline;
    const pills = document.getElementById("u2-timeline-pills");
    const stage = document.getElementById("u2-timeline-stage");
    if (!pills || !stage) return;

    pills.innerHTML = items.map((it, idx) => `
      <button type="button" class="timeline-pill ${idx === timelineIdx ? "active" : ""}" data-tl-idx="${idx}">
        ${it.stage.split("：")[0]}
      </button>
    `).join("");

    pills.querySelectorAll("[data-tl-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        timelineIdx = Number(btn.getAttribute("data-tl-idx"));
        renderTimeline();
      });
    });

    const cur = items[timelineIdx];
    stage.innerHTML = `
      <h4 style="margin:0 0 0.45rem;color:var(--accent-cyan);">${cur.stage}</h4>
      <p style="margin:0 0 0.85rem;">${cur.story}</p>
      <div class="option-list">
        ${cur.choices.map((c, idx) => `
          <button type="button" class="option-btn" data-tl-choice="${idx}">
            ${idx === 0 ? "選項 A：" : "選項 B："}${c.text}
          </button>
        `).join("")}
      </div>
      <div class="feedback-box" id="u2-tl-feedback" aria-live="polite"></div>
      <p style="margin:0.6rem 0 0;font-size:0.8rem;color:var(--text-dim);"><strong>來源：</strong>${cur.source}</p>
    `;

    stage.querySelectorAll("[data-tl-choice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-tl-choice"));
        const choice = cur.choices[idx];
        stage.querySelectorAll("[data-tl-choice]").forEach((b) => b.classList.remove("correct", "wrong"));
        btn.classList.add(choice.isSafe ? "correct" : "wrong");

        const tlFb = document.getElementById("u2-tl-feedback");
        tlFb.innerHTML = `
          <div class="callout ${choice.isSafe ? "ok" : "danger"}" style="margin:0;">
            <strong>${choice.isSafe ? "✅ 成功守住防線" : "⚠️ 警訊拆解"}</strong><br/>
            ${choice.result}
          </div>
        `;
        tlFb.classList.add("show");
        markUnitDone("unit2");
      });
    });
  }

  /* Unit 3: Fake Website Magnifier */
  function initUnit3Hotspots() {
    const hotspots = window.SCAM_DETECTIVE_DATA.unit3Hotspots;
    const fb = document.getElementById("u3-hotspot-feedback");
    const counter = document.getElementById("u3-hotspot-count");
    if (!fb) return;

    document.querySelectorAll("[data-hotspot-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-hotspot-id");
        const item = hotspots.find((h) => h.id === id);
        if (!item) return;

        foundHotspots.add(id);
        btn.classList.add("found");
        if (counter) counter.textContent = `已揪出可疑訊號：${foundHotspots.size} / ${hotspots.length}`;

        fb.innerHTML = `
          <div class="callout warn" style="margin-top:0;"><strong>🔍 ${item.title}</strong></div>
          <p style="margin:0.45rem 0;">${item.detail}</p>
          <p style="margin:0;font-size:0.8rem;color:var(--text-dim);"><strong>來源：</strong>${item.source}</p>
        `;
        fb.classList.add("show");

        if (foundHotspots.size >= 3) markUnitDone("unit3");
      });
    });
  }

  /* Sources Drawer */
  function initSourcesModal() {
    const modal = document.getElementById("sources-modal");
    const tbody = document.getElementById("sources-tbody");
    const openBtn = document.getElementById("open-sources-btn");
    const closeBtn = document.getElementById("close-sources-btn");
    if (!modal || !tbody) return;

    tbody.innerHTML = window.SCAM_DETECTIVE_DATA.sourcesCatalog.map((s) => `
      <tr>
        <td><span class="pill-badge">${s.type}</span></td>
        <td>
          <strong>${s.name}</strong><br/>
          <span style="font-size:0.8rem;color:var(--text-muted);">${s.ref}</span>
        </td>
        <td>
          <code style="font-size:0.78rem;">${s.wiki}</code>
          ${s.url ? `<br/><a href="${s.url}" target="_blank" rel="noopener noreferrer">開啟外部官方／DOI 連結 ↗</a>` : ""}
        </td>
      </tr>
    `).join("");

    function openModal() {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      if (closeBtn) closeBtn.focus();
    }
    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      if (openBtn) openBtn.focus();
    }

    if (openBtn) openBtn.addEventListener("click", openModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
  }

  function bindNavigation() {
    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.addEventListener("click", () => goTo(el.getAttribute("data-nav")));
    });
    document.querySelectorAll("[data-step='prev']").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = ORDER.indexOf(currentView);
        if (idx > 0) goTo(ORDER[idx - 1]);
      });
    });
    document.querySelectorAll("[data-step='next']").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = ORDER.indexOf(currentView);
        if (idx < ORDER.length - 1) goTo(ORDER[idx + 1]);
      });
    });
  }

  function init() {
    bindNavigation();
    initUnit1();
    initUnit2Clues();
    renderTimeline();
    initUnit3Hotspots();
    initSourcesModal();
    if (window.ScamQuiz) window.ScamQuiz.init();
    goTo("home");
  }

  document.addEventListener("DOMContentLoaded", init);
  return { goTo, markUnitDone, updateProgress };
})();
