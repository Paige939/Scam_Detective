---
title: "Principles of Persuasion in Social Engineering and Their Use in Phishing"
authors: "Ana Ferreira, Lynne Coventry, Gabriele Lenzini"
year: 2015
venue: "HAS 2015 — Human Aspects of Information Security, Privacy, and Trust (Springer LNCS), pp. 36–47"
doi: "10.1007/978-3-319-20376-8_4"
pdf_path: "raw_sources/papers/Ferreira2015_PrinciplesOfPersuasion.pdf"
tags: [paper, phishing, social-engineering, persuasion, email-analysis, taxonomy]
verification_status: "verified"
verified_date: "2026-11-23"
---

# 社交工程中的說服原則及其在釣魚郵件中的運用 (Principles of Persuasion in Social Engineering and Their Use in Phishing)

## 0. 書目資料與頁碼說明

| 項目 | 內容 | 核對來源 |
| :--- | :--- | :--- |
| 作者 | Ana Ferreira（盧森堡大學 SnT / ICSA）、Lynne Coventry（Northumbria University）、Gabriele Lenzini（盧森堡大學 SnT） | PDF p.1 首頁；Crossref 作者清單（三人，順序一致） |
| 標題 | Principles of Persuasion in Social Engineering and Their Use in Phishing | PDF p.1；Crossref |
| DOI | 10.1007/978-3-319-20376-8_4 | Crossref（2026-11-23 查詢） |
| 出版形式 | 書籍章節（book-chapter），Springer International Publishing，2015；線上發表 2015-07-21 | Crossref |
| **正式出版頁碼** | **pp. 36–47** | **Crossref `page` 欄位已核對** |
| 叢書／卷號 | Lecture Notes in Computer Science（HAS 2015）；卷號 LNCS 9190 | 卷號僅見於搜尋引擎摘要（Semantic Scholar / uni.lu），Crossref 未列卷號，**尚待出版社頁面確認** |
| 原始檔案 | `raw_sources/papers/Ferreira2015_PrinciplesOfPersuasion.pdf`（camera-ready 預印版，12 頁） | 下載自 ORBilu，Semantic Scholar 標示 openAccessPdf |

> **頁碼規則**：本 Wiki 所有引用一律使用 **PDF 頁碼（PDF p.1–12）**。正式出版頁碼（pp.36–47）與 PDF 頁碼的逐頁對應**未經驗證**（預印版排版與出版版不同），故不做逐頁換算，僅記錄章節範圍。
>
> **驗證狀態**：`verified`（指本頁研究內容經 Loop 1–2 與人工審查）。

---

## 1. 核心研究問題 (Research Questions)

- Cialdini 的「影響力六原則」、Gragg 的「七個心理觸發點」、Stajano 等人的「詐騙七原則」三套說服分類**彼此是什麼關係**？能否整合成一套較一致的原則？(PDF p.1–2)
- 整合後的原則，**在真實釣魚郵件中如何出現、如何組合**？(PDF p.2)

---

## 2. 研究方法與限制 (Methodology & Limitations)

- **研究設計**：兩部分——(1) 概念整合：定義 `=`（等同）、`⊂`（包含）、`∼`（部分重疊）三種關係，逐條比對三套原則，整合出五項原則 (PDF p.3–6)；(2) 郵件分析：人工標註 52 封英文釣魚郵件，依「郵件元素」統計各說服原則出現情形 (PDF p.6–7)。
- **這不是受試者實驗**：沒有人被測試是否受騙，也沒有成功率數據。
- **樣本**：52 封釣魚郵件，其中資料竊取（Data Theft）30 封、惡意軟體（Malware）15 封、詐騙（Fraud）7 封；來自作者自己的信箱與網路上的真實範例；排除垃圾郵件；僅限英文 (PDF p.6–7)。

### ⚠️ 研究限制（嚴禁過度推論）

