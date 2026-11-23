# Wiki 運作與學習反思日誌 (Operation & Reflection Log)

本檔案為純追加（Append-only）日誌，忠實記錄知識庫生命週期中每一次真實執行的 Ingest、Lint、Query Compounding 與 Presentation 生成事件。
所有記錄格式遵循 `AGENTS.md` 第 8 節之規範。

---

## [2026-11-23 22:22] Paper Ingest | Dhamija et al. (2006) — Why Phishing Works

- **操作類型**：Paper Ingest（Loop 1 + Loop 2）
- **處理檔案**：`raw_sources/papers/Dhamija2006_WhyPhishingWorks.pdf`
- **檔案大小**：1,305,353 bytes（約 1.24 MB）
- **下載來源**：https://www.cs.berkeley.edu/~tygar/papers/Phishing/why_phishing_works.pdf

### Loop 1：PDF Parsing Check
- **執行節點**：Step 1（讀取 Metadata）→ Step 2（逐頁文字萃取）→ Step 3（章節偵測）
- **解析工具**：pypdf（pymupdf 因套件體積過大安裝未完成，以 pypdf 替代，功能足以執行本次校驗）
- **問題記錄**：
  - pymupdf 安裝嘗試 1 次，因套件體積（主體 63MB + onnxruntime 相依）下載超時中斷。依熔斷原則，改用已安裝的 pypdf，不再重試 pymupdf。
  - 連字號斷詞（如 `strate-\ngies`）為 Word 原始文件正常現象，非解析錯誤。
- **重試次數**：0 次（pypdf 一次通過）
- **章節完整性確認**：ABSTRACT (p.1) ✅ / INTRODUCTION (p.1) ✅ / RELATED WORK (p.2) ✅ / ANALYSIS OF PHISHING DATABASE (p.2) ✅ / STUDY DESIGN (p.4) ✅ / RESULTS (p.5-9) ✅ / DISCUSSION (p.9-10) ✅ / REFERENCES (p.10) ✅
- **雙欄排版**：段落語意連貫，無左右欄交錯錯位
- **表格**：Table 1（術語定義，p.2-3）文字完整；Table 2（網站評估，p.8）數值欄位正確擷取
- **驗證結果**：**Pass**

### Loop 2：Knowledge Verification
- **執行節點**：知識萃取 → Ingest 預覽報告產出 → 等待人工確認
- **問題記錄**：無
- **重試次數**：0 次
- **驗證結果**：**待專案負責人審查確認（Pending Human Review）**

### 反思與後續改進
- 未來若需解析更複雜的多欄 PDF（如含大型圖表或數學公式），可在 bypass sandbox 模式下完整安裝 pymupdf 以獲得更精確的頁面邊界解析。
- pypdf 在處理本論文時性能穩定，建議作為預設工具，pymupdf 列為進階備選。

## [2026-11-23 22:25] Knowledge Verification 修正 | Dhamija et al. (2006) — Loop 2 人工審查

- **操作類型**：Loop 2 人工審查後修正（Knowledge Verification）
- **處理檔案**：`raw_sources/papers/Dhamija2006_WhyPhishingWorks.pdf`
- **執行節點**：Loop 2 → 人工確認 → 修正 → 再次核對

### 問題記錄（專案負責人指出，共 8 項）

1. **F1 情境條件不明確**：「90% 被騙」未標示為特定單一網站之結果，易被誤讀為所有釣魚網站平均成功率。
   - 修正：加入「最難辨識的一個釣魚網站（Bank of the West 仿冒頁）」之情境說明，明確標示 90.9% = 20/22 人針對該特定頁面的結果。(PDF p.7)

2. **F2 兩組數字混淆**：23% 與 40% 的主詞不同，原報告未清楚區分。
   - 修正：拆分為 F2a（23% = 5人完全不看瀏覽器安全指標，PDF p.5）與 F2b（40% = 全體 22 人的整體平均錯誤率，PDF p.1/p.5）。

3. **F3 情境說明不足**：未說明「15/22 點擊確定」是在「自簽 SSL 憑證警告」這一特定情境下發生。
   - 修正：加入情境條件（第20個網站的自簽憑證警告彈窗）與準確頁碼（PDF p.9 詳述，PDF p.4 情境設計）。

