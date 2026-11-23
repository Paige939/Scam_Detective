---
title: "辨識真假網站 (辨識偽冒網址與登入頁)"
category: "task"
difficulty: "初級"
tags: [detection, checklist, practical, phishing, url-verification]
verification_status: "verified"
last_updated: "2026-11-23"
---

# 辨識真假網站 SOP

## 1. 任務目標

幫助一般使用者在收到可疑連結或進入陌生網站時，透過系統性檢查步驟，快速判斷網站是否可信，避免在釣魚網站中輸入帳號密碼或個人資料。

---

## 2. 偵探核心檢驗清單

> 🔬 有 PDF 頁碼者為研究直接支持；📚 為教學延伸建議；🔗 為待 165 官方補強項目

### 🔬 Step 1：先看「誰是這個網站的主人」（確認 Registered Domain）
*(科學依據：[[wiki/papers/Dhamija2006#F5｜三大釣魚攻擊維度（分類框架）|Dhamija et al. 2006, PDF p.2–3]] — 知識缺失維度)*

確認**網址列中的「Registered Domain」**（有效頂級域名左邊緊鄰的那一段），而非僅看網站外觀：

| 網址 | Registered Domain | 判斷 |
| :--- | :--- | :--- |
| `www.paypal.com` | `paypal.com` | ✅ 合法 PayPal |
| `mail.paypal.com` | `paypal.com` | ✅ 仍為 PayPal |
| `paypal.login.evil.com` | `evil.com` | ❌ 與 PayPal 無關 |
| `www.bankofthevvest.com` | `bankofthevvest.com` | ❌ 仿冒 Bank of the West |

> ⚠️ **注意**：`.com`、`.tw`、`.gov.tw` 之前緊鄰的那個段落才是關鍵；子域名（`.` 分隔的前綴）不代表域名的擁有者。

- [ ] 我確認了網址列顯示的 Registered Domain，確認它屬於我預期的機構

### 🔬 Step 2：不要被外觀「說服」（視覺欺騙防禦）
*(科學依據：[[wiki/papers/Dhamija2006#F5｜三大釣魚攻擊維度（分類框架）|Dhamija et al. 2006, PDF p.3、p.7]] — 視覺欺騙維度)*

- [ ] 我沒有因為網站「看起來精緻、有 Logo、有動畫」就直接相信它
- [ ] 我沒有因為網頁內容中有鎖頭圖案而認為「這個網站是安全的」
- [ ] 我確認鎖頭圖示出現在**瀏覽器網址列（上方）**，而非僅出現在網頁內文中

### 🔬 Step 3：HTTPS 不等於合法（安全指標校正）
*(科學依據：[[wiki/papers/Dhamija2006#🔬 核心認知校正（直接研究支持）|Dhamija et al. 2006, PDF p.3]] — SSL 知識缺失)*

- [ ] 我理解 `https://` 只代表「資料傳輸加密」，不代表這個網站的身分是合法的
- [ ] 若遇到 SSL 憑證警告彈窗，我沒有直接點擊「確定/接受」，而是停下來重新確認網址

### 📚 Step 4：優先使用自行確認的官方網址或官方 App，不透過連結進入（教學延伸建議）

- [ ] 進行登入、轉帳或輸入個資等**敏感操作**時，我優先**手動輸入官方網址**（如 `www.esunbank.com.tw`）、使用自己先前存好的書籤，或直接開啟**官方 App**，而非點擊簡訊、Email 或搜尋廣告中的連結
- [ ] **輔助檢查（僅供參考）**：若對陌生頁面存疑，可另開分頁用搜尋引擎搜尋該機構名稱比對官方網域；但須了解**搜尋排名、廣告與網站外觀都不能單獨證明網站合法**（背景：[[wiki/papers/Zhang2007#F4｜自動化偵測仍面臨對抗規避與人機介面瓶頸|Zhang et al. 2007, PDF p.9]]）
- [ ] **不迷信瀏覽器沒跳警告**：我知道新架設的釣魚網站可能尚未進入黑名單（背景：[[wiki/papers/Zhang2007#F1｜釣魚網站壽命極短，黑名單存在時間差|Zhang et al. 2007, PDF p.4]]），同時留意純 IP 網址、異常多點號、Logo 與網域不符等可疑線索（但這些屬輔助警訊，不可當作通用計分表）

### 🏛️ Step 5：利用台灣官方管道查詢可疑網址與業者（官方來源已驗證）
*(官方依據：[[wiki/sources/TW165-Portal|內政部警政署 165 全民防騙網]]、[[wiki/sources/MODA-AntiScam|數發部網路詐騙通報查詢網]]、[[wiki/sources/FSC-AntiFraud|金管會防範金融詐騙宣導]])*

- [ ] 政府機關官方網站結尾應為 `.gov.tw`，對不明短網址或奇特網域保持高度警戒
- [ ] 前往 **165 全民防騙網（https://165.npa.gov.tw/）** 查詢高風險賣場與涉詐網站，或透過 **數發部「網路詐騙通報查詢網」（https://fraudbuster.digiat.org.tw/）** 查詢與通報可疑網址
- [ ] 若為投資或金融平台，先至 **金管會官網（https://www.fsc.gov.tw/）** 確認是否為合法金融機構，絕不匯款至私人帳戶

---

## 3. 應對處置 SOP

### 若發現網站可疑：
1. **立即停止輸入**任何帳號、密碼、身分證字號、信用卡號或 OTP 簡訊驗證碼
2. **關閉該網頁**，不要點擊頁面上的任何按鈕（包含「取消」或「返回」）
3. **開啟新的瀏覽器視窗**，手動輸入官方網址或開啟官方 App 重新確認
4. 🏛️ **查證與檢舉**：撥打 **165 反詐騙諮詢專線**（24 小時免付費），或至 [[wiki/sources/TW165-Portal|165 全民防騙網]]／[[wiki/sources/MODA-AntiScam|數發部網路詐騙通報查詢網]] 線上檢舉可疑網址

### 若已輸入資料或匯款：
1. **立即止損**：第一時間聯繫發卡銀行或金融機構客服辦理掛失、凍結帳戶或協助圈存止付，並同步至官方網站更改密碼（[[wiki/sources/FSC-AntiFraud|金管會]]）
2. **緊急通報 165**：撥打 165 提供歹徒帳號、匯款金額與時間啟動警示帳戶通報（註：撥打 165 不等於完成刑事報案）
3. **保存證據並親赴派出所報案**：備齊身分證件、轉帳明細、對話截圖與詐騙網址，前往全國任一警察機關製作筆錄，取得 **「受（處）理案件證明單」**（[[wiki/sources/TW165-Portal|165 全民防騙網]]）

---

## 4. 關聯頁面

- 概念頁：[[wiki/concepts/phishing-attacks|釣魚攻擊 (Phishing Attacks)]]
- 概念頁：[[wiki/concepts/visual-deception|視覺欺騙 (Visual Deception)]]
- 概念頁：[[wiki/concepts/bounded-attention|有限注意力 (Bounded Attention)]]
- 論文頁：[[wiki/papers/Dhamija2006|Dhamija et al. (2006) — Why Phishing Works]]
- 相關任務：[[wiki/tasks/analyze-suspicious-message|分析可疑訊息的說服手法]]（先分析訊息，再檢查網址）
- 綜合頁：[[wiki/syntheses/phishing-attack-mechanisms|釣魚攻擊機制綜合分析]]
