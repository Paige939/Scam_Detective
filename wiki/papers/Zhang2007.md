---
title: "CANTINA: A Content-Based Approach to Detecting Phishing Web Sites"
authors: "Yue Zhang, Jason I. Hong, Lorrie F. Cranor"
year: 2007
venue: "WWW '07 — Proceedings of the 16th International Conference on World Wide Web, pp. 639–648"
doi: "10.1145/1242572.1242659"
pdf_path: "raw_sources/papers/Zhang2007_CANTINA.pdf"
tags: [paper, phishing, automated-detection, tf-idf, heuristics, anti-phishing-tool]
verification_status: "verified"
verified_date: "2026-11-23"
---

# CANTINA：基於網頁內容的釣魚網站偵測方法 (CANTINA: A Content-Based Approach to Detecting Phishing Web Sites)

## 0. 書目資料與頁碼說明

| 項目 | 內容 | 核對來源 |
| :--- | :--- | :--- |
| 作者 | Yue Zhang（University of Pittsburgh）、Jason I. Hong（CMU）、Lorrie F. Cranor（CMU） | Crossref；PDF p.1 |
| 標題 | CANTINA: A Content-Based Approach to Detecting Phishing Web Sites | Crossref；PDF p.1 |
| 會議與年份 | WWW '07 — *Proceedings of the 16th International Conference on World Wide Web*, May 2007 | Crossref；PDF p.1 |
| **正式出版頁碼** | **pp. 639–648** | Crossref `page` 欄位已核對 |
| DOI | `10.1145/1242572.1242659` | Crossref |
| 原始檔案 | `raw_sources/papers/Zhang2007_CANTINA.pdf`（CMU 作者最終版，共 10 頁） | CMU 作者公開存檔 |

> **頁碼規則**：本 Wiki 所有引用一律使用 **PDF 頁碼（PDF p.1–10）**，與正式出版頁碼（pp. 639–648）分開記錄。
>
> **驗證狀態**：`verified`（經 Loop 1–2 與人工審查修正）。

---

## 1. 核心研究問題 (Research Questions)

- 既有反釣魚工具多依賴黑名單或表面網址特徵，難以因應壽命極短的新釣魚網站；能否利用**網頁內容（TF-IDF 資訊檢索演算法＋搜尋引擎查詢）**結合啟發式規則（Heuristics）自動偵測釣魚網站，同時維持高偵測率與低誤報率？(PDF p.1、p.4)

---

## 2. 研究方法與實驗資料 (Methodology & Limitations)

- **系統架構**：CANTINA 以 Internet Explorer 瀏覽器擴充功能實作，從網頁 DOM 計算詞彙的 TF-IDF 權重，取前 5 個關鍵詞組成「詞彙簽章（Lexical Signature）」提交 Google 搜尋；若當前網域未出現在前 N（預設 30）筆結果即判為釣魚。進階版加上「把網域名稱加入簽章（domain）」與「零結果即判釣魚（ZMP）」，稱為 **Final-TF-IDF**；再搭配 7 項啟發式特徵組成線性加權模型 **Final-TF-IDF+heuristics**。(PDF p.4–6)
- **指標定義**（PDF p.5、p.8）：
  - **True Positive (TP)**：將釣魚網站正確標記為釣魚的比例（越高越好）。
  - **False Positive (FP)**：將合法網站錯誤標記為釣魚的比例（越低越好）。
  - **False Spam**（僅 Exp 4）：將垃圾廣告網站錯誤標記為釣魚的比例（越低越好）。
- **四項實驗資料集（全為 2006–2007 年英文網站）**：
  - **Exp 1**（TF-IDF 變體比較）：100 個釣魚網址（2006/11/17–18 PhishTank 通報 6 小時內）＋ 100 個合法網址（取自 3Sharp 研究之 500 合法網站清單）。(PDF p.5–6)
  - **Exp 2**（啟發式特徵權重計算）：100 個釣魚網址（2006/11/15–16 PhishTank）＋ 同 Exp 1 之 100 個合法網址。(PDF p.6–7)
  - **Exp 3**（系統與工具列比較）：同 Exp 1 之 100 個釣魚網址 ＋ 新建 100 個合法網址（35 個常被仿冒登入頁＋35 個 Alexa 熱門頁＋30 個隨機合法頁）。(PDF p.7–8)
  - **Exp 4**（真實郵件網址測試）：4 名研究團隊成員於 2007/2/6–12 收到的 3,385 封郵件中提取 2,519 個有效網址，人工標註為 **19 個釣魚**、388 個垃圾廣告、2,100 個合法、12 個未知（多為無法閱讀的亞洲語言網站）。(PDF p.8)