4. **F4 措辭過強**：「沒有統計顯著相關」被報告為「完全不影響」，違反二元分離原則。
   - 修正：改為「本研究 22 人樣本中未觀察到顯著關聯」，並加入論文原文的限制聲明（需更大規模研究）。(PDF p.5)

5. **頁碼體系未說明**：本 PDF 為預印版（PDF p.1–10），與正式出版頁碼（CHI 2006, pp.581–590）不同，需明確區分。
   - 修正：統一使用 PDF 頁碼引用，並在論文頁頂部附正式出版書目。建立兩套頁碼對照表。

6. **SOP 域名說明不精確**：「最後一個 .com/.tw 之前」描述在子域名情境下容易誤導。
   - 修正：改為「Registered Domain（有效頂級域名左邊緊鄰的段落）」說明，附具體比較範例。

7. **HTTPS/鎖頭說明不完整**：未明確指出 HTTPS 不能證明合法性，且未區分瀏覽器 Chrome 鎖頭與網頁內文假鎖頭。
   - 修正：加入研究直接支持的「HTTPS ≠ 合法」說明（PDF p.3、p.9），並區分瀏覽器 Chrome vs. 網頁內文鎖頭的不同意義。
   - 加入時代背景聲明（2006年研究，現代瀏覽器介面已演進）。

8. **直接發現與教學延伸未區分**：防詐建議混合了論文直接支持的發現與延伸推論。
   - 修正：建立三層標籤系統（🔬研究直接支持 / 📚教學延伸建議 / 🔗待165官方補強），於 Wiki 頁面中明確標示。

### 重試次數：0（所有修正為人工審查後一次性整合修正，非解析失敗重試）
### 驗證結果：**修正完成，待執行 Loop 3 寫入 Wiki**
### 反思：初稿報告中 F2 的兩個數字來自 Abstract 的壓縮句式，原文並未在同一處明確區分兩個主詞，需要回查 Results 章節才能正確拆分。未來 Ingest 其他論文時，Abstract 中的壓縮統計句應優先返回 Results 章節核對。

## [2026-11-23 22:31] Wiki Update & Lint | Dhamija et al. (2006) — Loop 3

- **操作類型**：Wiki Update & Lint（Loop 3）
- **執行節點**：Step 5（寫入 Wiki）→ Lint 體檢

### 新增檔案
- `wiki/papers/Dhamija2006.md`（論文結構化解讀頁，verification_status: verified）
- `wiki/concepts/phishing-attacks.md`（釣魚攻擊概念頁）
- `wiki/concepts/visual-deception.md`（視覺欺騙概念頁）
- `wiki/concepts/bounded-attention.md`（有限注意力概念頁）
- `wiki/tasks/check-website-legitimacy.md`（辨識真假網站 SOP 任務頁）

### 更新檔案
- `wiki/index.md`（新增五個頁面的導航條目）
- `wiki/log.md`（追加本次操作記錄）

### Lint 體檢結果
- **Wikilinks 解析**：Lint 腳本對 `index.md` 中 Markdown 表格的管道跳脫字元（`\|`）誤判為斷鏈，實際驗證確認 5 個目標檔案全部存在。**實質上無斷鏈**；此為 Markdown 表格語法與 Wikilink 語法混用的解析誤判，非真實錯誤。反思：未來 Lint 腳本應先清除 `\|` 跳脫字元再解析 Wikilinks。
- **孤島檢查**：無孤島頁面（所有頁面均已在 index.md 中登錄，且相互具備 Wikilink 連結）
- **YAML Frontmatter**：5 個 Wiki 頁面全部通過（含 title、verification_status: verified、tags 等欄位）
- **出處缺失**：所有核心數據均已附 PDF 頁碼，所有教學延伸建議均已標記 📚 或 🔗

### 驗證結果：**Pass（無真實錯誤）**
### 未解決問題：無


## [2026-11-23 22:54] Wiki Lint | 修正 Lint 腳本（`\|` 跳脫）並重新體檢第一篇 Wiki

- **操作類型**：Wiki Lint（Loop 3 改善）
- **執行節點**：Lint 腳本修補 → 全站重新體檢
- **問題記錄**：
  1. 上次 `\|` 誤判：腳本解析 Wikilink 前先將 `\|` 還原為 `|`，已修正。
  2. 修正後腳本新增「標題錨點驗證」，發現 **10 處真實失效錨點**（先前被誤判掩蓋）：連結使用 slug 式錨點（如 `#3-學術核心研究發現`），與論文頁實際標題文字不符，Obsidian 無法跳轉。
