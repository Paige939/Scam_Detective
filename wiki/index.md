---
title: "Scam Detective 知識庫全局索引"
type: "index"
last_updated: "2026-11-23"
---

# Scam Detective — 網路詐騙偵探學院 知識庫導覽索引

歡迎來到 **Scam Detective (網路詐騙偵探學院)** 知識庫。
本索引由 Agent 於每次 Ingest 與 Lint 作業時自動維護，為檢索知識庫核心實體、概念、任務與綜合分析之首要入口。

---

## 1. 學術論文庫 (Papers)
存放每篇學術論文之詳細結構化解讀、研究限制與生活化轉譯。

| 論文代號 | 標題與作者 | 發表場合與年份 | 核心主題 | 驗證狀態 |
| :--- | :--- | :--- | :--- | :--- |
| [[wiki/papers/Dhamija2006\|Dhamija2006]] | Why Phishing Works — Dhamija, Tygar & Hearst | CHI 2006 | 釣魚攻擊成因、視覺欺騙、有限注意力、使用者行為 | ✅ verified |
| [[wiki/papers/Ferreira2015\|Ferreira2015]] | Principles of Persuasion in Social Engineering and Their Use in Phishing — Ferreira, Coventry & Lenzini | HAS 2015 (LNCS), pp.36–47 | 五項說服原則、52 封釣魚郵件原則分布 | ✅ verified |
| [[wiki/papers/Whitty2013\|Whitty2013]] | The Scammers Persuasive Techniques Model — Monica T. Whitty | BJC 2013, 53(4), pp.665–684 | 網路愛情詐騙七階段模型、Grooming、Near-Win、認知失調 | ✅ verified |
| [[wiki/papers/Zhang2007\|Zhang2007]] | CANTINA: A Content-Based Approach to Detecting Phishing Web Sites — Zhang, Hong & Cranor | WWW '07, pp.639–648 | 內容式偵測（TF-IDF）、啟發式特徵、黑名單時間差 | ✅ verified |
| [[wiki/papers/Kumaraguru2009\|Kumaraguru2009]] | School of Phish: A Real-World Evaluation of Anti-Phishing Training — Kumaraguru et al. | SOUPS '09, pp.1–12 | 嵌入式防詐訓練（PhishGuru）、28 天留存、黃金 8 小時、18–25 歲脆弱度 | ✅ verified |

---

## 2. 官方防詐與案例來源 (Sources)
存放台灣 165 全民防騙網、判決案例與官方警訊之萃取紀錄。

| 來源代號 | 標題與發布單位 | 實際查閱日期 | 涵蓋手法與功能 | 驗證狀態 |
| :--- | :--- | :--- | :--- | :--- |
| [[wiki/sources/TW165-Portal\|TW165-Portal]] | 內政部警政署 165 全民防騙網（刑事警察局） | 2026-11-23 | 假冒檢警、假網拍／一頁式、解除分期付款、釣魚簡訊、165 諮詢與派出所報案流程 | ✅ verified |
| [[wiki/sources/TW165-Dashboard\|TW165-Dashboard]] | 內政部警政署 165 打詐儀錶板（警政署） | 2026-11-23 | 假投資群組、假交友結合投資、解除分期付款、最新態樣查詢 | ✅ verified |
| [[wiki/sources/MODA-AntiScam\|MODA-AntiScam]] | 數發部網路詐騙通報查詢網與 111 政府短碼簡訊（數位發展部） | 2026-11-23 | 可疑網址／貼文／LINE ID 查詢下架、111 政府短碼簡訊防偽 | ✅ verified |
| [[wiki/sources/FSC-AntiFraud\|FSC-AntiFraud]] | 金管會防範金融詐騙宣導（金融監督管理委員會） | 2026-11-23 | 合法金融業者查詢、三不三要原則、銀行止付凍結與報案 | ✅ verified |

---

## 3. 核心概念庫 (Concepts)
收錄社交工程、網路釣魚、認知偏誤與心理操縱機制之通俗化定義與學術出處。

