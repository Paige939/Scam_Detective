# Scam Detective — 網路詐騙偵探學院

> *Learn to Spot Scams Before They Spot You*

**Scam Detective** 是一個以 Andrej Karpathy **LLM Wiki（編譯式、複利式知識庫）** 為核心架構的防詐科普知識庫與互動式教學簡報專案。本專案將五篇經典網路釣魚與社交工程學術論文，結合台灣內政部警政署 165、數位發展部與金管會官方防詐資訊，轉譯為沒有資安背景的在校大學生及一般大眾也能快速上手的認知防禦教材。

---

## 一、學習目標

1. **破除直覺自信**：理解「視覺欺騙」與「有限注意力」如何讓一般人（包含年輕人與理工背景學生）誤信高仿真釣魚頁面。
2. **拆解心理陷阱**：辨識釣魚訊息中的五大說服原則（AUTH、SP、LSD、CRC、DIS），以及網路愛情詐騙的長期情感養成（Grooming）、登門檻、留面子、Near-Win 與台灣「假交友結合投資」手法。
3. **建立網站查證習慣**：學會判讀 Registered Domain、了解 HTTPS 與黑名單的限制，以及「敏感操作優先手動輸入官方網址或用官方 App」的原則。
4. **演練台灣官方處置流程**：透過 8 題互動情境測驗（「可教時刻」即時回饋），熟練 111 政府短碼簡訊、165 專線與緊急圈存、數發部網路詐騙通報查詢網、金管會合法機構查詢，以及親赴派出所取得「受（處）理案件證明單」流程。

---

## 二、核心資料來源（全數 Verified）

