---
title: "School of Phish: A Real-World Evaluation of Anti-Phishing Training"
authors: "Ponnurangam Kumaraguru, Justin Cranshaw, Alessandro Acquisti, Lorrie Cranor, Jason Hong, Mary Ann Blair, Theodore Pham"
year: 2009
venue: "SOUPS '09 — Proceedings of the 5th Symposium on Usable Privacy and Security, pp. 1–12"
doi: "10.1145/1572532.1572536"
pdf_path: "raw_sources/papers/Kumaraguru2009_SchoolOfPhish.pdf"
tags: [paper, phishing, embedded-training, phishguru, field-experiment, demographics]
verification_status: "verified"
verified_date: "2026-11-23"
---

# 釣魚學校：反釣魚訓練的真實世界評估 (School of Phish: A Real-World Evaluation of Anti-Phishing Training)

## 0. 書目資料與頁碼說明

| 項目 | 內容 | 核對來源 |
| :--- | :--- | :--- |
| 作者 | Ponnurangam Kumaraguru, Justin Cranshaw, Alessandro Acquisti, Lorrie Cranor, Jason Hong, Mary Ann Blair, Theodore Pham（CMU） | Crossref；PDF p.1 |
| 標題 | School of Phish: A Real-World Evaluation of Anti-Phishing **Training** | Crossref；PDF p.1（註：正式尾字為 Training，非 Education） |
| 會議與年份 | SOUPS '09 — *Proceedings of the 5th Symposium on Usable Privacy and Security*, July 2009 | Crossref；PDF p.1 |
| **正式出版頁碼** | **pp. 1–12** | Crossref `page` 欄位已核對 |
| DOI | `10.1145/1572532.1572536` | Crossref |
| 原始檔案 | `raw_sources/papers/Kumaraguru2009_SchoolOfPhish.pdf`（CMU CyLab 論文集，共 12 頁） | CMU CyLab 公開存檔 |

> **頁碼規則**：本 Wiki 所有引用一律使用 **PDF 頁碼（PDF p.1–12）**（與正式出版頁碼 pp. 1–12 一致）。
>
> **驗證狀態**：`verified`（經 Loop 1–2 與人工審查修正）。

---

## 1. 核心研究問題 (Research Questions)

在真實校園收信環境中，嵌入式防詐訓練系統 **PhishGuru**（於使用者誤點模擬釣魚連結的「可教時刻 Teachable Moment」即時顯示漫畫式教學介入）是否能：(PDF p.1、p.7)
- **H1**：讓受訓者在 **28 天後**仍保留防釣魚知識？
- **H2**：**二次強化訓練**是否比單次訓練更有效？
- **H3**：訓練是否會影響使用者對**合法郵件**的反應（避免增加誤判）？
- 哪些人口統計特徵（性別、身分、年齡、科系）與易受騙程度相關？

---

## 2. 研究方法與限制 (Methodology & Limitations)

- **研究設計**：真實世界隨機對照實驗（Field Experiment），於 2008 年 11 月 10 日至 12 月 15 日在卡內基美隆大學（CMU）匹茲堡校區進行，為期 28 天測試＋第 35 天後測問卷。(PDF p.3–4, Table 2)
- **樣本（N = 515）**：寄出 21,351 封招募信，共 515 名教職員生自願報名（2.4%），隨機分派至三組：(PDF p.3)
  - 控制組（Control）：N = 172（不接受訓練，誤點均導向模擬釣魚網站）
  - 單次訓練組（Single-training）：N = 172（僅 Day 0 誤點時觸發漫畫訓練介入）
  - 多次訓練組（Multiple-training）：N = 171（Day 0 與／或 Day 14 誤點時觸發漫畫訓練介入）
  - 後測問卷回收 **279 人**（三組比例相近：31.5% / 34.0% / 34.5%），其中 **267 人**填答年齡（18–77 歲，平均 32.3 歲，SD = 12.8）。(PDF p.4、p.7、p.9)
- **實驗流程**：所有受試者於 28 天內收到 7 封模擬魚叉式釣魚郵件（採 21 種平衡排程避免郵件難度與順序混淆）＋ 3 封由 CMU 資安辦公室（ISO）發出的真實合法活動郵件（Day 0、Day 7、Day 28）；模擬釣魚網站前端以 JavaScript 丟棄表單資料，不實際儲存密碼。(PDF p.3–4, Table 3)

### ⚠️ 研究限制與證據界線（嚴禁過度推論）