- **重試與修正**：僅修改 Wikilink 的錨點目標，**未改動任何已驗證的內文與數據**。
  - `phishing-attacks.md`：5 處 → 依頁碼精準指向 F1(p.7) / F2a(p.5) / F2b(p.1) / F3(p.9) / F5
  - `bounded-attention.md`、`visual-deception.md`：各 1 處 → F5
  - `check-website-legitimacy.md`：3 處 → F5 / 「核心認知校正」
- **Lint 結果**：斷鏈 0、錨點失效 0、孤島 0；YAML 全數通過（`index.md` 為導覽頁，不設 `verification_status`，屬預期）。
- **待 165 標記**：`check-website-legitimacy.md` 的 🔗 標記（Step 5、通報步驟等 3 處待補強項＋1 處圖例說明）**未更動，維持 pending**，不得用於 HTML。
- **驗證結果**：Pass
- **反思**：AGENTS.md §5.1 範例使用 slug 式錨點與 Obsidian 實際行為不符；後續 Wikilink 錨點必須與標題文字**完全一致**，並由 Lint 於寫入時驗證。建議後續修訂 AGENTS.md 範例（需您同意）。


## [2026-11-23 22:58] Paper Ingest | Ferreira, Coventry & Lenzini (2015) — Principles of Persuasion in Social Engineering and Their Use in Phishing（Loop 1 + Loop 2 準備）

- **操作類型**：Paper Ingest（Loop 1 + Loop 2）
- **處理檔案**：`raw_sources/papers/Ferreira2015_PrinciplesOfPersuasion.pdf`（1,067,516 bytes，12 頁，camera-ready 預印版）
- **下載來源**：https://orbilu.uni.lu/bitstream/10993/20301/1/FerreiraAna-CameraReady.pdf（經 Semantic Scholar 查得 DOI 10.1007/978-3-319-20376-8_4，openAccessPdf 狀態 GREEN）

### 書目查核（重要更正）
- 先前規劃使用的標題「*Persuasion and Critical Thinking in Social Engineering Attacks*」**查無對應論文**。實際論文為 *Principles of Persuasion in Social Engineering and Their Use in Phishing*（Ferreira, Coventry & Lenzini；HAS 2015，LNCS 9190）。已於交談中向專案負責人說明，採用實際文獻，不以未經確認之文件替代。
- 論文**並非受試者實驗**，而是「概念整合（taxonomy merging）＋52 封釣魚郵件人工標註分析」。

### Loop 1：PDF Parsing Check
- **解析工具**：pypdf（0 次重試）
- **章節完整性**：Abstract (p.1) / 1 Introduction (p.1–2) / 2 Motivation (p.2) / 3 Methods (p.3) / 4 Principles (p.3–6) / 5 Persuasion in Phishing Emails (p.6–9) / 6 Discussion (p.9–11) / Limitations (p.11) / 7 Conclusion (p.11) / References (p.11–12) ✅
- **單欄排版**，文字順序正確。
- **問題記錄**：
  1. Fig. 1–6（原則對照表、Venn 圖、郵件元素統計長條圖）為圖像／向量圖，文字層僅能擷取殘缺標籤；**各原則的精確次數無法由文字層取得**，Wiki 僅引用論文正文以文字陳述的排名結論，不引用圖中具體數字。
  2. Fig. 6 圖說將 LSD 誤印為「LSC」（原文筆誤），Wiki 統一使用正文之 LSD。
  3. 頁碼：本檔為 PDF p.1–12；正式出版頁碼推定為 LNCS 9190 pp.36–47（依 DOI 章節資訊，**尚待以出版社頁面核對**）。
- **驗證結果**：Pass（附上述限制）

### Loop 2：Knowledge Verification
- **驗證結果**：已產出 Ingest 預覽報告，**待專案負責人審查確認（Pending Human Review）**；尚未寫入任何 Wiki 頁面。

### 反思
- 論文標題必須在規劃階段以書目資料庫（Semantic Scholar / DOI）查證，而非憑記憶指定；日後新增來源一律先查 DOI。


