---
title: "有限注意力 (Bounded Attention)"
category: "concept"
tags: [bounded-attention, cognitive-psychology, security-usability, phishing]
verification_status: "verified"
last_updated: "2026-11-23"
---

# 有限注意力 (Bounded Attention)

## 1. 定義與本質機制

**有限注意力（Bounded Attention）** 是釣魚攻擊三大維度之一，指的是人類注意力資源有限，在專注完成主要任務時，無法同時兼顧安全資訊的認知特性。

攻擊者利用的不是使用者的「無知」，而是人類正常的認知架構：**安全是次要目標**，當使用者急著結帳、查帳戶、或回應緊急通知時，大腦優先分配注意力給當下任務，而非周邊的安全指標。

---

## 2. 學術實證與研究觀點

🔬 **研究直接支持**：[[wiki/papers/Dhamija2006#F5｜三大釣魚攻擊維度（分類框架）|Dhamija et al. (2006, PDF p.3)]] 指出兩種有限注意力模式：

1. **不注意安全指標的存在**：使用者即使知道鎖頭圖示的意義，在專注任務時也可能完全掃描不到它
2. **不注意安全指標的缺失**：使用者習慣在有指標時注意到它，但不習慣注意「安全指標消失了」這件事，而釣魚網站正是移除或偽造這些指標

🔬 **實驗數據** (PDF p.5)：
- 22 名受試者中，有 **5 人（23%）** 完全只依賴網頁視覺外觀判斷，從未查看瀏覽器的網址列或安全指標
- 13 人表示從不注意網址列中的「HTTPS」；5 人表示從不看網址列
- 17 人在實驗中未注意到 Firefox 的 SSL 安全指標（含 3 名 Firefox 常規使用者）

---

## 3. 重要認知校正

📚 **教學延伸（基於認知科學原理）**：
「有限注意力」是正常人類認知特性，被詐騙並不代表「粗心大意」或「不夠聰明」。理解這一點有助於：
1. 不對受害者施加不必要的羞恥感
2. 認識到防詐教育應著重於**建立主動確認習慣**，而非單純依賴安全指標的被動視覺觸發

---

## 4. 生活情境範例

1. 急著確認轉帳記錄，快速點開銀行簡訊連結，沒有注意到網址列顯示的是陌生域名
2. 在限時特賣的倒數壓力下，快速輸入信用卡資料，沒有注意到頁面上的鎖頭只在網頁內文而非瀏覽器上方

---

## 5. 關聯頁面

- 概念頁：[[wiki/concepts/phishing-attacks|釣魚攻擊 (Phishing Attacks)]]
- 概念頁：[[wiki/concepts/visual-deception|視覺欺騙 (Visual Deception)]]
- 任務頁：[[wiki/tasks/check-website-legitimacy|辨識真假網站 SOP]]
- 論文頁：[[wiki/papers/Dhamija2006|Dhamija et al. (2006) — Why Phishing Works]]

---

## 6. 增補：與 Ferreira (2015) 的 Distraction 之區別（2026-11-23 新增）

[[wiki/papers/Ferreira2015#F1｜整合出五項說服原則|Ferreira et al. (2015, PDF p.5)]] 的 **Distraction（分散注意力）** 與本頁的 Bounded Attention **相關但不同**：

| | Bounded Attention（Dhamija 2006） | Distraction（Ferreira 2015） |
| :--- | :--- | :--- |
| 本質 | 人類注意力**天生有限** | 攻擊者在訊息中**製造**的誘因 |
| 例子 | 專心結帳時沒看到鎖頭缺失 | 限時、獎金、帳戶即將凍結 |

兩者可能互相加乘，但兩篇論文均未實證，僅為待驗證的教學假說。詳見 [[wiki/syntheses/phishing-attack-mechanisms#4. 概念關聯與界線|綜合分析第 4 節]] 與 [[wiki/concepts/persuasion-principles|社交工程說服原則]]。