1. **自願報名偏差與單一校園樣本**：僅 2.4% 收到招募信者自願參與（IRB 要求 opt-in），且全為美國單一大學（CMU）成員，收信頻率與族群結構未必能直接推論至一般大眾。(PDF p.3、p.11)
2. **所有 Day 28 訓練成效數據均須附帶篩選條件與分母**：訓練介入僅在「誤點」時觸發，因此論文針對 H1 與 H2 採用**條件分析（Conditioned Analysis）**，不同子樣本分母不可混用（詳見 F1、F2）。(PDF p.7–9)
3. **合法郵件測試範圍有限**：H3 僅測試了 **3 封 CMU ISO 資安活動合法郵件**；實驗中未觀察到三組誤判率顯著差異，**不得宣稱已證明防詐訓練在所有情境下都不會增加合法郵件誤報**。(PDF p.4、p.8–9)
4. **未模擬 HTML 隱藏網址**：考量部分郵件客戶端會移除 HTML，所有模擬釣魚郵件皆以純文字直接顯示網址，未測試超連結文字偽裝情境。(PDF p.4)
5. **年齡資料僅限後測回覆者（N = 267 / 515）**，且教授樣本數過小無法下結論。(PDF p.9)
6. **中期追蹤（28 天）**：未測試半年或一年以上的長期留存。

---

## 3. 學術核心研究發現 (Key Research Findings)

> 🔬 **研究直接支持**（以下完整保留全體與條件分析之篩選條件與分母）｜💬 **作者推測**

### F1｜嵌入式訓練可保留至少 28 天（支持 H1）
🔬 **研究直接支持**：
- **Day 0 基準線（全體 N = 515）**：控制組 52.3%（90/172）、單次組 51.7%（89/172）、多次組 45.0%（77/171）誤點連結，三組無顯著差異（ANOVA F(2,512)=1.1, p=0.3）；控制組於 Day 0–28 間點擊率無顯著變化（p=0.3）。(PDF p.7–8, Table 4)
- **Day 28 條件分析（篩選條件：僅限 Day 0 曾誤點者——控制組 N = 90、單次組 N = 89、多次組 N = 77）**：
  - 控制組仍有 **54.4%** 點擊釣魚連結；
  - 單次訓練組降至 **27.0%**（與控制組比較 Chi-Sq = 14, p < 0.001）；
  - 多次訓練組降至 **32.5%**（與控制組比較 Chi-Sq = 8.9, p < 0.01）；
  - 單次組在假網站輸入個資的比例於 Day 2 與 Day 28 間無顯著退化（p < 0.1）。(PDF p.8–9, Fig. 3 Left)
- *(對照：全體樣本 Table 4 之 Day 28 點擊／輸入個資率為——控制組 N=172：44.2%／30.8%；單次組 N=172：23.8%／17.4%；多次組 N=171：25.6%／17.5%，PDF p.8)*

### F2｜二次強化訓練顯著降低「輸入個資」機率（支持 H2）
🔬 **研究直接支持（篩選條件：僅限 Day 0 與 Day 14 皆誤點者——控制組 N = 54、單次訓練組 N = 35、多次訓練組 N = 34）**：(PDF p.8–9, Fig. 3 Right)
- **點擊連結率**：單次組與多次組在 Day 16（42.9% vs. 26.5%, p=0.01）與 Day 21（p < 0.01）有顯著差異，但至 **Day 28 無顯著差異**（Chi-Sq = 0.3, p=0.6）。
- **輸入個資率（Day 28）**：單次訓練組（N = 35）有 **31.4%** 在假網站輸入個資，多次訓練組（N = 34）顯著降至 **14.7%**（Chi-Sq = 7.3, p < 0.01）。
- **補抓先前未受訓者**：多次組中有 **30 人（17.5%, 30/171）** 在 Day 0 未誤點卻在 Day 14 誤點而首次受訓，顯示多輪訓練提供額外學習機會。(PDF p.8)

### F3｜在測試的 3 封合法郵件中，未觀察到訓練增加誤判（支持 H3，限本研究情境）
🔬 **研究直接支持**：針對 3 封 CMU ISO 合法活動郵件，三組在 Day 0（ANOVA p=0.1）與 Day 28（ANOVA p=0.3）的點擊與登入行為無顯著差異；組內 3 封郵件間亦無顯著差異（Day 0 誤點者子樣本 N=90/89/77 數據見 Table 5）。(PDF p.8–9)
- **證據界線**：此結果僅限於本實驗所發送之 3 封特定校園活動郵件，**不可推論為「已證明防詐訓練在所有情境下都不會增加合法郵件誤報」**。

