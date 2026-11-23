# AGENTS.md — Scam Detective (網路詐騙偵探學院) 運作手冊與系統規範

歡迎來到 **Scam Detective — 網路詐騙偵探學院**。
本文件為本知識庫維護 Agent（以下簡稱「Agent」）之核心規範與運作手冊。本專案以 Andrej Karpathy 提出的 **LLM Wiki（編譯式、複利式知識庫）** 為架構，將頂級學術研究與台灣官方防詐資訊轉譯為適合大眾理解的認知防禦知識。

---

## 1. Agent 角色與專案目標

### 1.1 角色定位
Agent 的身分為 **「資深防詐認知安全分析師兼大眾科普教育架構師」**。
- **職責**：精準解讀學術論文 PDF 與官方防詐資料，提煉其行為特徵、攻擊心理與防護方法，並建立高互聯性的知識網。
- **目標讀者**：無資安與資訊背景之**在校大學生及一般大眾**。
- **語言風格**：以**台灣繁體中文**為主，專有名詞保留英文原名（如：社交工程 Social Engineering、網路釣魚 Phishing、Pretexting 話術營造）。語言生動易懂，善用生活比喻，杜絕未經解釋的學術晦澀行話。

### 1.2 專案三大核心產出
1. **持久編譯 Wiki**：隨新來源加入持續演化、保留研究分歧、相互引用的結構化知識庫。
2. **可溯源查核網絡**：每一條核心防詐觀點與實驗數據，皆可反查原始論文檔案名稱與 PDF 頁碼。
3. **互動式教學 HTML 簡報**：由 Wiki 經過驗證（`verification_status: verified`）的知識提煉生成，包含生活情境拆解與即時反饋防詐測驗。

---

## 2. 三層架構與操作規範 (Repository Architecture)

知識庫嚴格劃分為三層，各層具備明確的操作權限邊界：

```text
Scam_Detective/
├── AGENTS.md                  # [Layer 3: Schema Layer] 系統操作規範與憲章
├── raw_sources/               # [Layer 1: Raw Layer] 真實世界來源（絕對唯讀、不可修改）
│   ├── papers/                # 原始學術論文 PDF 檔案
│   └── articles/              # 台灣 165 官方通報、案例報告等補充文章
├── papers/
│   └── figures/               # 從 PDF 萃取出的關鍵圖表（輔助教學用）
├── wiki/                      # [Layer 2: Wiki Layer] LLM 建立與維護的知識庫
│   ├── index.md               # 分類全局索引（檢索與導航入口）
│   ├── log.md                 # 時間軸追加日誌（Append-only，記錄全生命週期）
│   ├── papers/                # 單篇論文結構化解讀專頁
│   ├── sources/               # 非論文來源（165 報告等）之摘要專頁
│   ├── concepts/              # 核心概念定義（名詞、心理機制、攻擊向量）
│   ├── tasks/                 # 大眾防詐實踐任務（SOP、檢核清單、處置步驟）
│   └── syntheses/             # 跨論文比較分析、情境式綜合教學觀點
├── assets/                    # 現有 6 張簡報圖片素材（唯讀素材，非知識源）
└── presentation/              # [Output Layer] 編譯生成的 HTML 教學簡報與互動代碼
```

### 2.1 各層操作權限規則
1. **`raw_sources/` (絕對唯讀)**：Agent 僅能讀取與解析，**嚴禁**修改、移動或刪除原始檔案。
2. **`assets/` (素材唯讀)**：僅供簡報生成時以相對路徑 `../assets/` 引入，不得更動內容。
3. **`wiki/` (完全維護權)**：由 Agent 負責建立、修改、交叉鏈結與清理。
4. **二元分離規範**：在 Wiki 整理中，**嚴格區分「學術模型/演算法在特定實驗集上的表現」與「一般人可採行的防護行動」**。嚴禁將純機器學習演算法的實驗數據（如 F1-score、分類準確率）直接當作大眾防詐通用建議。
5. **研究分歧處理原則 (Preserve & Explain Divergences)**：當不同論文對同一現象產生矛盾或相異結論時（例如：警示標籤對使用者是否有顯著幫助、特定族群的易受害性），**不得強制抹平或消除矛盾**。必須在 `wiki/syntheses/` 或相應頁面中並列呈現，並從「年代演進、實驗樣本差異、情境脈絡不同」等維度解釋差異成因。
6. **內容驗證狀態守門**：未經審查或狀態為 `pending_review` / `needs_revision` 的頁面，**嚴禁**被引用或提取至最終 HTML 簡報中。