## [2026-11-23 23:02] Schema 修訂 + 書目核對 + Wiki Update & Lint | Ferreira et al. (2015) — Loop 3

- **操作類型**：Schema 修訂（AGENTS.md §5.1）／書目核對／Paper Ingest Loop 3／Wiki Lint
- **執行節點**：人工審查通過 → 調整事項 1–3 → Step 5 寫入 Wiki → 全域 Lint

### A. AGENTS.md §5.1 修訂
- 將 slug 式錨點範例改為論文頁真實標題（`#F1｜最高難度釣魚網站的欺騙率`）；§5.3、§5.4 模板中的 `#3-學術核心研究發現` 改為 `#3. 學術核心研究發現 (Key Research Findings)`。
- 新增五項強制規則：錨點須逐字對應真實標題；不得猜測或硬編碼 slug；Lint 必須同時檢查檔案與錨點；改標題須同步更新全站引用並重跑 Lint；避免 `# | ^ : %%` 字元。
- 問題記錄：首次以 PowerShell 內嵌 python 修改時，因跳脫字元處理不當導致斷言失敗，**檔案未被改動**；改以腳本檔重做後成功（重試 1 次）。

### B. 正式書目核對（Crossref API，DOI 10.1007/978-3-319-20376-8_4）
- 作者：Ana Ferreira、Lynne Coventry、Gabriele Lenzini（與 PDF 首頁一致）✅
- 類型：book-chapter，Springer International Publishing，線上發表 2015-07-21 ✅
- **正式頁碼 pp.36–47 已由 Crossref `page` 欄位核對** ✅（先前為「推定」）
- 卷號 LNCS 9190：Crossref 未列卷號，僅見於搜尋摘要，**仍標註待出版社頁面確認**。
- PDF 頁碼與正式頁碼**分開記錄**；未做逐頁對應（預印版排版不同，無法驗證）。

### C. Wiki 變更
- **新增**：`wiki/papers/Ferreira2015.md`、`wiki/concepts/persuasion-principles.md`、`wiki/concepts/social-engineering.md`、`wiki/tasks/analyze-suspicious-message.md`、`wiki/syntheses/phishing-attack-mechanisms.md`
- **更新（僅追加章節或連結，未改動既有已驗證內文）**：`concepts/phishing-attacks.md`（§6）、`concepts/bounded-attention.md`（§6，Distraction 區別）、`papers/Dhamija2006.md`（相關連結）、`tasks/check-website-legitimacy.md`（相關連結）、`index.md`、`AGENTS.md`
- **證據界線落實**：論文頁含「本研究有做／沒做」對照表；明載 52 封樣本、頻率≠成功率、多原則同現≠效果更強、Distraction ≠ Bounded Attention（概念頁、綜合頁 §4 皆有說明）；F4／F5 的作者推測以 💬 標示。
- **綜合頁定位**：標示為持續更新頁，明言僅納入 2 篇、非完整釣魚攻擊理論；165 欄位全標 🔗 待補；目前未發現兩篇結論矛盾（已說明原因）。

### D. 全域 Lint 結果（12 個檔案、93 條 Wikilinks）
- **斷鏈／錨點**：0（檔案與標題錨點皆驗證）
- **YAML**：全通過；`verification_status` 皆為 `verified`（`index.md`、`log.md` 為非內容頁，不適用）
- **孤島**：無（`index.md` 為入口頁，無反向連結屬預期）；所有頁面皆列於 index
- **頁碼來源**：Dhamija 7 項、Ferreira 6 項發現皆附 PDF 頁碼
- **pending 區隔**：`check-website-legitimacy.md` 的 3 處待 165 補強標記仍在；新頁面之 🔗 與 📚 皆就地標示
- **Dhamija 內容保留**：關鍵數據（90.9%、5 人 23%、11.6、15 人 68%、p 值、F6、頁碼說明）全數仍在
- **驗證結果**：Pass

### E. 問題與未解決事項
- 錯誤修復：（見 A）腳本跳脫錯誤 1 次；Lint 首次執行之誤判已於前次修正。
- 未解決：(1) LNCS 卷號 9190 待出版社頁面確認；(2) 165 官方來源尚未加入，所有 🔗 項目仍 pending；(3) Ferreira Fig. 3–6 精確次數未擷取，Wiki 僅引用正文排名。