### 學術論文（5 篇）
1. **Dhamija, Tygar & Hearst (2006)** — *Why Phishing Works* (CHI '06, pp. 581–590) → [Dhamija2006.md](wiki/papers/Dhamija2006.md)
2. **Ferreira, Coventry & Lenzini (2015)** — *Principles of Persuasion in Social Engineering and Their Use in Phishing* (HAS '15, LNCS, pp. 36–47, DOI: `10.1007/978-3-319-20376-8_4`) → [Ferreira2015.md](wiki/papers/Ferreira2015.md)
3. **Whitty (2013)** — *The Scammers Persuasive Techniques Model: Development of a Stage Model to Explain the Online Dating Romance Scam* (*British Journal of Criminology*, 53(4), pp. 665–684, DOI: `10.1093/bjc/azt009`) → [Whitty2013.md](wiki/papers/Whitty2013.md)
4. **Zhang, Hong & Cranor (2007)** — *CANTINA: A Content-Based Approach to Detecting Phishing Web Sites* (WWW '07, pp. 639–648, DOI: `10.1145/1242572.1242659`) → [Zhang2007.md](wiki/papers/Zhang2007.md)
5. **Kumaraguru et al. (2009)** — *School of Phish: A Real-World Evaluation of Anti-Phishing Training* (SOUPS '09, pp. 1–12, DOI: `10.1145/1572532.1572536`) → [Kumaraguru2009.md](wiki/papers/Kumaraguru2009.md)

### 台灣官方防詐來源（4 項，2026-11-23 實測 HTTP 200）
1. **內政部警政署 165 全民防騙網** (`https://165.npa.gov.tw/`) → [TW165-Portal.md](wiki/sources/TW165-Portal.md)
2. **內政部警政署 165 打詐儀錶板** (`https://165dashboard.tw/`) → [TW165-Dashboard.md](wiki/sources/TW165-Dashboard.md)
3. **數位發展部：網路詐騙通報查詢網＆111 政府專屬短碼簡訊** (`https://fraudbuster.digiat.org.tw/`、`https://moda.gov.tw/`) → [MODA-AntiScam.md](wiki/sources/MODA-AntiScam.md)
4. **金融監督管理委員會（金管會）防範金融詐騙宣導** (`https://www.fsc.gov.tw/`) → [FSC-AntiFraud.md](wiki/sources/FSC-AntiFraud.md)

---

## 三、專案資料夾結構

```text
Scam_Detective/
├── AGENTS.md                        # Schema Layer：系統憲章、四大 Loop 與品質規範
├── README.md                        # 本說明文件
├── PROJECT_REPORT.md                # 專案設計、知識複利與真實除錯報告
├── FINAL_VALIDATION_REPORT.md       # 最終專案驗收報告（PASS / FAIL / NOT TESTED）
├── assets/                          # 6 張教學視覺插圖（唯讀）
├── raw_sources/                     # Layer 1：原始來源（唯讀）
│   ├── papers/                      # 5 篇開放取用學術論文 PDF
│   └── articles/                    # 4 份台灣官方來源查核紀錄
├── wiki/                            # Layer 2：編譯式知識庫（25 檔，23 內容頁）
│   ├── index.md                     # 全局導覽索引
│   ├── log.md                       # Append-only 運作與反思日誌
│   ├── papers/                      # 5 篇論文結構化解讀
│   ├── sources/                     # 4 份台灣官方來源頁
│   ├── concepts/                    # 8 篇核心概念頁
│   ├── tasks/                       # 3 篇大眾防詐 SOP 檢核清單
│   └── syntheses/                   # 3 篇跨文獻綜合分析與教學證據對照表
├── presentation/                    # Output Layer：四單元互動式 HTML 簡報
│   ├── index.html                   # 主入口網頁
│   ├── css/style.css                # 偵探學院主題樣式（響應式＋無障礙焦點）
│   └── js/                          # content.js / quiz.js / app.js
└── scripts/                         # 可重複執行之自動化驗證腳本
    ├── wiki_lint.py                 # 全域 Wiki Lint（YAML、Wikilinks、錨點、孤島、頁碼）
    └── validate_html.py             # HTML 靜態、圖片路徑、pending 排除與 Node.js 測驗邏輯驗證
```

---

## 四、如何在本機開啟互動式 HTML 簡報

### 方式 A：直接以瀏覽器開啟（免安裝任何套件）
1. 開啟檔案總管，進入 `Scam_Detective/presentation/`。
2. 雙擊 `index.html`，使用 Chrome、Edge、Firefox 或 Safari 開啟即可完整互動。

### 方式 B：啟動本機靜態伺服器（推薦）
於 `Scam_Detective/` 專案根目錄開啟終端機執行：
```powershell
python -m http.server 8000
```
接著於瀏覽器開啟：`http://localhost:8000/presentation/index.html`

### GitHub Pages 手動部署說明（選用）
本專案採純靜態原生檔案，未依賴任何建置工具或機密憑證：
1. 建立獨立 Git Repository（勿使用使用者家目錄層級的父 Repo），納入 `presentation/`、`assets/`、`wiki/`、`README.md` 等檔案。
2. 推送至 GitHub 後，於 Repository **Settings → Pages → Build and deployment** 選擇 Branch `main`、Folder `/ (root)`。
3. 部署完成後，以 `https://<username>.github.io/<repo>/presentation/index.html` 存取。

---

## 五、如何執行自動化驗證

```powershell
# 1. 執行全域 Wiki Lint（檢查 YAML、Wikilinks、標題錨點、孤島、PDF 頁碼與來源路徑）
python scripts/wiki_lint.py

# 2. 執行 HTML 靜態檢查、圖片路徑、pending 排除與 Node.js 測驗邏輯測試
python scripts/validate_html.py
```

---

## 六、知識庫與簡報維護指南

1. **新增學術論文**：依 `AGENTS.md §4` 將合法 PDF 放入 `raw_sources/papers/` → 執行 Loop 1（PDF 解析檢查）→ Loop 2（知識查核與證據界線預覽）→ Loop 3（寫入 `wiki/papers/`、增量更新相關概念／任務／綜合頁與 `index.md`）→ 執行 `python scripts/wiki_lint.py` 並追加 `wiki/log.md`。
2. **新增台灣官方來源**：先實測官方 URL 可連線，於 `raw_sources/articles/` 建立來源紀錄，於 `wiki/sources/` 建立來源頁，更新相關任務與綜合頁，執行 `python scripts/wiki_lint.py`。
3. **更新互動簡報**：所有新增教學主張須先登錄於 `wiki/syntheses/teaching-evidence-map.md` 且所引 Wiki 頁皆為 `verification_status: verified`；修改 `presentation/js/content.js` 或 `index.html` 後，執行 `python scripts/validate_html.py` 驗證。

---

## 七、使用技術與已知限制

- **使用技術**：原生 HTML5、CSS3、Vanilla JavaScript（零外部 CDN 依賴）、Python 3（`pypdf`、自研 Lint 與 HTML 驗證腳本）、Node.js（JS 語法與測驗引擎單元測試）。
- **已知限制**：
  1. 五篇核心論文發表於 2006–2015 年，涵蓋的瀏覽器介面與網路生態與現今有所差異，各頁皆已標註年代與樣本限制。
  2. 台灣 165 打詐儀錶板數據為每日動態更新，本知識庫不寫死單日財損金額，僅引用經確認之手法與官方流程。
  3. AI 深度偽造語音／視訊詐騙因未納入專屬官方報告，本版簡報不予編造，留待後續擴充。
  4. `Ferreira2015.md` 的 LNCS 卷號（9190）僅見於搜尋摘要、Crossref 未列卷號，仍維持待出版社頁面確認備註。