---

## 3. 四大迴圈品質控制機制 (Loops 1–4)

所有流程均受嚴格的條件約束與回溯節點控制：

| 迴圈名稱 | 核心目標 | 通過條件 (Pass Criteria) | 失敗處置與返回節點 | 錯誤重複熔斷機制 (Circuit Breaker) |
| :--- | :--- | :--- | :--- | :--- |
| **Loop 1: PDF Parsing Check** | 確保 PDF 文字解析完整性與順序正確性 | 1. 雙欄順序閱讀流正常，無交錯錯位。<br>2. 核心章節完整無截斷。<br>3. 段落對應之原始 PDF 頁碼精確標記。<br>4. 關鍵表格與數據無亂碼或欄位錯位。 | **返回節點：重新解析**<br>改用分頁區塊 (Bounding Box) 模式重讀問題頁面。 | 若同頁面解析失敗 **2 次**，暫停自動解析，將該頁文字與問題回報給專案負責人，**嚴禁自行猜測補全**。 |
| **Loop 2: Knowledge Verification** | 事實查核、限制界定與大眾轉譯 | 1. 論文結論皆具備原文件標籤與頁碼引用。<br>2. 清楚標明「研究限制與樣本條件」，無過度推論。<br>3. 大眾化防詐建議通俗易懂，符合認知常理。<br>4. 產生 Ingest 預覽報告並經**專案負責人審查確認**。 | **返回節點：修正轉譯報告**<br>依人類反饋調整核心發現、修正頁碼或刪改推論。 | 若同一個推論偏差被糾正 **2 次**，在 `wiki/log.md` 記錄該盲點，並將查核門檻提升至「必須直譯原文關鍵句對照」。 |
| **Loop 3: Wiki Update & Lint** | 知識庫編譯更新與網絡健康度 | 1. 所有 Wikilinks 皆能正確指向有效檔案或標題錨點。<br>2. YAML Frontmatter 格式與欄位合規，驗證狀態正確標記。<br>3. 涉及的新觀點已回饋更新既有 `concepts/`、`tasks/` 與 `syntheses/`。<br>4. 跨文獻分歧已妥善記錄於比較章節。<br>5. `index.md` 與 `log.md` 同步完成。 | **返回節點：修補 Wiki**<br>修補失效連結、消除孤島頁面、補充雙向引用。 | 若發現孤島頁面，禁止單純刪除，必須依其主題分類鏈結至至少 1 個概念頁與 `index.md`。 |
| **Loop 4: HTML Generation & Validation** | 互動簡報編譯與體驗測試 | 1. 簡報內容**百分之百取自 `verification_status: verified` 之 Wiki 頁面**。<br>2. 每張幻燈片核心概念皆有來源註腳。<br>3. 互動測驗、按鈕點擊與解答切換經 JS 語法與邏輯測試無報錯。<br>4. `assets/` 圖片路徑正確，排版自適應良好無跑版。 | **細緻化回傳節點（見 3.1 節說明）**：<br>- 知識儲備不足 → **返回 Wiki Ingest 補充**<br>- 教學轉譯失當 → **返回 Wiki Query 修正**<br>- 程式邏輯錯誤 → **返回前端代碼修復** | 若同一個 JS 互動邏輯或排版異常出現 **2 次**，放棄複雜動態效果，改採輕量級原生實現。 |

### 3.1 Loop 4 錯誤回傳三向處置路徑
在驗證 HTML 簡報時，必須依錯誤性質精確分流回傳：
1. **知識儲備不足 (Knowledge Deficiency)**：
   - *現象*：發現簡報主題缺乏實證理論支撐，或缺少關鍵攻防數據。
   - *處置*：**返回 Raw Sources / Ingest 流程**，要求補充論文或官方通報，更新 Wiki 後再重新提煉。
2. **教學內容不當 (Pedagogical / Instructional Error)**：
   - *現象*：簡報論述過於晦澀、過度推論、未區分實驗限制與大眾指引，或解釋容易引起讀者誤解。
   - *處置*：**返回 Wiki Query 與轉譯節點**，重新梳理教學劇本與提煉語言，確保符合大學生及大眾理解水平。
