---
title: "HTML 教學簡報證據對照表 (Teaching Evidence Map)"
category: "synthesis"
papers_covered: ["Dhamija2006", "Ferreira2015", "Whitty2013", "Zhang2007", "Kumaraguru2009"]
verification_status: "verified"
last_updated: "2026-11-23"
---

# HTML 教學簡報證據對照表 (Teaching Evidence Map)

本頁面作為 **Loop 4（HTML 互動簡報編譯）** 的唯一核准素材清單。所有出現在 `presentation/index.html` 的知識宣稱、統計數字、官方防詐建議與測驗解析，皆必須能追溯至此表所列之 `verified` Wiki 頁面與原始來源；**嚴禁引入任何未驗證（pending）或缺乏來源之數據**（例如 AI 深度偽造語音／視訊因未納入專屬官方來源，本版簡報不予編造）。

---

## 四單元教學對照矩陣

| 單元與主題 | 學習目標 | 學術／官方來源 | 對應 Wiki 頁面 | 🔬／🏛️ 直接支持之知識（附邊界） | 📚 教學延伸與互動活動 | 驗證狀態 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Unit 1：偵探入院測驗**<br>*你真的能一眼看穿詐騙嗎？* | 1. 破除「我很聰明／年輕懂網路就不會被騙」迷思<br>2. 認識視覺欺騙與有限注意力<br>3. 了解跨研究年齡差異而非武斷定論 | Dhamija et al. (2006, PDF p.1, 3, 5, 7, 9)<br>Kumaraguru et al. (2009, PDF p.3, 8–10) | [[wiki/papers/Dhamija2006|Dhamija2006]]<br>[[wiki/papers/Kumaraguru2009|Kumaraguru2009]]<br>[[wiki/concepts/visual-deception|視覺欺騙]]<br>[[wiki/concepts/bounded-attention|有限注意力]]<br>[[wiki/syntheses/anti-phishing-defenses-and-divergences|跨研究差異]] | 🔬 Dhamija (n=22)：最難仿冒頁讓 90.9%（20/22）誤判（限單一高品質仿冒頁）；23%（5/22）不看安全指標；全體平均錯誤率 ~40%；15/22 直接點過自簽 SSL 警告。<br>🔬 Kumaraguru (CMU N=515；年齡子樣本 N=267)：18–25 歲組 Day 0 誤點率 62.3%，資工系 48.2% 未顯著優於他系。<br>⚠️ 標示兩篇年齡結果為「跨研究結果差異」，不強推一般人口定論。 | 📚 互動活動：**入院直覺快篩測驗**（挑選「你覺得可信的網站訊號」並立即揭曉認知盲點＋研究證據卡片） | ✅ `verified` |
| **Unit 2：解剖心理陷阱**<br>*詐騙者如何一步一步取得你的信任？* | 1. 辨認釣魚訊息五大說服原則（AUTH, SP, LSD, CRC, DIS）<br>2. 理解愛情詐騙情感養成（Grooming）、Foot-in-the-Door、Near-Win 與認知失調<br>3. 認識台灣「假交友結合投資」在地演變 | Ferreira et al. (2015, PDF p.4–5, 8–10)<br>Whitty (2013, PDF p.19–32)<br>165 打詐儀錶板、165 全民防騙網、金管會 | [[wiki/papers/Ferreira2015|Ferreira2015]]<br>[[wiki/papers/Whitty2013|Whitty2013]]<br>[[wiki/concepts/persuasion-principles|說服原則]]<br>[[wiki/concepts/romance-scam-grooming|愛情詐騙與情感養成]]<br>[[wiki/sources/TW165-Dashboard|165 打詐儀錶板]]<br>[[wiki/tasks/analyze-suspicious-message|分析可疑訊息]]<br>[[wiki/tasks/spot-romance-scam|辨識愛情詐騙]] | 🔬 Ferreira (52 封英文郵件)：整合五項說服原則；LSD 最常出現、其次 DIS；原則常成對／三項出現（**頻率≠成功率**）。<br>🔬＋💬 Whitty (N=20 質性訪談)：七階段為質性歸納框架（非所有人皆會走完）；區分受訪者敘述與作者理論詮釋（Near-Win、認知失調、Flow）。<br>🏛️ 165 打詐儀錶板：台灣高發「假交友結合投資」與假投資初期小額出金、後期保證金拒出金。 | 📚 互動活動 1：**可疑訊息線索點擊解剖**（點擊訊息內紅旗片段辨識說服原則）<br>📚 互動活動 2：**愛情詐騙互動時間軸**（在關鍵階段做選擇並看心理機制拆解） | ✅ `verified` |
| **Unit 3：肉眼識破術**<br>*網站看起來很真，就一定是真的嗎？* | 1. 檢查 Registered Domain 與網址品牌一致性<br>2. 破除「有 HTTPS 鎖頭／瀏覽器沒警告就安全」迷思<br>3. 了解搜尋引擎交叉比對的輔助定位與官方查證管道 | Dhamija et al. (2006, PDF p.2–3, 7, 9)<br>Zhang et al. (2007, PDF p.4, 7–9)<br>165 全民防騙網、數發部、金管會 | [[wiki/papers/Dhamija2006|Dhamija2006]]<br>[[wiki/papers/Zhang2007|Zhang2007]]<br>[[wiki/concepts/phishing-detection-heuristics|偵測特徵與黑名單限制]]<br>[[wiki/tasks/check-website-legitimacy|辨識真假網站 SOP]]<br>[[wiki/sources/TW165-Portal|165 全民防騙網]]<br>[[wiki/sources/MODA-AntiScam|數發部]]<br>[[wiki/sources/FSC-AntiFraud|金管會]] | 🔬 Dhamija：HTTPS 只代表傳輸加密不等於網站合法；網頁內文假鎖頭可偽造。<br>🔬 Zhang：釣魚站平均存活 4.5 天（常短至數小時），黑名單有時間差；CANTINA 實驗指標限 2006–2007 英文集，不可轉化為現代通用分數；SEO／高排名被入侵可繞過搜尋假設。<br>🏛️ 官方：政府網站結尾 `.gov.tw`；111 政府專屬短碼簡訊；敏感操作優先手動輸入官方網址或用官方 App；可至 165／數發部查詢網／金管會查核。 | 📚 互動活動：**虛構銀行網站偵探放大鏡**（使用虛構品牌 `SafeTrust Demo Bank`，點擊網址列、鎖頭、登入表單、客服連結找出 4 處可疑訊號，不蒐集任何真實密碼）＋完整 5 步驟查證清單 | ✅ `verified` |
| **Unit 4：即時情境測驗**<br>*現在換你當防詐偵探（8 題綜合演練）* | 1. 運用「可教時刻」即時回饋強化記憶留存<br>2. 綜合演練 8 種台灣生活情境（釣魚簡訊、假網站、假投資群組、假交友、假客服解除分期、說服技巧辨識、可疑網址查證、受騙黃金處置） | Kumaraguru et al. (2009, PDF p.1, 8–10)<br>前述五篇論文＋165／數發部／金管會官方來源 | [[wiki/papers/Kumaraguru2009|Kumaraguru2009]]<br>[[wiki/concepts/embedded-anti-phishing-training|嵌入式防詐訓練]]<br>[[wiki/sources/TW165-Portal|165 全民防騙網]]<br>[[wiki/sources/TW165-Dashboard|165 打詐儀錶板]]<br>[[wiki/sources/MODA-AntiScam|數發部]]<br>[[wiki/sources/FSC-AntiFraud|金管會]] | 🔬 Kumaraguru：Day 0 誤點者於 Day 28 點擊率（單次組 27.0% vs. 控制組 54.4%）；二次訓練降低輸入個資率（Day 0 & 14 皆誤點者：14.7% vs. 31.4%）；90% 點擊發生在寄出後 8 小時內。<br>🏛️ 官方處置：先撥 165 與聯繫銀行圈存止付，保留完整證據後**親赴派出所製作筆錄取得受（處）理案件證明單**。 | 📚 互動活動：**8 題即時情境偵探挑戰**（每題含即時回饋、解析、來源出處、計分、依錯題類型規則產出之個人化學習建議、重新挑戰） | ✅ `verified` |

---

## 視覺素材使用規範（`assets/`，唯讀）

以下 6 張圖片僅作為**教學視覺插圖**，**不得當作學術研究證據**：
- `../assets/01_phishing_sms.png` → Unit 2 / Unit 4 釣魚簡訊情境
- `../assets/02_fake_website.png` → Unit 1 / Unit 3 假網站外觀情境
- `../assets/03_investment_scam.png` → Unit 2 / Unit 4 假投資群組情境
- `../assets/04_social_engineering.png` → Unit 2 心理說服陷阱情境
- `../assets/05_malware.png` → Unit 3 / Unit 4 惡意連結與不明 App 情境
- `../assets/06_shopping_scam.png` → Unit 4 假網拍與解除分期付款情境
