---
title: "視覺欺騙 (Visual Deception)"
category: "concept"
tags: [visual-deception, phishing, typejacking, ui-spoofing]
verification_status: "verified"
last_updated: "2026-11-23"
---

# 視覺欺騙 (Visual Deception)

## 1. 定義與本質機制

**視覺欺騙（Visual Deception）** 是釣魚攻擊三大維度之一。攻擊者透過精確複製合法網站的外觀、圖示與界面元素，讓受害者的視覺判斷系統無法辨別真偽。

關鍵洞察：人類在辨識網站時主要依賴視覺外觀，而視覺外觀是攻擊者最容易複製的部分。外觀精美、設計完整反而可能成為「可信賴」的錯誤信號。

---

## 2. 學術實證與研究觀點

🔬 **研究直接支持**：[[wiki/papers/Dhamija2006#F5｜三大釣魚攻擊維度（分類框架）|Dhamija et al. (2006, PDF p.3)]] 將視覺欺騙策略分為四類：

1. **視覺相似域名（Typejacking）**：使用外觀相似的字元替換，如 `www.paypai.com`（i 取代 l）、`www.bankofthevvest.com`（vv 取代 w）
2. **圖片偽裝超連結**：合法圖示（如 PayPal Logo）連結實際指向惡意網站
3. **視窗覆蓋**：在合法網站視窗上方覆蓋外觀相同的假視窗，使用者可能誤認為同一來源
4. **完整外觀複製**：複製目標網站的所有圖片、Logo、動畫、設計，外觀幾乎無法從視覺分辨

🔬 **實驗數據**：Bank of the West 仿冒頁（使用 `bankofthevvest.com`，含 Verisign 認證圖章連結）讓 90.9%（20/22 人）誤判為合法網站。多名受試者提及網站的「cute 設計」、動畫、細節豐富度是他們相信該網站的原因。(PDF p.7)

---

## 3. 重要認知校正

🔬 **研究直接支持** (PDF p.3)：
- **HTTPS ≠ 合法**：釣魚網站可申請合法 SSL 憑證，`https://` 只代表傳輸加密，不代表網站身分可信
- **網頁內文鎖頭 ≠ 安全**：釣魚頁面可在網頁內容中放置鎖頭圖案（非瀏覽器 Chrome 的鎖頭），誘騙使用者誤以為連線安全；真正的安全指示在瀏覽器**網址列（browser chrome）**

---

## 4. 生活情境範例

1. 收到「銀行帳戶異常通知」簡訊，連結頁面外觀與真實銀行網站完全一樣，但域名為 `bank-secure-verify.com`（視覺欺騙 + 知識缺失）
2. 假投資平台頁面有精美圖表、SSL 憑證、完整客服頁面，但域名並非合法金融機構

---

## 5. 關聯頁面

- 概念頁：[[wiki/concepts/phishing-attacks|釣魚攻擊 (Phishing Attacks)]]
- 概念頁：[[wiki/concepts/bounded-attention|有限注意力 (Bounded Attention)]]
- 任務頁：[[wiki/tasks/check-website-legitimacy|辨識真假網站 SOP]]
- 論文頁：[[wiki/papers/Dhamija2006|Dhamija et al. (2006) — Why Phishing Works]]