### 反思
- 新增頁面時，先列出目標頁真實標題再撰寫錨點，Lint 零錯誤一次通過，顯示新規則有效。
- 因 Lint 現已含錨點檢查，建議之後每次寫入後立即執行，而非批次結束後。


## [2026-11-23 23:12] Batch Paper Ingest (Loop 1 + Loop 2) | Whitty (2013)、Zhang et al. (2007)、Kumaraguru et al. (2009)

- **操作類型**：Batch Paper Ingest（Loop 1 + Loop 2，統一人工審查前準備）
- **處理檔案**：
  1. `raw_sources/papers/Whitty2013_RomanceScam.pdf`（775,062 bytes，39 頁，Warwick WRAP 開放取用作者接受稿）
     - 下載來源：https://wrap.warwick.ac.uk/id/eprint/81506/1/WRAP-scammers-persuasive-techniques-model-Whitty-2013.pdf
     - Crossref DOI 核對：`10.1093/bjc/azt009`｜*British Journal of Criminology*, Vol. 53, Issue 4, pp. 665–684 (2013)
  2. `raw_sources/papers/Zhang2007_CANTINA.pdf`（753,644 bytes，10 頁，CMU 作者最終版）
     - 下載來源：https://www.cs.cmu.edu/~jasonh/publications/www2007-cantina-final.pdf（前兩次嘗試舊 CMU 路徑 404，改查有效 CMU 路徑後一次成功）
     - Crossref DOI 核對：`10.1145/1242572.1242659`｜*WWW '07*, pp. 639–648 (2007)
  3. `raw_sources/papers/Kumaraguru2009_SchoolOfPhish.pdf`（2,115,215 bytes，12 頁，CMU CyLab SOUPS 論文集）
     - 下載來源：https://cups.cs.cmu.edu/soups/2009/proceedings/a3-kumaraguru.pdf
     - Crossref DOI 核對：`10.1145/1572532.1572536`｜*SOUPS '09*, pp. 1–12 (2009)
     - **書目更正**：原候選標題尾字為 `Education`，實際正式標題為 *School of Phish: A Real-World Evaluation of Anti-Phishing **Training***。

### Loop 1：PDF Parsing Check（三篇均以 pypdf 解析，0 次解析失敗重試）
1. **Whitty (2013)**：單欄作者手稿（PDF p.1 為 WRAP 封面，PDF p.2–39 對應手稿頁碼 1–38）。章節完整（Abstract/Intro、Literature、Method、Results & Interpretation、Conclusions、References）。問題記錄：PDF p.39 為 Figure 1 圖像，文字層僅擷取頁碼 `38`，無法從圖中讀取額外標籤，Wiki 僅引用正文詳述之 7 階段。**驗證結果：Pass**。
2. **Zhang, Hong & Cranor (2007)**：雙欄排版順序正確，章節完整（Abstract、1–8 節含 4 項實驗與 Discussion）。Table 1 (p.6)、Table 2 (p.7) 與 Fig. 4–7 數值均完整擷取且與正文吻合。問題記錄：PDF p.8 正文有一處作者筆誤（兩次寫成 `Final-TF-IDF` 分別為 13% 與 3% FP），對照同頁 Fig. 7 確認後者為 `Final-TF-IDF+heuristics`。**驗證結果：Pass**。
3. **Kumaraguru et al. (2009)**：雙欄排版順序正確，章節完整（Abstract、1–8 節）。Table 1–6 數值完整擷取；PDF p.5–6 為全頁漫畫／郵件截圖（文字層僅含圖說）；PDF p.9 Fig. 3 長條圖數值依正文精確數據引用，不從圖中目測猜值。**驗證結果：Pass**。

### Loop 2：Knowledge Verification
- **執行節點**：三篇知識萃取、證據界線核對、跨論文分歧比對 → 產出三份獨立 Ingest 預覽報告與跨論文比較。
- **驗證結果**：**待專案負責人統一審查確認（Pending Human Review）**；尚未寫入或修改任何正式 Wiki 頁面。


## [2026-11-23 23:20] Wiki Update & Lint | Whitty (2013) — Batch Loop 3 (1/3)