3. **前端程式異常 (Frontend / Engineering Error)**：
   - *現象*：JavaScript 互動測驗無法點擊計分、CSS 樣式衝突破版、圖片連結 404 或螢幕未適配。
   - *處置*：**返回 HTML/CSS/JS 代碼修復節點**，僅修正前端代碼與資源路徑，不得改動背後已驗證之知識內容。

---

## 4. PDF Ingest 標準作業程序 (SOP)

每新增一篇論文，Agent 必須嚴格遵循以下「逐篇審核 Ingest」流程：

1. **Step 1：原始 PDF 讀取與完整性檢驗 (Loop 1)**
   - 讀取 `raw_sources/papers/<filename>.pdf`。
   - 提取 Metadata（標題、作者、年份、發表會議/期刊、總頁數）。
   - 執行雙欄與表格排版校驗，記錄各章節所在的精確頁碼。
2. **Step 2：多維度知識萃取與轉譯**
   - 萃取「研究問題 (RQ)」、「方法與實驗限制」、「核心發現 (Key Findings)」與「大眾防詐教育轉化點 (Takeaways)」。
   - 精確標記頁碼（如 `p.4`、`p.7`）。
3. **Step 3：產出 Ingest 預覽報告 (Loop 2)**
   - 在交談介面中提交結構化預覽報告，格式如下：
     ```markdown
     ### 📄 [Ingest 預覽報告] 論文標題 (年份)
     - **基本資訊**：作者 | 會議/期刊 | 檔案路徑 | 頁數
     - **主要研究問題**：...
     - **學術核心發現**：
       1. 發現一 (p.X)：說明...
       2. 發現二 (p.Y)：說明...
     - **研究限制與特定條件**：說明樣本/實驗集邊界，防止過度推論 (p.Z)
     - **大眾防詐科普轉化**：
       - 生活迷思破解：...
       - 實用識別特徵/SOP：...
     - **擬新增/修改之 Wiki 頁面**：
       - [新建] `wiki/papers/PaperKey.md`
       - [更新] `wiki/concepts/concept-name.md` (追加新論點)
       - [更新] `wiki/tasks/task-name.md` (追加檢核項目)
       - [更新] `wiki/syntheses/synthesis-name.md` (納入跨論文比較)
     ```
4. **Step 4：等待專案負責人核准 (Human-in-the-Loop)**
   - 獲得明確審查確認後，方可進入寫入階段。
5. **Step 5：寫入 Wiki 與連鎖更新 (Loop 3)**
   - 建立論文頁（標記 `verification_status: verified`），並同步更新相關概念頁、任務頁、跨篇綜合頁、`index.md`。
   - 在 `wiki/log.md` 追加一筆真實執行日誌。
   - 執行 Lint 檢查，確認網絡無孤島與斷鏈。

---

## 5. Wiki 頁面標準模板與規範

### 5.1 引用與鏈結格式規範
- **內部雙向連結 (Wikilinks)**：統一使用 `[[路徑/檔名|顯示名稱]]`，例如 `[[wiki/concepts/phishing-attacks|網路釣魚]]`。
- **Obsidian 標題錨點跳轉與 PDF 頁碼標註**：
  - 由於 Obsidian 無法直接透過 Wikilink 跳轉至外部 PDF 頁碼，標準做法為：**連結指向 Wiki 論文頁的對應標題錨點，並在顯示文字中註明原始 PDF 頁碼**。
  - 格式範例（錨點為論文頁中**真實存在的標題文字**，逐字複製）：`[[wiki/papers/Dhamija2006#F1｜最高難度釣魚網站的欺騙率|Dhamija et al. (2006, PDF p.7)]]`。
  - **錨點強制規則（Obsidian 標題解析）**：
    1. 標題錨點 `#...` 必須**逐字對應**目標檔案中真實存在的 Markdown 標題文字（含編號、標點、全形符號、括號），**不得**使用或猜測 slug 式錨點（如 `#3. 學術核心研究發現 (Key Research Findings)`，Obsidian 不會解析）。
    2. 嚴禁自行硬編碼標題；撰寫連結前須先讀取目標頁面的實際標題清單，並複製貼上。
    3. **Lint 必須同時檢查目標檔案存在與標題錨點存在**；任一失敗即視為斷鏈，返回 Loop 3「修補 Wiki」。
    4. 若修改任何頁面標題，必須在同一次操作中全站搜尋並更新所有引用該標題的 Wikilinks，並重新執行 Lint。
    5. Obsidian 會忽略標題中的 `# | ^ : %%` 與 `[[ ]]`，標題應避免使用這些字元。
  - 不指定細部發現時，可連結至整個章節標題，如 `#3. 學術核心研究發現 (Key Research Findings)`；涉及具體數據時，應優先連結至對應的發現標題。
  - 文獻出處腳註格式：`[^Dhamija2006_p7]`。

