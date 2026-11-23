# Scam Detective — 專案總結與架構報告 (PROJECT_REPORT.md)

## 1. 專案背景與目標

網路詐騙手法不斷演進，但大眾防詐宣導常落入兩種極端：要麼流於口號式標語、缺乏科學解釋；要麼深陷資安學術術語，讓沒有資訊背景的在校大學生與一般民眾難以消化。

本專案以 Andrej Karpathy 提出的 **LLM Wiki（編譯式、複利式知識庫）** 為核心架構，將五篇國際經典防詐學術論文與四項台灣官方防詐來源，經由嚴格的四重品質控制迴圈（Loop 1–4），編譯為可追溯至 PDF 頁碼與官方 URL 的繁體中文知識網絡，並由經過驗證（`verification_status: verified`）的知識提煉生成四單元互動式教學簡報 **Scam Detective — 網路詐騙偵探學院**。

---

## 2. 系統架構

```text
[Layer 1: Raw Sources (唯讀)]
  raw_sources/papers/ (5 篇 PDF) + raw_sources/articles/ (4 份官方紀錄)
        │
        ▼  Loop 1 (PDF Parsing Check) + Loop 2 (Knowledge Verification)
[Layer 2: Compiled Wiki (wiki/)]
  papers/ (5) + sources/ (4) + concepts/ (8) + tasks/ (3) + syntheses/ (3)
  + index.md + log.md (Append-only)
        │
        ▼  Loop 3 (Wiki Update & Global Lint: scripts/wiki_lint.py)
[Wiki Query & Gatekeeping]
  wiki/syntheses/teaching-evidence-map.md (僅放行 verified，排除 pending)
        │
        ▼  Loop 4 (HTML Generation, Static/Logic/Browser Validation)
[Output Layer: Interactive Presentation]
  presentation/index.html + css/style.css + js/{content,quiz,app}.js + ../assets/
```

---

## 3. 四大品質控制迴圈（Loops 1–4）

| 迴圈 | 輸入 | 處理方式 | 驗證方法 | 失敗處置與熔斷 | 輸出 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Loop 1：PDF Parsing Check** | 原始學術論文 PDF | 使用 `pypdf` 逐頁萃取文字，檢核雙欄閱讀順序、章節完整性、表格與圖說，區分 PDF 頁碼與正式出版頁碼 | 逐頁檢查字元數、章節清單與表格欄位；確認有無缺頁或錯位 | 單頁失敗改採分頁重讀；同頁失敗 2 次即熔斷回報，不自行猜測補全 | 通過檢驗之逐頁文字與解析限制註記（記入 `log.md`） |
| **Loop 2：Knowledge Verification** | Loop 1 萃取內容與 Crossref 書目 | 核對 DOI、正式頁碼與作者；區分 🔬 研究直接支持、💬 作者詮釋、📚 教學延伸；標明樣本與方法限制 | 產出結構化 Ingest 預覽報告，經人工審查核准修正 | 依審查意見修正統計主詞、分母、二元分離與證據界線；同類推論偏差重複 2 次提高為原文對照門檻 | 核准進入 Wiki 的知識規格與證據界線 |
| **Loop 3：Wiki Update & Lint** | 核准之論文與官方來源內容 | 建立論文／來源／概念／任務頁，增量更新既有概念頁、綜合頁與 `index.md` | 執行 `python scripts/wiki_lint.py` 檢查 YAML、狀態、Wikilinks、精確標題錨點、孤島、PDF 頁碼與來源路徑 | 任一斷鏈或錨點失效即返回修補 Wiki 並重跑 Lint，禁止孤島與無頁碼數據 | 零錯誤之編譯式 Wiki 知識網絡與 `log.md` 紀錄 |
| **Loop 4：HTML Generation & Feedback** | `teaching-evidence-map.md` 中之 `verified` 內容與 `assets/` | 編譯四單元原生 HTML/CSS/JS 互動簡報與 8 題測驗引擎 | 執行 `python scripts/validate_html.py`（路徑、安全、pending 排除、Node.js 語法與計分／重設測試）＋無頭瀏覽器 DOM 驗證 | 依錯誤性質三向分流：知識不足→返回 Ingest；教學失當→返回 Query 轉譯；程式異常→修復前端代碼 | 通過驗證、可離線瀏覽之 `presentation/index.html` |

---

## 4. Knowledge Compounding（知識複利演進）

本專案並非五份孤立的論文摘要，而是隨每篇新文獻加入持續產生交叉連結與新洞察：

1. **Dhamija (2006) 奠基**：建立「知識缺失、視覺欺騙、有限注意力」三大網站欺騙維度與「辨識真假網站 SOP」。
2. **Ferreira (2015) 橫向補齊郵件說服層**：新增五大說服原則與「分析可疑訊息」任務，並在 `bounded-attention.md` 與 `phishing-attack-mechanisms.md` 明確區分「Distraction（攻擊者製造誘因）」與「Bounded Attention（人類認知限制）」。
3. **Whitty (2013) 延伸時間軸**：將社交工程從「單封釣魚信」擴展至「跨月／年的情感養成、登門檻、留面子、Near-Win 與二次受害」，並與台灣 165「假交友結合投資」在地連結。
4. **Zhang (2007) 加入技術防禦與二元分離**：點出釣魚網站壽命極短（平均 4.5 天、常短至數小時）與黑名單時間差，嚴格區分 2006–2007 演算法實驗分數與現代大眾檢查習慣。
5. **Kumaraguru (2009) 形成跨研究對照與教育閉環**：其「90% 點擊發生在 8 小時內」與 Zhang 的黑名單時間差互相印證；其 18–25 歲脆弱度發現與 Dhamija (2006) n=22 未見顯著年齡關聯，共同沉澱為 `anti-phishing-defenses-and-divergences.md` 的**跨研究結果差異**專章。
6. **台灣官方四來源（165／打詐儀錶板／數發部／金管會）落地**：將學術原理轉化為台灣大學生與民眾可直接執行的 111 短碼、`.gov.tw`、165 圈存、數發部通報下架與派出所「受（處）理案件證明單」完整處置流程。