1. **樣本小且非隨機**：52 封，詐騙類僅 7 封，來源為作者蒐集，不能代表所有釣魚郵件。作者說明因分析必須人工進行，無法取得更大樣本 (PDF p.6、p.11)。
2. **人工標註、無自動化工具**：分析依賴人工判斷，作者自述「based on peer review」，需進一步研究才能自動化 (PDF p.1、p.11)。
3. **僅限英文郵件**：不同語言與文化是否有差異，論文明言不在範圍內 (PDF p.7)。
4. **沒有成功率資料**：「分析沒有取得各種組合的成功率」，作者將「哪些組合更有效」列為後續工作 (PDF p.10)。
5. **五項原則不保證完備**：作者表示尚需驗證是否還有未識別的原則，以及是否也適用於釣魚郵件以外的社交工程攻擊 (PDF p.9)。
6. **整合方法本身缺乏先例**：作者說明此前沒有可依循的整合方法，因此自訂了以「各原則的文字描述與情境」為依據的比對方法 (PDF p.11)。
7. **圖表數字未納入**：Fig. 3–6 為圖像，文字層無法可靠擷取精確次數；本 Wiki 只引用正文以文字陳述的排名結論。Fig. 6 圖說將 LSD 誤印為「LSC」，為原文筆誤 (PDF p.9)。
8. **2015 年研究**：郵件樣本與當時的釣魚手法為背景，不代表現今（含簡訊、通訊軟體、AI 生成內容）的分布。

### ⚠️ 證據界線（本頁最重要的使用說明）

| 本研究**有**做的 | 本研究**沒有**做的（不可據此宣稱） |
| :--- | :--- |
| 分析 52 封釣魚郵件中各說服原則的**出現分布** | 測量任何一種原則**讓多少人受騙**（成功率） |
| 描述原則**常一起出現**（成對／三項） | 證明「同時出現多種原則」的**效果較強** |
| 作者**推測**部分分布的原因（如詐騙郵件較個人化） | 以實驗**驗證**這些推測 |
| 提出一套整合後的五項原則作為研究共用語言 | 證明這五項是**唯一或完整**的社交工程原則 |

> 因此：**出現頻率 ≠ 詐騙成功率**；**多原則同時出現 ≠ 已證明較有效**。

---

## 3. 學術核心研究發現 (Key Research Findings)

> 🔬 標記說明：**🔬 研究直接支持** = 論文原文有明確陳述，附 PDF 頁碼。**💬 作者推測** = 論文自述為推論，非實證驗證。

### F1｜整合出五項說服原則
🔬 **研究直接支持**：作者將三套分類整合為五項「社交工程說服原則」(PDF p.4–5)：
1. **Authority（AUTH，權威）**：社會訓練人們不要質疑權威，人們傾向跟隨專家或看似有權威的人。
2. **Social Proof（SP，社會認同）**：人們傾向模仿多數人的行為；當大家看似共同承擔風險時，警戒心降低。
3. **Liking, Similarity & Deception（LSD，喜愛、相似與欺瞞）**：人們傾向順從自己認識、喜歡、相似或熟悉的人。
4. **Commitment, Reciprocation & Consistency（CRC，承諾、互惠與一致）**：一旦承諾某個行動，就想前後一致；欠人情就想回報。
5. **Distraction（DIS，分散注意力）**：人們專注於可獲得或可能失去的東西（如限時、稀缺），而忽略其他應考慮的事實。
- 整合依據包括：Authority 在三套分類中等同（C1 = G1 = S1）；Dishonesty ⊂ Commitment & Consistency；Scarcity ⊂ Distraction 等 (PDF p.4–6)。
- **注意**：此為作者以文字描述比對得出的**分類提案**，不是實驗證明的唯一正解。

### F2｜釣魚郵件中各原則的出現排名
🔬 **研究直接支持**（限 52 封樣本）：最常出現的原則是 **LSD**，其次是 **DIS**；第三名在資料竊取與惡意軟體類郵件為 **AUTH**，在惡意軟體與詐騙類郵件為 **CRC** (PDF p.8；討論見 PDF p.9–10)。
- 統計方式：逐一計算每個「郵件元素」（文字、圖片、顏色等）表達了哪些原則，連續元素若表達同一原則只計一次 (PDF p.7)。
- **不可推論為**：「LSD 是最有效的詐騙手法」——這只是出現頻率。