### ⚠️ 研究限制與二元分離界線（嚴禁過度推論）

1. **嚴格區分演算法實驗指標與大眾防詐指引**：所有 TP / FP 數據均為 **2006–2007 年特定英文資料集**上的系統測試結果。作者明言 Exp 3 樣本「非具代表性，無法用來計算絕對準確率」(PDF p.7)；Exp 4 僅含 **19 個釣魚網址**(PDF p.8)。
2. **權重不可轉化為現代通用風險分數**：Table 2 的 TF-IDF 與啟發式特徵權重係針對 2006 年 200 個英文網頁以簡易線性公式計算，**絕不可直接當作現代網站的通用風險評分表**。(PDF p.6–7)
3. **語言與內容格式限制**：系統僅含英文字典，作者指出非正式測試中 TF-IDF 在**東亞語言**（無空白分詞）表現不佳；此外無法處理以**純圖片取代文字**、**隱藏文字**或 **JavaScript 延遲改寫 DOM** 的釣魚網站。(PDF p.8–9)
4. **搜尋排名假設可被繞過**：攻擊者可透過入侵高排名合法網站或操弄搜尋排名（SEO / Google bombs）破壞 CANTINA 的前提假設。(PDF p.9)
5. **原文筆誤註記**：PDF p.8 正文稱「The Final-TF-IDF has 13% false positives, and Final-TF-IDF has 3% false positives」，對照同頁 Figure 7 確認後者為 `Final-TF-IDF+heuristics`（3% FP）。(PDF p.8)

---

## 3. 學術核心研究發現 (Key Research Findings)

> 🔬 **系統實驗直接數據（限上述 2006–2007 英文資料集，不可泛化為大眾準確率）**

### F1｜釣魚網站壽命極短，黑名單存在時間差
🔬 **研究直接支持**：引用 APWG 報告指釣魚網站平均存活僅 **4.5 天**，研究團隊經驗甚至短至**數小時**(PDF p.4)。依賴黑名單的工具（如 Netcraft）在先前研究中偵測率隨網站新鮮度在 **75%–96%** 間波動，無法即時攔截剛上線的新釣魚站。(PDF p.7–8)

### F2｜CANTINA 內容法與混合法之實驗表現（Exp 1、Exp 3、Exp 4）
🔬 **研究直接支持（附資料集與適用範圍）**：
- **Exp 1（100 釣魚 + 100 合法英文頁）**：Basic TF-IDF 為 94% TP / 30% FP；加入 domain 後降 FP 至 10% 但 TP 降至 67%；再加 ZMP（Final-TF-IDF）達 **97% TP / 10% FP**；檢查搜尋結果超過前 30 筆無明顯差異。(PDF p.6, Fig. 4–5)
- **Exp 3（100 PhishTank 釣魚 + 100 精選合法英文頁，具比較性而非代表性）**：
  - `Final-TF-IDF`：**97% TP / 6% FP**
  - `Final-TF-IDF+heuristics`：**89% TP / 1% FP**（相較純 Final-TF-IDF，TP 下降達統計顯著 p=0.0266；FP 下降未達顯著 p=0.3161）
  - `SpoofGuard`（純啟發式）：**91% TP / 48% FP**
  - `Netcraft`（黑名單＋啟發式）：**97% TP / 0% FP**。(PDF p.7, Fig. 6)
- **Exp 4（4 人 7 天信箱之 2,519 有效網址，僅 19 釣魚 / 388 垃圾 / 2,100 合法）**：
  - `Final-TF-IDF`：95% TP / 13% FP / 98% False Spam
  - `Final-TF-IDF+heuristics`：89% TP / 3% FP / 1% False Spam
  - `Netcraft`：84% TP / 0% FP / 0% False Spam（三者 TP 差異未達統計顯著 p > 0.2）。(PDF p.8, Fig. 7)

