/**
 * Scam Detective — 網路詐騙偵探學院
 * Verified Teaching Content & Quiz Data
 * Every claim is traceable to wiki/syntheses/teaching-evidence-map.md (verification_status: verified).
 * Pending or unverified items are strictly excluded.
 */

window.SCAM_DETECTIVE_DATA = {
  units: [
    { id: "unit1", num: "Unit 01", shortTitle: "偵探入院測驗", title: "你真的能一眼看穿詐騙嗎？" },
    { id: "unit2", num: "Unit 02", shortTitle: "解剖心理陷阱", title: "詐騙者如何一步一步取得你的信任？" },
    { id: "unit3", num: "Unit 03", shortTitle: "肉眼識破術", title: "網站看起來很真，就一定是真的嗎？" },
    { id: "unit4", num: "Unit 04", shortTitle: "即時情境測驗", title: "現在換你當防詐偵探（8 題挑戰）" }
  ],

  unit1Signals: [
    {
      id: "sig_design",
      label: "網站排版精美、有官方 Logo 與 Verisign 認證標章",
      safe: false,
      feedback: "這正是【視覺欺騙】陷阱！在 Dhamija et al. (2006) 的 22 人實驗室研究中，最逼真的單一仿冒銀行網站（含完整外觀與 Verisign 標章連結）就讓 90.9%（20/22 人）誤判為合法網站（注意：此數字僅限該特定高品質仿冒頁，不可泛化為所有釣魚網站成功率）。",
      source: "Dhamija et al. (2006, PDF p.3, p.7)｜wiki/papers/Dhamija2006.md"
    },
    {
      id: "sig_https",
      label: "網址開頭有 https:// 而且網頁內文有鎖頭圖案",
      safe: false,
      feedback: "常見誤解！Dhamija et al. (2006) 指出：HTTPS 只代表「傳輸加密」，不代表網站本身合法；且網頁內文中的鎖頭圖案任何人都能放置，不具安全保證。",
      source: "Dhamija et al. (2006, PDF p.3)｜wiki/papers/Dhamija2006.md"
    },
    {
      id: "sig_ssl_ok",
      label: "跳出憑證警告時先按「確定」略過，趕快登入就好",
      safe: false,
      feedback: "這是【有限注意力】的典型表現。在 Dhamija et al. (2006) 第 20 個自簽 SSL 憑證警告情境中，15/22 人（68%）未閱讀警告就直接點確定。急著完成主要任務時，大腦容易忽略安全警訊。",
      source: "Dhamija et al. (2006, PDF p.3, p.9)｜wiki/concepts/bounded-attention.md"
    },
    {
      id: "sig_manual",
      label: "不憑外觀直覺，而是自行確認官方網域並手動輸入或開啟官方 App",
      safe: true,
      feedback: "正確的偵探直覺！破除「外觀精美＝安全」與「我懂電腦就不會被騙」的過度自信，將敏感操作導向自行確認的官方網址或官方 App，才是可靠習慣。",
      source: "Dhamija (2006, PDF p.2–3)、Zhang (2007, PDF p.9)｜wiki/tasks/check-website-legitimacy.md"
    }
  ],

  unit2Clues: [
    {
      id: "clue_auth",
      principle: "AUTH｜權威（Authority）",
      text: "【中央銀行資安稽核部】",
      explain: "冒用高權威機構名義，利用人們習慣服從專家與官方的心理。Ferreira et al. (2015) 在 52 封英文釣魚郵件中觀察到 AUTH 常出現在資料竊取類郵件；台灣 165 全民防騙網也強調：檢警與政府機關絕不會要求監管帳戶或電話操作匯款。",
      source: "Ferreira et al. (2015, PDF p.4, p.8)；165 全民防騙網"
    },
    {
      id: "clue_lsd",
      principle: "LSD｜喜愛、相似與欺瞞（Liking, Similarity & Deception）",
      text: "親愛的本校師生老朋友您好，我是之前協助您開戶的林專員",
      explain: "刻意營造熟人、親切與熟悉感，降低戒心。在 Ferreira et al. (2015) 的 52 封樣本中，LSD 是最常出現的原則（提醒：出現頻率不等於詐騙成功率）。",
      source: "Ferreira et al. (2015, PDF p.5, p.8, p.10)｜wiki/concepts/persuasion-principles.md"
    },
    {
      id: "clue_dis",
      principle: "DIS｜分散注意力（Distraction）",
      text: "2 小時內未完成驗證將永久凍結帳戶並扣除違約金",
      explain: "透過限時與損失威脅製造焦慮，讓人只盯著「怕損失」而忘記檢查寄件人與網址。在 Ferreira (2015) 樣本中 DIS 出現頻率居次（與 Dhamija 的「有限注意力」相關但不同：前者是攻擊者製造的誘因，後者是人類先天的注意力限制）。",
      source: "Ferreira et al. (2015, PDF p.5, p.8)；Dhamija (2006, PDF p.3)"
    },
    {
      id: "clue_crc",
      principle: "CRC｜承諾、互惠與一致（Commitment, Reciprocation & Consistency）",
      text: "我們已先為您免費升級 VIP 防護，請配合完成最後一步回報",
      explain: "先釋出小恩惠或讓你覺得「已經配合一半」，利用人們欠人情想回報與前後一致的心理推進下一步。",
      source: "Ferreira et al. (2015, PDF p.5, p.8–9)｜wiki/papers/Ferreira2015.md"
    },
    {
      id: "clue_sp",
      principle: "SP｜社會認同（Social Proof）",
      text: "目前已有 98% 用戶完成線上補登",
      explain: "營造「大家都已經做了」的從眾氛圍。有趣的是，Ferreira (2015) 在 52 封郵件樣本中發現 SP 出現最少，但實務上仍可能與其他原則搭配出現。",
      source: "Ferreira et al. (2015, PDF p.4, p.10)｜wiki/papers/Ferreira2015.md"
    }
  ],

  unit2Timeline: [
    {
      stage: "階段 A：理想化假檔案與情感養成（Grooming）",
      story: "你在交友軟體認識一位自稱派駐海外的建築師，條件完美、每天早晚固定問候，三週內就稱你為「靈魂伴侶」，但總有理由無法視訊或見面。",
      choices: [
        {
          text: "覺得對方很真心，每天固定等訊息並分享心事",
          isSafe: false,
          result: "小心進入【情感養成（Grooming）】！Whitty (2013) 訪談 20 名受害者指出，詐騙者刻意利用「身在海外無法見面」爭取時間，透過高頻訊息建立超人際依附，並逐步削弱你與現實親友的交流（註：七階段為質性歸納框架，非每位受害者都會走完所有階段）。"
        },
        {
          text: "察覺「過度理想＋長期無法見面」警訊，保持界線並與親友討論",
          isSafe: true,
          result: "很好的防禦判斷！在情感尚未深陷前引入親友旁觀視角，能有效打破封閉的線上互動環境。"
        }
      ],
      source: "Whitty (2013, PDF p.23–26)｜wiki/concepts/romance-scam-grooming.md"
    },
    {
      stage: "階段 B：試水溫（Foot-in-the-Door）與突發危機／假投資邀約",
      story: "兩個月後，對方先請你幫忙買小額禮物，接著稱「赴機場見你途中發生車禍，急需醫藥費」，或是改推薦「穩賺不賠的專屬投資平台」，並傳來看似真實的機票與公文截圖。",
      choices: [
        {
          text: "對方連機票和文件都寄來了，應該是急難，先匯一半救急",
          isSafe: false,
          result: "這結合了【登門檻效應（Foot-in-the-Door）】、【緊急危機】與【留面子效應（Door-in-the-Face，拒大額改要一半）】！Whitty (2013) 發現受訪者確實也查過登機證與公文，但文件皆可偽造；作者以【認知失調】與【差一點就贏（Near-Win）】詮釋為何受害者容易替破綻找藉口。台灣 165 打詐儀錶板也警示「假交友結合投資」常以初期小額出金誘騙大額匯款。"
        },
        {
          text: "一律拒絕未見面網友的金錢與投資請求，並用 165／金管會查證",
          isSafe: true,
          result: "正確處置！只要未曾真實見面確認身分的網友要求匯款、代收包裹或加入投資平台，立刻停手並至金管會查詢合法業者或撥打 165 查證。"
        }
      ],
      source: "Whitty (2013, PDF p.19–22, p.27–29)；165 打詐儀錶板；金管會"
    },
    {
      stage: "階段 C：二次受害（Re-victimisation）陷阱",
      story: "假設你察覺受騙並封鎖對方，幾天後卻收到自稱「國際追款律師／警方專案小組」的私訊，宣稱已抓到騙徒，只要先繳 2 萬元手續費就能追回全部款項。",
      choices: [
        {
          text: "太好了！先付手續費把被騙的錢拿回來",
          isSafe: false,
          result: "這是典型的【二次受害（Stage 7 Re-victimisation）】！Whitty (2013) 記錄到同夥假冒執法單位要求付費追款的手法；台灣 165 全民防騙網也明確指出，警方辦案絕不會要求先匯款或繳手續費。"
        },
        {
          text: "絕不相信付費追款，保留完整證據直接向 165 與派出所報案",
          isSafe: true,
          result: "完全正確！唯有透過 165 專線與親赴派出所製作筆錄取得「受（處）理案件證明單」，才是合法且安全的求助管道。"
        }
      ],
      source: "Whitty (2013, PDF p.30–31)；165 全民防騙網"
    }
  ],

  unit3Hotspots: [
    {
      id: "hs_domain",
      title: "可疑訊號 1：Registered Domain 與品牌不符",
      detail: "網址看似有 safetrust，但有效頂級網域左邊緊鄰的真正主網域（Registered Domain）是 verify-account.example，根本不屬於官方銀行！此外，網址中多層點號與偽裝前綴也是常見特徵。",
      source: "Dhamija et al. (2006, PDF p.2–3)；Zhang et al. (2007, PDF p.5, p.7)"
    },
    {
      id: "hs_https",
      title: "可疑訊號 2：有 https:// 鎖頭不等於合法網站",
      detail: "攻擊者也能申請 SSL 憑證讓瀏覽器顯示 https://；HTTPS 只保證連線加密，絕不證明網站主人是真銀行。此外，網頁內文放置的「安全認證鎖頭圖案」更可任意偽造。",
      source: "Dhamija et al. (2006, PDF p.3, p.9)｜wiki/tasks/check-website-legitimacy.md"
    },
    {
      id: "hs_blacklist",
      title: "可疑訊號 3：瀏覽器沒跳警告 ≠ 網站安全",
      detail: "Zhang et al. (2007) 指出釣魚網站平均存活僅 4.5 天、實務上常短至數小時；Kumaraguru et al. (2009) 也發現近 90% 點擊發生在寄出後 8 小時內。剛上線的釣魚頁往往還沒進黑名單！",
      source: "Zhang et al. (2007, PDF p.4)；Kumaraguru et al. (2009, PDF p.10)"
    },
    {
      id: "hs_search",
      title: "可疑訊號 4：搜尋比對僅作輔助，敏感操作優先用官方網址／App",
      detail: "CANTINA 的原理啟發我們可用搜尋引擎交叉比對品牌網域，但 Zhang et al. (2007, PDF p.9) 明確提醒攻擊者可透過 SEO 操弄或入侵高排名網站繞過搜尋假設，現代更有假關鍵字廣告。因此搜尋排名、廣告與外觀都不能單獨證明合法——敏感操作請手動輸入官方網址、用書籤或官方 App！",
      source: "Zhang et al. (2007, PDF p.9)｜wiki/concepts/phishing-detection-heuristics.md"
    }
  ],

  quizQuestions: [
    {
      id: "q1",
      category: "釣魚簡訊（Smishing）",
      image: "../assets/01_phishing_sms.png",
      scenario: "你收到一則陌生手機號碼發來的簡訊：「【監理服務通知】您有一筆 1,200 元交通罰鍰逾期未繳，請於今日內點擊 bit.ly/tw-pay-check 完成線上繳費，避免強制執行。」你應該怎麼做？",
      options: [
        "立刻點擊連結並輸入信用卡號與 OTP 簡訊驗證碼繳清",
        "不點擊不明短網址；認明政府專屬短碼「111」與 .gov.tw 官方網域，自行開啟監理服務官方網站或 App 查證",
        "只要點進去看到網頁有 https:// 鎖頭和政府 Logo 就可以安心輸入資料"
      ],
      correctIndex: 1,
      explanation: "台灣政府官方簡訊統一使用「111」專屬短碼並附防偽標記，政府官網結尾為 .gov.tw。切勿點擊不明短網址或在陌生網頁輸入信用卡號與 OTP 驗證碼；HTTPS 與外觀 Logo 皆無法證明網站合法。",
      source: "數發部 111 政府專屬短碼簡訊；165 全民防騙網；Dhamija (2006, PDF p.3)",
      adviceKey: "smishing"
    },
    {
      id: "q2",
      category: "假網站外觀與鎖頭",
      image: "../assets/02_fake_website.png",
      scenario: "同學傳來一個網站要你登入查詢補助，你發現頁面排版極為精美、頁尾有防毒與安全鎖頭圖案，網址列顯示 https://subsidy.gov-verify.example/login。下列判斷何者最正確？",
      options: [
        "網址有 https:// 且頁面有安全鎖頭圖案，代表已經過政府認證",
        "外觀與網頁內文鎖頭皆可偽造，HTTPS 只代表加密；真正的主網域是 gov-verify.example 而非 .gov.tw，應立即關閉網頁",
        "因為瀏覽器沒有跳出紅色危險警告，所以這個網站一定安全"
      ],
      correctIndex: 1,
      explanation: "Dhamija et al. (2006) 顯示高品質仿冒頁可輕易複製外觀與網頁內文假鎖頭，HTTPS 也僅代表傳輸加密；Zhang et al. (2007) 指出新釣魚網站壽命極短，瀏覽器未跳黑名單警告不代表安全。檢查 Registered Domain 才是關鍵。",
      source: "Dhamija (2006, PDF p.3, p.7)；Zhang (2007, PDF p.4)；165 全民防騙網",
      adviceKey: "website"
    },
    {
      id: "q3",
      category: "假投資群組",
      image: "../assets/03_investment_scam.png",
      scenario: "你在社群看到財經名人廣告，加入 LINE「飆股內部群組」後，助理提供專屬投資 App 並說「穩賺不賠、先小額測試馬上可出金」，還要求你匯款到指定「個人帳戶」儲值。哪項做法正確？",
      options: [
        "先試著匯一萬元，如果真的能順利出金就代表平台合法",
        "拒絕匯款與下載不明 App；先至金管會官網查詢是否為合法金融機構，遵守「三不三要」並透過 165 或數發部網路詐騙通報查詢網查證",
        "群組裡幾十個人都在貼獲利對帳單，應該不會全部都是假的"
      ],
      correctIndex: 1,
      explanation: "165 打詐儀錶板與金管會指出，假投資詐騙常以「初期小額出金」與群組暗樁（社會認同）博取信任，要求下載不明 App 或匯入私人帳戶，待投入大筆資金後即以保證金／稅金拒出金。投資前務必查核金管會合法名單。",
      source: "165 打詐儀錶板；金管會防範金融詐騙宣導；Ferreira (2015, PDF p.4)",
      adviceKey: "investment"
    },
    {
      id: "q4",
      category: "假交友詐騙",
      image: "../assets/04_social_engineering.png",
      scenario: "網路認識兩個月、從未見面的海外對象每天早晚噓寒問暖，原本說好週末搭機來台見面，卻突然傳訊說「在機場海關被扣留，急需 6 萬元保證金」，並附上看似官方的扣留單照片。你該如何判斷？",
      options: [
        "對方都傳官方文件照片來了，先幫忙墊付以免見不到面",
        "拒絕匯款！這符合 Whitty (2013) 描述的「長期情感養成＋突發危機＋差一點就贏（Near-Win）」警訊，文件可輕易偽造，應與親友討論並撥打 165 查證",
        "跟對方說我沒那麼多錢，看看能不能先匯一半就好"
      ],
      correctIndex: 1,
      explanation: "Whitty (2013) 訪談發現詐騙者常先進行長期情感養成，再於快見面時製造突發危機（Near-Win）並寄送偽造文件；若改匯一半，正好落入「留面子效應（Door-in-the-Face）」陷阱。",
      source: "Whitty (2013, PDF p.19–20, p.27–29)；165 打詐儀錶板",
      adviceKey: "romance"
    },
    {
      id: "q5",
      category: "假客服與解除分期付款",
      image: "../assets/06_shopping_scam.png",
      scenario: "你上週在網拍買了一本書，今晚接到自稱電商客服的電話，準確說出你的訂單資料，稱「員工誤把你設成批發商，今晚 12 點將連續扣款 12 次」，要你立刻到 ATM 或開網銀輸入「解除代碼」。你應該怎麼做？",
      options: [
        "對方連我買什麼書都知道，一定是真客服，趕快去 ATM 操作",
        "立刻掛斷電話！ATM 與網路銀行絕無「解除分期付款」或「身分驗證」功能，直接撥打 165 或透過原平台官方客服查證",
        "先操作網銀試試看，反正輸入的是「代碼」不是轉帳金額"
      ],
      correctIndex: 1,
      explanation: "165 全民防騙網明確警示：詐騙集團常利用外洩的電商訂單資料取信民眾，所謂「解除代碼」實為轉帳帳號與金額。ATM 與網銀絕對沒有解除分期付款的功能！",
      source: "內政部警政署 165 全民防騙網；165 打詐儀錶板",
      adviceKey: "shopping"
    },
    {
      id: "q6",
      category: "社交工程說服技巧",
      image: "../assets/04_social_engineering.png",
      scenario: "一封聲稱來自「學校資訊中心主管」的信寫道：「同學你好，我們剛幫你保留了免費雲端空間，但限時 1 小時內點此確認帳密，否則帳號將停用。」這封信同時運用了哪幾種 Ferreira (2015) 說服原則？",
      options: [
        "只有「社會認同（Social Proof）」",
        "同時結合「權威（AUTH，主管名義）」、「承諾／互惠（CRC，先給免費空間）」與「分散注意力（DIS，限時停用威脅）」",
        "因為文法通順沒有錯字，所以不屬於社交工程"
      ],
      correctIndex: 1,
      explanation: "Ferreira et al. (2015) 指出，僅靠檢查錯字與文法並未阻止人們受騙，釣魚郵件常將多項說服原則組合出現（如 AUTH-CRC-DIS）。提醒：論文觀察到原則常組合出現，但未測成功率，實務上同時踩到多個心理按鈕時就值得停一步求證。",
      source: "Ferreira et al. (2015, PDF p.2, p.4–5, p.8–10)｜wiki/papers/Ferreira2015.md",
      adviceKey: "persuasion"
    },
    {
      id: "q7",
      category: "可疑網址查證",
      image: "../assets/05_malware.png",
      scenario: "你想登入網路銀行處理轉帳，但不確定簡訊裡的網址是真是假。下列哪一種查證與登入習慣最安全？",
      options: [
        "用搜尋引擎搜尋銀行名稱，直接點擊最上方標示「贊助／廣告」的連結登入",
        "不使用簡訊連結，改由自己事先確認的官方書籤、手動輸入官方網址，或直接開啟從官方商店下載的銀行 App；若有可疑網址可至 165 或數發部網路詐騙通報查詢網查核",
        "只要網址裡沒有出現連字號（-）或 @ 符號，就代表不是釣魚網站"
      ],
      correctIndex: 1,
      explanation: "Zhang et al. (2007) 顯示單看網址是否含 - 或 @ 的鑑別力極低，且搜尋排名可能被 SEO 或入侵網站操弄（現代亦有假冒關鍵字廣告）。搜尋交叉比對僅能作輔助檢查，敏感操作應優先使用自行確認的官方網址或官方 App。",
      source: "Zhang et al. (2007, PDF p.7, p.9)；數發部網路詐騙通報查詢網；165 全民防騙網",
      adviceKey: "website"
    },
    {
      id: "q8",
      category: "受騙後的黃金處置",
      image: "../assets/01_phishing_sms.png",
      scenario: "如果你剛剛不小心在假投資網站完成轉帳，發現異狀懷疑受騙，下列哪一個處置順序最完整且符合台灣官方流程？",
      options: [
        "打完 165 電話就已經完成正式刑事報案，不用再去警察局，順便刪除對話免得難過",
        "立刻撥打 165 並同步聯繫轉出銀行啟動警示帳戶圈存止付 → 完整保留對話截圖、轉帳明細與詐騙網址 → 攜帶身分證件與證據親赴全國任一派出所製作筆錄，取得「受（處）理案件證明單」",
        "先找網路上聲稱「付費幫你駭回款項」的專業團隊處理，再決定要不要報警"
      ],
      correctIndex: 1,
      explanation: "165 全民防騙網與金管會指出：撥打 165 是諮詢與緊急圈存通報，不等於完成刑事報案，仍須攜帶完整證據親赴任一派出所製作筆錄並取得「受（處）理案件證明單」。同時切勿刪除證據或相信付費追款的二次詐騙（Whitty 2013 Stage 7）。",
      source: "165 全民防騙網；金管會；Whitty (2013, PDF p.30–31)",
      adviceKey: "reporting"
    }
  ],

  adviceRules: {
    smishing: "建議複習 Unit 3 與 165／數發部規範：政府官方簡訊認明「111」短碼與 .gov.tw 網域，絕不點擊不明短網址或輸入 OTP 驗證碼。",
    website: "建議複習 Unit 1 與 Unit 3：檢查 Registered Domain，記住 HTTPS 與外觀不能證明合法，敏感操作優先手動輸入官方網址或用官方 App。",
    investment: "建議複習 Unit 2 與金管會「三不三要」：投資前先查金管會合法名單，警惕初期小額出金與私人收款帳戶。",
    romance: "建議複習 Unit 2 愛情詐騙時間軸：留意長期無法見面、情感養成（Grooming）、突發危機與 Near-Win 劇本，務必引入親友視角。",
    shopping: "建議複習 165 全民防騙網鐵律：ATM 與網銀絕無「解除分期付款」功能，網購不私下加 LINE 轉帳。",
    persuasion: "建議複習 Unit 2 五大說服原則（AUTH / SP / LSD / CRC / DIS）：不要只靠找錯字，先問「這則訊息在按我哪個心理按鈕？」",
    reporting: "建議複習台灣官方報案 SOP：第一時間聯繫銀行與撥打 165 圈存，保留完整證據後親赴派出所製作筆錄取得「受（處）理案件證明單」。"
  },

  sourcesCatalog: [
    { type: "學術論文", name: "Dhamija, Tygar & Hearst (2006) — Why Phishing Works", ref: "CHI '06, pp. 581–590 (PDF p.1–10)", wiki: "wiki/papers/Dhamija2006.md", url: "" },
    { type: "學術論文", name: "Ferreira, Coventry & Lenzini (2015) — Principles of Persuasion in Social Engineering and Their Use in Phishing", ref: "HAS '15 (LNCS), pp. 36–47 (PDF p.1–12)", wiki: "wiki/papers/Ferreira2015.md", url: "https://doi.org/10.1007/978-3-319-20376-8_4" },
    { type: "學術論文", name: "Whitty (2013) — The Scammers Persuasive Techniques Model", ref: "British Journal of Criminology, 53(4), pp. 665–684 (PDF p.1–39)", wiki: "wiki/papers/Whitty2013.md", url: "https://doi.org/10.1093/bjc/azt009" },
    { type: "學術論文", name: "Zhang, Hong & Cranor (2007) — CANTINA: A Content-Based Approach to Detecting Phishing Web Sites", ref: "WWW '07, pp. 639–648 (PDF p.1–10)", wiki: "wiki/papers/Zhang2007.md", url: "https://doi.org/10.1145/1242572.1242659" },
    { type: "學術論文", name: "Kumaraguru et al. (2009) — School of Phish: A Real-World Evaluation of Anti-Phishing Training", ref: "SOUPS '09, pp. 1–12 (PDF p.1–12)", wiki: "wiki/papers/Kumaraguru2009.md", url: "https://doi.org/10.1145/1572532.1572536" },
    { type: "台灣官方", name: "內政部警政署 165 全民防騙網", ref: "查閱日期 2026-11-23", wiki: "wiki/sources/TW165-Portal.md", url: "https://165.npa.gov.tw/" },
    { type: "台灣官方", name: "內政部警政署 165 打詐儀錶板", ref: "查閱日期 2026-11-23", wiki: "wiki/sources/TW165-Dashboard.md", url: "https://165dashboard.tw/" },
    { type: "台灣官方", name: "數位發展部：網路詐騙通報查詢網＆111 政府短碼簡訊", ref: "查閱日期 2026-11-23", wiki: "wiki/sources/MODA-AntiScam.md", url: "https://fraudbuster.digiat.org.tw/" },
    { type: "台灣官方", name: "金融監督管理委員會（金管會）防範金融詐騙宣導", ref: "查閱日期 2026-11-23", wiki: "wiki/sources/FSC-AntiFraud.md", url: "https://www.fsc.gov.tw/" }
  ]
};