| 概念名稱 (中文/英文) | 分類標籤 | 核心學術出處 | 關聯實務任務 | 驗證狀態 |
| :--- | :--- | :--- | :--- | :--- |
| [[wiki/concepts/phishing-attacks\|釣魚攻擊 (Phishing Attacks)]] | attack-vector | Dhamija 2006 | 辨識真假網站 | ✅ verified |
| [[wiki/concepts/visual-deception\|視覺欺騙 (Visual Deception)]] | attack-vector, ui-spoofing | Dhamija 2006 | 辨識真假網站 | ✅ verified |
| [[wiki/concepts/bounded-attention\|有限注意力 (Bounded Attention)]] | cognitive-psychology | Dhamija 2006 | 辨識真假網站 | ✅ verified |
| [[wiki/concepts/persuasion-principles\|社交工程說服原則 (Persuasion Principles)]] | psychology, persuasion | Ferreira 2015 | 分析可疑訊息 | ✅ verified |
| [[wiki/concepts/social-engineering\|社交工程 (Social Engineering)]] | social-engineering | Ferreira 2015、Dhamija 2006、Whitty 2013 | 分析可疑訊息、愛情詐騙警訊 | ✅ verified |
| [[wiki/concepts/romance-scam-grooming\|愛情詐騙與情感養成機制 (Romance Scam & Grooming)]] | romance-scam, grooming | Whitty 2013 | 辨識愛情詐騙警訊 | ✅ verified |
| [[wiki/concepts/phishing-detection-heuristics\|釣魚網站偵測特徵與黑名單限制]] | detection, heuristics | Zhang 2007、Dhamija 2006 | 辨識真假網站 SOP | ✅ verified |
| [[wiki/concepts/embedded-anti-phishing-training\|嵌入式防詐訓練與可教時刻]] | education, embedded-training | Kumaraguru 2009 | 互動情境演練基礎 | ✅ verified |

---

## 4. 防詐實踐任務 (Tasks)
提供一般大眾快速識別詐騙、檢查可疑訊息與應對處置之標準 SOP。

| 任務名稱 | 難易度 | 核心檢查清單摘要 | 對應概念與出處 | 驗證狀態 |
| :--- | :--- | :--- | :--- | :--- |
| [[wiki/tasks/check-website-legitimacy\|辨識真假網站 SOP]] | 初級 | 確認 Registered Domain、不信任外觀、HTTPS ≠ 合法、165／數發部／金管會查證 | 釣魚攻擊、視覺欺騙、有限注意力、165／數發部／金管會 | ✅ verified |
| [[wiki/tasks/analyze-suspicious-message\|分析可疑訊息的說服手法]] | 初級 | 自問五個心理按鈕、111 政府短碼、獨立求證與 165 通報 | 說服原則、社交工程、165／數發部／金管會 | ✅ verified（📚 教學延伸＋🏛️ 官方） |
| [[wiki/tasks/spot-romance-scam\|辨識網路交友愛情詐騙警訊 SOP]] | 初級 | 完美人設、情感養成、假交友投資、防範二次詐騙與報案 | 愛情詐騙與情感養成、說服原則、165 打詐儀錶板 | ✅ verified（📚 教學延伸＋🏛️ 官方） |

---

## 5. 跨文獻綜合分析 (Syntheses)
跨論文、跨手法之橫向對比矩陣、手法演進脈絡與矛盾分歧說明。

| 綜合主題 | 涵蓋文獻 | 核心洞察摘要 | 驗證狀態 |
| :--- | :--- | :--- | :--- |
| [[wiki/syntheses/phishing-attack-mechanisms\|釣魚攻擊機制綜合分析]] | Dhamija2006、Ferreira2015、Whitty2013、Zhang2007、Kumaraguru2009 | 整合介面欺騙、郵件說服、長期關係養成、技術偵測與使用者教育五大維度 | ✅ verified |
| [[wiki/syntheses/anti-phishing-defenses-and-divergences\|反釣魚防禦策略與跨研究結果差異分析]] | Dhamija2006、Zhang2007、Kumaraguru2009、Ferreira2015、Whitty2013 | 技術偵測 vs. 嵌入式教育 vs. 官方查證；並列拆解 Dhamija 與 Kumaraguru 年齡跨研究結果差異 | ✅ verified |
| [[wiki/syntheses/teaching-evidence-map\|HTML 教學簡報證據對照表]] | 全 5 篇論文＋4 項官方來源 | 對應 HTML 四單元學習目標、研究／官方來源、互動設計與驗證狀態（Loop 4 守門表） | ✅ verified |