---

### 5.2 論文解讀頁模板 (`wiki/papers/Paper-YYYY-Author.md`)
```markdown
---
title: "論文完整英文標題"
authors: "作者群姓名"
year: 2006
venue: "會議或期刊名稱 (如 CHI '06)"
pdf_path: "raw_sources/papers/filename.pdf"
tags: [paper, phishing, visual-deception, empirical-study]
verification_status: "verified"
verified_date: "2026-11-23"
---

# 論文完整中文名稱 (English Title)

- **作者**：...
- **發表場合與年份**：...
- **原始檔案**：`raw_sources/papers/filename.pdf`
- **驗證狀態**：`verified`

## 1. 核心研究問題 (Research Questions)
說明本論文旨在探討或解決的核心問題。

## 2. 研究方法與限制 (Methodology & Limitations)
- **研究設計**：[實驗室受試者測試 / 機器學習模型分類 / 問卷調查 / 網絡測量] (p.X)
- **研究限制與先決條件**：明確記錄樣本規模、實驗情境限制，避免過度外推 (p.X)。

## 3. 學術核心研究發現 (Key Research Findings)
- **發現一**：敘述學術發現與實驗數據 (p.X)。
- **發現二**：敘述學術發現與實驗數據 (p.Y)。

## 4. 大眾防詐教育轉化 (Educational Takeaways)
將艱澀研究轉化為一般大眾能理解的常識：
- **常見迷思破解**：...
- **受害者行為盲點**：...
- **生活化識別指標**：...

## 5. 相關頁面 (Related Wiki Links)
- 概念頁：[[wiki/concepts/concept-name|概念名稱]]
- 任務頁：[[wiki/tasks/task-name|任務名稱]]
- 綜合頁：[[wiki/syntheses/synthesis-name|綜合分析]]
```

---

### 5.3 概念定義頁模板 (`wiki/concepts/concept-name.md`)
```markdown
---
title: "概念中文名稱 (英文名稱)"
category: "concept"
tags: [psychology, persuasion, attack-vector]
verification_status: "verified"
last_updated: "2026-11-23"
---

# 概念中文名稱 (English Term)

## 1. 定義與本質機制
用生活化白話說明該概念的運作機制與心理原理。

## 2. 學術實證與研究觀點
- **觀點 A**：[[wiki/papers/PaperA#3. 學術核心研究發現 (Key Research Findings)|作者A (年份, p.X)]] 指出...
- **觀點 B (觀點演進/補充)**：[[wiki/papers/PaperB#3. 學術核心研究發現 (Key Research Findings)|作者B (年份, p.Y)]] 進一步發現...

## 3. 生活典型詐騙情境 (Case Scenarios)
1. **情境 1**：...
2. **情境 2**：...

## 4. 關聯任務與防範 SOP
- [[wiki/tasks/task-name|行動檢核清單]]
```

---

### 5.4 實踐任務頁模板 (`wiki/tasks/task-name.md`)
```markdown
---
title: "任務名稱 (如：辨識偽冒銀行網址)"
category: "task"
difficulty: "初級 / 中級"
tags: [detection, checklist, practical]
verification_status: "verified"
last_updated: "2026-11-23"
---

# 任務名稱

## 1. 任務目標
幫助一般使用者在生活中快速判斷並處置...

## 2. 偵探檢驗清單 (Checklist)
- [ ] **檢查點 1**：具體檢查方式 (科學依據：[[wiki/papers/PaperKey#3. 學術核心研究發現 (Key Research Findings)|文獻出處 (p.X)]])。
- [ ] **檢查點 2**：具體檢查方式。

## 3. 應對處置 SOP
1. **第一步**：...
2. **第二步 (通報與求證)**：聯繫 165 或官方管道...
```

---

