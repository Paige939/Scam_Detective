---
title: "釣魚攻擊 (Phishing Attacks)"
category: "concept"
tags: [phishing, attack-vector, visual-deception, bounded-attention, lack-of-knowledge]
verification_status: "verified"
last_updated: "2026-11-23"
---

# 釣魚攻擊 (Phishing Attacks)

## 1. 定義與本質機制

**釣魚攻擊（Phishing）** 是指攻擊者透過偽造合法網站、電子郵件或訊息，誘騙使用者自願提供帳號密碼、個人資料或金融資訊的欺詐行為。

釣魚攻擊的核心在於**利用人類的認知特性**，而非破解密碼或入侵系統。攻擊者的戰場是「使用者介面」與「人類心理」，而非程式碼本身。

---

## 2. 學術實證：三大攻擊維度框架

[[wiki/papers/Dhamija2006#F5｜三大釣魚攻擊維度（分類框架）|Dhamija, Tygar & Hearst (2006, PDF p.2–3)]] 分析約 200 個真實釣魚攻擊案例後，將攻擊策略歸納為三大維度：

### 2.1 知識缺失 (Lack of Knowledge)
🔬 **研究直接支持** (PDF p.2–3)

攻擊者利用使用者對以下知識的不了解：
- **域名語法**：使用者不清楚如何識別真正的「Registered Domain」，例如誤以為 `www.ebay-members-security.com` 屬於 `ebay.com`
- **SSL 與 HTTPS 的意義**：多數使用者不清楚 SSL 憑證驗證的過程，或誤以為 HTTPS 等於網站合法
- **安全指標的位置意義**：使用者不知道鎖頭圖示只有在瀏覽器 Chrome（網址列區域）出現才有意義，網頁內文的鎖頭圖案任何人都可以放置

### 2.2 視覺欺騙 (Visual Deception)
🔬 **研究直接支持** (PDF p.3)

即使使用者具備基本知識，仍可能被以下手法欺騙：
- **視覺相似域名（Typejacking）**：如 `www.paypai.com`（以小寫 i 取代 l）、`www.paypa1.com`（數字 1 取代字母 l）
- **圖片偽裝超連結**：合法超連結外觀的圖片，實際連結指向惡意網站
- **視窗覆蓋**：在合法網站視窗上方覆蓋一個偽造的瀏覽器視窗
- **完整外觀複製**：複製目標網站所有圖片、Logo、設計，幾乎無法從視覺外觀分辨

### 2.3 有限注意力 (Bounded Attention)
🔬 **研究直接支持** (PDF p.3)

即使使用者具備知識、能分辨視覺差異，仍可能因注意力限制被騙：
- **任務驅動視覺**：人在專注完成主要任務（查帳、購物）時，安全是次要目標，大腦自動忽略周邊安全指標
- **不注意安全指標的缺失**：使用者習慣在有安全指標時注意到它，但不習慣注意「安全指標消失了」

---

## 3. 研究關鍵數據

| 數據 | 說明 | 來源 |
| :--- | :--- | :--- |
| 90.9%（20/22 人） | 最難辨識的單一釣魚網站（Bank of the West 仿冒頁）讓此比例受試者誤判 | [[wiki/papers/Dhamija2006#F1｜最高難度釣魚網站的欺騙率|Dhamija 2006, PDF p.7]] |
| 23%（5/22 人） | 完全不看瀏覽器安全指標的受試者比例 | [[wiki/papers/Dhamija2006#F2a｜不查看瀏覽器安全指標的受試者比例|Dhamija 2006, PDF p.5]] |
| ~40% | 全體受試者的整體平均辨識錯誤率 | [[wiki/papers/Dhamija2006#F2b｜全體受試者的整體平均錯誤率|Dhamija 2006, PDF p.1]] |
| 68%（15/22 人） | 遇到 SSL 憑證警告彈窗時直接點擊確定的比例 | [[wiki/papers/Dhamija2006#F3｜受試者對 SSL 憑證警告的反應|Dhamija 2006, PDF p.9]] |

> ⚠️ **研究限制提醒**：上述數據來自 22 人的小型實驗室研究（2006 年），不可直接外推為現今一般使用者的行為模式。需配合現代瀏覽器環境與更新研究重新詮釋。

---

## 4. 生活典型詐騙情境 (Case Scenarios)

1. **偽冒銀行簡訊**：收到「您的帳戶有異常登入，請立即點擊連結驗證」的簡訊，連結指向外觀與真實銀行一模一樣的釣魚網站（視覺欺騙 + 有限注意力）
2. **假 PayPal 登入頁**：電子郵件中的連結指向 `paypal-signin03.com`，頁面設計與真實 PayPal 完全相同，使用者輸入密碼後被側錄（知識缺失 + 視覺欺騙）
3. **假投資平台**：社群廣告或 LINE 群組傳送「穩賺不賠、獨家投資平台」連結或不明 App，初期小額出金博取信任、後期以保證金或稅金拒絕出金（🏛️ 官方依據：[[wiki/sources/TW165-Dashboard|165 打詐儀錶板]]、[[wiki/sources/FSC-AntiFraud|金管會]]）
4. **釣魚簡訊（Smishing）**：假冒水電費、罰單、eTag 或點數到期簡訊附帶短網址，誘騙填寫信用卡號或 OTP 驗證碼（🏛️ 官方依據：[[wiki/sources/TW165-Portal|165 全民防騙網]]、[[wiki/sources/MODA-AntiScam|數發部 111 短碼簡訊]]）

---

## 5. 關聯頁面

- 概念頁：[[wiki/concepts/visual-deception|視覺欺騙 (Visual Deception)]]
- 概念頁：[[wiki/concepts/bounded-attention|有限注意力 (Bounded Attention)]]
- 任務頁：[[wiki/tasks/check-website-legitimacy|辨識真假網站 SOP]]
- 論文頁：[[wiki/papers/Dhamija2006|Dhamija et al. (2006) — Why Phishing Works]]

---

## 6. 增補：郵件內容層的說服維度（2026-11-23 新增）

上述第 2 節為 Dhamija (2006) 從**使用者介面與知識**角度的三大維度。[[wiki/papers/Ferreira2015#F1｜整合出五項說服原則|Ferreira et al. (2015, PDF p.4–5)]] 另從**訊息內容的說服心理**角度，整合出五項原則（AUTH、SP、LSD、CRC、DIS），詳見 [[wiki/concepts/persuasion-principles|社交工程說服原則]]。

🔬 在 52 封釣魚郵件樣本中，LSD 最常出現，其次是 DIS（[[wiki/papers/Ferreira2015#F2｜釣魚郵件中各原則的出現排名|PDF p.8]]）。

⚠️ **證據界線**：這是**出現頻率**，不是詐騙成功率；多原則同時出現也未被證明效果較強（PDF p.10）。兩篇研究的方法與單位不同，比較見 [[wiki/syntheses/phishing-attack-mechanisms|釣魚攻擊機制綜合分析]]。

- 相關任務：[[wiki/tasks/analyze-suspicious-message|分析可疑訊息的說服手法]]
- 論文頁：[[wiki/papers/Ferreira2015|Ferreira et al. (2015)]]

---

## 7. 增補：自動化偵測與黑名單時間差（Zhang et al. 2007）

[[wiki/papers/Zhang2007#F1｜釣魚網站壽命極短，黑名單存在時間差|Zhang, Hong & Cranor (2007, PDF p.4)]] 指出釣魚網站平均存活僅 4.5 天（實務上常短至數小時），純靠黑名單的工具存在更新空窗期。該研究提出以網頁內容（TF-IDF＋搜尋引擎）結合啟發式特徵的自動偵測原型 CANTINA。詳見 [[wiki/concepts/phishing-detection-heuristics|釣魚網站偵測特徵與黑名單限制]]（含嚴格二元分離說明：演算法實驗指標不可直接轉化為現代網站通用風險分數）。

---

## 8. 增補：嵌入式防詐教育與黃金 8 小時點擊窗口（Kumaraguru et al. 2009）

[[wiki/papers/Kumaraguru2009#F5｜「黃金 8 小時」點擊窗口|Kumaraguru et al. (2009, PDF p.10)]] 在 515 人真實校園實驗中發現，會點擊釣魚連結者近 90% 在寄出後 **8 小時內**已點擊，與 Zhang (2007) 的黑名單滯後現象相呼應。研究亦驗證嵌入式漫畫訓練（PhishGuru）在 Day 0 誤點子樣本中可保留至少 28 天效果，且二次訓練顯著降低輸入個資率。詳見 [[wiki/concepts/embedded-anti-phishing-training|嵌入式防詐訓練與可教時刻]] 與 [[wiki/syntheses/anti-phishing-defenses-and-divergences|反釣魚防禦策略與跨研究結果差異分析]]（含 Dhamija 2006 與 Kumaraguru 2009 年齡結果差異比較）。