### F3｜八項啟發式特徵在 Exp 2（200 英文網址）上的表現差異
🔬 **研究直接支持（Table 2，僅適用於該 2006 年實驗集，不可作為現代通用風險分數）**(PDF p.7)：
- `TF-IDF-Final`：99% TP / 10% FP（權重 0.28）
- `Forms`（含文字輸入表單）：94% TP / 27% FP（權重 0.21）
- `Age of Domain`（註冊 ≤ 12 個月）：87% TP / 30% FP（權重 0.18）
- `Dots in URL`（網址含 ≥ 5 個點號）：45% TP / 3% FP（權重 0.13）
- `Known Images`（含 9 個知名品牌 Logo 但網域不符）：37% TP / 0% FP（權重 0.12）
- `IP Address`（網域為 IP 位址）：22% TP / 0% FP（權重 0.07）
- `Suspicious URL`（網址含 `@` 或 `-`）：6% TP / 3% FP（權重 0.01）
- `Suspicious Links`（頁面連結含 `@` 或 `-`）：8% TP / 25% FP（負效應，權重設為 0.00）

### F4｜自動化偵測仍面臨對抗規避與人機介面瓶頸
🔬＋💬 **研究發現與討論**：除圖片取代文字、JavaScript 混淆、入侵高排名網站與 SEO 操弄外，作者在結論引用既有研究指出，**即使反釣魚工具列準確率極高，若使用者不理解警訊介面想傳達的意思，仍會受騙**。(PDF p.8–9)

---

## 4. 大眾防詐教育轉化 (Educational Takeaways)

> 📚 **教學延伸建議**（借鏡論文原理，但明確標示邊界，絕不將演算法分數直接當作大眾法則）

### 🔬 認知校正（論文背景支持）
- **瀏覽器沒跳警告 ≠ 網站安全**：新釣魚網站可能只存活幾小時，黑名單存在更新空窗期。(PDF p.4、p.8)

### 📚 搜尋引擎交叉比對——僅作輔助檢查（教學延伸）
- 受 CANTINA「比對頁面內容與搜尋結果網域」思路啟發，當對陌生登入頁存疑時，可另開分頁搜尋該機構名稱，比對官方網域是否一致。
- ⚠️ **嚴格使用界線**：此法**只能作為輔助檢查**。**搜尋排名、置頂廣告與網站外觀都不能單獨證明網站合法**（攻擊者可能購買關鍵字廣告、操弄 SEO 或入侵合法高排名網站，參見 PDF p.9）。
- **最高原則**：進行轉帳、輸入帳密或個資等**敏感操作**時，應優先透過**自行確認的官方網址（手動輸入或書籤）或官方 App**，而非仰賴搜尋結果或簡訊連結。

### 📚 多特徵檢核，不迷信單一規則（教學延伸）
- 可搭配觀察「是否使用純 IP 位址」「網址是否異常冗長含大量點號」「頁面要求輸入密碼／卡號但網域與 Logo 品牌不符」等線索（詳見 [[wiki/tasks/check-website-legitimacy|辨識真假網站 SOP]]）。
- 不要因為網址含有 `-` 就直接判定詐騙，也不要因為沒有 `-` 就放鬆戒心（Exp 2 顯示單看 `@`/`-` 鑑別力極低，PDF p.7）。

---

## 5. 相關頁面 (Related Wiki Links)

- 概念頁：[[wiki/concepts/phishing-detection-heuristics|釣魚網站偵測特徵與黑名單限制]]
- 概念頁：[[wiki/concepts/phishing-attacks|釣魚攻擊 (Phishing Attacks)]]
- 任務頁：[[wiki/tasks/check-website-legitimacy|辨識真假網站 SOP]]
- 綜合頁：[[wiki/syntheses/phishing-attack-mechanisms|釣魚攻擊機制綜合分析]]
- 同系列論文：[[wiki/papers/Dhamija2006|Dhamija et al. (2006)]]