- **操作類型**：Wiki Update & Lint（Batch Loop 3 第 1 篇）
- **納入審查修正**：明示七階段模型為質性歸納框架（非所有人皆會走完）；嚴格區分 🔬 受訪者敘述 與 💬 作者理論詮釋（Near-Win、Flow、Addiction、Cognitive Dissonance），不宣稱因果實驗驗證。
- **新增檔案**：`wiki/papers/Whitty2013.md`、`wiki/concepts/romance-scam-grooming.md`、`wiki/tasks/spot-romance-scam.md`
- **增量更新**：`wiki/concepts/persuasion-principles.md`、`wiki/concepts/social-engineering.md`、`wiki/syntheses/phishing-attack-mechanisms.md`、`wiki/index.md`（未更動既有已驗證內容）
- **全域 Lint 結果**：15 檔案、134 條 Wikilinks；斷鏈 0、失效錨點 0、YAML 錯誤 0、孤島 0；Whitty 4 項發現全附 PDF 頁碼；Dhamija/Ferreira 關鍵內容與 🔗 pending 標記全數保留。
- **問題與重試**：無（0 次重試）
- **驗證結果**：**Pass**


## [2026-11-23 23:22] Wiki Update & Lint | Zhang, Hong & Cranor (2007) — Batch Loop 3 (2/3)

- **操作類型**：Wiki Update & Lint（Batch Loop 3 第 2 篇）
- **納入審查修正**：所有 TP/FP 指標皆明示定義、實驗資料集與適用範圍；明示 TF-IDF 與啟發式權重不得轉化為現代網站通用風險分數；搜尋引擎交叉比對定位為輔助檢查，明示搜尋排名、廣告與外觀皆不能單獨證明合法，敏感操作優先使用自行確認的官方網址或官方 App。
- **新增檔案**：`wiki/papers/Zhang2007.md`、`wiki/concepts/phishing-detection-heuristics.md`
- **增量更新**：`wiki/concepts/phishing-attacks.md`、`wiki/tasks/check-website-legitimacy.md`（保留原 3 處 🔗 pending 標記）、`wiki/syntheses/phishing-attack-mechanisms.md`、`wiki/index.md`
- **全域 Lint 結果**：17 檔案、158 條 Wikilinks；斷鏈 0、失效錨點 0、YAML 錯誤 0、孤島 0；Zhang 4 項發現全附 PDF 頁碼；既有驗證內容與 pending 標記全數保留。
- **問題與重試**：無（0 次重試）
- **驗證結果**：**Pass**


## [2026-11-23 23:25] Wiki Update & Lint | Kumaraguru et al. (2009) — Batch Loop 3 (3/3) 與五篇全域收尾

- **操作類型**：Wiki Update & Lint（Batch Loop 3 第 3 篇，完成五篇學術論文知識庫建置）
- **納入審查修正**：
  1. 所有 Day 28 訓練效果數據皆完整保留受試者篩選條件與分母（全體 N=172/172/171；Day 0 誤點子樣本 N=90/89/77；Day 0 與 Day 14 皆誤點子樣本 N=54/35/34；後測年齡子樣本 N=267）。
  2. 合法郵件誤判測試（H3）明示僅限 3 封 CMU ISO 校園活動信，不宣稱已證明所有情境均不增誤報。
  3. Dhamija (2006) 與 Kumaraguru (2009) 年齡結果以「跨研究結果差異」並列呈現樣本、方法、指標與限制，不強行宣稱矛盾或外推一般人口結論。
- **新增檔案**：`wiki/papers/Kumaraguru2009.md`、`wiki/concepts/embedded-anti-phishing-training.md`、`wiki/syntheses/anti-phishing-defenses-and-divergences.md`
- **增量更新**：`wiki/concepts/phishing-attacks.md`、`wiki/syntheses/phishing-attack-mechanisms.md`、`wiki/index.md`
- **全域 Lint 結果（五篇全體）**：20 檔案、200 條 Wikilinks；斷鏈 0、失效錨點 0、YAML 錯誤 0、孤島 0；五篇共 27 項核心發現（Dhamija 7、Ferreira 6、Whitty 4、Zhang 4、Kumaraguru 6）全附 PDF 頁碼；所有 🔗 165 pending 標記與既往已驗證內容全數保留。
- **問題與重試**：無（三篇批次 Loop 3 全程 0 次重試）
- **驗證結果**：**Pass（待專案負責人審查最終 Wiki 狀態，尚未啟動 HTML 簡報）**