---

## 5. 真實錯誤、修復與流程改善（全數取自 `wiki/log.md`）

| 案例 | 真實問題 | 原因分析 | 實際修正與重新驗證 | 流程改善 |
| :--- | :--- | :--- | :--- | :--- |
| **1. PDF 下載與套件超時** | `Dhamija2006` 首次下載遇 403；`Zhang2007` 兩次舊 CMU 連結 404；`pymupdf` 安裝超時 | 學術預印本路徑異動；`pymupdf` 相依套件過大 | 改以作者有效大學存檔連結下載成功；依熔斷原則改用已安裝之 `pypdf` 一次通過 | 下載前先以 Semantic Scholar / Crossref 查核有效來源與 DOI |
| **2. 候選書目標題誤差** | 第二篇原候選 *Persuasion and Critical Thinking* 查無此文；第五篇尾字原為 *Education* | 初期規劃憑記憶擬定標題 | 經 Crossref 核對更正為 Ferreira et al. (2015) *Principles of Persuasion...* 與 Kumaraguru et al. (2009) *Anti-Phishing Training* | 建立「一律先查 Crossref DOI 再下載與 Ingest」原則 |
| **3. Loop 2 審查 8 項證據界線修正** | Dhamija 初稿混淆 23% 與 40% 主詞、未標示 90.9% 為單一網站、F4 措辭過強 | 摘要句式壓縮未回查 Results 原文 | 回查原文拆分 F2a/F2b、限定 F1 單一網站條件、建立 🔬/💬/📚/🔗 分層標籤 | Abstract 統計句一律回查 Results 與 Table 核對分母與條件 |
| **4. Lint `\|` 誤判與 10 處失效錨點** | 早期 Lint 將表格內 `\|` 誤判為斷鏈；修補後進一步暴露 10 處 slug 式標題錨點失效 | 表格跳脫字元未還原；`AGENTS.md §5.1` 原範例使用 Obsidian 不支援的 slug 錨點 | 更新 Lint 先還原 `\|` 並檢查精確標題文字；修補 10 處錨點並修訂 `AGENTS.md §5.1`；重跑 Lint 達 0 錯誤 | 新增規則：撰寫錨點前必先讀取目標頁實際標題清單並逐字複製 |
| **5. `AGENTS.md` 修改腳本跳脫失敗** | PowerShell 內嵌 Python 字串反斜線被轉義導致斷言失敗 | Shell 引號與跳脫字元衝突（檔案未被改動） | 改以獨立 `.py` 腳本檔執行，一次成功 | 複雜文字修改改用工具或獨立腳本檔 |
| **6. 原文筆誤核對** | Ferreira Fig. 6 將 LSD 誤印為 LSC；Zhang PDF p.8 正文將 `Final-TF-IDF+heuristics` 誤寫為 `Final-TF-IDF` | 原始論文排版筆誤 | 對照原文正文與同頁圖表校正，並於論文頁限制章節明註 | 數據皆採「正文＋圖表雙向核對」 |
| **7. 台灣政府網站 Python SSL 憑證驗證報錯** | Python `urllib` 存取 `165.npa.gov.tw` 等站點報 `Missing Subject Key Identifier` | OpenSSL 3.5+ 嚴格檢查模式與部分政府憑證鏈差異 | 改以 Windows `curl.exe`（SChannel）實測，6 個台灣官方網址全數回傳 HTTP 200／301→200 | 官方 URL 驗證於 Windows 環境採用系統憑證庫查核 |

---

## 6. 最終測試結果

*(完整細節見 `FINAL_VALIDATION_REPORT.md`)*
- `python scripts/wiki_lint.py`：**PASS**（25 檔案、23 內容頁、286 條 Wikilinks、0 斷鏈、0 失效錨點、0 YAML 錯誤、0 孤島、27/27 核心發現附 PDF 頁碼）。
- `python scripts/validate_html.py`：**PASS**（12 處本機引用、6/6 圖片素材、15 個 verified Wiki 參照、0 個 pending 洩漏、無密碼輸入欄位、Node.js 語法檢查與 8 題計分／重設邏輯測試通過）。
- Edge 無頭瀏覽器 DOM 渲染測試：詳見 `FINAL_VALIDATION_REPORT.md` 之實測紀錄。

---

## 7. 限制與未來改進

1. **研究年代限制**：五篇學術論文發表於 2006–2015 年，現代瀏覽器安全介面（如 Chrome HTTPS 預設與 Safe Browsing）及社群生態已演進，教學中須持續對照當代環境。
2. **樣本代表性**：Dhamija (n=22)、Whitty (N=20)、Ferreira (52 封英文郵件) 與 Kumaraguru (單一美國大學自願者) 皆具明確樣本邊界，不應外推為台灣一般母體的精確比例。
3. **官方資料動態更新**：165 打詐儀錶板與數發部平台持續更新手法，建議每季定期回查並更新 `wiki/sources/`。
4. **未涵蓋主題**：AI 深度偽造語音／視訊詐騙、加密貨幣鏈上追蹤與企業變臉詐騙（BEC）目前尚未納入專屬已驗證來源，列為下一階段擴充方向。
5. **互動簡報擴充**：未來可擴充更多台灣在地化情境題庫、鍵盤快捷鍵翻頁及離線學習進度保存（`localStorage`）。
