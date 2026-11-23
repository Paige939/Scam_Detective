---
title: "社交工程 (Social Engineering)"
category: "concept"
tags: [social-engineering, persuasion, attack-vector, phishing]
verification_status: "verified"
last_updated: "2026-11-23"
---

# 社交工程 (Social Engineering)

## 1. 定義與本質機制

**社交工程**是指利用說服技巧，操縱人們去做某些行動或洩漏機密資訊（Ferreira et al. 2015 引用 Mitnick & Simon 的定義，PDF p.1）。

白話說：駭客不一定要「破解」你的電腦，直接說服你「自己打開門」更省力。

---

## 2. 學術實證與研究觀點

- 🔬 [[wiki/papers/Ferreira2015#1. 核心研究問題 (Research Questions)|Ferreira et al. (2015, PDF p.1–2)]]：社交工程以說服技巧為核心；行銷領域已有成熟的說服研究，但詐騙者實際使用的原則較少被整理。作者因此整合三套分類為五項原則。詳見 [[wiki/concepts/persuasion-principles|社交工程說服原則]]。
- 🔬 [[wiki/papers/Dhamija2006#F5｜三大釣魚攻擊維度（分類框架）|Dhamija et al. (2006, PDF p.2–3)]]：從「使用者介面與知識」角度分析釣魚網站為何有效。與 Ferreira 的「說服內容」角度互補，並非同一框架。
- 🔬 [[wiki/papers/Whitty2013#F1｜七階段「詐騙者說服技術模型」（Scammers Persuasive Techniques Model）|Whitty (2013, PDF p.22–31)]]：從 20 名受害者深度訪談歸納「網路交友愛情詐騙」七階段模型，補上單次釣魚信以外的**長期情感養成（Grooming）**與**二次受害**型態。詳見 [[wiki/concepts/romance-scam-grooming|愛情詐騙與情感養成機制]]。

### ⚠️ 證據界線
本頁定義來自單篇論文引用的既有定義；目前 Wiki 已涵蓋「釣魚網站介面」「釣魚郵件說服」與「網路交友愛情詐騙」三類社交工程脈絡，仍未涵蓋所有型態（如電話詐騙、企業變臉詐騙）。Ferreira 也指出五項原則是否適用於其他社交工程攻擊尚待驗證（PDF p.9）。

---

## 3. 生活典型詐騙情境 (Case Scenarios)

1. 收到偽冒主管的訊息要求緊急轉帳（權威＋時間壓力）。
2. 陌生人透過社群軟體建立好感後推薦「穩賺不賠」假投資群組或 App（🏛️ 官方依據：[[wiki/sources/TW165-Dashboard|165 打詐儀錶板]]）。
3. 假冒電商客服或銀行人員稱訂單誤設分期付款，誘騙操作 ATM／網銀轉帳；或假冒檢警要求「監管帳戶」（🏛️ 官方依據：[[wiki/sources/TW165-Portal|165 全民防騙網]]）。

---

## 4. 關聯任務與防範 SOP

- [[wiki/tasks/analyze-suspicious-message|分析可疑訊息的說服手法]]
- [[wiki/concepts/phishing-attacks|釣魚攻擊 (Phishing Attacks)]]
- [[wiki/syntheses/phishing-attack-mechanisms|釣魚攻擊機制綜合分析]]