## [2026-11-23 23:38] Phase 1 & Phase 2 | 台灣 165 官方來源 Ingest、跨文獻整合與教學證據對照表

- **操作類型**：Official Source Ingest + Knowledge Integration + Wiki Lint
- **官方 URL 實測（2026-11-23）**：
  - `https://165.npa.gov.tw/` → HTTP 200（註：Python OpenSSL 嚴格模式遇台灣政府憑證 SKI 檢查報錯，改以 Windows `curl.exe` SChannel 驗證通過 HTTP 200）
  - `https://165dashboard.tw/` → HTTP 200
  - `https://www.npa.gov.tw/` → HTTP 200
  - `https://fraudbuster.digiat.org.tw/` → HTTP 301 → `https://fraudbuster.digiat.org.tw/accessibility/index` (HTTP 200)
  - `https://www.fsc.gov.tw/` → HTTP 200
  - `https://moda.gov.tw/` → HTTP 200
- **新增原始來源紀錄（`raw_sources/articles/`）**：`TW165_Portal_2026.md`、`TW165_Dashboard_2026.md`、`MODA_AntiScam_2026.md`、`FSC_AntiFraud_2026.md`
- **新增官方 Wiki 頁面（`wiki/sources/`）**：`TW165-Portal.md`、`TW165-Dashboard.md`、`MODA-AntiScam.md`、`FSC-AntiFraud.md`
- **新增綜合頁**：`wiki/syntheses/teaching-evidence-map.md`（Loop 4 唯一核准教學證據對照表）
- **新增永久驗證腳本**：`scripts/wiki_lint.py`
- **更新既有頁面**：`check-website-legitimacy.md`、`analyze-suspicious-message.md`、`spot-romance-scam.md`、`phishing-attacks.md`、`romance-scam-grooming.md`、`social-engineering.md`、`phishing-attack-mechanisms.md`、`anti-phishing-defenses-and-divergences.md`、`index.md`（七大 165 防詐主題皆已補上可追溯官方來源；未有官方專屬報告之 AI 深偽語音／視訊不予編造）
- **全域 Lint（`python scripts/wiki_lint.py`）**：25 檔案（23 內容頁）、286 條 Wikilinks；斷鏈 0、失效錨點 0、YAML 錯誤 0、來源路徑錯誤 0、孤島 0、27/27 論文發現皆附 PDF 頁碼。**驗證結果：PASS**。


## [2026-11-23 23:46] Phase 3–6 | HTML 互動簡報建置（Loop 4）、驗證腳本、文件與最終驗收

- **操作類型**：Presentation Gen (Loop 4) + Final Validation
- **新增檔案**：
  - 互動簡報：`presentation/index.html`、`presentation/css/style.css`、`presentation/js/content.js`、`presentation/js/quiz.js`、`presentation/js/app.js`（四單元架構＋8 題測驗＋規則式個人化學習建議＋來源抽屜＋6/6 張 `../assets/` 圖片）
  - 驗證腳本：`scripts/validate_html.py`
  - 交付文件：`README.md`、`PROJECT_REPORT.md`、`FINAL_VALIDATION_REPORT.md`
- **Loop 4 與最終驗收執行結果**：
  1. `python scripts/wiki_lint.py`：**PASS**（25 檔、286 連結、0 斷鏈、0 失效錨點、0 YAML 錯、0 孤島、27/27 論文發現附頁碼）。
  2. `python scripts/validate_html.py`：**PASS**（12 本機參照、6/6 圖片、15 verified Wiki 參照、0 pending 洩漏、無密碼欄位、Node.js 語法與 8 題計分／重設測試通過 `NODE_QUIZ_OK 4 8 9`）。
  3. Edge 無頭瀏覽器測試（`msedge.exe --headless --dump-dom`）：**BLOCKED / NOT TESTED**（Windows 沙盒阻擋 Chromium 子程序，輸出 `DOM len: 0`）。已如實標記於 `FINAL_VALIDATION_REPORT.md`，未假裝通過。
- **驗證結果**：Wiki 與靜態／邏輯驗證全數 **PASS**；真實瀏覽器視覺測試標記 **NOT TESTED (BLOCKED in sandbox)**。專案達可繳交狀態。