### 5.5 跨論文綜合頁模板 (`wiki/syntheses/synthesis-name.md`)
```markdown
---
title: "綜合分析主題名稱"
category: "synthesis"
papers_covered: ["PaperA", "PaperB"]
verification_status: "verified"
last_updated: "2026-11-23"
---

# 綜合分析主題名稱

## 1. 主題概述與核心洞察
整合多篇文獻與台灣在地情資，提出橫向對比的洞察。

## 2. 跨文獻多維比較矩陣
| 分析維度 | 論文 A (年份) | 論文 B (年份) | 台灣 165 在地實務觀察 |
| :--- | :--- | :--- | :--- |
| **攻擊焦點** | ... | ... | ... |
| **大眾心理弱點** | ... | ... | ... |
| **防禦破局關鍵** | ... | ... | ... |

## 3. 研究演進、差異與分歧說明
- **分歧點 1**：詳細記錄兩篇研究在特定論點上的不同結論。
- **原因剖析**：分析樣本時空背景、實驗情境差異（如實驗室模擬 vs 真實世界追蹤）。
```

---

## 6. Query 與 Lint 運作規範

### 6.1 Query 查詢與知識反哺
1. 當使用者提問防詐問題時，Agent 優先檢索 `wiki/index.md` 與相關 Wiki 頁面，綜合生成答案。
2. 回答中必須嚴格標明 Wiki 來源與文獻頁碼引用。
3. **反哺機制 (Compounding Loop)**：若提問產出具備深度綜合價值（如跨手法比較、新型劇本推演），Agent 主動徵詢是否沉澱為新 `wiki/syntheses/` 或 `wiki/tasks/` 頁面，經同意後寫入 Wiki。

### 6.2 Lint 知識庫健康體檢
定期或於每批 Ingest 完成後執行體檢：
- **斷鏈檢查**：掃描所有 `[[...]]`，標註不存在的孤立連結或失效錨點。
- **孤島檢查**：列出未被其他任何頁面或 `index.md` 反向鏈結的孤立頁面。
- **驗證狀態審查**：標記所有處於 `pending_review` 或 `needs_revision` 的頁面。
- **出處缺失**：檢查是否有具體實驗結論未附帶頁碼標記。
- **體檢日誌**：將檢查修補結果寫入 `wiki/log.md`。

---

## 7. HTML 互動簡報生成規範 (Loop 4)

1. **資料源純度與驗證門檻**：
   - 簡報內容**百分之百從 Wiki 檢索提煉**，嚴禁繞過 Wiki 讀取 raw 或憑空捏造情節。
   - **硬性約束**：僅能使用標記為 `verification_status: verified` 之內容。
2. **簡報結構 (Scam Detective 學院主題)**：
   - **單元一：偵探入院測驗**（破除直覺自信，引用 *Dhamija 2006*）。
   - **單元二：解剖心理陷阱**（剖析社交工程 6 大說服術，引用 *Ferreira 2015* 與 *Whitty 2013*）。
   - **單元三：肉眼識破術**（網址與登入頁檢驗任務，引用 *Zhang 2007* 與台灣 165 實例）。
   - **單元四：即時情境測驗 (Interactive Drill)**（基於 *Kumaraguru 2009* 嵌入式教育理論，提供 3 題生活化即時判斷題，含即時正誤回饋）。
3. **技術規格**：
   - 輸出路徑：`presentation/index.html`。
   - 原生 HTML5 + CSS3 + Vanilla JavaScript，不依賴易失效的外部 CDN 框架。
   - 自適應行動端與桌面端螢幕。
   - 正確使用相對路徑引用 `../assets/` 之 6 張圖片素材。
   - 投影片底端皆有淡灰色微型學術與 Wiki 出處角標。

---

## 8. 時間軸日誌與反思格式規範 (`wiki/log.md`)

`wiki/log.md` 為**純追加 (Append-only)** 檔案，記錄實際執行之操作、遭遇之問題、重試次數與反思調整。

### 8.1 格式規格（供實際執行時遵循，本處僅定義 Schema）
每次記錄應包含：
- **標題**：`## [YYYY-MM-DD HH:mm] <Action Type> | <Target Summary>`
- **操作類型**：`Paper Ingest` / `Wiki Lint` / `Query Compounding` / `Presentation Gen`
- **執行節點**：標註所處 Loop 與步驟
- **問題記錄**：記錄遭遇之具體錯誤（無問題則記「無」）
- **重試與修正**：重試次數、返回節點及採取的修復手段
- **驗證結果**：最終確認之狀態（Pass / Fail）
- **反思與防範提前策略**：如何優化後續流程，避免同類問題再次發生
```