### F3｜原則常以成對或三項組合出現
🔬 **研究直接支持**（限 52 封樣本）(PDF p.8–9)：
- 成對：資料竊取郵件最常見 **AUTH-LSD**，其次 AUTH-DIS；惡意軟體郵件最常見 **LSD-DIS**，其次 AUTH-DIS；詐騙郵件最常見 **CRC-DIS**，其次 LSD-DIS。
- 三項：資料竊取與惡意軟體郵件最常見 **AUTH-CRC-DIS**，其次 AUTH-LSD-DIS；詐騙郵件最常見 AUTH-CRC-DIS，其次 LSD-CRC-DIS。
- **不可推論為**：「組合出現所以效果比單一原則強」。作者雖認為組合使用「讓它們更成功」，但自承沒有成功率資料可驗證 (PDF p.10)。

### F4｜詐騙類郵件較少出現 Authority
💬 **作者推測**：詐騙類（如 419 詐騙）郵件較少用 AUTH、較多用 CRC。作者的解釋是這類郵件較個人化、口吻像熟人，以「請求人情」取代「權威感」(PDF p.10)。
- 此為作者對 7 封詐騙郵件的詮釋，**未經實驗驗證**。

### F5｜Social Proof 出現最少
🔬 **研究直接支持**（限 52 封樣本）：SP 是出現次數最少的原則，作者自己也認為意外，推測可能因為社交工程者傾向針對「個人」切身相關的行動來設計攻擊 (PDF p.10)。其中「推測」部分屬 💬 作者推測。

### F6｜視覺呈現手法為五項原則以外的說服元素
🔬 **研究直接支持**：釣魚郵件還使用重複資訊、字體大小、粗體、文字顏色、表格等版面手法影響使用者判斷，可能衍生出本文五項以外的原則，留待後續研究 (PDF p.11)。

---

## 4. 大眾防詐教育轉化 (Educational Takeaways)

> 📚 標記說明：**📚 教學延伸建議** = 由研究推導的行動建議，非論文直接測試過的防護方法。**🔗 待補強** = 需台灣官方來源補充。

### 🔬 迷思破解（有論文動機章節支持）
- **迷思**：「只要檢查錯字、文法、關鍵字，就能識破釣魚信。」
- **研究怎麼說**：作者指出，多數防護研究專注在檢查關鍵字、文法錯誤、錯字等，但這些方法**尚未改變人們仍然受騙的事實**；釣魚郵件的有效性部分來自說服與欺瞞策略 (PDF p.2)。
- **界線**：這是作者的動機論述，並非本研究實驗證實「檢查錯字無效」。

### 📚 先問「這封訊息在利用我的哪一種心理？」（教學延伸）
把五項原則轉成大眾聽得懂的自問清單（詳見 [[wiki/tasks/analyze-suspicious-message|分析可疑訊息的說服手法]]）：
- **AUTH**：對方是不是在冒充銀行、政府、主管，要我「照辦就對了」？
- **LSD**：對方是不是裝得跟我很熟、很親切、很像「自己人」？
- **CRC**：對方是不是先給點好處或先要我答應一件小事，再要我「做到底」？
- **DIS**：對方是不是用限時、獎金、損失，讓我來不及想別的？
- **SP**：對方是不是強調「大家都已經做了」？

### 📚 組合出現時提高警覺（教學延伸，界線見證據界線表）
可以教學的是：「**同時踩到 2–3 個心理按鈕的訊息，值得多停一步**」。**不可**教成「組合越多越危險／越有效」，因為本研究沒有成功率資料。

### 🔗 在地案例（待 165 官方資料補強）
台灣常見的假冒公家機關、假客服、投資詐騙訊息，如何對應五項原則，待 165 官方資料加入後再補充。

---

## 5. 相關頁面 (Related Wiki Links)

- 概念頁：[[wiki/concepts/persuasion-principles|社交工程說服原則 (Persuasion Principles)]]
- 概念頁：[[wiki/concepts/social-engineering|社交工程 (Social Engineering)]]
- 概念頁：[[wiki/concepts/phishing-attacks|釣魚攻擊 (Phishing Attacks)]]
- 概念頁：[[wiki/concepts/bounded-attention|有限注意力 (Bounded Attention)]]（與本文 Distraction 相關但不同）
- 任務頁：[[wiki/tasks/analyze-suspicious-message|分析可疑訊息的說服手法]]
- 綜合頁：[[wiki/syntheses/phishing-attack-mechanisms|釣魚攻擊機制綜合分析]]
- 同系列論文：[[wiki/papers/Dhamija2006|Dhamija et al. (2006) — Why Phishing Works]]