### F4｜年齡（18–25 歲）與學生身分顯著影響易受騙率；性別與科系無顯著差異
🔬 **研究直接支持**：
- **性別與科系**：多變量迴歸未發現性別（Day 0 p=0.9；Day 28 p=0.4）、學生年級（Day 0 p=0.5；Day 28 p=0.9）或主修科系（Day 0 p=0.8；Day 28 p=0.7）與易受騙率有顯著關聯——**資工系（Computer Science）在 Day 0 誤點率為 48.2%，未顯著優於其他科系**。(PDF p.3 Table 1, p.8–9)
- **學生 vs. 職員**：學生在 Day 0 顯著比職員更易受騙（p < 0.05；學生 58.6% vs. 職員 37.8%，Table 1）。(PDF p.3、p.8)
- **年齡組別（篩選條件：後測回覆年齡者 N = 267，Table 6）**：**18–25 歲族群**在所有測試日均顯著比其他年齡組更易誤點（Day 0 Chi-Sq = 8, p < 0.01；Day 28 Chi-Sq = 10.5, p < 0.01）：
  - 18–25 歲：Day 0 **62.3%** → Day 28 **35.7%**
  - 26–35 歲：Day 0 **47.5%** → Day 28 **15.8%**
  - 36–45 歲：Day 0 **33.3%** → Day 28 **18.2%**
  - 46 歲以上：Day 0 **42.5%** → Day 28 **10.0%**。(PDF p.9–10)
- 💬 **作者推測**：引用風險趨避文獻推測年輕族群可能較具風險偏好與衝動性，但本研究未直接測量心理特質。(PDF p.9)
- **跨研究結果差異**：與 Dhamija (2006) F4 的比較請見 [[wiki/syntheses/anti-phishing-defenses-and-divergences|反釣魚防禦策略與跨研究結果差異分析]]。

### F5｜「黃金 8 小時」點擊窗口
🔬 **研究直接支持**：在最終會點擊釣魚連結的受試者中，寄出後 **2 小時內至少有一半已點擊**，**8 小時內近 90% 已點擊**（Day 14 因技術故障未收錄數據；作者明言此收信節奏可能反映大學族群特性，非校園族群未必相同）。(PDF p.10–11, Fig. 4)

### F6｜受試者對嵌入式漫畫訓練之回饋
🔬 **研究直接支持（後測問卷）**：80% 喜歡定期舉辦校園訓練、90% 願推薦給朋友；但問及收信頻率時（N = 85 回覆），40% 偏好每月一次、**22.3% 表示永遠不想收到此類訓練信**。(PDF p.10)

---

## 4. 大眾防詐教育轉化 (Educational Takeaways)

> 📚 **教學延伸建議**（基於 PhishGuru 設計原則轉譯為大眾教育方法）

### 📚 破除迷思：「年輕人／大學生／理工科比較懂網路，不容易被釣魚」
- 在 CMU 校園實測中，18–25 歲組與學生族群反而是誤點率最高的一群，資工系也未顯著優於他系（提醒：此為單一校園樣本結果，不可直接視為所有國家一般人口的定論，但足以打破「懂電腦就免疫」的過度自信）。(PDF p.3、p.9–10)

### 📚 「可教時刻（Teachable Moment）」與互動練習的價值
- 單向發送冗長防詐手冊往往無人閱讀；透過**模擬生活情境測驗 → 犯錯當下立即給予圖文解析 → 定期複習**，較能幫助記憶留存並降低實際輸入個資的風險。(PDF p.1、p.8、p.11)
- 這也是本學院後續設計互動情境測驗的核心教育依據。

### 📚 技術黑名單必須搭配使用者警覺
- 90% 誤點發生於寄出後 8 小時內，與 [[wiki/papers/Zhang2007#F1｜釣魚網站壽命極短，黑名單存在時間差|Zhang et al. (2007, PDF p.4)]] 的黑名單滯後問題相互呼應，顯示「技術工具＋使用者訓練」必須並行。(PDF p.10、p.12)

---

## 5. 相關頁面 (Related Wiki Links)

- 概念頁：[[wiki/concepts/embedded-anti-phishing-training|嵌入式防詐訓練與可教時刻 (Embedded Training & Teachable Moment)]]
- 概念頁：[[wiki/concepts/phishing-attacks|釣魚攻擊 (Phishing Attacks)]]
- 綜合頁：[[wiki/syntheses/anti-phishing-defenses-and-divergences|反釣魚防禦策略與跨研究結果差異分析]]
- 綜合頁：[[wiki/syntheses/phishing-attack-mechanisms|釣魚攻擊機制綜合分析]]
- 同系列論文：[[wiki/papers/Dhamija2006|Dhamija et al. (2006)]]、[[wiki/papers/Zhang2007|Zhang et al. (2007)]]
