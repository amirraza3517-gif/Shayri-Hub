const database = [
                { text: "Ishq ne 'Ghalib' nikamma kar diya,<br>Warna hum bhi aadmi thhe kaam ke.<br>Humko unse wafa ki hai umeed,<br>Jo nahi jaante wafa kya hai. ❤️✨🚶‍♂️", cat: "all" },
    { text: "इश्क़ ने 'ग़ालिब' निकम्मा कर दिया,<br>वरना हम भी आदमी थे काम के।<br>हमको उनसे वफ़ा की है उम्मीद,<br>जो नहीं जानते वफ़ा क्या है। ❤️✨🚶‍♂️", cat: "all" },
    { text: "عشق نے غالب نکما کر دیا<br>ورنہ ہم بھی آدمی تھے کام کے<br>ہم کو ان سے وفا کی ہے امید<br>جو نہیں جانتے وفا کیا ہے۔ ❤️✨🚶‍♂️", cat: "all" },

    { text: "Hazaaron khwahishein aisi ke har khwahish pe dum nikle,<br>Bohot nikle mere armaan lekin phir bhi kam nikle.<br>Mohabbat mein nahi hai farq jeene aur marne ka,<br>Usi ko dekh kar jeete hain jis kaafir pe dum nikle. ✨❤️🥀", cat: "all" },
    { text: "हज़ारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले,<br>बहुत निकले मेरे अरमान लेकिन फिर भी कम निकले।<br>मोहब्बत में नहीं है फ़र्क जीने और मरने का,<br>उसी को देख कर जीते हैं जिस काफ़िर पे दम निकले। ✨❤️🥀", cat: "all" },
    { text: "ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے<br>بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے<br>محبت میں نہیں ہے فرق جینے اور مرنے کا<br>اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔ ✨❤️🥀", cat: "all" },

    { text: "Dard minnat-kash-e-dawa na hua,<br>Main na accha hua, bura na hua.<br>Kitne sheerein hain tere lab ke raqib,<br>Gaaliyan kha ke be-maza na hua. ✨🙌📜", cat: "all" },
    { text: "दर्द मिन्नत-कश-ए-दवा न हुआ,<br>मैं न अच्छा हुआ, बुरा न हुआ।<br>कितने शीरीं हैं तेरे लब कि रक़ीब,<br>गालियाँ खा के बे-मज़ा न हुआ। ✨🙌📜", cat: "all" },
    { text: "درد منت کش دوا نہ ہوا<br>میں نہ اچھا ہوا برا نہ ہوا<br>کتنے شیریں ہیں تیرے لب کہ رقیب<br>گالیاں کھا کے بے مزہ نہ ہوا۔ ✨🙌📜", cat: "all" },

    { text: "Dil se teri nigaah jigar tak utar gayi,<br>Dono ko ik ada mein raza-mand kar gayi.<br>Dekhna takreer ki lazzat ki jo usne kaha,<br>Maine ye jaana ki goya ye bhi mere dil mein hai. ❤️✨📜", cat: "all" },
    { text: "दिल से तेरी निगाह जिगर तक उतर गयी,<br>दोनों को इक अदा में रजामंद कर गयी।<br>देखना तक़रीर की लज्जत कि जो उसने कहा,<br>मैंने ये जाना कि गोया ये भी मेरे दिल में है। ❤️✨📜", cat: "all" },
    { text: "دل سے تیری نگاہ جگر تک اتر گئی<br>دونو کو اک ادا میں رضا مند کر گئی<br>دیکھنا تقریر کی لذت کہ جو اس نے کہا<br>میں نے یہ جانا کہ گویا یہ بھی میرے دل میں ہے۔ ❤️✨📜", cat: "all" },

    { text: "Aah ko chahiye ek umr asar hone tak,<br>Kaun jeeta hai teri zulf ke sar hone tak.<br>Humne maana ki tagaful na karoge lekin,<br>Khak ho jayenge hum tumko khabar hone tak. 🥀⌛✨", cat: "all" },
    { text: "आह को चाहिए एक उम्र असर होने तक,<br>कौन जीता है तेरी ज़ुल्फ़ के सर होने तक।<br>हमने माना कि तगाफुल न करोगे लेकिन,<br>खाक हो जायेंगे हम तुमको खबर होने तक। 🥀⌛✨", cat: "all" },
    { text: "آہ کو چاہیے اک عمر اثر ہونے تک<br>کون جیتا ہے تیری زلف کے سر ہونے تک<br>ہم نے مانا کہ تغافل نہ کرو گے لیکن<br>خاک ہو جائیں گے ہم تم کو خبر ہونے تک۔ 🥀⌛✨", cat: "all" },
            
            { text: "Bas-ki dushwar hai har kaam ka aasan hona,<br>Aadmi ko bhi mayassar nahi insan hona.<br>Wafadari ba-shart-e-ustuwari asl iman hai,<br>Mare jo but-khane mein toh kaabe mein gaado brahman ko. 📜✨🙌", cat: "all" },
    { text: "बस-कि दुश्वार है हर काम का आसाँ होना,<br>आदमी को भी मयस्सर नहीं इंसाँ होना।<br>वफ़ादारी बा-शर्त-ए-उस्त्वारी अस्ल ईमाँ है,<br>मरे जो बुत-ख़ाने में तो काबे में गाड़ो ब्राह्मण को। 📜✨🙌", cat: "all" },
    { text: "بس کہ دشوار ہے ہر کام کا آساں ہونا<br>آدمی کو بھی میسر نہیں انساں ہونا<br>وفاداری بشرط استواری اصل ایماں ہے<br>مرے جو بت خانے میں تو کعبے میں گاڑو برہمن کو۔ 📜✨🙌", cat: "all" },

    { text: "Ibn-e-Maryam hua kare koi,<br>Mere dukh ki dawa kare koi.<br>Bak raha hoon junoon mein kya kya kuch,<br>Kuch na samjhe khuda kare koi. ✨🤲🥀", cat: "all" },
    { text: "इब्न-ए-मर्यम हुआ करे कोई,<br>मेरे दुख की दवा करे कोई।<br>बक रहा हूँ जुनून में क्या क्या कुछ,<br>कुछ न समझे खुदा करे कोई। ✨🤲🥀", cat: "all" },
    { text: "ابن مریم ہوا کرے کوئی<br>میرے دکھ کی دوا کرے کوئی<br>بک رہا ہوں جنوں میں کیا کیا کچھ<br>کچھ نہ سمجھے خدا کرے کوئی۔ ✨🤲🥀", cat: "all" },

    { text: "Na tha kuch toh khuda tha, kuch na hota toh khuda hota,<br>Duboya mujhko hone ne, na hota main toh kya hota.<br>Hui muddat ki 'Ghalib' mar gaya par yaad aata hai,<br>Wo har ek baat par kehna ki yun hota toh kya hota. ✨📜🎭", cat: "all" },
    { text: "न था कुछ तो खुदा था, कुछ न होता तो खुदा होता,<br>डुबोया मुझको होने ने, न होता मैं तो क्या होता।<br>हुई मुद्दत कि 'ग़ालिब' मर गया पर याद आता है,<br>वो हर एक बात पर कहना कि यूँ होता तो क्या होता। ✨📜🎭", cat: "all" },
    { text: "نہ تھا کچھ تو خدا تھا کچھ نہ ہوتا تو خدا ہوتا<br>ڈبویا مجھ کو ہونے نے نہ ہوتا میں تو کیا ہوتا<br>ہوئی مدت کہ غالب مر گیا پر یاد آتا ہے<br>وہ ہر ایک بات پر کہنا کہ یوں ہوتا تو کیا ہوتا۔ ✨📜🎭", cat: "all" },

    { text: "Unke dekhe se jo aa jati hai munh par raunaq,<br>Wo samajhte hain ki bimar ka haal accha hai.<br>Hazaaron khwahishein aisi ke har khwahish pe dum nikle,<br>Bohot nikle mere armaan lekin phir bhi kam nikle. ❤️✨🎭", cat: "all" },
    { text: "उनके देखे से जो आ जाती है मुँह पर रौनक़,<br>वो समझते हैं कि बीमार का हाल अच्छा है।<br>हज़ारों ख्वाहिशें ऐसी कि हर ख्वाहیش पे दम निकले,<br>बहुत निकले मेरे अरमान लेकिन फिर भी कम निकले। ❤️✨🎭", cat: "all" },
    { text: "ان کے دیکھے سے جو آ جاتی ہے منہ پر رونق<br>وہ سمجھتے ہیں کہ بیمار کا حال اچھا ہے<br>ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے<br>بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے۔ ❤️✨🎭", cat: "all" },

    { text: "Dil se teri nigaah jigar tak utar gayi,<br>Dono ko ik ada mein raza-mand kar gayi.<br>Ye na thi hamari kismat ki wisal-e-yaar hota,<br>Agar aur jeete rehte yahi intezaar hota. ❤️📜🥀", cat: "all" },
    { text: "दिल से तेरी निगाह जिगर तक उतर गयी,<br>दोनों को इक अदा में रजामंद कर गयी।<br>ये न थी हमारी किस्मत कि विसाल-ए-यार होता,<br>अगर और जीते रहते यही इंतज़ार होता। ❤️📜🥀", cat: "all" },
    { text: "دل سے تیری نگاہ جگر تک اتر گئی<br>دونوں کو اک ادا میں رضا مند کر گئی<br>یہ نہ تھی ہماری قسمت کہ وصال یار ہوتا<br>اگر اور جیتے رہتے یہی انتظار ہوتا۔ ❤️📜🥀", cat: "all" },
        
        { text: "Mohabbat ki dastan jab likhi jayegi,<br>Wafa ki har rasam wahan nibhayi jayegi.<br>Humne toh tujhe chaha hai ibadat ki tarah,<br>Ab ye duniya humein deewane ke naam se bulayegi. ❤️✨📜", cat: "all" },
    { text: "मोहब्बत की दास्तां जब लिखी जाएगी,<br>वफ़ा की हर रस्म वहां निभाई जाएगी।<br>हमने तो तुझे चाहा है इबादत की तरह,<br>अब ये दुनिया हमें दीवाने के नाम से बुलाएगी। ❤️✨📜", cat: "all" },
    { text: "محبت کی داستاں جب لکھی جائے گی،<br>وفا کی ہر رسم وہاں نبھائی جائے گی۔<br>ہم نے تو تجھے چاہا ہے عبادت کی طرح،<br>اب یہ دنیا ہمیں دیوانے کے نام سے بلائے گی۔ ❤️✨📜", cat: "all" },

    { text: "Tujhe bhulane ki koshish toh bahut ki maine,<br>Magar har baar tera chehra hi nazar aaya.<br>Log kehte hain waqt har zakhm bhar deta hai,<br>Par waqt ne toh teri yaadon ko aur bhi gehra banaya. 💔🥀🍂", cat: "all" },
    { text: "तुझे भुलाने की कोशिश तो बहुत की मैंने,<br>मगर हर बार तेरा चेहरा ही नज़र आया।<br>लोग कहते हैं वक़्त हर ज़ख़्म भर देता है,<br>पर वक़्त ने तो तेरी यादों को और भी गहरा बनाया। 💔🥀🍂", cat: "all" },
    { text: "تجھے بھلانے کی کوشش تو بہت کی میں نے،<br>مگر ہر بار تیرا چہرہ ہی نظر آیا۔<br>لوگ کہتے ہیں وقت ہر زخم بھر دیتا ہے،<br>پر وقت نے تو تیری یادوں کو اور بھی گہرا بنایا। 💔🥀🍂", cat: "all" },

    { text: "Zindagi ki uljhanon mein khud ko bhul gaye hum,<br>Khushi ki talaash mein ghamon se mil gaye hum.<br>Ab toh tanhai hi sabse acchi sathi lagti hai,<br>Mehfilon mein jaakar bhi akele reh gaye hum. 🚶‍♂️🌑🥀", cat: "all" },
    { text: "ज़िन्दगी की उलझनों में खुद को भूल गए हम,<br>खुशी की तलाश में गमों से मिल गए हम।<br>अब तो तन्हाई ही सबसे अच्छी साथी लगती है,<br>महफिलों में जाकर भी अकेले रह गए हम। 🚶‍♂️🌑🥀", cat: "all" },
    { text: "زندگی کی الجھنوں میں خود کو بھول گئے ہم،<br>خوشی کی تلاش میں غموں سے مل گئے ہم۔<br>اب تو تنہائی ہی سب سے اچھی ساتھی لگتی ہے،<br>محفلوں میں جا کر بھی اکیلے رہ گئے ہم। 🚶‍♂️🌑🥀", cat: "all" },

    { text: "Humne toh tumhe us waqt bhi chaha tha,<br>Jab tumhare paas humare liye waqt nahi tha.<br>Ab jab tum laut kar aaye ho humare dar par,<br>Toh dukh hai ki ab humare dil mein wo jazbaat nahi raha. 💯🔥🚬", cat: "all" },
    { text: "हमने तो तुम्हें उस वक़्त भी चाहा था,<br>जब तुम्हारे पास हमारे लिए वक़्त नहीं था।<br>अब जब तुम लौट कर आये हो हमारे दर पर,<br>तो दुःख है कि अब हमारे दिल में वो जज़्बात नहीं रहा। 💯🔥🚬", cat: "all" },
    { text: "ہم نے تو تمہیں اس وقت بھی چاہا تھا،<br>جب تمہارے پاس ہمارے لیے وقت نہیں تھا۔<br>اب جب تم لوٹ کر آئے ہو ہمارے در پر،<br>تو دکھ ہے کہ اب ہمارے دل میں وہ جذبات نہیں رہا۔ 💯🔥🚬", cat: "all" },

    { text: "Tumhari yaad ke sahare ji rahe hain hum,<br>Judai ka zehar pee rahe hain hum.<br>Duniya ko lagta hai khush hain hum,<br>Par andar hi andar mar rahe hain hum. 💔✨🌑", cat: "all" },
    { text: "तुम्हारी याद के सहारे जी रहे हैं हम,<br>जुदाई का ज़हर पी रहे हैं हम।<br>दुनिया को लगता है खुश हैं हम,<br>पर अंदर ही अंदर मर रहे हैं हम। 💔✨🌑", cat: "all" },
    { text: "تمہاری یاد کے سہارے جی رہے ہیں ہم،<br>جدائی کا زہر پی رہے ہیں ہم۔<br>دنیا کو لگتا ہے خوش ہیں ہم،<br>پر اندر ہی اندر مر رہے ہیں ہم۔ 💔✨🌑", cat: "all" },
        { text: "Mana ke naseeb mein mere koi sanam nahi,<br>Phir bhi koi shikwa ya koi gham nahi.<br>Tanha thhe aur tanha hi ji lenge hum,<br>Badnaseeb toh woh hain jinke naseeb mein hum nahi. 😎🔥💯", cat: "all" },
    { text: "माना के नसीब में मेरे कोई सनम नहीं,<br>फिर भी कोई शिकवा या कोई गम नहीं।<br>तन्हा थे और तन्हा ही जी लेंगे हम,<br>बदनसीब तो वो हैं जिनके नसीब में हम नहीं। 😎🔥💯", cat: "all" },
    { text: "مانا کہ نصیب میں میرے کوئی صنم نہیں،<br>پھر بھی کوئی شکوہ یا کوئی غم نہیں۔<br>تنہا تھے اور تنہا ہی جی لیں گے ہم،<br>بدنصیب تو وہ ہیں جن کے نصیب میں ہم نہیں۔ 😎🔥💯", cat: "all" },

    { text: "Ishq ki raahon mein dard toh milna hi thha,<br>Humne toh kismat se ladna hi thha.<br>Ab jo tum chhod gaye ho humein tanha,<br>Toh is tanhai mein humein jalna hi thha. 💔🥀🚶‍♂️", cat: "all" },
    { text: "इश्क़ की राहों में दर्द तो मिलना ही था,<br>हमने तो किस्मत से लड़ना ही था।<br>अब जो तुम छोड़ गए हो हमें तन्हा,<br>तो इस तन्हाई में हमें जलना ही था। 💔🥀🚶‍♂️", cat: "all" },
    { text: "عشق کی راہوں میں درد تو ملنا ہی تھا،<br>ہم نے تو قسمت سے لڑنا ہی تھا۔<br>اب جو تم چھوڑ گئے ہو ہمیں تنہا،<br>تو اس تنہائی میں ہمیں جلنا ہی تھا۔ 💔🥀🚶‍♂️", cat: "all" },

    { text: "Khamosh chehre par hazaron pehre hote hain,<br>Hanste huye logon ke zakhm bade gehre hote hain.<br>Jinse aksar humein koi gila nahi hota,<br>Wahi log dil mein sabse zyada thhehre hote hain. ✨🥀📜", cat: "all" },
    { text: "खामोश चेहरे पर हज़ारों पहरे होते हैं,<br>हँसते हुए लोगों के ज़ख्म बड़े गहरे होते हैं।<br>जिनसे अक्सर हमें कोई गिला नहीं होता,<br>वही लोग दिल में सबसे ज़्यादा ठहरे होते हैं। ✨🥀📜", cat: "all" },
    { text: "خاموش چہرے پر ہزاروں پہرے ہوتے ہیں،<br>ہنستے ہوئے لوگوں کے زخم بڑے گہرے ہوتے ہیں۔<br>جن سے اکثر ہمیں کوئی گلہ نہیں ہوتا،<br>وہی لوگ دل میں سب سے زیادہ ٹھہرے ہوتے ہیں۔ ✨🥀📜", cat: "all" },

    { text: "Tumse milkar humein khuda mil gaya,<br>Jeene ka ek naya rasta mil gaya.<br>Ab maut bhi aaye toh gham nahi humein,<br>Kyunki humein tumhare dil mein thoda sa pata mil gaya. ❤️✨🧿", cat: "all" },
    { text: "तुमसे मिलकर हमें खुदा मिल गया,<br>जीने का एक नया रास्ता मिल गया।<br>अब मौत भी आए तो गम नहीं हमें,<br>क्योंकि हमें तुम्हारे दिल में थोड़ा सा पता मिल गया। ❤️✨🧿", cat: "all" },
    { text: "تم سے مل کر ہمیں خدا مل گیا،<br>جینے کا ایک نیا راستہ مل گیا- <br>اب موت بھی آئے تو غم نہیں ہمیں،<br>کیونکہ ہمیں تمہارے دل میں تھوڑا سا پتا مل گیا۔ ❤️✨🧿", cat: "all" },

    { text: "Bohot dard deti hai wo khamoshi,<br>Jis mein sirf tumhara hi zikr ho.<br>Log kehte hain waqt ke saath gham kam hota hai,<br>Par yahan toh har lamha teri hi fikr ho. 💔🍂🙌", cat: "all" },
    { text: "बहुत दर्द देती है वो खामोशी,<br>जिस में सिर्फ तुम्हारा ही ज़िक्र हो।<br>लोग कहते हैं वक़्त के साथ गम कम होता है,<br>पर यहाँ तो हर लम्हा तेरी ही फ़िक्र हो। 💔🍂🙌", cat: "all" },
    { text: "بہت درد دیتی ہے وہ خاموشی،<br>جس میں صرف تمہارا ہی ذکر ہو۔<br>لوگ کہتے ہیں وقت کے ساتھ غم کم ہوتا ہے،<br>پر یہاں تو ہر لمحہ تیری ہی فکر ہو۔ 💔🍂🙌", cat: "all" },
        
    { text: "Ek raat ek baat likhunga,✨<br>Khud ko daag tujhe saaf likhunga.🌟<br>Haqeeqat mein tu kabhi milega nahi,<br>Ek kitaab mein apni mulaqat likhunga....!", cat: "all" },
    { text: "एक रात एक बात लिखूंगा,✨<br>खुद को दाग तुझे साफ़ लिखूंगा।🌟<br>हकीकत में तू कभी मिलेगा नहीं,<br>एक किताब में अपनी मुलाकात लिखूंगा....!", cat: "all" },
    { text: "ایک رات ایک بات لکھوں گا،✨<br>خود کو داغ تجھے صاف لکھوں گا.🌟<br>حقیقت میں تو کبھی ملے گا نہیں،<br>ایک کتاب میں اپنی ملاقات لکھوں گا....!", cat: "all" },
    
    { text: "Tumhe jo mila hai, Woh kisine khoya hoga,<br>Jiske saath har pal muskurate ho, Koi uske liye roya hoga..<br>Har koi hara hai yahan mohabbat me,<br>Koi uski yaadein leke soya hoga.. 💔💔", cat: "all" },
    { text: "तुम्हें जो मिला है, वह किसीने खोया होगा,<br>जिसके साथ हर पल मुस्कुराते हो, कोई उसके लिए रोया होगा..<br>हर कोई हारा है यहाँ मोहब्बत में,<br>कोई उसकी यादें लेके सोया होगा.. 💔💔", cat: "all" },
    { text: "تمہیں جو ملا ہے، وہ کسی نے کھویا ہوگا،<br>جس کے ساتھ ہر پل مسکراتے ہو، کوئی اس کے لئے رویا ہوگا۔۔<br>ہر کوئی ہارا ہے یہاں محبت میں،<br>کوئی اس کی یادیں لے کے سویا ہوگا۔۔ 💔💔", cat: "all" },

    { text: "Ishq Ka Maza To Intazar Mai Hai,🍂<br>Uski Ek Zhalak To Ek Dedar Me Hai,<br>Bakarar Hokar Dekho Pyar Mai,<br>Saccha Ishq To Ek Tarfa Pyar Me Hai.🤍✨", cat: "all" },
    { text: "इश्क़ का मज़ा तो इंतज़ार में है,🍂<br>उसकी एक झलक तो एक दीदार में है,<br>बेक़रार होकर देखो प्यार में,<br>सच्चा इश्क़ तो एक तरफा प्यार में है।🤍✨", cat: "all" },
    { text: "عشق کا مزہ تو انتظار میں ہے،🍂<br>اس کی ایک جھلک تو ایک دیدار میں ہے،<br>بے قرار ہو کر دیکھو پیار میں،<br>سچا عشق تو ایک طرفہ پیار میں ہے۔🤍✨", cat: "all" },

    { text: "Mein Tod Leta Agar Tum Gulab Hoti,<br>Main Jawab Banta Agar Tum Sawal Hoti,😘<br>Sabhi Jante Hai Ki Mein Nasha Nahi Karta,<br>Fir Bhi Pee Lete Agar Tum Sharaab Hoti...!!😍💏💖", cat: "all" },
    { text: "मैं तोड़ लेता अगर तुम गुलाब होती,<br>मैं जवाब बनता अगर तुम सवाल होती,😘<br>सभी जानते हैं कि मैं नशा नहीं करता,<br>फिर भी पी लेते अगर तुम शराब होती...!!😍💏💖", cat: "all" },
    { text: "میں توڑ لیتا اگر تم گلاب ہوتی،<br>میں جواب بنتا اگر تم سوال ہوتی،😘<br>سبھی جانتے ہیں کہ میں نشہ نہیں کرتا،<br>پھر بھی پی لیتے اگر تم شراب ہوتی...!!😍💏💖", cat: "all" },

    { text: "Duniya ko khushi chahiye aur mujhe har khushi mein tum,<br>Mere doston ko waqt chahiye aur mujhe har waqt tum,<br>Pyase ko kuaa chahiye aur mujhe har dua mein tum<br>Aur mere mummy ko bahu chahiye aur mujhe bahu ke roop mein tum!😘❤️", cat: "all" },
    { text: "दुनिया को ख़ुशी चाहिए और मुझे हर ख़ुशी में तुम,<br>मेरे दोस्तों को वक़्त चाहिए और मुझे हर वक़्त तुम,<br>प्यासे को कुआँ चाहिए और मुझे हर दुआ में तुम<br>और मेरी मम्मी को बहू चाहिए और मुझे बहू के रूप में तुम!😘❤️", cat: "all" },
    { text: "دنیا کو خوشی چاہیے اور مجھے ہر خوشی میں تم،<br>میرے دوستوں کو وقت چاہیے اور مجھے ہر وقت تم،<br>پیاسے کو کنواں چاہیے اور مجھے ہر دعا میں تم<br>اور میری ممی کو بہو چاہیے اور مجھے بہو کے روپ میں تم!😘❤️", cat: "all" },

    { text: "Dil Ka Tamasha Dekha Nahi Jata.🎀🌸<br>Tuta Hua Sitara Dekha Nahi Jata.🥰👀<br>Apni Hasi Ki Sari Khusi Apko De Du.🎀❤️<br>Mujhse Apka Ye Udaas Chehra Dekha Nahi Jata.🥺🎀", cat: "all" },
    { text: "दिल का तमाशा देखा नहीं जाता।🎀🌸<br>टूटा हुआ सितारा देखा नहीं जाता।🥰👀<br>अपनी हंसी की सारी ख़ुशी आपको दे दूँ।🎀❤️<br>मुझसे आपका ये उदास चेहरा देखा नहीं जाता।🥺🎀", cat: "all" },
    { text: "دل کا تماشہ دیکھا نہیں جاتا۔🎀🌸<br>ٹوٹا ہوا ستارہ دیکھا نہیں جاتا۔🥰👀<br>اپنی ہنسی کی ساری خوشی آپ کو دے دوں۔🎀❤️<br>مجھ سے آپ کا یہ اداس چہرہ دیکھا نہیں جاتا۔🥺🎀", cat: "all" },

    { text: "Sacchi Mohabbat Ka Ehsaas Ho Tum,<br>Sari Duniya Se Khaas Ho Tum,<br>Ek Pal Bhi Bhula Nahi Pate Tumko<br>Kyunki Har Pal Dil Ke Pass Ho Tum.❤️💏", cat: "all" },
    { text: "सच्ची मोहब्बत का एहसास हो तुम,<br>सारी दुनिया से ख़ास हो तुम,<br>एक पल भी भुला नहीं पाते तुमको<br>क्योंकि हर पल दिल के पास हो तुम।❤️💏", cat: "all" },
    { text: "سچی محبت کا احساس ہو تم،<br>ساری دنیا سے خاص ہو تم،<br>ایک پل bhi بھلا نہیں پاتے تم کو<br>کیونکہ ہر پل دل کے پاس ہو تم۔❤️💏", cat: "all" },

    { text: "Pyar Ke Panno Se Bhari Kitab Ho Tum,✨🦋😍<br>Rishton Ke Phulo Mai Gulab Ho Tum,<br>Kuch Log Kehte Hai Ke pyar Sacha Nhi Hota,🥀💖<br>Un Logon Ke Har Sawaal Ka Jawab Ho Tum...!!💗🙈", cat: "all" },
    { text: "प्यार के पन्नों से भरी किताब हो तुम,✨🦋😍<br>रिश्तों के फूलों में गुलाब हो तुम,<br>कुछ लोग कहते हैं कि प्यार सच्चा नहीं होता,🥀💖<br>उन लोगों के हर सवाल का जवाब हो तुम...!!💗🙈", cat: "all" },
    { text: "پیار کے پنوں سے بھری کتاب ہو تم،✨🦋😍<br>رشتوں کے پھولوں میں گلاب ہو تم،<br>کچھ لوگ کہتے ہیں کہ پیار سچا نہیں ہوتا،🥀💖<br>ان لوگوں کے ہر سوال کا جواب ہو تم...!!💗🙈", cat: "all" },
        { text: "Mohabbat ka imtihan itna aasan nahi hota,<br>Har koi is khel mein kamyab nahi hota.<br>Mil jaye agar sacha hamsafar zindagi mein,<br>Toh phir usse badhkar koi khush-naseeb nahi hota. ❤️✨🧿", cat: "all" },
    { text: "मोहब्बत का इम्तिहान इतना आसान नहीं होता,<br>हर कोई इस खेल में कामयाब नहीं होता।<br>मिल जाए अगर सच्चा हमसफ़र ज़िन्दगी में,<br>तो फिर उससे बढ़कर कोई खुश-नसीब नहीं होता। ❤️✨🧿", cat: "all" },
    { text: "محبت کا امتحان اتنا آسان نہیں ہوتا،<br>ہر کوئی اس کھیل میں کامیاب نہیں ہوتا۔<br>مل جائے اگر سچا ہمسفر زندگی میں،<br>تو پھر اس سے بڑھ کر کوئی خوش نصیب نہیں ہوتا۔ ❤️✨🧿", cat: "all" },

    { text: "Bohot akela kar diya hai tere khayalon ne,<br>Jawab hi nahi milta tere sawalon ne.<br>Humne toh duniya se ladne ki kasam khayi thi,<br>Par humein toh maar diya tere hi malalon ne. 💔🥀🍂", cat: "all" },
    { text: "बहुत अकेला कर दिया है तेरे खयालों ने,<br>जवाब ही नहीं मिलता तेरे सवालों ने।<br>हमने तो दुनिया से लड़ने की कसम खाई थी,<br>पर हमें तो मार दिया तेरे ही मलालों ने। 💔🥀🍂", cat: "all" },
    { text: "بہت اکیلا کر دیا ہے تیرے خیالوں نے،<br>جواب ہی نہیں ملتا تیرے سوالوں نے۔<br>ہم نے تو دنیا سے لڑنے کی قسم کھائی تھی،<br>پر ہمیں تو مار دیا تیرے ہی ملالوں نے۔ 💔🥀🍂", cat: "all" },

    { text: "Ajeeb hota hai ye ishq ka dastoor bhi,<br>Paas hai phir bhi lagta hai bahut door bhi.<br>Kaise batayein ye dil ka haal tumhein,<br>Hum majboor bhi hain aur thode magroor bhi. ✨🥀📜", cat: "all" },
    { text: "अजीब होता है ये इश्क़ का दस्तूर भी,<br>पास है फिर भी लगता है बहुत दूर भी।<br>कैसे बताएं ये दिल का हाल तुम्हें,<br>हम मजबूर भी हैं और थोड़े मगरूर भी। ✨🥀📜", cat: "all" },
    { text: "عجیب ہوتا ہے یہ عشق کا دستور بھی،<br>پاس ہے پھر بھی لگتا ہے بہت دور بھی۔<br>کیسے بتائیں یہ دل کا حال تمہیں،<br>ہم مجبور بھی ہیں اور تھوڑے مغرور بھی۔ ✨🥀📜", cat: "all" },

    { text: "Tujhse door jaane ka hosla nahi hota,<br>Tera chehra dekhe bina guzaara nahi hota.<br>Kya karein is zalim dil ka mere dost,<br>Jis mein sirf tera naam ho wahan koi aur nahi hota. ❤️✨📜", cat: "all" },
    { text: "तुझसे दूर जाने का हौसला नहीं होता,<br>तेरा चेहरा देखे बिना गुज़ारा नहीं होता।<br>क्या करें इस ज़ालिम दिल का मेरे दोस्त,<br>जिस में सिर्फ तेरा नाम हो वहां कोई और नहीं होता। ❤️✨📜", cat: "all" },
    { text: "تجھ سے دور جانے کا حوصلہ نہیں ہوتا،<br>تیرا چہرہ دیکھے بنا گزارا نہیں ہوتا۔<br>کیا کریں اس ظالم دل کا میرے دوست،<br>جس میں صرف تیرا نام ہو وہاں کوئی اور نہیں ہوتا۔ ❤️✨📜", cat: "all" },

    { text: "Duniya ki is bheed mein hum akele reh gaye,<br>Jo armaan thhe dil mein woh aansu bankar beh gaye.<br>Humne toh sab kuch haar diya tere ishq mein,<br>Par tum toh humein gairon ki tarah alvida keh gaye. 💔🌑🚶‍♂️", cat: "all" },
    { text: "दुनिया की इस भीड़ में हम अकेले रह गए,<br>जो अरमान थे दिल में वो आंसू बनकर बह गए।<br>हमने तो सब कुछ हार दिया तेरे इश्क़ में,<br>पर तुम तो हमें गैरों की तरह अलविदा कह गए। 💔🌑🚶‍♂️", cat: "all" },
    { text: "دنیا کی اس بھیڑ میں ہم اکیلے رہ گئے،<br>جو ارمان تھے دل میں وہ آنسو بن کر بہ گئے۔<br>ہم نے تو سب کچھ ہار دیا تیرے عشق میں،<br>پر تم تو ہمیں غیروں کی طرح الوداع کہہ گئے۔ 💔🌑🚶‍♂️", cat: "all" },
         { text: "Mohabbat ka imtihan har kisi ke bas ka nahi,<br>Ye wo darya hai jiska koi kinara nahi.<br>Humne toh apni zindagi tumhare naam kar di,<br>Magar afsos tumne humein kabhi apna mana nahi. 💔🥀🍂", cat: "all" },
    { text: "मोहब्बत का इम्तिहान हर किसी के बस का नहीं,<br>ये वो दरिया है जिसका कोई किनारा नहीं।<br>हमने तो अपनी ज़िन्दगी तुम्हारे नाम कर दी,<br>मगर अफ़सोस तुमने हमें कभी अपना माना नहीं। 💔🥀🍂", cat: "all" },
    { text: "محبت کا امتحان ہر کسی کے بس کا نہیں،<br>یہ وہ دریا ہے جس کا کوئی کنارہ نہیں۔<br>ہم نے تو اپنی زندگی تمہارے نام کر دی،<br>مگر افسوس تم نے ہمیں کبھی اپنا مانا نہیں۔ 💔🥀🍂", cat: "all" },

    { text: "Kanch ki tarah hote hain hum jaise logon ke dil,<br>Kabhi toot kar bikharte hain toh kabhi chubhte hain.<br>Duniya ko lagta hai humein koi dard nahi hota,<br>Par hum toh tanhai mein har roz bilakhte hain. 🚶‍♂️🌑🥀", cat: "all" },
    { text: "कांच की तरह होते हैं हम जैसे लोगों के दिल,<br>कभी टूट कर बिखरते हैं तो कभी चुभते हैं।<br>दुनिया को लगता है हमें कोई दर्द नहीं होता,<br>पर हम तो तन्हाई में हर रोज़ बिलखते हैं। 🚶‍♂️🌑🥀", cat: "all" },
    { text: "کانچ کی طرح ہوتے ہیں ہم جیسے لوگوں کے دل،<br>کبھی ٹوٹ کر بکھرتے ہیں تو کبھی چبھتے ہیں۔<br>دنیا کو لگتا ہے ہمیں کوئی درد نہیں ہوتا،<br>پر ہم تو تنہائی میں ہر روز بلکھتے ہیں۔ 🚶‍♂️🌑🥀", cat: "all" },

    { text: "Waqt ne kiya hai hum par bada sitam,<br>Zindagi se zyada mile hain humein gham.<br>Humne toh sab kuch haar kar bhi muskura diya,<br>Taki duniya ko lage ki khush hain hum. 😊💔📜", cat: "all" },
    { text: "वक़्त ने किया है हम पर बड़ा सितम,<br>ज़िन्दगी से ज़्यादा मिले हैं हमें गम।<br>हमने तो सब कुछ हार कर भी मुस्कुरा दिया,<br>ताकि दुनिया को लगे कि खुश हैं हम। 😊💔📜", cat: "all" },
    { text: "وقت نے کیا ہے ہم پر بڑا ستم،<br>زندگی سے زیادہ ملے ہیں ہمیں غم۔<br>ہم نے تو سب کچھ ہار کر بھی مسکرا دیا،<br>تاکہ دنیا کو لگے کہ خوش ہیں ہم۔ 😊💔📜", cat: "all" },

    { text: "Sachi mohabbat mein koi shart nahi hoti,<br>Har kisi ki kismat mein ye nemat nahi hoti.<br>Humne toh tumhein bin maange hi paa liya thha,<br>Par shayad hamari chahat mein koi barkat nahi hoti. ❤️🤲🥀", cat: "all" },
    { text: "सच्ची मोहब्बत में कोई शर्त नहीं होती,<br>हर किसी की किस्मत में ये नेमत नहीं होती।<br>हमने तो तुम्हें बिन मांगे ही पा लिया था,<br>पर शायद हमारी चाहत में कोई बरकत नहीं होती। ❤️🤲🥀", cat: "all" },
    { text: "سچی محبت میں کوئی شرط نہیں ہوتی،<br>ہر کسی کی قسمت میں یہ نعمت نہیں ہوتی۔<br>ہم نے تو تمہیں بن مانگے ہی پا لیا تھا،<br>پر شاید ہماری چاہت میں کوئی برکت نہیں ہوتی۔ ❤️🤲🥀", cat: "all" },

    { text: "Ishq ka rog lag gaya hai toh dawa kya karein,<br>Jab dil hi na ho seene mein toh dua kya karein.<br>Hum toh mar chuke hain kab ke tere intezaar mein,<br>Ab ye duniya wale hamara bhala kya karein. 💯🔥🚬", cat: "all" },
    { text: "इश्क़ का रोग लग गया है तो दवा क्या करें,<br>जब दिल ही न हो सीने में तो दुआ क्या करें।<br>हम तो मर चुके हैं कब के तेरे इंतज़ार में,<br>अब ये दुनिया वाले हमारा भला क्या करें। 💯🔥🚬", cat: "all" },
    { text: "عشق کا روگ لگ گیا ہے تو دوا کیا کریں،<br>جب دل ہی نہ ہو سینے میں تو دعا کیا کریں- <br>ہم تو مر چکے ہیں کب کے تیرے انتظار میں،<br>اب یہ دنیا والے ہمارا بھلا کیا کریں۔ 💯🔥🚬", cat: "all" },
         { text: "Humein tumhari har yaad se mohabbat hai,<br>Tumhare sath bitaye har pal se mohabbat hai.<br>Bhale hi tum hamare naseeb mein nahi ho,<br>Magar humein tumhare naam se bhi mohabbat hai. ❤️✨🧿", cat: "all" },
    { text: "हमें तुम्हारी हर याद से मोहब्बत है,<br>तुम्हारे साथ बिताये हर पल से मोहब्बत है।<br>भले ही तुम हमारे नसीब में नहीं हो,<br>मगर हमें तुम्हारे नाम से भी मोहब्बत है। ❤️✨🧿", cat: "all" },
    { text: "ہمیں تمہاری ہر یاد سے محبت ہے،<br>تمہارے ساتھ بتائے ہر پل سے محبت ہے۔<br>بھلے ہی تم ہمارے نصیب میں نہیں ہو،<br>مگر ہمیں تمہارے نام سے بھی محبت ہے۔ ❤️✨🧿", cat: "all" },

    { text: "Bade ajeeb hain ye duniya ke dastoor bhi,<br>Paas hai phir bhi lagta hai bahut door bhi.<br>Kaise batayein ye dil ka haal tumhein,<br>Hum majboor bhi hain aur thode magroor bhi. ✨🥀📜", cat: "all" },
    { text: "बड़े अजीब हैं ये दुनिया के दस्तूर भी,<br>पास है फिर भी लगता है बहुत दूर भी।<br>कैसे बताएं ये दिल का हाल तुम्हें,<br>हम मजबूर भी हैं और थोड़े मगरूर भी। ✨🥀📜", cat: "all" },
    { text: "بڑے عجیب ہیں یہ دنیا کے دستور بھی،<br>پاس ہے پھر بھی لگتا ہے بہت دور بھی۔<br>کیسے بتائیں یہ دل کا حال تمہیں،<br>ہم مجبور بھی ہیں اور تھوڑے مغرور بھی۔ ✨🥀📜", cat: "all" },

    { text: "Tujhe pana meri kismat mein nahi thha,<br>Tujhe chahna meri fitrat mein thha.<br>Ab log puchte hain kyun itne udaas ho,<br>Humne kaha unse jo mera thha hi nahi use khona meri kismat mein thha. 💔🥀🍂", cat: "all" },
    { text: "तुझे पाना मेरी किस्मत में नहीं था,<br>तुझे चाहना मेरी फितरत में था।<br>अब लोग पूछते हैं क्यों इतने उदास हो,<br>हमने कहा उनसे जो मेरा था ही नहीं उसे खोना मेरी किस्मत में था। 💔🥀🍂", cat: "all" },
    { text: "تجھے پانا میری قسمت میں نہیں تھا،<br>تجھے چاہنا میری فطرت میں تھا۔<br>اب لوگ پوچھتے ہیں کیوں اتنے اداس ہو،<br>ہم نے کہا ان سے جو میرا تھا ہی نہیں اسے کھونا میری قسمت میں تھا۔ 💔🥀🍂", cat: "all" },

    { text: "Mohabbat ho ya ibadat, ab dono mein fark nahi raha,<br>Kyunki dono mein sukoon sirf tumhare naam se milta hai.<br>Log kehte hain waqt har zakhm bhar deta hai,<br>Par yahan toh har lamha teri hi fikr mein guzar jata hai. ❤️✨📜", cat: "all" },
    { text: "मोहब्बत हो या इबादत, अब दोनों में फर्क नहीं रहा,<br>क्योंकि दोनों में सुकून सिर्फ तुम्हारे नाम से मिलता है।<br>लोग कहते हैं वक़्त हर ज़ख़्म भर देता है,<br>पर यहाँ तो हर लम्हा तेरी ही फ़िक्र में गुज़र जाता है। ❤️✨📜", cat: "all" },
    { text: "محبت ہو یا عبادت، اب دونوں میں فرق نہیں رہا،<br>کیونکہ دونوں میں سکون صرف تمہارے نام سے ملتا ہے۔<br>لوگ کہتے ہیں وقت ہر زخم بھر دیتا ہے،<br>پر یہاں تو ہر لمحہ تیری ہی فکر میں گزر جاتا ہے۔ ❤️✨📜", cat: "all" },

    { text: "Jaruri nahi ki har rishta nazdeekiyon se hi ho,<br>Kuch rishte door reh kar bhi bahut gehre hote hain.<br>Humne toh mangi thi sirf thodi si wafa unse,<br>Par unke pass dene ko sirf zakhm hi hote hain. 🥀✨🙌", cat: "all" },
    { text: "जरुरी नहीं कि हर रिश्ता नज़दीकियों से ही हो,<br>कुछ रिश्ते दूर रह कर भी बहुत गहरे होते हैं।<br>हमने तो मांगी थी सिर्फ थोड़ी सी वफ़ा उनसे,<br>पर उनके पास देने को सिर्फ ज़ख्म ही होते हैं। 🥀✨🙌", cat: "all" },
    { text: "ضروری نہیں کہ ہر رشتہ نزدیکیوں سے ہی ہو،<br>کچھ رشتے دور رہ کر بھی بہت گہرے ہوتے ہیں۔<br>ہم نے تو مانگی تھی صرف تھوڑی سی وفا ان سے،<br>پر ان کے پاس دینے کو صرف زخم ہی ہوتے ہیں۔ 🥀✨🙌", cat: "all" },
        { text: "Waqt ke saath sab kuch badal jata hai,<br>Purana rishta bhi kahin peeche chhoot jata hai.<br>Humne toh socha thha ki hum hi tere hain,<br>Par ab pta chala ki tera toh har koi ho jata hai. 💯🔥🚬", cat: "all" },
    { text: "वक़्त के साथ सब कुछ बदल जाता है,<br>पुराना रिश्ता भी कहीं पीछे छूट जाता है।<br>हमने तो सोचा था कि हम ही तेरे हैं,<br>पर अब पता चला कि तेरा तो हर कोई हो जाता है। 💯🔥🚬", cat: "all" },
    { text: "وقت کے ساتھ سب کچھ بدل جاتا ہے،<br>پرانا رشتہ بھی کہیں پیچھے چھوٹ جاتا ہے۔<br>ہم نے تو سوچا تھا کہ ہم ہی تیرے ہیں،<br>پر اب پتہ چلا کہ تیرا تو ہر کوئی ہو جاتا ہے۔ 💯🔥🚬", cat: "all" },

    { text: "Suna hai bohot shouk hai tumhein rulaney ka,<br>Chalo humein bhi mauka do azmaney ka.<br>Log toh yun hi badnaam hain mohabbat mein,<br>Asli maza toh hai kisi ko apni jaan bananey ka. ❤️✨🧿", cat: "all" },
    { text: "सुना है बहुत शौक है तुम्हें रुलाने का,<br>चलो हमें भी मौका दो आज़माने का।<br>लोग तो यूँ ही बदनाम हैं मोहब्बत में,<br>असली मज़ा तो है किसी को अपनी जान बनाने का। ❤️✨🧿", cat: "all" },
    { text: "سنا ہے بہت شوق ہے تمہیں رلانے کا،<br>چلو ہمیں بھی موقع دو آزمانے کا۔<br>لوگ تو یوں ہی بدنام ہیں محبت میں،<br>اصلی مزہ تو ہے کسی کو اپنی جان بنانے کا۔ ❤️✨🧿", cat: "all" },

    { text: "Dard hota hai magar jatate nahi hum,<br>Apne dil ke zakhm kisi ko dikhate nahi hum.<br>Zindagi ne sikhaya hai khamosh rehna,<br>Isliye ab kisi ko apni dastan sunate nahi hum. 🚶‍♂️🌑🥀", cat: "all" },
    { text: "दर्द होता है मगर जताते नहीं हम,<br>अपने दिल के ज़ख्म किसी को दिखाते नहीं हम।<br>ज़िन्दगी ने सिखाया है खामोश रहना,<br>इसलिए अब किसी को अपनी दास्तान सुनाते नहीं हम। 🚶‍♂️🌑🥀", cat: "all" },
    { text: "درد ہوتا ہے مگر جتاتے نہیں ہم،<br>اپنے دل کے زخم کسی کو دکھاتے نہیں ہم۔<br>زندگی نے سکھایا ہے خاموش رہنا،<br>اس لیے اب کسی کو اپنی داستاں سناتے نہیں ہم۔ 🚶‍♂️🌑🥀", cat: "all" },

    { text: "Tumse bichadna meri kismat mein thha,<br>Tujhe chahna meri fitrat mein thha.<br>Ab log puchte hain kyun itne udaas ho,<br>Humne kaha unse jo mera thha hi nahi use khona kismat mein thha. 💔🥀🍂", cat: "all" },
    { text: "तुमसे बिछड़ना मेरी किस्मत में था,<br>तुझे चाहना मेरी फितरत में था।<br>अब लोग पूछते हैं क्यों इतने उदास हो,<br>हमने कहा उनसे जो मेरा था ही नहीं उसे खोना किस्मत में था। 💔🥀🍂", cat: "all" },
    { text: "تم سے بچھڑنا میری قسمت میں تھا،<br>تجھے چاہنا میری فطرت میں تھا۔<br>اب لوگ پوچھتے ہیں کیوں اتنے اداس ہو،<br>ہم نے کہا ان سے جو میرا تھا ہی نہیں اسے کھونا قسمت میں تھا۔ 💔🥀🍂", cat: "all" },

    { text: "Tanhai ka alam kuch aisa hai mere dost,<br>Har aahat par lagta hai ki woh aaye hain.<br>Jab kholi ankhein toh pata chala ki,<br>Hum toh unki yaadon mein khud ko hi bhul aaye hain. ✨🥀📜", cat: "all" },
    { text: "तन्हाई का आलम कुछ ऐसा है मेरे दोस्त,<br>हर आहट पर लगता है कि वो आये हैं।<br>जब खोली आँखें तो पता चला कि,<br>हम तो उनकी यादों में खुद को ही भूल आये हैं। ✨🥀📜", cat: "all" },
    { text: "تنہائی کا عالم کچھ ایسا ہے میرے دوست،<br>ہر آہٹ پر لگتا ہے کہ وہ آئے ہیں۔<br>جب کھولی آنکھیں تو پتہ چلا کہ،<br>ہم تو ان کی یادوں میں خود کو ہی بھول آئے ہیں۔ ✨🥀📜", cat: "all" },
         { text: "Bade ajeeb hain ye duniya ke dastoor bhi,<br>Paas hai phir bhi lagta hai bahut door bhi.<br>Kaise batayein ye dil ka haal tumhein,<br>Hum majboor bhi hain aur thode magroor bhi. ✨🥀📜", cat: "all" },
    { text: "बड़े अजीब हैं ये दुनिया के दस्तूर भी,<br>पास है फिर bhi लगता है बहुत दूर भी।<br>कैसे बताएं ये दिल का हाल तुम्हें,<br>हम मजबूर भी हैं और थोड़े मगरूर भी। ✨🥀📜", cat: "all" },
    { text: "بڑے عجیب ہیں یہ دنیا کے دستور بھی،<br>پاس ہے پھر بھی لگتا ہے بہت دور بھی۔<br>کیسے بتائیں یہ دل کا حال تمہیں،<br>ہم مجبور بھی ہیں اور تھوڑے مغرور بھی۔ ✨🥀📜", cat: "all" },

    { text: "Mohabbat ka imtihan itna aasan nahi hota,<br>Har koi is khel mein kamyab nahi hota.<br>Mil jaye agar sacha hamsafar zindagi mein,<br>Toh phir usse badhkar koi khush-naseeb nahi hota. ❤️✨🧿", cat: "all" },
    { text: "मोहब्बत का इम्तिहान इतना आसान नहीं होता,<br>हर कोई इस खेल में कामयाब नहीं होता।<br>मिल जाए अगर सच्चा हमसफ़र ज़िन्दगी में,<br>तो फिर उससे बढ़कर कोई खुश-नसीब नहीं होता। ❤️✨🧿", cat: "all" },
    { text: "محبت کا امتحان اتنا آسان نہیں ہوتا،<br>ہر کوئی اس کھیل میں کامیاب نہیں ہوتا۔<br>مل جائے اگر سچا ہمسفر زندگی میں،<br>تو پھر اس سے بڑھ کر کوئی خوش نصیب نہیں ہوتا۔ ❤️✨🧿", cat: "all" },

    { text: "Tanhai mein aksar tumhari yaad aati hai,<br>Hothon par mere bas tumhari fariyaad aati hai.<br>Duniya ko lagta hai bhul gaye hain hum tumhein,<br>Par har saans mein teri hi khushboo aati hai. 🥀✨🙌", cat: "all" },
    { text: "तन्हाई में अक्सर तुम्हारी याद आती है,<br>होठों पर मेरे बस तुम्हारी फ़रियाद आती है।<br>दुनिया को लगता है भूल गए हैं हम तुम्हें,<br>पर हर सांस में तेरी ही खुशबू आती है। 🥀✨🙌", cat: "all" },
    { text: "تنہائی میں اکثر تمہاری یاد آتی ہے،<br>ہوٹوں پر میرے بس تمہاری فریاد آتی ہے۔<br>دنیا کو لگتا ہے بھول گئے ہیں ہم تمہیں،<br>پر ہر سانس میں تیری ہی خوشبو آتی ہے۔ 🥀✨🙌", cat: "all" },

    { text: "Jaruri nahi har chahat ka anjam mohabbat ho,<br>Kuch rishte adhure hi acche lagte hain.<br>Zindagi ne sikhaya hai sabar karna humein,<br>Warna hum bhi tumhein pane ki zidd rakhte hain. 💯🔥🚬", cat: "all" },
    { text: "जरुरी नहीं हर चाहत का अंजाम मोहब्बत हो,<br>कुछ रिश्ते अधूरे ही अच्छे लगते हैं।<br>ज़िन्दगी ने सिखाया है सबर करना हमें,<br>वरना हम भी तुम्हें पाने की ज़िद्द रखते हैं। 💯🔥🚬", cat: "all" },
    { text: "ضروری نہیں ہر چاہت کا انجام محبت ہو،<br>کچھ رشتے ادھورے ہی اچھے لگتے ہیں۔<br>زندگی نے سکھایا ہے صبر کرنا ہمیں،<br>ورنہ ہم بھی تمہیں پانے کی ضد رکھتے ہیں۔ 💯🔥🚬", cat: "all" },

    { text: "Kismat ne jahan la kar chhoda hai humein,<br>Wahan se na koi rasta hai na koi manzil.<br>Humne toh tumhein apni jaan mana thha,<br>Par tumne toh humein hi be-jaan kar diya. 💔🌑🚶‍♂️", cat: "all" },
    { text: "किस्मत ने जहाँ ला कर छोड़ा है हमें,<br>वहाँ से न कोई रास्ता है न कोई मंज़िल।<br>हमने तो तुम्हें अपनी जान माना था,<br>पर तुमने तो हमें ही बे-जान कर दिया। 💔🌑🚶‍♂️", cat: "all" },
    { text: "قسمت نے جہاں لا کر چھوڑا ہے ہمیں،<br>وہاں سے نہ کوئی راستہ ہے نہ کوئی منزل۔<br>ہم نے تو تمہیں اپنی جان مانا تھا،<br>پر تم نے تو ہمیں ہی بے جان کر دیا۔ 💔🌑🚶‍♂️", cat: "all" },
        { text: "Humein tumhari har yaad se mohabbat hai,<br>Tumhare sath bitaye har pal se mohabbat hai.<br>Bhale hi tum hamare naseeb mein nahi ho,<br>Magar humein tumhare naam se bhi mohabbat hai. ❤️✨🧿", cat: "all" },
    { text: "हमें तुम्हारी हर याद से मोहब्बत है,<br>तुम्हारे साथ बिताये हर पल से मोहब्बत है।<br>भले ही तुम हमारे नसीब में नहीं हो,<br>मगर हमें तुम्हारे नाम से भी मोहब्बत है। ❤️✨🧿", cat: "all" },
    { text: "ہمیں تمہاری ہر یاد سے محبت ہے،<br>تمہارے ساتھ بتائے ہر پل سے محبت ہے۔<br>بھلے ہی تم ہمارے نصیب میں نہیں ہو،<br>مگر ہمیں تمہارے نام سے بھی محبت ہے۔ ❤️✨🧿", cat: "all" },

    { text: "Jaruri nahi har chahat ka anjam mohabbat ho,<br>Kuch rishte adhure hi acche lagte hain.<br>Zindagi ne sikhaya hai sabar karna humein,<br>Warna hum bhi tumhein pane ki zidd rakhte hain. 💯🔥🚬", cat: "all" },
    { text: "जरुरी नहीं हर चाहत का अंजाम मोहब्बत हो,<br>कुछ रिश्ते अधूरे ही अच्छे लगते हैं।<br>ज़िन्दगी ने सिखाया है सबर करना हमें,<br>वरना हम भी तुम्हें पाने की ज़िद्द रखते हैं। 💯🔥🚬", cat: "all" },
    { text: "ضروری نہیں ہر چاہت کا انجام محبت ہو،<br>کچھ رشتے ادھورے ہی اچھے لگتے ہیں۔<br>زندگی نے سکھایا ہے صبر کرنا ہمیں،<br>ورنہ ہم بھی تمہیں پانے کی ضد رکھتے ہیں۔ 💯🔥🚬", cat: "all" },

    { text: "Tanhai mein aksar tumhari yaad aati hai,<br>Hothon par mere bas tumhari fariyaad aati hai.<br>Duniya ko lagta hai bhul gaye hain hum tumhein,<br>Par har saans mein teri hi khushboo aati hai. 🥀✨🙌", cat: "all" },
    { text: "तन्हाई में अक्सर तुम्हारी याद आती है,<br>होठों पर मेरे बस तुम्हारी फ़रियाद आती है।<br>दुनिया को लगता है भूल गए हैं हम तुम्हें,<br>पर हर सांस में तेरी ही खुशबू आती है। 🥀✨🙌", cat: "all" },
    { text: "تنہائی میں اکثر تمہاری یاد آتی ہے،<br>ہوٹوں پر میرے بس تمہاری فریاد آتی ہے۔<br>دنیا کو لگتا ہے بھول گئے ہیں ہم تمہیں،<br>پر ہر سانس میں تیری ہی خوشبو آتی ہے۔ 🥀✨🙌", cat: "all" },

    { text: "Kismat ne jahan la kar chhoda hai humein,<br>Wahan se na koi rasta hai na koi manzil.<br>Humne toh tumhein apni jaan mana thha,<br>Par tumne toh humein hi be-jaan kar diya. 💔🌑🚶‍♂️", cat: "all" },
    { text: "किस्मत ने जहाँ ला कर छोड़ा है हमें,<br>वहाँ से न कोई रास्ता है न कोई मंज़िल।<br>हमने तो तुम्हें अपनी जान माना था,<br>पर तुमने तो हमें ही बे-जान कर दिया। 💔🌑🚶‍♂️", cat: "all" },
    { text: "قسمت نے جہاں لا کر چھوڑا ہے ہمیں،<br>وہاں سے نہ کوئی راستہ ہے نہ کوئی منزل۔<br>ہم نے تو تمہیں اپنی جان مانا تھا،<br>پر تم نے تو ہمیں ہی بے جان کر دیا۔ 💔🌑🚶‍♂️", cat: "all" },

    { text: "Log kehte hain ki badal jati hai duniya,<br>Par sach toh ye hai ki badal jate hain log.<br>Hum toh aaj bhi wahi khade hain jahan thhe,<br>Bas tum hi nikal gaye kisi naye raste ki khoj. ✨🥀📜", cat: "all" },
    { text: "लोग कहते हैं कि बदल जाती है दुनिया,<br>पर सच तो ये है कि बदल जाते हैं लोग।<br>हम तो आज भी वही खड़े हैं जहाँ थे,<br>बस तुम ही निकल गए किसी नए रस्ते की खोज। ✨🥀📜", cat: "all" },
    { text: "لوگ کہتے ہیں کہ بدل جاتی ہے دنیا،<br>پر سچ تو یہ ہے کہ بدل جاتے ہیں لوگ۔<br>ہم تو آج بھی وہی کھڑے ہیں جہاں تھے،<br>بس تم ہی نکل گئے کسی نئے رستے کی کھوج۔ ✨🥀📜", cat: "all" },
         { text: "Mohabbat ki dastan jab likhi jayegi,<br>Wafa ki har rasam wahan nibhayi jayegi.<br>Humne toh tujhe chaha hai ibadat ki tarah,<br>Ab ye duniya humein deewane ke naam se bulayegi. ❤️✨📜", cat: "all" },
    { text: "मोहब्बत की दास्तां जब लिखी जाएगी,<br>वफ़ा की हर रस्म वहां निभाई जाएगी।<br>हमने तो तुझे चाहा है इबादत की तरह,<br>अब ये दुनिया हमें दीवाने के नाम से बुलाएगी। ❤️✨📜", cat: "all" },
    { text: "محبت کی داستاں جب لکھی جائے گی،<br>وفا کی ہر رسم وہاں نبھائی جائے گی۔<br>ہم نے تو تجھے چاہا ہے عبادت کی طرح،<br>اب یہ دنیا ہمیں دیوانے کے نام سے بلائے گی۔ ❤️✨📜", cat: "all" },

    { text: "Tujhe bhulane ki koshish toh bahut ki maine,<br>Magar har baar tera chehra hi nazar aaya.<br>Log kehte hain waqt har zakhm bhar deta hai,<br>Par waqt ne toh teri yaadon ko aur bhi gehra banaya. 💔🥀🍂", cat: "all" },
    { text: "तुझे भुलाने की कोशिश तो बहुत की मैंने,<br>मगर हर बार तेरा चेहरा ही नज़र आया।<br>लोग कहते हैं वक़्त हर ज़ख़्म भर देता है,<br>पर वक़्त ने तो तेरी यादों को और भी गहरा बनाया। 💔🥀🍂", cat: "all" },
    { text: "تجھے بھلانے کی کوشش تو بہت کی میں نے،<br>مگر ہر بار تیرا چہرہ ہی نظر آیا۔<br>لوگ کہتے ہیں وقت ہر زخم بھر دیتا ہے،<br>پر وقت نے تو تیری یادوں کو اور بھی گہرا بنایا। 💔🥀🍂", cat: "all" },

    { text: "Zindagi ki uljhanon mein khud ko bhul gaye hum,<br>Khushi ki talaash mein ghamon se mil gaye hum.<br>Ab toh tanhai hi sabse acchi sathi lagti hai,<br>Mehfilon mein jaakar bhi akele reh gaye hum. 🚶‍♂️🌑🥀", cat: "all" },
    { text: "ज़िन्दगी की उलझनों में खुद को भूल गए हम,<br>खुशी की तलाश में गमों से मिल गए हम।<br>अब तो तन्हाई ही सबसे अच्छी साथी लगती है,<br>महफिलों में जाकर भी अकेले रह गए हम। 🚶‍♂️🌑🥀", cat: "all" },
    { text: "زندگی کی الجھنوں میں خود کو بھول گئے ہم،<br>خوشی کی تلاش میں غموں سے مل گئے ہم۔<br>اب تو تنہائی ہی سب سے اچھی ساتھی لگتی ہے،<br>محفلوں میں جا کر بھی اکیلے رہ گئے ہم۔ 🚶‍♂️🌑🥀", cat: "all" },

    { text: "Humne toh tumhe us waqt bhi chaha tha,<br>Jab tumhare paas humare liye waqt nahi tha.<br>Ab jab tum laut kar aaye ho humare dar par,<br>Toh dukh hai ki ab humare dil mein wo jazbaat nahi raha. 💯🔥🚬", cat: "all" },
    { text: "हमने तो तुम्हें उस वक़्त भी चाहा था,<br>जब तुम्हारे पास हमारे लिए वक़्त नहीं था।<br>अब जब तुम लौट कर आये हो हमारे दर पर,<br>तो दुःख है कि अब हमारे दिल में वो जज़्बात नहीं रहा। 💯🔥🚬", cat: "all" },
    { text: "ہم نے تو تمہیں اس وقت بھی چاہا تھا،<br>جب تمہارے پاس ہمارے لیے وقت نہیں تھا۔<br>اب جب تم لوٹ کر آئے ہو ہمارے در پر،<br>تو دکھ ہے کہ اب ہمارے دل میں وہ جذبات نہیں رہا۔ 💯🔥🚬", cat: "all" },

    { text: "Tumhari yaad ke sahare ji rahe hain hum,<br>Judai ka zehar pee rahe hain hum.<br>Duniya ko lagta hai khush hain hum,<br>Par andar hi andar mar rahe hain hum. 💔✨🌑", cat: "all" },
    { text: "तुम्हारी याद के सहारे जी रहे हैं हम,<br>जुदाई का ज़हर पी रहे हैं हम।<br>दुनिया को लगता है खुश हैं हम,<br>पर अंदर ही अंदर मर रहे हैं हम। 💔✨🌑", cat: "all" },
    { text: "تمہاری یاد کے سہارے جی رہے ہیں ہم،<br>جدائی کا زہر پی رہے ہیں ہم۔<br>دنیا کو لگتا ہے خوش ہیں ہم،<br>پر اندر ہی اندر مر رہے ہیں ہم۔ 💔✨🌑", cat: "all" },
        { text: "Mana ke naseeb mein mere koi sanam nahi,<br>Phir bhi koi shikwa ya koi gham nahi.<br>Tanha thhe aur tanha hi ji lenge hum,<br>Badnaseeb toh woh hain jinke naseeb mein hum nahi. 😎🔥💯", cat: "all" },
    { text: "माना के नसीब में मेरे कोई सनम नहीं,<br>फिर भी कोई शिकवा या कोई गम नहीं।<br>तन्हा थे और तन्हा ही जी लेंगे हम,<br>बदनसीब तो वो हैं जिनके नसीब में हम नहीं। 😎🔥💯", cat: "all" },
    { text: "مانا کہ نصیب میں میرے کوئی صنم نہیں،<br>پھر بھی کوئی شکوہ یا کوئی غم نہیں۔<br>تنہا تھے اور تنہا ہی جی لیں گے ہم،<br>بدنسیب تو وہ ہیں جن کے نصیب میں ہم نہیں۔ 😎🔥💯", cat: "all" },

    { text: "Waqt ne sikhaya hai khamosh rehna,<br>Warna jawab toh hum bhi gajab dete thhe.<br>Logon ne samjha ki hum haar maan gaye,<br>Par hum toh sirf apna sahi waqt dekh rahe thhe. 😎🙌🔥", cat: "all" },
    { text: "वक़्त ने सिखाया है खामोश रहना,<br>वरना जवाब तो हम भी गजब देते थे।<br>लोगों ने समझा कि हम हार मान गए,<br>पर हम तो सिर्फ अपना सही वक़्त देख रहे थे। 😎🙌🔥", cat: "all" },
    { text: "وقت نے سکھایا ہے خاموش رہنا،<br>ورنہ جواب تو ہم بھی غضب دیتے تھے۔<br>لوگوں نے سمجھا کہ ہم ہار مان گئے،<br>پر ہم تو صرف اپنا صحیح وقت دیکھ رہے تھے۔ 😎🙌🔥", cat: "all" },

    { text: "Ishq ka rog lag gaya hai toh dawa kya karein,<br>Jab dil hi na ho seene mein toh dua kya karein.<br>Hum toh mar chuke hain kab ke tere intezaar mein,<br>Ab ye duniya wale hamara bhala kya karein. 💔🌑🥀", cat: "all" },
    { text: "इश्क़ का रोग लग गया है तो दवा क्या करें,<br>जब दिल ही न हो सीने में तो दुआ क्या करें।<br>हम तो मर चुके हैं कब के तेरे इंतज़ार में,<br>अब ये दुनिया वाले हमारा भला क्या करें। 💔🌑🥀", cat: "all" },
    { text: "عشق کا روگ لگ گیا ہے تو دوا کیا کریں،<br>جب دل ہی نہ ہو سینے میں تو دعا کیا کریں- <br>ہم تو مر چکے ہیں کب کے تیرے انتظار میں،<br>اب یہ دنیا والے ہمارا بھلا کیا کریں۔ 💔🌑🥀", cat: "all" },

    { text: "Jaruri nahi har chahat ka anjam mohabbat ho,<br>Kuch rishte adhure hi acche lagte hain.<br>Zindagi ne sikhaya hai sabar karna humein,<br>Warna hum bhi tumhein pane ki zidd rakhte hain. ✨🥀📜", cat: "all" },
    { text: "जरुरी नहीं हर चाहत का अंजाम मोहब्बत हो,<br>कुछ रिश्ते अधूरे ही अच्छे लगते हैं।<br>ज़िन्दगी ने सिखाया है सबर करना हमें,<br>वरना हम भी तुम्हें पाने की ज़िद्द रखते हैं। ✨🥀📜", cat: "all" },
    { text: "ضروری نہیں ہر چاہت کا انجام محبت ہو،<br>کچھ رشتے ادھورے ہی اچھے لگتے ہیں۔<br>زندگی نے سکھایا ہے صبر کرنا ہمیں،<br>ورنہ ہم بھی تمہیں پانے کی ضد رکھتے ہیں۔ ✨🥀📜", cat: "all" },

    { text: "Duniya ki is bheed mein hum akele reh gaye,<br>Jo armaan thhe dil mein woh aansu bankar beh gaye.<br>Humne toh sab kuch haar diya tere ishq mein,<br>Par tum toh humein gairon ki tarah alvida keh gaye. 💔🍂🙌", cat: "all" },
    { text: "दुनिया की इस भीड़ में हम अकेले रह गए,<br>जो अरमान थे दिल में वो आंसू बनकर बह गए।<br>हमने तो सब कुछ हार दिया तेरे इश्क़ में,<br>पर तुम तो हमें गैरों की तरह अलविदा कह गए। 💔🍂🙌", cat: "all" },
    { text: "دنیا کی اس بھیڑ میں ہم اکیلے رہ گئے،<br>جو ارمان تھے دل میں وہ آنسو بن کر بہ گئے۔<br>ہم نے تو سب کچھ ہار دیا تیرے عشق میں،<br>پر تم تو ہمیں غیروں کی طرح الوداع کہہ گئے۔ 💔🍂🙌", cat: "all" },
        { text: "Mohabbat ka imtihan har kisi ke bas ka nahi,<br>Ye wo darya hai jiska koi kinara nahi.<br>Humne toh apni zindagi tumhare naam kar di,<br>Magar afsos tumne humein kabhi apna mana nahi. 💔🥀🍂", cat: "sad" },
    { text: "मोहब्बत का इम्तिहान हर किसी के बस का नहीं,<br>ये वो दरिया है जिसका कोई किनारा नहीं।<br>हमने तो अपनी ज़िन्दगी तुम्हारे नाम कर दी,<br>मगर अफ़सोस तुमने हमें कभी अपना माना नहीं। 💔🥀🍂", cat: "sad" },
    { text: "محبت کا امتحان ہر کسی کے بس کا نہیں،<br>یہ وہ دریا ہے جس کا کوئی کنارہ نہیں۔<br>ہم نے تو اپنی زندگی تمہارے نام کر دی،<br>مگر افسوس تم نے ہمیں کبھی اپنا مانا نہیں۔ 💔🥀🍂", cat: "sad" },
    { text: "Hazaaron khwahishein aisi ke har khwahish pe dum nikle,<br>Bohot nikle mere armaan lekin phir bhi kam nikle.<br>Nikalna khuld se aadam ka sunte aaye thhe lekin,<br>Bohot be-abru hokar tere kooche se hum nikle. 🍷📜🥀", cat: "sad" },
    { text: "हज़ारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले,<br>बहुत निकले मेरे अरमान लेकिन फिर भी कम निकले।<br>निकलना खुल्द से आदम का सुनते आए थे लेकिन,<br>बहुत बे-आबरू होकर तेरे कूचे से हम निकले। 🍷📜🥀", cat: "sad" },
    { text: "ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے<br>بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے<br>نکلنا خلد سے آدم کا سنتے آئے تھے لیکن<br>بہت بے آبرو ہو کر تیرے کوچے سے ہم نکلے۔ 🍷📜🥀", cat: "sad" },

    { text: "Dil-e-nadan tujhe hua kya hai,<br>Aakhir is dard ki dawa kya hai.<br>Humko unse wafa ki hai umeed,<br>Jo nahi jaante wafa kya hai. 💔🥀📜", cat: "sad" },
    { text: "दिल-ए-नादान तुझे हुआ क्या है,<br>आख़िर इस दर्द की दवा क्या है।<br>हमको उनसे वफ़ा की है उम्मीद,<br>जो नहीं जानते वफ़ा क्या है। 💔🥀📜", cat: "sad" },
    { text: "دلِ ناداں تجھے ہوا کیا ہے<br>آخر اس درد کی دوا کیا ہے<br>ہم کو ان سے وفا کی ہے امید<br>جو نہیں جانتے وفا کیا ہے۔ 💔🥀📜", cat: "sad" },

    { text: "Ishq ne 'Ghalib' nikamma kar diya,<br>Warna hum bhi aadmi thhe kaam ke.<br>Rahiye ab aisi jagah chalkar jahan koi na ho,<br>Humsukhan koi na ho aur ham-zaban koi na ho. 🚶‍♂️🌑🍷", cat: "sad" },
    { text: "इश्क़ ने 'ग़ालिब' निकम्मा कर दिया,<br>वरना हम भी आदमी थे काम के।<br>रहिए अब ऐसी जगह चलकर जहाँ कोई न हो,<br>हमसुख़न कोई न हो और हम-ज़बाँ कोई न हो। 🚶‍♂️🌑🍷", cat: "sad" },
    { text: "عشق نے غالب نکما کر دیا<br>ورنہ ہم بھی آدمی تھے کام کے<br>رہیے اب ایسی جگہ چل کر جہاں کوئی نہ ہو<br>ہمسخن کوئی نہ ہو اور ہمزباں کوئی نہ ہو۔ 🚶‍♂️🌑🍷", cat: "sad" },

    { text: "Zindagi se yahi gila hai mujhe,<br>Tu bohot der se mila hai mujhe.<br>Sharm, dehshat, jhijhak, pareshani,<br>Naap tole ke mujhse milta hai. 🥀🍂📜", cat: "sad" },
    { text: "ज़िन्दगी से यही गिला है मुझे,<br>तू बहुत देर से मिला है मुझे।<br>शर्म, दहशत, झिझक, परेशानी,<br>नाप तोले के मुझसे मिलता है। 🥀🍂📜", cat: "sad" },
    { text: "زندگی سے یہی گلہ ہے مجھے<br>تو بہت دیر سے ملا ہے مجھے<br>شرم، دہشت، جھجھک، پریشانی<br>ناپ تولے کے مجھ سے ملتا ہے۔ 🥀🍂📜", cat: "sad" },

    { text: "Duniya ke sitam yaad na apni hi wafa yaad,<br>Ab mujhko nahi kuch bhi tere bina yaad.<br>Ek dhund sa hai chaaro taraf aur kuch nahi,<br>Bas ik teri judaai hai aur maut ki sada yaad. 🌑💔🥀", cat: "sad" },
    { text: "दुनिया के सितम याद न अपनी ही वफ़ा याद,<br>अब मुझको नहीं कुछ भी तेरे बिना याद।<br>एक धुंध सा है चारों तरफ और कुछ नहीं,<br>बस इक तेरी जुदाई है और मौत की सदा याद। 🌑💔🥀", cat: "sad" },
    { text: "دنیا کے ستم یاد نہ اپنی ہی وفا یاد<br>اب مجھ کو نہیں کچھ بھی تیرے بنا یاد<br>ایک دھند سا ہے چاروں طرف اور کچھ نہیں<br>بس اک تیری جدائی ہے اور موت کی صدا یاد۔ 🌑💔🥀", cat: "sad" },
        
    { text: "Kanch ki tarah hote hain hum jaise logon ke dil,<br>Kabhi toot kar bikharte hain toh kabhi chubhte hain.<br>Duniya ko lagta hai humein koi dard nahi hota,<br>Par hum toh tanhai mein har roz bilakhte hain. 🚶‍♂️🌑🥀", cat: "sad" },
    { text: "कांच की तरह होते हैं हम जैसे लोगों के दिल,<br>कभी टूट कर बिखरते हैं तो कभी चुभते हैं।<br>दुनिया को लगता है हमें कोई दर्द नहीं होता,<br>पर हम तो तन्हाई में हर रोज़ बिलखते हैं। 🚶‍♂️🌑🥀", cat: "sad" },
    { text: "کانچ کی طرح ہوتے ہیں ہم جیسے لوگوں کے دل،<br>کبی ٹوٹ کر بکھرتے ہیں تو کبھی چبھتے ہیں۔<br>دنیا کو لگتا ہے ہمیں کوئی درد نہیں ہوتا،<br>پر ہم تو تنہائی میں ہر روز بلکھتے ہیں۔ 🚶‍♂️🌑🥀", cat: "sad" },

    { text: "Tujhe bhulane ki koshish toh bahut ki maine,<br>Magar har baar tera chehra hi nazar aaya.<br>Log kehte hain waqt har zakhm bhar deta hai,<br>Par waqt ne toh teri yaadon ko aur bhi gehra banaya. 💔🍂🙌", cat: "sad" },
    { text: "तुझे भुलाने की कोशिश तो बहुत की मैंने,<br>मगर हर बार तेरा चेहरा ही नज़र आया।<br>लोग कहते हैं वक़्त हर ज़ख़्म भर देता है,<br>पर वक़्त ने तो तेरी यादों को और भी गहरा बनाया। 💔🍂🙌", cat: "sad" },
    { text: "تجھے بھلانے کی کوشش تو بہت کی میں نے،<br>مگر ہر بار تیرا چہرہ ہی نظر آیا۔<br>لوگ کہتے ہیں وقت ہر زخم بھر دیتا ہے،<br>پر وقت نے تو تیری یادوں کو اور بھی گہرا بنایا۔ 💔🍂🙌", cat: "sad" },

    { text: "Zindagi ki uljhanon mein khud ko bhul gaye hum,<br>Khushi ki talaash mein ghamon se mil gaye hum.<br>Ab toh tanhai hi sabse acchi sathi lagti hai,<br>Mehfilon mein jaakar bhi akele reh gaye hum. 🚶‍♂️🌑🥀", cat: "sad" },
    { text: "ज़िन्दगी की उलझनों में खुद को भूल गए हम,<br>खुशी की तलाश में गमों से मिल गए हम।<br>अब तो तन्हाई ही सबसे अच्छी साथी लगती है,<br>महफिलों में जाकर भी अकेले रह गए हम। 🚶‍♂️🌑🥀", cat: "sad" },
    { text: "زندگی کی الجھنوں میں خود کو بھول گئے ہم،<br>خوشی کی تلاش میں غموں سے مل گئے ہم۔<br>اب تو تنہائی ہی سب سے اچھی ساتھی لگتی ہے،<br>محفلوں میں جا کر بھی اکیلے رہ گئے ہم۔ 🚶‍♂️🌑🥀", cat: "sad" },

    { text: "Duniya ki is bheed mein hum akele reh gaye,<br>Jo armaan thhe dil mein woh aansu bankar beh gaye.<br>Humne toh sab kuch haar diya tere ishq mein,<br>Par tum toh humein gairon ki tarah alvida keh gaye. 💔✨📜", cat: "sad" },
    { text: "दुनिया की इस भीड़ में हम अकेले रह गए,<br>जो अरमान थे दिल में वो आंसू बनकर बह गए।<br>हमने तो सब कुछ हार दिया तेरे इश्क़ में,<br>पर तुम तो हमें गैरों की तरह अलविदा कह गए। 💔✨📜", cat: "sad" },
    { text: "دنیا کی اس بھیڑ میں ہم اکیلے رہ گئے،<br>جو ارمان تھے دل میں وہ آنسو بن کر بہ گئے۔<br>ہم نے تو سب کچھ ہار دیا تیرے عشق میں،<br>پر تم تو ہمیں غیروں کی طرح الوداع کہہ گئے۔ 💔✨📜", cat: "sad" },
        { text: "Humne toh wahan bhi sabar kiya hai,<br>Jahan hamara rona banta tha.<br>Ab tum kya humein dard doge,<br>Humne toh usse bhi dhoka khaya hai jo hamari jaan banta tha. 💔🌑🥀", cat: "sad" },
    { text: "हमने तो वहां भी सबर किया है,<br>जहाँ हमारा रोना बनता था।<br>अब तुम क्या हमें दर्द दोगे,<br>हमने तो उससे भी धोखा खाया है जो हमारी जान बनता था। 💔🌑🥀", cat: "sad" },
    { text: "ہم نے تو وہاں بھی صبر کیا ہے،<br>جہاں ہمارا رونا بنتا تھا۔<br>اب تم کیا ہمیں درد دو گے،<br>ہم نے تو اس سے بھی دھوکہ کھایا ہے جو ہماری جان بنتا تھا۔ 💔🌑🥀", cat: "sad" },

    { text: "Zindagi mein ek waqt aisa bhi aata hai,<br>Jab rone ke liye bhi jagah dhoondni padti hai.<br>Log kehte hain ki bhula do use,<br>Par koi ye nahi batata ki bhulaya kaise jata hai. 🚶‍♂️🌑💔", cat: "sad" },
    { text: "ज़िन्दगी में एक वक़्त ऐसा भी आता है,<br>जब रोने के लिए भी जगह ढूँढनी पड़ती है।<br>लोग कहते हैं कि भुला दो उसे,<br>पर कोई ये नहीं बताता कि भुलाया कैसे जाता है। 🚶‍♂️🌑💔", cat: "sad" },
    { text: "زندگی میں ایک وقت ایسا بھی آتا ہے،<br>جب رونے کے لیے بھی جگہ ڈھونڈنی پڑتی ہے۔<br>لوگ کہتے ہیں کہ بھلا دو اسے،<br>پر کوئی یہ نہیں بتاتا کہ بھلایا کیسے جاتا ہے۔ 🚶‍♂️🌑💔", cat: "sad" },

    { text: "Ab hum kisi ko accha lagne ke liye nahi jeete,<br>Humne toh khud ko hi mita diya kisi ki khatir.<br>Tumhe lagta hai hum badal gaye hain,<br>Sach toh ye hai ki hum thak gaye hain. 💯🌑🚬", cat: "sad" },
    { text: "अब हम किसी को अच्छा लगने के लिए नहीं जीते,<br>हमने तो खुद को ही मिटा दिया किसी की खातिर।<br>तुम्हें लगता है हम बदल गए हैं,<br>सच तो ये है कि हम थक गए हैं। 💯🌑🚬", cat: "sad" },
    { text: "اب ہم کسی کو اچھا لگنے کے لیے نہیں جیتے،<br>ہم نے تو خود کو ہی مٹا دیا کسی کی خاطر۔<br>تمہیں لگتا ہے ہم بدل گئے ہیں،<br>سچ تو یہ ہے کہ ہم تھک گئے ہیں۔ 💯🌑🚬", cat: "sad" },

    { text: "Mera gham toh sirf khuda jaanta hai,<br>Baki duniya ne toh sirf meri muskurahat dekhi hai.<br>Jo shaqs meri har baat par hansta tha,<br>Aaj wahi shaqs raaton ko chup kar rota hai. 💔🍂🚬", cat: "sad" },
    { text: "मेरा गम तो सिर्फ खुदा जानता है,<br>बाकी दुनिया ने तो सिर्फ मेरी मुस्कुराहट देखी है।<br>जो शख्स मेरी हर बात पर हँसता था,<br>आज वही शख्स रातों को छुप कर रोता है। 💔🍂🚬", cat: "sad" },
    { text: "میرا غم تو صرف خدا جانتا ہے،<br>باقی دنیا نے تو صرف میری مسکراہٹ دیکھی ہے۔<br>جو شخص میری ہر بات پر ہنستا تھا،<br>آج وہی شخص راتوں کو چھپ کر روتا ہے۔ 💔🍂🚬", cat: "sad" },

    { text: "Ab kisi se koi ummeed nahi rahi,<br>Bas ye zindagi hai jo guzar rahi hai.<br>Mout toh ek din aani hi hai sabko,<br>Par ye roz-roz ki maut humein maar rahi hai. 🌑🥀🚶‍♂️", cat: "sad" },
    { text: "अब किसी से कोई उम्मीद नहीं रही,<br>बस ये ज़िन्दगी है जो गुज़र रही है।<br>मौत तो एक दिन आनी ही है सबको,<br>पर ये रोज़-रोज़ की मौत हमें मार रही है। 🌑🥀🚶‍♂️", cat: "sad" },
    { text: "اب کسی سے کوئی امید نہیں رہی،<br>بس یہ زندگی ہے جو گزر رہی ہے۔<br>موت تو ایک دن آنی ہی ہے سب کو،<br>پر یہ روز روز کی موت ہمیں مار رہی ہے۔ 🌑🥀🚶‍♂️", cat: "sad" },
        { text: "Humne toh us shaqs ko bhi haste huye dekha hai,<br>Jo andar se poori tarah mar chuka tha.<br>Ab tum kya humein dard ki baatein sunate ho,<br>Humne toh apna sukoon apne hi hathon se dafan kiya hai. 💔🌑🥀", cat: "sad" },
    { text: "हमने तो उस शख्स को भी हँसते हुए देखा है,<br>जो अंदर से पूरी तरह मर चुका था।<br>अब तुम क्या हमें दर्द की बातें सुनाते हो,<br>हमने तो अपना सुकून अपने ही हाथों से दफन किया है। 💔🌑🥀", cat: "sad" },
    { text: "ہم نے تو اس شخص کو بھی ہنستے ہوئے دیکھا ہے،<br>جو اندر سے پوری طرح مر چکا تھا۔<br>اب تم کیا ہمیں درد کی باتیں سناتے ہو،<br>ہم نے تو اپنا سکون اپنے ہی ہاتھوں سے دفن کیا ہے۔ 💔🌑🥀", cat: "sad" },

    { text: "Sabse zyada dard tab hota hai,<br>Jab bin galti ke koi humein chhod deta hai.<br>Ab toh tanhai se itni dosti ho gayi hai,<br>Ki ab koi apna bhi aaye toh darr lagta hai. 🚶‍♂️🌑💔", cat: "sad" },
    { text: "सबसे ज़्यादा दर्द तब होता है,<br>जब बिन गलती के कोई हमें छोड़ देता है।<br>अब तो तन्हाई से इतनी दोस्ती हो गयी है,<br>कि अब कोई अपना भी आए तो डर लगता है। 🚶‍♂️🌑💔", cat: "sad" },
    { text: "سب سے زیادہ درد تب ہوتا ہے،<br>جب بن غلطی کے کوئی ہمیں چھوڑ دیتا ہے۔<br>اب تو تنہائی سے اتنی دوستی ہو گئی ہے،<br>کہ اب کوئی اپنا بھی آئے تو ڈر لگتا ہے۔ 🚶‍♂️🌑💔", cat: "sad" },

    { text: "Main wo shaqs nahi jo dukh mein ro pade,<br>Main wo shaqs hoon jo takleef mein muskura deta hai.<br>Tujhe lagta hai main khush hoon tere bina,<br>Kabhi akele mein aakar dekh main roz khud ko mita deta hoon. 💯🌑🚬", cat: "sad" },
    { text: "मैं वो शख्स नहीं जो दुःख में रो पड़े,<br>मैं वो शख्स हूँ जो तकलीफ में मुस्कुरा देता है।<br>तुझे लगता है मैं खुश हूँ तेरे बिना,<br>कभी अकेले में आकर देख मैं रोज़ खुद को मिटा देता हूँ। 💯🌑🚬", cat: "sad" },
    { text: "میں وہ شخص نہیں جو دکھ میں رو پڑے،<br>میں وہ شخص ہوں جو تکلیف میں مسکرا دیتا ہے۔<br>تجھے لگتا ہے میں خوش ہوں تیرے بنا،<br>کبھی اکیلے میں آکر دیکھ میں روز خود کو مٹا دیتا ہوں۔ 💯🌑🚬", cat: "sad" },

    { text: "Kismat par itna bharosa toh nahi thha humein,<br>Par tumne toh dhoka dekar yakeen dila diya.<br>Ab koi fark nahi padta kisi ke saath hone se,<br>Tumne toh mujhe jeete ji marna sikha diya. 💔🍂🚬", cat: "sad" },
    { text: "किस्मत पर इतना भरोसा तो नहीं था हमें,<br>पर तुमने तो धोखा देकर यकीन दिला दिया।<br>अब कोई फर्क नहीं पड़ता किसी के साथ होने से,<br>तुमने तो मुझे जीते जी मरना सिखा दिया। 💔🍂🚬", cat: "sad" },
    { text: "قسمت پر اتنا بھروسہ تو نہیں تھا ہمیں،<br>پر تم نے تو دھوکہ دے کر یقین دلا دیا۔<br>اب کوئی فرق نہیں پڑتا کسی کے ساتھ ہونے سے،<br>تم نے تو مجھے جیتے جی مرنا سکھا دیا۔ 💔🍂🚬", cat: "sad" },

    { text: "Ab na koi umeed hai na koi intezaar,<br>Bas ek thakan hai jo saath nahi chhodti.<br>Humne toh mangi thhi thodi si wafa tumse,<br>Par tumne toh hamari har khushi hi tod di. 🌑🥀🚶‍♂️", cat: "sad" },
    { text: "अब न कोई उम्मीद है न कोई इंतज़ार,<br>बस एक थकान है जो साथ नहीं छोड़ती।<br>हमने तो मांगी थी थोड़ी सी वफ़ा तुमसे,<br>पर तुमने तो हमारी हर खुशी ही तोड़ दी। 🌑🥀🚶‍♂️", cat: "sad" },
    { text: "اب نہ کوئی امید ہے نہ کوئی انتظار،<br>بس ایک تھکان ہے جو ساتھ نہیں چھوڑتی۔<br>ہم نے تو مانگی تھی تھوڑی سی وفا تم سے،<br>پر تم نے تو ہماری ہر خوشی ہی توڑ دی۔ 🌑🥀🚶‍♂️", cat: "sad" },
         { text: "Use lagta hai ki uske bina main mar jaunga,<br>Use kya pata ki usne mujhe jeena sikhaya hai.<br>Ab jo kabhi darta tha andheron se akele mein,<br>Aaj usi shaqs ne tanhai mein ghar banaya hai. 🌑🚶‍♂️🥀", cat: "sad" },
    { text: "उसे लगता है कि उसके बिना मैं मर जाऊंगा,<br>उसे क्या पता कि उसने मुझे जीना सिखाया है।<br>अब जो कभी डरता था अंधेरों से अकेले में,<br>आज उसी शख्स ने तन्हाई में घर बनाया है। 🌑🚶‍♂️🥀", cat: "sad" },
    { text: "اسے لگتا ہے کہ اس کے بنا میں مر جاؤں گا،<br>اسے کیا پتا کہ اس نے مجھے جینا سکھایا ہے۔<br>اب جو کبھی ڈرتا تھا اندھیروں سے اکیلے میں،<br>آج اسی شخص نے تنہائی میں گھر بنایا ہے۔ 🌑🚶‍♂️🥀", cat: "sad" },

    { text: "Tumhare baad ye dil ab kisi se milta nahi,<br>Is ujde huye baagh mein ab koi phool khilta nahi.<br>Mohabbat toh mil jati hai bazaar mein hazaron ko,<br>Par jo tumse mili thi, wo sukoon ab milta nahi. 💔🥀🍂", cat: "sad" },
    { text: "तुम्हारे बाद ये दिल अब किसी से मिलता नहीं,<br>इस उजड़े हुए बाग़ में अब कोई फूल खिलता नहीं।<br>मोहब्बत तो मिल जाती है बाज़ार में हज़ारों को,<br>पर जो तुमसे मिली थी, वो सुकून अब मिलता नहीं। 💔🥀🍂", cat: "sad" },
    { text: "تمہارے بعد یہ دل اب کسی سے ملتا نہیں،<br>اس اجڑے ہوئے باغ میں اب کوئی پھول کھلتا نہیں۔<br>محبت تو مل جاتی ہے بازار میں ہزاروں کو،<br>پر جو تم سے ملی تھی، وہ سکون اب ملتا نہیں۔ 💔🥀🍂", cat: "sad" },

    { text: "Main us shaqs se kya shikayat karun,<br>Jisne meri khamoshi ko bhi kabhi samjha nahi.<br>Hum toh uske liye sab kuch harne ko taiyar thhe,<br>Par usne kabhi humein apna mana hi nahi. 🚶‍♂️🌑🚫", cat: "sad" },
    { text: "मैं उस शख्स से क्या शिकायत करूं,<br>जिसने मेरी खामोशी को भी कभी समझा नहीं।<br>हम तो उसके लिए सब कुछ हारने को तैयार थे,<br>पर उसने कभी हमें अपना माना ही नहीं। 🚶‍♂️🌑🚫", cat: "sad" },
    { text: "میں اس شخص سے کیا شکایت کروں،<br>جس نے میری خاموشی کو بھی کبھی سمجھا نہیں۔<br>ہم تو اس کے لیے سب کچھ ہارنے کو تیار تھے،<br>پر اس نے کبھی ہمیں اپنا مانا ہی نہیں۔ 🚶‍♂️🌑🚫", cat: "sad" },

    { text: "Zindagi bhar bas yahi galti karte rahe hum,<br>Gairon ki raahon mein khud ko bhulate rahe hum.<br>Jinhe hamari qadar ka ek zarra tak na thha,<br>Unke liye saari raat palak bhigate rahe hum. 🌑💔🥀", cat: "sad" },
    { text: "ज़िन्दगी भर बस यही गलती करते रहे हम,<br>गैरों की राहों में खुद को भुलाते रहे हम।<br>जिन्हें हमारी क़दर का एक ज़र्रा तक न था,<br>उनके लिए सारी रात पलक भिगाते रहे हम। 🌑💔🥀", cat: "sad" },
    { text: "زندگی بھر بس یہی غلطی کرتے رہے ہم،<br>غیروں کی راہوں میں خود کو بھلاتے رہے ہم۔<br>جنہیں ہماری قدر کا ایک ذرہ تک نہ تھا،<br>ان کے لیے ساری رات پلک بھگاتے رہے ہم۔ 🌑💔🥀", cat: "sad" },

    { text: "Ab toh aaine se bhi darr lagne laga hai,<br>Is chehre par kisi aur ka asar lagne laga hai.<br>Kal tak jo apni muskurahat par naaz karte thhe,<br>Aaj unhe hi ye duniya ek khandar lagne laga hai. 🪞💔🌑", cat: "sad" },
    { text: "अब तो आईने से भी डर लगने लगा है,<br>इस चेहरे पर किसी और का असर लगने लगा है।<br>कल तक जो अपनी मुस्कुराहट पर नाज़ करते थे,<br>आज उन्हें ही ये दुनिया एक खंडहर लगने लगा है। 🪞💔🌑", cat: "sad" },
    { text: "اب تو آئینے سے بھی ڈر لگنے لگا ہے،<br>اس چہرے پر کسی اور کا اثر لگنے لگا ہے۔<br>کل تک جو اپنی مسکراہٹ پر ناز کرتے تھے،<br>آج انہیں ہی یہ دنیا ایک کھنڈر لگنے لگا ہے۔ 🪞💔🌑", cat: "sad" },
        
    { text: "Hathiyar toh sirf shauk ke liye rakhe karte hain, khauf ke liye toh bas naam hi kaafi hai. 😎", cat: "all" },
    { text: "Waqt aane do beta, jawab bhi denge aur hisaab bhi lenge! 🔥", cat: "all" },
    { text: "King is always a King, whether in a palace or on the street.", cat: "all" },
    { text: "Sher apna rasta khud banate hain, bheed mein toh kutte chala karte hain.", cat: "all" },
    { text: "Hamari shakhsiyat ka andaza tum kya lagaoge, hum toh unke bhi baap hain.", cat: "all" },
    { text: "Hum thode khamosh kya hue, kutton ne samjha ki jungle hamara hai.", cat: "all" },
    { text: "Mera attitude meri nishani hai, tu bata tujhe koi pareshani hai?", cat: "all" },
    { text: "Kismat ki gulami nahi karta main, main apni mehnat ka nawab hoon.", cat: "all" },
    { text: "Style mera, Character mera, Life meri, Fir dukh tujhe kyun ho raha hai?", cat: "all" },
    { text: "Pechaan toh sabse hai hamari, magar bharosa sirf khud par hai.", cat: "all" },
    { text: "Duniya kya sochegi, ye main nahi sochta.", cat: "all" },
    { text: "Jhukna wahan chahiye jahan apni galti ho, har jagah jhukna buz-dili hai.", cat: "all" },
    { text: "Mohabbat ki dastan mein har mod par dhokha tha, humne toh unhe apna samjha.", cat: "sad" },
    { text: "Zindagi ne thokar maari toh samajh aaya, apno ne hi rasta badal liya.", cat: "sad" },
    { text: "Tanhai ne sikhaya hai ki khud se bada koi sathi nahi.", cat: "sad" },
    { text: "Dard wahi dete hain jinhe hum apna hone ka haq dete hain.", cat: "sad" },
    { text: "Sometimes, silence is the loudest scream of pain.", cat: "sad" },
    { text: "Kitna ajeeb hai na, dil todne wala hi aksar dil mein rehta hai.", cat: "sad" },
    { text: "Waqt ne dikha di sabki asliyat, warna hum toh sabko apna hi samjhte the.", cat: "sad" },
    { text: "Rone se koi apna nahi hota, jo apna hota hai wo rone hi nahi deta.", cat: "sad" },
    { text: "Ab toh akelepan se dosti ho gayi hai, ab mehfilon ki zarurat nahi rahi.", cat: "sad" },
    { text: "Dard ki bhi apni ek adaa hai, ye sahne walon par hi fida hai.", cat: "sad" },
    { text: "Bhoolna seekh lijiye sahab, duniya bhi wahi karti hai aapke sath.", cat: "sad" },
    { text: "Khamoshi hi behtar hai, kyunki baaton se log aksar rooth jate hain.", cat: "sad" },
    { text: "Teri aankhon ke darya mein doob jane ka dil karta hai...", cat: "all" },
    { text: "True love never dies, it only gets stronger with time.", cat: "all" },
    { text: "Teri muskurahat hi meri har thakan ka ilaaj hai.", cat: "all" },
    { text: "Tumhare saath bitaya har lamha mere liye ek haseen khwab jaisa hai.", cat: "all" },
    { text: "Ishq mein marne se behtar hai, kisi ke liye jeena seekh lo.", cat: "all" },
    { text: "Meri har saans mein tera hi naam hai, meri har khushi tere hi naam hai.", cat: "all" },
    { text: "Dil ki dhadkan ho tum, meri har dua ka asar ho tum.", cat: "all" },
    { text: "Tera sath hai toh mujhe kisi aur cheez ki zarurat nahi.", cat: "all" },
    { text: "Har pal tumhara khayal aata hai, ye ishq nahi toh aur kya hai?", cat: "all" },
    { text: "Mohabbat toh tumse tab bhi rahegi, jab tum hamare nahi rahoge.", cat: "all" },
    { text: "Dosti wo nahi hoti jo jaan deti hai, dosti wo hoti hai jo muskurahat deti hai.", cat: "all" },
    { text: "Sacha dost wahi hai jo tab sath de jab poori duniya khilaf ho.", cat: "all" },
    { text: "Dushman se darna seekho magar dost se hamesha hoshiyar raho.", cat: "all" },
    { text: "Dosti mein sukoon hai, mohabbat mein junoon hai.", cat: "all" },
    { text: "Kaminey doston ke bina zindagi bilkul pheeki hai.", cat: "all" },
    { text: "Dost banaye nahi jate, dost toh mil jate hain kismat se.", cat: "all" },
    { text: "Zindagi mein ek aisa dost zaroor hona chahiye jo bina kahe sab samajh jaye.", cat: "all" },
    { text: "Dost toh bohot mile par tum jaisa koi kamina nahi mila.", cat: "all" },
    { text: "Log mohabbat mein rote hain, hum dosti mein haste hain.", cat: "all" },
    { text: "Zindagi jeene ke do hi tarike hain, jo pasand hai use hasil kar lo ya jo hasil hai use pasand kar lo.", cat: "all" },
    { text: "Waqt sabko milta hai zindagi badalne ke liye, par zindagi dobara nahi milti waqt badalne ke liye.", cat: "all" },
    { text: "Khush rehna hai toh umeed sirf khud se rakho, dusron se nahi.", cat: "all" },
    { text: "Mushkilein unhi ke sath aati hain jo unhe jhelne ki taqat rakhte hain.", cat: "all" },
    { text: "Zindagi mein hamesha muskuraate raho, kyunki rone se dukh kam nahi hota.", cat: "all" },
    { text: "Insaan ki asliyat tab pata chalti hai jab uske paas dene ke liye kuch na ho.", cat: "all" },
    { text: "Manzil mile na mile ye toh muqaddar ki baat hai, hum koshish bhi na karein ye toh galat baat hai.", cat: "all" },
    { text: "Choti si zindagi hai, har baat par khush raho.", cat: "all" },
    { text: "Mehnat itni khamoshi se karo ki kamyabi shor macha de.", cat: "all" },
    { text: "Sabse bada rog, kya kahenge log.", cat: "all" },
    { text: "Haar tab hoti hai jab maan liya jata hai, jeet tab hoti hai jab thaan liya jata hai.", cat: "all" },
    { text: "Sabar rakho, har cheez apne waqt par hi behtar lagti hai.", cat: "all" },
    { text: "Girna bhi accha hai, aukaat ka pata chalta hai.", cat: "all" },
    { text: "Raaste kabhi khatm nahi hote, bas log himmat haar jate hain.", cat: "all" },
    { text: "Jo log shor machate hain bheed mein, wo bheed hi ban kar reh jate hain.", cat: "all" },
    { text: "Kamyabi ka junoon sar par hona chahiye, phir mushkilein khud ba khud darr jayengi.", cat: "all" },
    { text: "Hum un logon mein se nahi jo dushmani mein bhi ijaat dhoondte hain, hum toh wo hain jo dushman ko dekh kar hi rasta badal lete hain.", cat: "all" },
    { text: "Zindagi mein itna bada bano ki log tumhe 'Block' nahi 'Search' karein.", cat: "all" },
    { text: "Agar koi kahe ki tum badal gaye ho, toh samajh lena ki uski zarurat khatm ho gayi hai.", cat: "all" },
    { text: "Ishq mein dhokha isliye milta hai kyunki hum log 'Character' se zyada 'Face' par marte hain.", cat: "sad" },
    { text: "Hunar toh sab mein hota hai, bas kisi ka chhap jata hai aur kisi ka chhip jata hai.", cat: "all" },
    { text: "Mohabbat aur dosti mein wahi log tikte hain, jinhe rishton ki kadar hoti hai.", cat: "all" },
    { text: "Ek ladki ne mujhse pucha ki tum itne khush kaise rehte ho, maine kaha dusron se umeed kam rakhta hoon.", cat: "all" },
    { text: "Single rehne ka bhi apna maza hai, na kisi ke 'Online' hone ka darr na kisi ke 'Last Seen' ki chinta.", cat: "all" },
    { text: "Log kahte hain dukh bura hota hai, magar jab bhi aata hai kuch seekha kar jata hai.", cat: "sad" },
    { text: "Mera attitude meri nishani hai, tu bata tujhe koi pareshani hai?", cat: "all" },
    { text: "Duniya mein rehne ke liye do hi raste hain, ya toh dosti karo ya dushmani.", cat: "all" },
    { text: "Maine apne dil se pucha ki tu kyu rota hai kisi aur ke liye, dil ne kaha jo tera nahi ho sakta tu uske peeche kyu pagal hai.", cat: "sad" },
    { text: "Style aisa rakho ki log dekhte reh jayein, aur dushmani aisi ki dushman darta reh jaye.", cat: "all" },
    { text: "Suno! tum mere liye wahi ho jo mobile ke liye charger hai.", cat: "romantic" },
    { text: "Bharosa ek baar toot jaye toh phir kabhi nahi judta.", cat: "sad" },
    { text: "Duniya ke liye sirf ek insaan ho tum, magar mere liye poori duniya ho.", cat: "all" },
    { text: "Hamari khamoshi par mat jao, raakh ke niche hamesha aag dabi hoti hai.", cat: "all" },
    { text: "Duniya se hamesha do kadam aage chalo, taaki log tumhare piche rahein.", cat: "all" },
    { text: "Baap ke samne aiyyashi aur hamare samne badmashi beta soch samajh kar karna.", cat: "all" },
    { text: "Na kisi se darr hai, na kisi se bair, bas apni masti mein jeete hain.", cat: "all" },
    { text: "Aukaat ki baat mat kar pagli, hum toh unme se hain jo sharafat bhi dabdabe se karte hain.", cat: "all" },
    { text: "Kash tum samajh paate ki khamosh rehne walon ko bhi dard hota hai.", cat: "sad" },
    { text: "Mohabbat mein shartein nahi hoti, bas ek dusre ka sath hota hai.", cat: "all" },
    { text: "Zindagi ne itna toh sikha diya ki har koi apna nahi hota.", cat: "sad" },
    { text: "Teri ek muskurahat mere saare dukh door kar deti hai.", cat: "all" },
    { text: "Dard toh bahut hai dil mein, magar dikhane ki aadat nahi.", cat: "sad" },
    { text: "Hamari khamoshi ko hamari haar mat samajhna, hum wo hain jo shanti se toofaan late hain.", cat: "all" },
    { text: "Sun beta! Jitni teri aukaat hai, utna toh hum dushmano ko maaf kar dete hain.", cat: "all" },
    { text: "Log kahte hain dushmani buri hai, hum kahte hain dushman dandaar hona chahiye.", cat: "all" },
    { text: "Style mera naya hai, par khauf wahi purana hai.", cat: "all" },
    { text: "Hum un logon mein se nahi jo peeth peeche bolte hain, hum toh samne se khelte hain.", cat: "all" },
    { text: "Zindagi ne itna toh sikha diya, ki har kisi par aankh band karke bharosa nahi karte.", cat: "all" },
    { text: "Mohabbat toh unse hoti hai jo kismat mein nahi hote.", cat: "all" },
    { text: "Akele rehna seekh liya hai maine, kyunki jhoothe waadon se behtar hai akelapan.", cat: "sad" },
    { text: "Teri ek jhalak ke liye taraste hain hum, ye ishq nahi toh aur kya hai?", cat: "all" },
    { text: "Waqt sab dikha deta hai, logon ki asliyat bhi aur apni kismat bhi.", cat: "all" },
      { text: "Duniya khamoshi bhi sunti hai, lekin pehle dhoom machani padti hai. 🔥", cat: "all" },
    { text: "Hamare raste alag hain, iska matlab ye nahi ki hum raasta bhatak gaye hain. 😎", cat: "all" },
    { text: "Jitna tum sochte ho, hum usse kahin zyada kar sakte hain.", cat: "all" },
    { text: "Mera waqt badla hai, mera khoon nahi! Yaad rakhna.", cat: "all" },
    { text: "Hum wahan khade hote hain jahan log rasta bhool jate hain.", cat: "all" },
      { text: "Ab toh akelepan se dosti ho gayi hai, ab mehfilon ki zarurat nahi rahi. 💔", cat: "sad" },
    { text: "Jinhe humne apna samjha, unhone hi sikhaya ki koi apna nahi hota.", cat: "sad" },
    { text: "Mohabbat toh aaj bhi tumse hi hai, bas ab tumhe batane ka dil nahi karta.", cat: "sad" },
    { text: "Hasna seekh lo doston, rone ke liye toh poori zindagi baki hai.", cat: "sad" },
    { text: "Kabhi kabhi khamoshi hi sabse bada jawab hoti hai.", cat: "sad" },
        { text: "Tum meri yad ki julfon ko savara karna. aur udaasi main mera name pukara karna. Yun bhi kar leta Hun tukdon mein Tera Ishq qubool mujhko Bachpan se sikhaya Hai guzara karna", cat: "ziyaul" },
    { text: "Aap jaison ke liye is mein rakha kuch bhi nahi ✨<br>Lekin aisa to na kahiye ke wafa kuch bhi nahi 🥀<br>Aap kahiye to nibhate chale jayein magar 👋<br>Is taluk mein aziyat ke siwa kuch bhi nahi 💔<br><br>Main kisi tarah bhi samjhota nahi kar sakta 🙅‍♂️<br>Ya to sab kuch hi mujhe chahiye ya kuch bhi nahi 👑<br>Kaise jana hai kahan jana hai kyun jana hai 🚶‍♂️<br>Hum ke chalte chale jaate Hain pata kuch bhi nahi 🌫️<br><br>Ab main kya apni mohabbat ka bharam bhi na rakhun 😔<br>Maan leta hoon ke us shakhs mein tha kuch bhi nahi 🌑<br>Main ne duniya se alag reh ke bhi dekha ziyaul 🏔️<br>Aisi munh zor udasi ki dawa kuch bhi nahi 🌪️", cat: "ziyaul", lang: "Urdu/Hindi" },
    { text: "Ek insan ko main ne bhi chaha tha ❤️<br>Roz duaoun mein main ne jise manga tha 🤲<br>Woh mil jaye aise meri taqdeer kahan thi 🥀<br>Us ke liye kitno ne matha teka tha 🙏<br><br>Main pagalon ki tarah chaha usko phir bhi ✨<br>Main ne malum tha usne mujhe chhor ke jana tha 👋<br>Aur woh kehti hai mujhe maaf karna jaana 😔<br>Woh mujhe chhorna chahti thi maa-baap toh bahana tha 🌪️<br><br>Is judai ne mujhe ek cheez sikhaya ziyaul 📖<br>Ishq karne se pehle paisa kamana tha 💰<br><br>S ❣️ S", cat: "ziyaul", lang: "Urdu/Hindi" },
    { text: "Log kahte hain badal gaye ho tum, ab unhe kaun samjhaye ki tute hue kanch aksar chubha hi karte hain.", cat: "sad" },
    { text: "Maine seekh liya hai ab akele chalna, kyunki log saath toh dete hain par sirf apni zarurat tak.", cat: "sad" },
    { text: "Mohabbat toh tujhse kal bhi thi aur aaj bhi hai, bas farq itna hai ki kal umeed thi aur aaj sabr hai.", cat: "sad" },
    { text: "Kaash tum meri aankhon ke raaste dil mein utar jao, taaki tum dekh sako ki wahan kitna dard hai.", cat: "sad" },
    { text: "Zindagi mein bas itna hi sukoon chahiye, ki koi rasta dikhane wala nahi balki saath chalne wala mile.", cat: "sad" },
    { text: "Bahut akela kar diya hai tere ishq ne, ab toh khud se baatein karne ki aadat ho gayi hai.", cat: "sad" },
    { text: "Tumhara hona hi kafi tha mere muskurane ke liye, ab toh rone ke liye bhi tumhari yaad ka sahara chahiye.", cat: "sad" },
    { text: "Meri har shayari ka unwan dard hai, kyunki meri har khamoshi ka bayan tum ho.", cat: "sad" },
        { text: "Teri yaad bhi kamal karti hai..<br>Kaise kaise dil se sawal karti hai..<br>Ek pal bhi tanha hone nahi deti..<br>Teri yaad bhi mera kitna khayal rakhti hai", cat: "romantic" },
    { text: "Tere chehre ki wo khoobsurat tasweer kaha se lau..<br>Har lamha tere sath gujare aisi takdeer kaha se lau..<br>Main mangta hu har safar main sath tera..<br>Tu hi bata mere haathon me wo lakeer kaha se lau..", cat: "romantic" },
    { text: "Hum tumhe keh na sake chalo aaj iqrar karte hai..<br>Jisse tum roz dekhte ho aaine mein..<br>Usse hum bahut pyaar karte hai..", cat: "romantic" },
        { text: "Aapki yaad sataye toh dil kya kare ❤️<br>Yaad dil se na jaye toh dil kya kare 🥀<br>Socha tha sapno mein mulaqat hogi ✨<br>Par neend hi na aaye toh hum kya kare!! 😴", cat: "romantic" },
    { text: "आपकी याद सताये तो दिल क्या करे ❤️<br>याद दिल से न जाये तो दिल क्या करे 🥀<br>सोचा था सपनों में मुलाक़ात होगी ✨<br>पर नींद ही न आये तो हम क्या करे!! 😴", cat: "romantic" },
    { text: "آپکی یاد ستائے تو دل کیا کرے ❤️<br>یاد دل سے نہ جائے تو دل کیا کرے 🥀<br>سوچا था سپنوں میں ملاقات ہوگی ✨<br>پر نیند ہی نہ آئے تو ہم کیا کرے!! 😴", cat: "romantic" },

    { text: "Zulfon ki chhaon mein sukoon mil jaata hai ✨<br>Tumhara naam hi labon par muskurahat laata hai 😊<br>Kuch toh baat hai tumhari har ek adaa mein ❤️<br>Jo dil ko baar-baar tumse mohabbat karwata hai.. 🥰", cat: "romantic" },
    { text: "ज़ुल्फों की छांव में सुकून मिल जाता है ✨<br>तुम्हारा नाम ही लबों पर मुस्कुराहट लाता है 😊<br>कुछ तो बात है तुम्हारी हर एक अदा में ❤️<br>जो दिल को बार-बार तुमसे मोहब्बत करवाता है.. 🥰", cat: "romantic" },
    { text: "زلفوں کی چھاؤں میں سکون مل جاتا ہے ✨<br>تمہارا نام ہی لبوں پر مسکراہٹ لاتا ہے 😊<br>کچھ تو بات ہے تمہاری ہر ایک ادا میں ❤️<br>جو دل کو بار بار تم سے محبت کرواتا ہے.. 🥰", cat: "romantic" },

    { text: "Dard dete ho aur khud hi sawal karte ho 💔<br>Tum bhi ae sanam.... kya kamal karte ho !! ✨<br>Dekhkar pooch liya hai haal mera jaani ❤️<br>Chalo shukr hai.... kuch toh khayal karte ho || 🥰", cat: "romantic" },
    { text: "दर्द देते हो और ख़ुद ही सवाल करते हो 💔<br>तुम भी ऐ सनम.... क्या कमाल करते हो !! ✨<br>देखकर पूछ लिया है हाल मेरा जानी ❤️<br>चलो शुक्र है.... कुछ तो ख़याल करते हो || 🥰", cat: "romantic" },
    { text: "درد دیتے ہو اور خود ہی سوال کرتے ہو 💔<br>تم بھی اے صنم.... کیا کمال کرتے ہو !! ✨<br>دیکھ کر پوچھ لیا ہے حال میرا جانی ❤️<br>چلو شکر ہے.... کچھ تو خیال کرتے ہو || 🥰", cat: "romantic" },

    { text: "Khubsurti se dhokha na khana aye IBN Adam 🥀<br>Talwar kitni bhi khubsurat ho mangti toh khoon hai..! ⚔️❤️", cat: "romantic" },
    { text: "खूबसूरती से धोखा न खाना ऐ इब्न-ए-आदम 🥀<br>तलवार कितनी भी खूबसूरत हो मांगती तो खून है..! ⚔️❤️", cat: "romantic" },
    { text: "خوبصورتی سے دھوکہ نہ کھانا اے ابن آدم 🥀<br>تلوار کتنی بھی خوبصورت ہو مانگتی تو خون ہے..! ⚔️❤️", cat: "romantic" },
        { text: "Chaha hai tumhe apne armaan se bhi zyada ❤️<br>Lagte ho haseen tum muskan se bhi zyada ✨<br>Meri har dhadkan har saans hai tumhare liye 💓<br>Kya mangoge ab mujhse, meri jaan se bhi zyada..! 😍", cat: "romantic" },
    { text: "चाहा है तुम्हें अपने अरमान से भी ज्यादा ❤️<br>लगते हो हसीन तुम मुस्कान से भी ज्यादा ✨<br>मेरी हर धड़कन हर साँस है तुम्हारे लिए 💓<br>क्या माँगोगे अब मुझसे, मेरी जान से भी ज्यादा..! 😍", cat: "romantic" },
    { text: "چاہا ہے تمہیں اپنے ارمان سے بھی زیادہ ❤️<br>لگتے ہو حسین تم مسکان سے بھی زیادہ ✨<br>میری ہر دھڑکن ہر سانس ہے تمہارے لیے 💓<br>کیا مانگو گے اب مجھ سے، میری جان سے بھی زیادہ..! 😍", cat: "romantic" },

    { text: "Wo chaand si pyaari aur chaand ki tarah hum se door hai 💌<br>Wo maasoom, wo naadan, unki aankhon mein noor hai 👀✨<br>Honge laakh haseen chehre duniya mein janaab 😂<br>Unke maathe par bindiya, unki toh baat hi kuch aur hai! 😻", cat: "romantic" },
    { text: "वो चाँद सी प्यारी और चाँद की तरह हम से दूर है 💌<br>वो मासूम, वो नादान, उनकी आँखों में नूर है 👀✨<br>होंगे लाख हसीन चेहरे दुनिया में जनाब 😂<br>उनके माथे पर बिंदिया, उनकी तो बात ही कुछ और है! 😻", cat: "romantic" },
    { text: "وہ چاند سی پیاری اور چاند کی طرح ہم سے دور ہے 💌<br>وہ معصوم، وہ نادان، ان کی آنکھوں میں نور ہے 👀✨<br>ہوں گے لاکھ حسین چہرے دنیا میں جناب 😂<br>ان کے ماتھے پر बिंदिया، ان کی تو بات ہی کچھ اور ہے! 😻", cat: "romantic" },

    { text: "Arey tum khubsurat jaise Chand lagti ho...🌙<br>Tum Nadaan par pyaari behisaab lagti ho 😘🥰<br>Ye kaanch ka tukda (aayiena) kya batayega tumhe 💞<br>Zara meri Aankhon se poocho tum kitni Laajawab lagti ho..! 🙈🌹", cat: "romantic" },
    { text: "अरे तुम खूबसूरत जैसे चाँद लगती हो...🌙<br>तुम नादान पर प्यारी बेहिसाब लगती हो 😘🥰<br>ये काँच का टुकड़ा (आईना) क्या बताएगा तुम्हें 💞<br>ज़रा मेरी आँखों से पूछो तुम कितनी लाजवाब लगती हो..! 🙈🌹", cat: "romantic" },
    { text: "ارے تم خوبصورت جیسے چاند لگتی ہو...🌙<br>تم نادان پر پیاری بے حساب لگتی ہو 😘🥰<br>یہ کانچ کا ٹکڑا (آئینہ) کیا بتائے گا تمہیں 💞<br>ذرا میری آنکھوں سے پوچھو تم کتنی لاجواب لگتی ہو..! 🙈🌹", cat: "romantic" },

    { text: "Kya ajuba ho tum, ye tumhein koi nahi bataega ✨<br>Koi dekh le tumhein to seedha ishq mein pad jaayega ❤️<br>Sab chaand ko sundar batate hain, Lekin... 🌙<br>Chaand tumhari jaisi aankhen kahan se laayega..! 🌹", cat: "romantic" },
    { text: "क्या अजूबा हो तुम, ये तुम्हें कोई नहीं बताएगा ✨<br>कोई देख ले तुम्हें तो सीधा इश्क में पड़ जाएगा ❤️<br>सब चाँद को सुंदर बताते हैं, लेकिन... 🌙<br>चाँद तुम्हारी जैसी आँखें कहाँ से लाएगा..! 🌹", cat: "romantic" },
    { text: "کیا عجوبہ ہو تم، یہ تمہیں کوئی نہیں بتائے گا ✨<br>کوئی دیکھ لے تمہیں تو سیدھا عشق میں پڑ جائے گا ❤️<br>سب چاند کو سندر بتاتے ہیں, لیکن... 🌙<br>چاند تمہاری جیسی آنکھیں کہاں سے لائے گا..! 🌹", cat: "romantic" },

    { text: "Mere intezar ki rahat ho tum ❤️<br>Mere dil ki chahat ho tum ✨<br>Tum ho toh ye duniya hai 🌍<br>Main kaise bataun ke mere liye kya ho tum..! 🥰💓", cat: "romantic" },
    { text: "मेरे इंतज़ार की राहत हो तुम ❤️<br>मेरे दिल की चाहत हो तुम ✨<br>तुम हो तो ये दुनिया है 🌍<br>मैं कैसे बताऊँ कि मेरे लिए क्या हो तुम..! 🥰💓", cat: "romantic" },
    { text: "میرے انتظار کی راحت ہو تم ❤️<br>میرے دل کی چاہت ہو تم ✨<br>تم ہو تو یہ دنیا ہے 🌍<br>میں کیسے بتاؤں کہ میرے لیے کیا ہو تم..! 🥰💓", cat: "romantic" },

    { text: "Khud ko teri yaadon ka gulam kar diya..<br>Khud ko teri khatir badnam kar diya ✨<br>Kya saboot doon tujhe apni mohabbat ka ❤️<br>Seene mein ek dil tha wo bhi tere naam kar diya... 💓", cat: "romantic" },
    { text: "खुद को तेरी यादों का गुलाम कर दिया..<br>खुद को तेरी खातिर बदनाम कर दिया ✨<br>क्या सबूत दूँ तुझे अपनी मोहब्बत का ❤️<br>सीने में एक दिल था वो भी तेरे नाम कर दिया... 💓", cat: "romantic" },
    { text: "خود کو تیری یادوں کا غلام کر دیا..<br>خود کو تیری خاطر بدنام کر دیا ✨<br>کیا ثبوت دوں تجھے اپنی محبت کا ❤️<br>سینے میں ایک دل تھا وہ بھی تیرے نام کر دیا... 💓", cat: "romantic" },
        { text: "Teri yaad bhi kamal karti hai..😊<br>Kaise kaise dil se sawal karti hai..?😢<br>Ek pal bhi tanha hone nahi deti..👀🍂<br>Teri yaad bhi mera kitna khayal rakhti hai 💞🕊️", cat: "romantic" },
    { text: "तेरी याद भी कमाल करती है..😊<br>कैसे कैसे दिल से सवाल करती है..?😢<br>एक पल भी तन्हा होने नहीं देती..👀🍂<br>तेरी याद भी मेरा कितना ख्याल रखती है 💞🕊️", cat: "romantic" },
    { text: "تیری یاد بھی کمال کرتی ہے..😊<br>کیسے کیسے دل سے سوال کرتی ہے..؟😢<br>اک پل بھی تنہا ہونے نہیں دیتی..👀🍂<br>تیری یاد بھی میرا کتنا خیال رکھتی ہے 💞🕊️", cat: "romantic" },

    { text: "Hum tumhe keh na sake chalo aaj iqrar karte hai..👰🏻🏻‍♂️<br>Jisse tum roz dekhte ho aaine mein..<br>Usse hum bahut pyaar karte hai 🫂🙈🥺", cat: "romantic" },
    { text: "हम तुम्हें कह ना सके चलो आज इकरार करते है..👰🏻🏻‍♂️<br>जिसे तुम रोज़ देखते हो आइने में..<br>उससे हम बहुत प्यार करते है 🫂🙈🥺", cat: "romantic" },
    { text: "ہم تمہیں کہہ نہ سکے چلو آج اقرار کرتے ہے..👰🏻🏻‍♂️<br>جسے تم روز دیکھتے ہو آئینے میں..<br>اسے ہم بہت پیار کرتے ہے 🫂🙈🥺", cat: "romantic" },

    { text: "Tere chehre ki wo khoobsurat tasweer kaha se lau.👰🏻<br>Har lamha tere sath gujare aisi takdeer kaha se lau.🥺<br>Main mangta hu har safar mein sath tera.🤞🏻🫶🏻<br>Tu hi bata mere haathon mein wo lakeer kaha se lau.🥺", cat: "romantic" },
    { text: "तेरे चेहरे की वो खूबसूरत तस्वीर कहाँ से लाऊं.👰🏻<br>हर लम्हा तेरे साथ गुज़रे ऐसी तक़दीर कहाँ से लाऊं.🥺<br>मैं मांगता हूँ हर सफर में साथ तेरा.🤞🏻🫶🏻<br>तू ही बता मेरे हाथों में वो लकीर कहाँ से लाऊं.🥺", cat: "romantic" },
    { text: "تیرے چہرے کی وہ خوبصورت تصویر کہاں سے لاؤں.👰🏻<br>ہر لمحہ تیرے ساتھ گزرے ایسی تقدیر کہاں سے لاؤں.🥺<br>میں مانگتا ہوں ہر سفر میں ساتھ تیرا.🤞🏻🫶🏻<br>تو ہی بتا میرے ہاتھوں میں وہ لکیر کہاں سے لاؤں.🥺", cat: "romantic" },

    { text: "Muhabbat bhari nazron mein khwaab milenge,<br>Kahi kante toh kahi gulab milenge,<br>Mere dil ki kitaab ko padh ke toh dekho,<br>Kahi aapki yaad toh kahi khud aap milenge...", cat: "romantic" },
    { text: "मुहब्बत भरी नज़रों में ख़्वाब मिलेंगे,<br>कहीं कांटे तो कहीं गुलाब मिलेंगे,<br>मेरे दिल की किताब को पढ़ के तो देखो,<br>कहीं आपकी याद तो कहीं खुद आप मिलेंगे...", cat: "romantic" },
    { text: "محبت بھری نظروں میں خواب ملیں گے،<br>کہیں کانٹے تو کہیں گلاب ملیں گے،<br>میرے دل کی کتاب کو پڑھ کے تو دیکھو،<br>کہیں آپکی یاد تو کہیں خود آپ ملیں گے...", cat: "romantic" },

    { text: "Ek pyara naam dekar mujhe bulaoge kya 💖<br>Thodi shararat karke mujhe sataoge kya 😂✨<br>Sukoon nahi milta mujhe kahin par bhi 👀<br>Tum pyar se god mein sulaoge kya? 🫂🌷", cat: "romantic" },
    { text: "एक प्यारा नाम देकर मुझे बुलाओगे क्या 💖<br>थोड़ी शरारत करके मुझे सताओगे क्या 😂✨<br>सुकून नहीं मिलता मुझे कहीं पर भी 👀<br>तुम प्यार से गोद में सुलाओगे क्या? 🫂🌷", cat: "romantic" },
    { text: "اک پیارا نام دے کر مجھے بلاؤ گے کیا 💖<br>تھوڑی شرارت کر کے مجھے ستاؤ گے کیا 😂✨<br>سکون نہیں ملتا مجھے کہیں پر بھی 👀<br>تم پیار سے گود میں سلاؤ گے کیا؟ 🫂🌷", cat: "romantic" },

    { text: "Dekho fir raat aa gayi,<br>Tanhaiyo mein waqt bitane ki baat aa gayi,<br>Hum toh yu hi baithe the sitaro ki panah mein,<br>Chand ko dekha toh aapki yaad aa gayi...❤️", cat: "romantic" },
    { text: "देखो फिर रात आ गयी,<br>तन्हाइयों में वक़्त बिताने की बात आ गयी,<br>हम तो यूँ ही बैठे थे सितारों की पनाह में,<br>चाँद को देखा तो आपकी याद आ गयी...❤️", cat: "romantic" },
    { text: "دیکھو پھر رات آ گئی،<br>تنہائیوں میں وقت بتانے کی بات آ گئی،<br>ہم تو یوں ہی بیٹھے تھے ستاروں کی پناہ میں،<br>چاند کو دیکھا تو آپکی یاد آ گئی...❤️", cat: "romantic" },

    { text: "Teri ankhon ko kali, chehre ko gulab likh deta.!<br>Husan hota agar sawal toh tujhe jawab likh deta.!<br>Or yakin karo meharbano agar main shayar hota.!<br>To tumhari khubsurti par main kitab likh deta.! 💕🌸", cat: "romantic" },
    { text: "तेरी आंखों को कली, चेहरे को गुलाब लिख देता.!<br>हुस्न होता अगर सवाल तो तुझे जवाब लिख देता.!<br>और यकीन करो मेहरबानो अगर मैं शायर होता.!<br>तो तुम्हारी खूबसूरती पर मैं किताब लिख देता.! 💕🌸", cat: "romantic" },
    { text: "تیری آنکھوں کو کلی، چہرے کو گلاب لکھ دیتا.!<br>حسن ہوتا اگر سوال تو تجھے جواب لکھ دیتا.!<br>اور یقین کرو مہربانو اگر میں شاعر ہوتا.!<br>تو تمہاری خوبصورتی پر میں کتاب لکھ دیتا.! 💕🌸", cat: "romantic" },
        { text: "Aapki yaad sataye toh dil kya kare ❤️<br>Yaad dil se na jaye toh dil kya kare 🥀<br>Socha tha sapno mein mulaqat hogi ✨<br>Par neend hi na aaye toh hum kya kare!! 😴", cat: "romantic" },
    { text: "आपकी याद सताये तो दिल क्या करे ❤️<br>याद दिल से न जाये तो दिल क्या करे 🥀<br>सोचा था सपनों में मुलाक़ात होगी ✨<br>पर नींद ही न आये तो हम क्या करे!! 😴", cat: "romantic" },
    { text: "آپکی یاد ستائے تو دل کیا کرے ❤️<br>یاد دل سے نہ جائے تو دل کیا کرے 🥀<br>سوچا تھا سپنوں میں ملاقات ہوگی ✨<br>پر نیند ہی نہ آئے تو ہم کیا کرے!! 😴", cat: "romantic" },

    { text: "Chaha hai tumhe apne armaan se bhi zyada ❤️<br>Lagte ho haseen tum muskan se bhi zyada ✨<br>Meri har dhadkan har saans hai tumhare liye 💓<br>Kya mangoge ab mujhse, meri jaan se bhi zyada..! 😍", cat: "romantic" },
    { text: "चाहा है तुम्हें अपने अरमान से भी ज्यादा ❤️<br>लगते हो हसीन तुम मुस्कान से भी ज्यादा ✨<br>मेरी हर धड़कन हर साँस है तुम्हारे लिए 💓<br>क्या माँगोगे अब मुझसे, मेरी जान से भी ज्यादा..! 😍", cat: "romantic" },
    { text: "چاہا ہے تمہیں اپنے ارمان سے بھی زیادہ ❤️<br>لگتے ہو حسین تم مسکان سے بھی زیادہ ✨<br>میری ہر دھڑکن ہر سانس ہے تمہارے لیے 💓<br>کیا مانگو گے اب مجھ سے، میری جان سے بھی زیادہ..! 😍", cat: "romantic" },

    { text: "Tere chehre ki wo khoobsurat tasweer kaha se lau.👰🏻<br>Har lamha tere sath gujare aisi takdeer kaha se lau.🥺<br>Main mangta hu har safar mein sath tera.🤞🏻🫶🏻<br>Tu hi bata mere haathon mein wo lakeer kaha se lau.🥺", cat: "romantic" },
    { text: "तेरे चेहरे की वो खूबसूरत तस्वीर कहाँ से लाऊं.👰🏻<br>हर लम्हा तेरे साथ गुज़रे ऐसी तक़दीर कहाँ से लाऊं.🥺<br>मैं मांगता हूँ हर सफर में साथ तेरा.🤞🏻🫶🏻<br>तू ही बता मेरे हाथों में वो लकीर कहाँ से लाऊं.🥺", cat: "romantic" },
    { text: "تیرے چہرے کی وہ خوبصورت تصویر کہاں سے لاؤں.👰🏻<br>ہر لمحہ تیرے ساتھ گزرے ایسی تقدیر کہاں سے لاؤں.🥺<br>میں مانگتا ہوں ہر سفر میں ساتھ تیرا.🤞🏻🫶🏻<br>تو ہی بتا میرے ہاتھوں میں وہ لکیر کہاں سے لاؤں.🥺", cat: "romantic" },

    { text: "Teri ankhon ko kali, chehre ko gulab likh deta.!<br>Husan hota agar sawal toh tujhe jawab likh deta.!<br>Or yakin karo meharbano agar main shayar hota.!<br>To tumhari khubsurti par main kitab likh deta.! 💕🌸", cat: "romantic" },
    { text: "तेरी आंखों को कली, चेहरे को गुलाब लिख देता.!<br>हुस्न होता अगर सवाल तो तुझे जवाब लिख देता.!<br>और यकीन करो मेहरबानो अगर मैं शायर होता.!<br>तो तुम्हारी खूबसूरती पर मैं किताब लिख देता.! 💕🌸", cat: "romantic" },
    { text: "تیری آنکھوں کو کلی، چہرے کو گلاب لکھ دیتا.!<br>حسن ہوتا اگر سوال تو تجھے جواب لکھ دیتا.!<br>اور یقین کرو مہربانو اگر میں شاعر ہوتا.!<br>تو تمہاری خوبصورتی پر میں کتاب لکھ دیتا.! 💕🌸", cat: "romantic" },
         { text: "Khuda ki fursat mein ek pal aisa aaya hoga..<br>Jab usne tujh jaisa pyara insaan banaya hoga ✨<br>Na jaane kaun si dua qubool hui hogi humari ❤️<br>Jo usne mujhe tujhse milaya hoga...!! 🤲🌹", cat: "romantic" },
    { text: "खुदा की फुर्सत में एक पल ऐसा आया होगा..<br>जब उसने तुझ जैसा प्यारा इंसान बनाया होगा ✨<br>ना जाने कौन सी दुआ कुबूल हुई होगी हमारी ❤️<br>जो उसने मुझे तुझसे मिलाया होगा...!! 🤲🌹", cat: "romantic" },
    { text: "خدا کی فرصت میں ایک پل ایسا آیا ہوگا..<br>جب اس نے تجھ جیسا پیارا انسان بنایا ہوگا ✨<br>نا جانے کون سی دعا قبول ہوئی ہوگی ہماری ❤️<br>جو اس نے مجھے تجھ سے ملایا ہوگا۔۔!! 🤲🌹", cat: "romantic" },

    { text: "Bahut kuch likh likh kar mitaya hai maine..<br>Theek na hone par bhi, apna haal theek bataya hai maine.. ✍️🥺<br>Apni soch me hi khokar, na jaane kitni raato ko bitaya hai maine..<br>Koi samjhega nahi haal mera, bas sabse sab kuch chipaya hai maine.. 💔", cat: "romantic" },
    { text: "बहुत कुछ लिख लिख कर मिटाया है मैंने..<br>ठीक ना होने पर भी, अपना हाल ठीक बताया है मैंने.. ✍️🥺<br>अपनी सोच में ही खोकर, ना जाने कितनी रातों को बिताया है मैंने..<br>कोई समझेगा नहीं हाल मेरा, बस सबसे सब कुछ छिपाया है मैंने.. 💔", cat: "romantic" },
    { text: "بہت کچھ لکھ لکھ کر مٹایا ہے میں نے..<br>ٹھیک نہ ہونے پر بھی اپنا حال ٹھیک بتایا ہے میں نے.. ✍️🥺<br>اپنی سوچ میں ہی کھو کر نہ جانے کتنی راتوں کو بتایا ہے میں نے..<br>کوئی سمجھے گا نہیں حال میرا، بس سب سے سب کچھ چھپایا ہے میں نے۔۔ 💔", cat: "romantic" },

    { text: "Haste dilo mein gam bhi hai...😊<br>Muskuraati aankhein kabhi nam bhi hai...😢<br>Dua karte hai aapki khushi kabhi na ruke...🙌✨<br>Kyuki aapki hasi ke diwane hum bhi hai...!! ❤️", cat: "romantic" },
    { text: "हंसते दिलों में गम भी है...😊<br>मुस्कुराती आंखें कभी नम भी है...😢<br>दुआ करते हैं आपकी खुशी कभी ना रुके...🙌✨<br>क्योंकि आपकी हंसी के दीवाने हम भी है...!! ❤️", cat: "romantic" },
    { text: "ہنستے دلوں میں غم بھی ہے...😊<br>مسکراتی آنکھیں کبھی نم بھی ہے...😢<br>دعا کرتے ہیں آپکی خوشی کبھی نہ رکے...🙌✨<br>کیونکہ آپکی ہنسی کے دیوانے ہم بھی ہیں۔۔۔!! ❤️", cat: "romantic" },

    { text: "Na jaane kyun aati hai yaad tumhari..<br>Chura le jaati hai aankhon se neend humari.. 🌙💤<br>Yahi khayal rehta hai subah shaam..<br>Kab hogi tumse mulaqat humari... 👫💖", cat: "romantic" },
    { text: "ना जाने क्यों आती है याद तुम्हारी..<br>चुरा ले जाती है आंखों से नींद हमारी.. 🌙💤<br>यही ख्याल रहता है सुबह शाम..<br>कब होगी तुमसे मुलाकात हमारी... 👫💖", cat: "romantic" },
    { text: "نا جانے کیوں آتی ہے یاد تمہاری..<br>چرا لے جاتی ہے آنکھوں سے نیند ہماری۔۔ 🌙💤<br>یہی خیال رہتا ہے صبح شام..<br>کب ہوگی تم سے ملاقات ہماری۔۔ 👫💖", cat: "romantic" },

    { text: "Kaash kahin khushiyon ki dukaan hoti..<br>Us dukaan mein meri jaan pehchaan hoti.. 🛍️✨<br>Khareed leta main saari khushiyan tumhare liye..<br>Chahe uski keemat meri jaan kyun na hoti!! 💖💎", cat: "romantic" },
    { text: "काश कहीं खुशियों की दुकान होती..<br>उस दुकान में मेरी जान पहचान होती.. 🛍️✨<br>खरीद लेता मैं सारी खुशियां तुम्हारे लिए..<br>चाहे उसकी कीमत मेरी जान क्यों ना होती!! 💖💎", cat: "romantic" },
    { text: "کاش کہیں خوشیوں کی دکان ہوتی..<br>اس دکان میں میری جان پہچان ہوتی۔۔ 🛍️✨<br>خرید لیتا میں ساری خوشیاں تمہارے لیے..<br>چاہے اس کی قیمت میری جان کیوں نہ ہوتی۔۔!! 💖💎", cat: "romantic" },

    { text: "U na mujhse tu rutha kar..<br>Kar baat shikayat kar.. 🌸😇<br>Tere chehre pe gussa nahi jachta..<br>Chhod narazgi aur muskuraya kar.. ✨😊", cat: "romantic" },
    { text: "यूं ना मुझसे तू रूठा कर..<br>कर बात शिकायत कर.. 🌸😇<br>तेरे चेहरे पे गुस्सा नहीं जचता..<br>छोड़ नाराजगी और मुस्कुराया कर.. ✨😊", cat: "romantic" },
    { text: "یوں نہ مجھ سے تو روٹھا کر..<br>کر بات شکایت کر۔۔ 🌸😇<br>تیرے چہرے پہ غصہ نہیں جچتا..<br>چھوڑ ناراضگی اور مسکرایا کر۔۔ ✨😊", cat: "romantic" },

    { text: "Are tum khoobsurat jaise chaand lagti ho..<br>Tum nadaan par pyaari behisaab lagti ho.. 😍🌛<br>Zara meri aankhon se poochho tum..<br>Tum kitni laajawaab lagti ho.. ✨💎", cat: "romantic" },
    { text: "अरे तुम खूबसूरत जैसे चांद लगती हो..<br>तुम नादान पर प्यारी बेहिसाब लगती हो.. 😍🌛<br>ज़रा मेरी आंखों से पूछो तुम..<br>तुम कितनी लाजवाब लगती हो.. ✨💎", cat: "romantic" },
    { text: "ارے تم خوبصورت جیسے چاند لگتی ہو..<br>تم نادان پر پیاری بیحساب لگتی ہو۔۔ 😍🌛<br>ذرا میری آنکھوں سے پوچھو تم..<br>تم کتنی لاجواب لگتی ہو۔۔ ✨💎", cat: "romantic" },

    { text: "Dua bhi tum, mannat bhi tum..<br>Dil-e-jannat ka noor, ibadat bhi tum.. ❤️🤲<br>Kaise na kare bepnah ishq tumse jana..<br>Khuda ka diya hua sabse haseen tohfa ho tum.. ✨🌹", cat: "romantic" },
    { text: "दुआ भी तुम, मन्नत भी तुम..<br>दिल-ए-जन्नत का नूर, इबादत भी तुम.. ❤️🤲<br>कैसे ना करे बेपनाह इश्क तुमसे जाना..<br>खुदा का दिया हुआ सबसे हसीन तोहफा हो तुम.. ✨🌹", cat: "romantic" },
    { text: "دعا بھی تم، منت بھی تم..<br>دلِ جنت کا نور، عبادت بھی تم۔۔ ❤️🤲<br>کیسے نہ کرے بے پناہ عشق تم سے جانا..<br>خدا کا دیا ہوا سب سے حسین تحفہ ہو تم۔۔ ✨🌹", cat: "romantic" },

    { text: "Pyar aur maut se darta kaun hai..<br>Pyar toh ho jata hai karta kaun hai.. 🔥💔<br>Hum toh mohabbat mein jaan tak luta de..<br>Hume pata toh chale humse pyar karta kaun hai.. 🥀👀", cat: "romantic" },
    { text: "प्यार और मौत से डरता कौन है..<br>प्यार तो हो जाता है करता कौन है.. 🔥💔<br>हम तो मोहब्बत में जान तक लुटा दें..<br>हमें पता तो चले हमसे प्यार करता कौन है.. 🥀👀", cat: "romantic" },
    { text: "پیار اور موت سے ڈرتا کون ہے..<br>پیار تو ہو جاتا ہے کرتا کون ہے۔۔ 🔥💔<br>ہم تو محبت میں جان تک لٹا دیں..<br>ہمیں پتہ تو چلے ہم سے پیار کرتا کون ہے۔۔ 🥀👀", cat: "romantic" },

    { text: "Aapki yaad sataye toh dil kya kare ❤️<br>Yaad dil se na jaye toh dil kya kare 🥀<br>Socha tha sapno mein mulaqat hogi ✨<br>Par neend hi na aaye toh hum kya kare!! 😴", cat: "romantic" },
    { text: "आपकी याद सताये तो दिल क्या करे ❤️<br>याद दिल से न जाये तो दिल क्या करे 🥀<br>सोचा था सपनों में मुलाक़ात होगी ✨<br>पर नींद ही न आये तो हम क्या करे!! 😴", cat: "romantic" },
    { text: "آپکی یاد ستائے تو دل کیا کرے ❤️<br>یاد دل سے نہ جائے تو دل کیا کرے 🥀<br>سوچا تھا سپنوں میں ملاقات ہوگی ✨<br>پر نیند ہی نہ آئے تو ہم کیا کرے!! 😴", cat: "romantic" } ,
         { text: "Aapki yaad sataye toh dil kya kare ❤️<br>Yaad dil se na jaye toh dil kya kare 🥀<br>Socha tha sapno mein mulaqat hogi ✨<br>Par neend hi na aaye toh hum kya kare!! 😴", cat: "romantic" },
    { text: "आपकी याद सताये तो दिल क्या करे ❤️<br>याद दिल से न जाये तो दिल क्या करे 🥀<br>सोचा था सपनों में मुलाक़ात होगी ✨<br>पर नींद ही न आये तो हम क्या करे!! 😴", cat: "romantic" },
    { text: "آپکی یاد ستائے تو دل کیا کرے ❤️<br>یاد دل سے نہ جائے تو دل کیا کرے 🥀<br>سوچا تھا سپنوں میں ملاقات ہوگی ✨<br>پر نیند ہی نہ آئے تو ہم کیا کرے!! 😴", cat: "romantic" },

    { text: "Mohabbat ki dastan jab likhi jayegi,<br>Wafa ki har rasam wahan nibhayi jayegi.<br>Humne toh tujhe chaha hai ibadat ki tarah,<br>Ab ye duniya humein deewane ke naam se bulayegi. ❤️✨📜", cat: "all" },
    { text: "मोहब्बत की दास्तां जब लिखी जाएगी,<br>वफ़ा की हर रस्म वहां निभाई जाएगी।<br>हमने तो तुझे चाहा है इबादत की तरह,<br>अब ये दुनिया हमें दीवाने के नाम से बुलाएगी। ❤️✨📜", cat: "all" },
    { text: "محبت کی داستاں جب لکھی جائے گی،<br>وفا کی ہر رسم وہاں نبھائی جائے گی۔<br>ہم نے تو تجھے چاہا ہے عبادت کی طرح،<br>اب یہ دنیا ہمیں دیوانے کے نام سے بلائے گی۔ ❤️✨📜", cat: "all" },

    { text: "Tujhe bhulane ki koshish toh bahut ki maine,<br>Magar har baar tera chehra hi nazar aaya.<br>Log kehte hain waqt har zakhm bhar deta hai,<br>Par waqt ne toh teri yaadon ko aur bhi gehra banaya. 💔🥀🍂", cat: "all" },
    { text: "तुझे भुलाने की कोशिश तो बहुत की मैंने,<br>मगर हर बार तेरा चेहरा ही नज़र आया।<br>लोग कहते हैं वक़्त हर ज़ख़्म भर देता है,<br>पर वक़्त ने तो तेरी यादों को और भी गहरा बनाया। 💔🥀🍂", cat: "all" },
    { text: "تجھے بھلانے کی کوشش تو بہت کی میں نے،<br>مگر ہر بار تیرا چہرہ ہی نظر آیا۔<br>لوگ کہتے ہیں وقت ہر زخم بھر دیتا ہے،<br>پر وقت نے تو تیری یادوں کو اور بھی گہرا بنایا। 💔🥀🍂", cat: "all" },

    { text: "Zindagi ki uljhanon mein khud ko bhul gaye hum,<br>Khushi ki talaash mein ghamon se mil gaye hum.<br>Ab toh tanhai hi sabse acchi sathi lagti hai,<br>Mehfilon mein jaakar bhi akele reh gaye hum. 🚶‍♂️🌑🥀", cat: "all" },
    { text: "ज़िन्दगी की उलझनों में खुद को भूल गए हम,<br>खुशी की तलाश में गमों से मिल गए हम।<br>अब तो तन्हाई ही सबसे अच्छी साथी लगती है,<br>महफिलों में जाकर भी अकेले रह गए हम। 🚶‍♂️🌑🥀", cat: "all" },
    { text: "زندگی کی الجھنوں میں خود کو بھول گئے ہم،<br>خوشی کی تلاش میں غموں سے مل گئے ہم۔<br>اب تو تنہائی ہی سب سے اچھی ساتھی لگتی ہے،<br>محفلوں میں جا کر بھی اکیلے رہ گئے ہم۔ 🚶‍♂️🌑🥀", cat: "all" },

    { text: "Humne toh tumhe us waqt bhi chaha tha,<br>Jab tumhare paas humare liye waqt nahi tha.<br>Ab jab tum laut kar aaye ho humare dar par,<br>Toh dukh hai ki ab humare dil mein wo jazbaat nahi raha. 💯🔥🚬", cat: "all" },
    { text: "हमने तो तुम्हें उस वक़्त भी चाहा था,<br>जब तुम्हारे पास हमारे लिए वक़्त नहीं था।<br>अब जब तुम लौट कर आये हो हमारे दर पर,<br>तो दुःख है कि अब हमारे दिल में वो जज़्बात नहीं रहा। 💯🔥🚬", cat: "all" },
    { text: "ہم نے تو تمہیں اس وقت بھی چاہا تھا،<br>جب تمہارے پاس ہمارے لیے وقت نہیں تھا۔<br>اب جب تم لوٹ کر آئے ہو ہمارے در پر،<br>تو دکھ ہے کہ اب ہمارے دل میں وہ جذبات نہیں رہا۔ 💯🔥🚬", cat: "all" },
         { text: "Badi ajeeb hoti hai ye mohabbat bhi,<br>Kabhi hasati hai toh kabhi rulati hai.<br>Jo mil jaye toh zindagi ban jati hai,<br>Aur na mile toh jeena sikhati hai. 💔🥀🍂", cat: "all" },
    { text: "बड़ी अजीब होती है ये मोहब्बत भी,<br>कभी हसाती है तो कभी रुलाती है।<br>जो मिल जाए तो ज़िन्दगी बन जाती है,<br>और न मिले तो जीना सिखाती है। 💔🥀🍂", cat: "all" },
    { text: "بڑی عجیب ہوتی ہے یہ محبت بھی،<br>کبھی ہساتی ہے تو کبھی رلاتی ہے۔<br>جو مل جائے تو زندگی بن جاتی ہے،<br>اور نہ ملے تو جینا سکھاتی ہے۔ 💔🥀🍂", cat: "all" },

    { text: "Tere ishq mein khud ko bhula diya maine,<br>Har khushi ko teri raah mein bicha diya maine.<br>Log kehte hain ki tu mera naseeb nahi,<br>Phir bhi har dua mein tera naam saja diya maine. ❤️✨📜", cat: "all" },
    { text: "तेरे इश्क़ में खुद को भुला दिया मैंने,<br>हर खुशी को तेरी राह में बिछा दिया मैंने।<br>लोग कहते हैं कि तू मेरा नसीब नहीं,<br>फिर भी हर दुआ में तेरा नाम सजा दिया मैंने। ❤️✨📜", cat: "all" },
    { text: "تیرے عشق میں خود کو بھلا دیا میں نے،<br>ہر خوشی کو تیری راہ میں بچھا دیا میں نے۔<br>لوگ کہتے ہیں کہ تو میرا نصیب نہیں،<br>پھر بھی ہر دعا میں تیرا نام سجا دیا میں نے۔ ❤️✨📜", cat: "all" },

    { text: "Waqt badalta hai zindagi ke saath,<br>Zindagi badalti hai waqt ke saath.<br>Waqt nahi badalta apno ke saath,<br>Bas apne badal jaate hain waqt ke saath. 💯🔥🚬", cat: "all" },
    { text: "वक़्त बदलता है ज़िन्दगी के साथ,<br>ज़िन्दगी बदलती है वक़्त के साथ।<br>वक़्त नहीं बदलता अपनों के साथ,<br>बस अपने बदल जाते हैं वक़्त के साथ। 💯🔥🚬", cat: "all" },
    { text: "وقت بدلتا ہے زندگی کے ساتھ،<br>زندگی بدلتی ہے وقت کے ساتھ۔<br>وقت نہیں بدلتا اپنوں کے ساتھ،<br>بس اپنے بدل جاتے ہیں وقت کے ساتھ۔ 💯🔥🚬", cat: "all" },

    { text: "Mohabbat ki adalat mein gawah koi nahi hota,<br>Jo apna ho wahi aksar naseeb mein nahi hota.<br>Humne toh mangi thi sirf thodi si wafa unse,<br>Par unke pass dene ko sirf zakhm hi hota. 🥀✨🙌", cat: "all" },
    { text: "मोहब्बत की अदालत में गवाह कोई नहीं होता,<br>जो अपना हो वही अक्सर नसीब में नहीं होता।<br>हमने तो मांगी थी सिर्फ थोड़ी सी वफ़ा उनसे,<br>पर उनके पास देने को सिर्फ ज़ख्म ही होता। 🥀✨🙌", cat: "all" },
    { text: "محبت کی عدالت میں گواہ کوئی نہیں ہوتا،<br>جو اپنا ہو وہی اکثر نصیب میں نہیں ہوتا۔<br>ہم نے تو مانگی تھی صرف تھوڑی سی وفا ان سے،<br>پر ان کے پاس دینے کو صرف زخم ہی ہوتا۔ 🥀✨🙌", cat: "all" },

    { text: "Dard ki mehfil mein ek hum bhi thhe,<br>Khushiyon ke sheher mein thode kam bhi thhe.<br>Logon ne poocha itne udaas kyun ho,<br>Humne kaha unse jinhe sabse zyada chaha unke liye hum kuch bhi nahi thhe. 💔🌑🚶‍♂️", cat: "all" },
    { text: "दर्द की महफ़िल में एक हम भी थे,<br>खुशियों के शहर में थोड़े कम भी थे।<br>लोगों ने पूछा इतने उदास क्यों हो,<br>हमने कहा उनसे जिन्हें सबसे ज़्यादा चाहा उनके लिए हम कुछ भी नहीं थे। 💔🌑🚶‍♂️", cat: "all" },
    { text: "درد کی محفل میں ایک ہم بھی تھے،<br>خوشیوں کے شہر میں تھوڑے کم بھی تھے۔<br>لوگوں نے پوچھا اتنے اداس کیوں ہو،<br>ہم نے کہا ان سے جنہیں سب سے زیادہ چاہا ان کے لیے ہم کچھ بھی نہیں تھے۔ 💔🌑🚶‍♂️", cat: "all" },
        { text: "Banda-e-parwardigar hoon, gham-e-do-jahan kyun ho,<br>Pa-e-shikasta rakhta hoon, dast-e-rawan kyun ho.<br>Hum ko mita sake ye zamane mein dum nahi,<br>Hum se zamana khud hai, zamane se hum nahi. 😎🔥👑", cat: "attitude" },
    { text: "बंदा-ए-परवरदिगार हूँ, ग़म-ए-दो-जहाँ क्यों हो,<br>पा-ए-शिकस्ता रखता हूँ, दस्त-ए-रवां क्यों हो।<br>हम को मिटा सके ये ज़माने में दम नहीं,<br>हम से ज़माना खुद है, ज़माने से हम नहीं। 😎🔥👑", cat: "attitude" },
    { text: "بندہ پروردگار ہوں غم دو جہاں کیوں ہو<br>پاے شکستہ رکھتا ہوں دست رواں کیوں ہو<br>ہم کو مٹا سکے یہ زمانے میں دم نہیں<br>ہم سے زمانہ خود ہے زمانے سے ہم نہیں۔ 😎🔥👑", cat: "attitude" },

    { text: "Har ek baat pe kehte ho tum ki 'tu kya hai',<br>Tum hi kaho ki ye andaz-e-guftagu kya hai.<br>Ragon mein daurte firne ke hum nahi qaail,<br>Jab aankh hi se na tapka toh phir lahu kya hai. 🔥😏💪", cat: "attitude" },
    { text: "हर एक बात पे कहते हो तुम कि 'तू क्या है',<br>तुम ही कहो कि ये अंदाज़-ए-गुफ्तगू क्या है।<br>रगों में दौड़ते फिरने के हम नहीं क़ायल,<br>जब आँख ही से न टपका तो फिर लहू क्या है। 🔥😏💪", cat: "attitude" },
    { text: "ہر ایک بات پہ کہتے ہو تم کہ تو کیا ہے<br>تم ہی کہو کہ یہ انداز گفتگو کیا ہے<br>رگوں میں دوڑتے پھرنے کے ہم نہیں قائل<br>جب آنکھ ہی سے نہ ٹپکا تو پھر لہو کیا ہے۔ 🔥😏💪", cat: "attitude" },

    { text: "Hoga koi aisa jo hamara hamsar hoga,<br>Hum wo hain jinka koi na doosra dar hoga.<br>Ghalib burra na maan jo waiz bura kahe,<br>Aisa bhi koi hai ki sab accha kahein jise. 👑💯🔥", cat: "attitude" },
    { text: "होगा कोई ऐसा जो हमारा हमसर होगा,<br>हम वो हैं जिनका कोई न दूसरा दर होगा।<br>ग़ालिब बुरा न मान जो वाइज़ बुरा कहे,<br>ऐसा भी कोई है कि सब अच्छा कहें जिसे। 👑💯🔥", cat: "attitude" },
    { text: "ہوگا کوئی ایسا جو ہمارا ہمسر ہوگا<br>ہم وہ ہیں جن کا کوئی نہ دوسرا در ہوگا<br>غالب برا نہ مان جو واعظ برا کہے<br>ایسا بھی کوئی ہے کہ سب اچھا کہیں جسے۔ 👑💯🔥", cat: "attitude" },

    { text: "Duniya ke sitam yaad na apni hi wafa yaad,<br>Ab mujhko nahi kuch bhi tere bina yaad.<br>Ghalib nadeem-e-dost se aati hai boo-e-dost,<br>Mashghool-e-haq hoon bandagi-e-boot-turab mein. 📜🔥👑", cat: "attitude" },
    { text: "दुनिया के सितम याद न अपनी ही वफ़ा याद,<br>अब मुझको नहीं कुछ भी तेरे बिना याद।<br>ग़ालिब नदीम-ए-दोस्त से आती है बू-ए-दोस्त,<br>मशगूल-ए-हक़ हूँ बंदगी-ए-बुत-तुराब में। 📜🔥👑", cat: "attitude" },
    { text: "دنیا کے ستم یاد نہ اپنی ہی وفا یاد<br>اب مجھ کو نہیں کچھ بھی تیرے بنا یاد<br>غالب ندیم دوست سے آتی ہے بوئے دوست<br>مشغول حق ہوں بندگی بت تراب میں۔ 📜🔥👑", cat: "attitude" },

    { text: "Poochte hain wo ki Ghalib kaun hai,<br>Koi batlao ki hum batlayein kya.<br>Rehtiye ab aisi jagah chalkar jahan koi na ho,<br>Humsukhan koi na ho aur ham-zaban koi na ho. 😎🚶‍♂️🔇", cat: "attitude" },
    { text: "पूछते हैं वो कि ग़ालिब कौन है,<br>कोई बतलाओ कि हम बतलायें क्या।<br>रहिये अब ऐसी जगह चलकर जहाँ कोई न हो,<br>हमसुख़न कोई न हो और हम-ज़बाँ कोई न हो। 😎🚶‍♂️🔇", cat: "attitude" },
    { text: "پوچھتے ہیں وہ کہ غالب کون ہے<br>کوئی بتلاؤ کہ ہم بتلائیں کیا<br>رہئے اب ایسی جگہ چل کر جہاں کوئی نہ ہو<br>ہمسخن کوئی نہ ہو اور ہمزباں کوئی نہ ہو۔ 😎🚶‍♂️🔇", cat: "attitude" },
      { text: "Hamari qadar karega zamana ek din,<br>Bas zara hamari mitti ko thikana toh milne do.<br>Mat kar khaak ke putle pe itna guroor ae insaan,<br>Jab wo hi nahi raha toh teri auqat kya hai. 😎🔥🦁", cat: "attitude" },
    { text: "हमारी क़दर करेगा ज़माना एक दिन,<br>बस ज़रा हमारी मिट्टी को ठिकाना तो मिलने दो।<br>मत कर खाक के पुतले पे इतना गुरूर ऐ इंसान,<br>जब वो ही नहीं रहा तो तेरी औकात क्या है। 😎🔥🦁", cat: "attitude" },
    { text: "ہماری قدر کرے گا زمانہ ایک دن<br>بس ذرا ہماری مٹی کو ٹھکانہ تو ملنے دو<br>مت کر خاک کے پتلے پہ اتنا غرور اے انسان<br>جب وہ ہی نہیں رہا تو تیری اوقات کیا ہے۔ 😎🔥🦁", cat: "attitude" },

    { text: "Shayad mujhe nikaal kar pachtayein aap bhi,<br>Main us mehfil ki rounaq tha jo ab bikhri padi hai.<br>Mera ye sar bhale hi kat jaye zamane ke aage,<br>Magar ye kabhi kisi ke aage jhuk nahi sakta. 👑🔥💯", cat: "attitude" },
    { text: "शायद मुझे निकाल कर पछताएं आप भी,<br>मैं उस महफ़िल की रौनक़ था जो अब बिखरी पड़ी है।<br>मेरा ये सर भले ही कट जाए ज़माने के आगे,<br>मगर ये कभी किसी के आगे झुक नहीं सकता। 👑🔥💯", cat: "attitude" },
    { text: "شاید مجھے نکال کر پچھتائیں آپ بھی<br>میں اس محفل کی رونق تھا جو اب بکھری پڑی ہے<br>میرا یہ سر بھلے ہی کٹ جائے زمانے کے آگے<br>مگر یہ کبھی کسی کے آگے جھک نہیں سکتا۔ 👑🔥💯", cat: "attitude" },

    { text: "Hum ko khareedne ki koshish mat kar ae duniya,<br>Hum apni qismat khud likhne ka hunar rakhte hain.<br>Jo log hamare raste mein kaante bichate hain,<br>Hum unhi kaanton par chalkar jeetna jaante hain. 😎💥💪", cat: "attitude" },
    { text: "हम को खरीदने की कोशिश मत कर ऐ दुनिया,<br>हम अपनी किस्मत खुद लिखने का हुनर रखते हैं।<br>जो लोग हमारे रास्ते में कांटे बिछाते हैं,<br>हम उन्हीं कांटों पर चलकर जीतना जानते हैं। 😎💥💪", cat: "attitude" },
    { text: "ہم کو خریدنے کی کوشش مت کر اے دنیا<br>ہم اپنی قسمت خود لکھنے کا ہنر رکھتے ہیں<br>جو لوگ ہمارے راستے میں کانٹے بچھاتے ہیں<br>ہم انہی کانٹوں پر چل کر جیتنا جانتے ہیں۔ 😎💥💪", cat: "attitude" },

    { text: "Nahi hai na-umeed 'Iqbal' apni kheti-e-veeran se,<br>Zara num ho toh ye mitti badi zarkhez hai saaqi.<br>Khudi ko kar buland itna ki har taqdeer se pehle,<br>Khuda bande se khud pooche bata teri raza kya hai. 👑🔥✨", cat: "attitude" },
    { text: "नहीं है ना-उम्मीद 'इक़बाल' अपनी खेती-ए-वीरां से,<br>ज़रा नम हो तो ये मिट्टी बड़ी ज़रखेज़ है साक़ी।<br>खुदी को कर बुलंद इतना कि हर तक़दीर से पहले,<br>खुदा बंदे से खुद पूछे बता तेरी रज़ा क्या है। 👑🔥✨", cat: "attitude" },
    { text: "نہیں ہے نا امید اقبال اپنی کھیتی ویراں سے<br>ذرا نم ہو تو یہ مٹی بڑی زرخیز ہے ساقی<br>خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے<br>خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے۔ 👑🔥✨", cat: "attitude" },

    { text: "Apne se munsalik hai mera garoor-e-zaat,<br>Main kisi aur ke sahare jeena nahi jaanta.<br>Ye jo duniya mujhe jhukane ki baat karti hai,<br>Shayad ye mere hoslon ka rukh nahi jaanti. 😎🦁💯", cat: "attitude" },
    { text: "अपने से मुन्सलिक है मेरा गरूर-ए-ज़ात,<br>मैं किसी और के सहारे जीना नहीं जानता।<br>ये जो दुनिया मुझे झुकाने की बात करती है,<br>शायद ये मेरे हौसलों का रुख नहीं जानती। 😎🦁💯", cat: "attitude" },
    { text: "اپنے سے منسلک ہے میرا غرورِ ذات<br>میں کسی اور کے سہارے جینا نہیں جانتا<br>یہ جو دنیا مجھے جھکانے کی بات کرتی ہے<br>شاید یہ میرے حوصلوں کا رخ نہیں جانتی۔ 😎🦁💯", cat: "attitude" },
      { text: "Khudi ko kar buland itna ki har taqdeer se pehle,<br>Khuda bande se khud pooche bata teri raza kya hai.<br>Sitaron se aage jahan aur bhi hain,<br>Abhi ishq ke imtihan aur bhi hain. 🦅🔥✨", cat: "attitude" },
    { text: "खुदी को कर बुलंद इतना कि हर तक़दीर से पहले,<br>खुदा बंदे से खुद पूछे बता तेरी रज़ा क्या है।<br>सितारों से आगे जहाँ और भी हैं,<br>अभी इश्क़ के इम्तिहाँ और भी हैं। 🦅🔥✨", cat: "attitude" },
    { text: "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے<br>خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے<br>ستاروں سے آگے جہاں اور بھی ہیں<br>ابھی عشق کے امتحان اور بھی ہیں۔ 🦅🔥✨", cat: "attitude" },

    { text: "Ragon mein daurte firne ke hum nahi qaail,<br>Jab aankh hi se na tapka toh phir lahu kya hai.<br>Poochte hain wo ki Ghalib kaun hai,<br>Koi batlao ki hum batlayein kya. 😎🔥📜", cat: "attitude" },
    { text: "रगों में दौड़ते फिरने के हम नहीं क़ायल,<br>जब आँख ही से न टपका तो फिर लहू क्या है।<br>पूछते हैं वो कि ग़ालिब कौन hai,<br>कोई बतलाओ कि हम बतलायें क्या। 😎🔥📜", cat: "attitude" },
    { text: "رگوں میں دوڑتے پھرنے کے ہم نہیں قائل<br>جب آنکھ ہی سے نہ ٹپکا تو پھر لہو کیا ہے<br>پوچھتے ہیں وہ کہ غالب کون ہے<br>کوئی بتلاؤ کہ ہم بتلائیں کیا ۔ 😎🔥📜", cat: "attitude" },

    { text: "Hum ko mita sake ye zamane mein dum nahi,<br>Hum se zamana khud hai zamane se hum nahi.<br>Hazaaron khwahishein aisi ke har khwahish pe dum nikle,<br>Bohot nikle mere armaan lekin phir bhi kam nikle. 👑🔥💯", cat: "attitude" },
    { text: "हम को मिटा सके ये ज़माने में दम नहीं,<br>हम से ज़माना खुद है ज़माने से हम नहीं।<br>हज़ारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले,<br>बहुत निकले मेरे अरमान लेकिन फिर भी कम निकले। 👑🔥💯", cat: "attitude" },
    { text: "ہم کو مٹا سکے یہ زمانے میں دم نہیں<br>ہم سے زمانہ خود ہے زمانے سے ہم نہیں<br>ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے<br>بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے۔ 👑🔥💯", cat: "attitude" },

    { text: "Main bhi bohot ajeeb hoon itna ajeeb hoon ki bas,<br>Khud ko tabaah kar liya aur malaal bhi nahi.<br>Jo guzaari na ja saki humse,<br>Humne wo zindagi guzaari hai. 🥀🌑🚬", cat: "attitude" },
    { text: "मैं भी बहुत अजीब हूँ इतना अजीब हूँ कि बस,<br>खुद को तबाह कर लिया और मलाल भी नहीं।<br>जो गुज़ारी न जा सकी हमसे,<br>हमने वो ज़िन्दगी गुज़ारी है। 🥀🌑🚬", cat: "attitude" },
    { text: "میں بھی بہت عجیب ہوں اتنا عجیب ہوں کہ بس<br>خود کو تباہ کر لیا اور ملال بھی نہیں<br>جو گزاری نہ جا سکی ہم سے<br>ہم نے وہ زندگی گزاری ہے۔ 🥀🌑🚬", cat: "attitude" },

    { text: "Hoga koi aisa jo hamara hamsar hoga,<br>Hum wo hain jinka koi na doosra dar hoga.<br>Dil-e-nadan tujhe hua kya hai,<br>Aakhir is dard ki dawa kya hai. 👑📜✨", cat: "attitude" },
    { text: "होगा कोई ऐसा जो हमारा हमसर होगा,<br>हम वो हैं जिनका कोई न दूसरा दर होगा।<br>दिल-ए-नादान तुझे हुआ क्या है,<br>आख़िर इस दर्द की दवा क्या है। 👑📜✨", cat: "attitude" },
    { text: "ہوگا کوئی ایسا جو ہمارا ہمسر ہوگا<br>ہم وہ ہیں جن کا کوئی نہ دوسرا در ہوگا<br>دلِ ناداں تجھے ہوا کیا ہے<br>آخر اس درد کی دوا کیا ہے۔ 👑📜✨", cat: "attitude" },
    { text: "Hamare jeene ka tarika thoda alag hai,<br>Hum umeed par nahi, apni zid par jeete hain.<br>Jo log humein girane ki koshish karte hain,<br>Hum unhi ke sar par pair rakh kar aage badhte hain. 😎🔥👟", cat: "attitude" },
    { text: "हमारे जीने का तरीका थोड़ा अलग है,<br>हम उम्मीद पर नहीं, अपनी ज़िद पर जीते हैं।<br>जो लोग हमें गिराने की कोशिश करते हैं,<br>हम उन्हीं के सर पर पैर रख कर आगे बढ़ते हैं। 😎🔥👟", cat: "attitude" },
    { text: "ہمارے جینے کا طریقہ تھوڑا الگ ہے<br>ہم امید پر نہیں اپنی ضد پر جیتے ہیں<br>جو لوگ ہمیں گرانے کی کوشش کرتے ہیں<br>ہم انہی کے سر پر پیر رکھ کر آگے بڑھتے ہیں۔ 😎🔥👟", cat: "attitude" },

    { text: "Duniya kya sochegi ye hum nahi sochte,<br>Hum wo hain jo dushmano ko bhi rasta nahi dete.<br>Sher ka bacha hoon, shikar karna aata hai,<br>Kutte kitna bhi bhaunkein, hum palat kar jawab nahi dete. 🦁🔥💥", cat: "attitude" },
    { text: "दुनिया क्या सोचेगी ये हम नहीं सोचते,<br>हम वो हैं जो दुश्मनों को भी रास्ता नहीं देते।<br>शेर का बच्चा हूँ, शिकार करना आता है,<br>कुत्ते कितना भी भौंकें, हम पलट कर जवाब नहीं देते। 🦁🔥💥", cat: "attitude" },
    { text: "دنیا کیا سوچے گی یہ ہم نہیں سوچتے<br>ہم وہ ہیں جو دشمنوں کو بھی راستہ نہیں دیتے<br>شیر کا بچہ ہوں شکار کرنا آتا ہے<br>کتے کتنا بھی بھونکیں ہم پلٹ کر جواب نہیں دیتے۔ 🦁🔥💥", cat: "attitude" },

    { text: "Meri khamoshi ko meri kamzori mat samajh,<br>Kyunki toofan aane se pehle aksar sannata hota hai.<br>Jis din humne apna andaz badal liya,<br>Us din se logon ka waqt badal jayega. 😎🌪️⚔️", cat: "attitude" },
    { text: "मेरी खामोशी को मेरी कमज़ोरी मत समझ,<br>क्योंकि तूफान आने से पहले अक्सर सन्नाटा होता है।<br>जिस दिन हमने अपना अंदाज़ बदल लिया,<br>उस दिन से लोगों का वक़्त बदल जायेगा। 😎🌪️⚔️", cat: "attitude" },
    { text: "میری خاموشی کو میری کمزوری مت سمجھ<br>کیونکہ طوفان آنے سے پہلے اکثر سناٹا ہوتا ہے<br>جس دن ہم نے اپنا انداز بدل لیا<br>اس دن سے لوگوں کا وقت بدل جائے گا۔ 😎🌪️⚔️", cat: "attitude" },

    { text: "Humse dushmani teri auqat se bahar hai,<br>Kyunki hum dushmano ko nahi, unke guroor ko maarte hain.<br>Logon ne sirf hamara naam suna hai,<br>Jis din kaam dekhenge, us din hosh ud jayenge. 🔥😏🚫", cat: "attitude" },
    { text: "हमसे दुश्मनी तेरी औकात से बाहर है,<br>क्योंकि हम दुश्मनों को नहीं, उनके गुरूर को मारते हैं।<br>लोगों ने सिर्फ हमारा नाम सुना है,<br>जिस दिन काम देखेंगे, उस दिन होश उड़ जायेंगे। 🔥😏🚫", cat: "attitude" },
    { text: "ہم سے دشمنی تیری اوقات سے باہر ہے<br>کیونکہ ہم دشمنوں کو نہیں ان کے غرور کو مارتے ہیں<br>لوگوں نے صرف ہمارا نام سنا ہے<br>جس دن کام دیکھیں گے اس دن ہوش اڑ جائیں گے۔ 🔥😏🚫", cat: "attitude" },

    { text: "Akela chalta hoon par kisi ke peeche nahi,<br>Main apni kismat ka raja hoon, kisi ka chela nahi.<br>Jitne tumhare paas dost hain,<br>Utne toh maine dushman paal rakhe hain. 👑🔥🦁", cat: "attitude" },
    { text: "अकेला चलता हूँ पर किसी के पीछे नहीं,<br>मैं अपनी किस्मत का राजा हूँ, किसी का चेला नहीं।<br>जितने तुम्हारे पास दोस्त हैं,<br>उतने तो मैंने दुश्मन पाल रखे हैं। 👑🔥🦁", cat: "attitude" },
    { text: "اکیلا چلتا ہوں پر کسی کے پیچھے نہیں<br>میں اپنی قسمت کا راجہ ہوں کسی کا چیلا نہیں<br>جتنے تمہارے پاس دوست ہیں<br>اتنے تو میں نے دشمن پال رکھے ہیں۔ 👑🔥🦁", cat: "attitude" },
      { text: "Hamari khamoshi par mat jao ae duniya walon,<br>Raakh ke neeche aksar aag dabi hoti hai.<br>Hum jo palat kar jawab nahi dete,<br>Samajh lo tumhari kismat abhi bachi hoti hai. 😎🔥⚡", cat: "attitude" },
    { text: "हमारी खामोशी पर मत जाओ ऐ दुनिया वालों,<br>राख के नीचे अक्सर आग दबी होती है।<br>हम जो पलट कर जवाब नहीं देते,<br>समझ लो तुम्हारी किस्मत अभी बची होती है। 😎🔥⚡", cat: "attitude" },
    { text: "ہماری خاموشی پر مت جاؤ اے دنیا والو<br>راکھ کے نیچے اکثر آگ دبی ہوتی ہے<br>ہم جو پلٹ کر جواب نہیں دیتے<br>سمجھ لو تمہاری قسمت ابھی بچی ہوتی ہے۔ 😎🔥⚡", cat: "attitude" },

    { text: "Duniya kehti hai ki ab badal gaye ho tum,<br>Maine kaha ki purani dastan ab khatam ho gayi.<br>Sher jab piche hat-ta hai toh bhagta nahi,<br>Samajh lo shikar ki tayyari mukammal ho gayi. 🦁🔥💥", cat: "attitude" },
    { text: "दुनिया कहती है कि अब बदल गए हो तुम,<br>मैंने कहा कि पुरानी दास्तां अब खत्म हो गयी।<br>शेर जब पीछे हटता है तो भागता नहीं,<br>समझ लो शिकार की तैयारी मुकम्मल हो गयी। 🦁🔥💥", cat: "attitude" },
    { text: "دنیا کہتی ہے کہ اب بدل گیا ہے تو<br>میں نے کہا کہ پرانی داستاں اب ختم ہو گئی<br>شیر جب پیچھے ہٹتا ہے تو بھاگتا نہیں<br>سمجھ لو شکار کی تیاری مکمل ہو گئی۔ 🦁🔥💥", cat: "attitude" },

    { text: "Aukaat ki baat mat kar ae nadaan dost,<br>Hum toh un ragon mein daurte hain jo tere kabze mein nahi.<br>Humein jhukane ki koshish karne wale dher ho gaye,<br>Kyunki hamara thikana un raahon mein nahi. 👑🔥🦁", cat: "attitude" },
    { text: "औकात की बात मत कर ऐ नादान दोस्त,<br>हम तो उन रगों में दौड़ते हैं जो तेरे कब्ज़े में नहीं।<br>हमें झुकाने की कोशिश करने वाले ढेर हो गए,<br>क्योंकि हमारा ठिकाना उन राहों में नहीं। 👑🔥🦁", cat: "attitude" },
    { text: "اوقات کی بات مت کر اے نادان دوست<br>ہم تو ان رگوں میں دوڑتے ہیں جو تیرے قبضے میں نہیں<br>ہمیں جھکانے کی کوشش کرنے والے ڈھیر ہو گئے<br>کیونکہ ہمارا ٹھکانہ ان راہوں میں نہیں۔ 👑🔥🦁", cat: "attitude" },

    { text: "Hamara naam hi kaafi hai tujhe darane ke liye,<br>Hum khud nahi aate apni dehshat jagane ke liye.<br>Log hamari ek jhalak ko taraste hain,<br>Hum wo nahi jo mil jayein har kisi ko dikhane ke liye. 😎🔥💯", cat: "attitude" },
    { text: "हमारा नाम ही काफी है तुझे डराने के लिए,<br>हम खुद नहीं आते अपनी दहशत जगाने के लिए।<br>लोग हमारी एक झलक को तरसते हैं,<br>हम वो नहीं जो मिल जायें हर किसी को दिखाने के लिए। 😎🔥💯", cat: "attitude" },
    { text: "ہمارا نام ہی کافی ہے تجھے ڈرانے کے لیے<br>ہم خود نہیں آتے اپنی دہشت جگانے کے لیے<br>لوگ ہماری ایک جھلک کو ترستے ہیں<br>ہم وہ نہیں جو مل جائیں ہر کسی کو دکھانے کے لیے۔ 😎🔥💯", cat: "attitude" },

    { text: "Humse jalne wale jalte rahein maza aata hai,<br>Kyunki hamara har din unhe naya dard de jata hai.<br>Hum apni masti mein jeete hain nawabo ki tarah,<br>Humein harana tumhare bas ki baat nahi aata hai. 😎👑🔱", cat: "attitude" },
    { text: "हमसे जलने वाले जलते रहें मज़ा आता है,<br>क्योंकि हमारा हर दिन उन्हें नया दर्द दे जाता है।<br>हम अपनी मस्ती में जीते हैं नवाबों की तरह,<br>हमें हराना तुम्हारे बस की बात नहीं आता है। 😎👑🔱", cat: "attitude" },
    { text: "ہم سے جلنے والے جلتے رہیں مزہ آتا ہے<br>کیونکہ ہمارا ہر دن انہیں نیا درد دے جاتا ہے<br>ہم اپنی مستی میں جیتے ہیں نوابوں کی طرح<br>ہمیں ہرانا تمہارے بس کی بات نہیں آتا ہے۔ 😎👑🔱", cat: "attitude" },
      { text: "Khauf hamari aankhon mein nahi, dushman ke dil mein hota hai,<br>Shikari chahe koi bhi ho, raj hamesha sher ka hota hai.<br>Log hamari ek jhalak ke liye taraste hain,<br>Kyunki hum har kisi ke liye mayassar nahi hote. 😎🦁🔥", cat: "attitude" },
    { text: "खौफ़ हमारी आंखों में नहीं, दुश्मन के दिल में होता है,<br>शिकारी चाहे कोई भी हो, राज हमेशा शेर का होता है।<br>लोग हमारी एक झलक के लिए तरसते हैं,<br>क्योंकि हम हर किसी के लिए मयस्सर नहीं होते। 😎🦁🔥", cat: "attitude" },
    { text: "خوف ہماری آنکھوں میں نہیں دشمن کے دل میں ہوتا ہے<br>شکاری چاہے کوئی بھی ہو راج ہمیشہ شیر کا ہوتا ہے<br>لوگ ہماری ایک جھلک کے لیے ترستے ہیں<br>کیونکہ ہم ہر کسی کے لیے میسر نہیں ہوتے۔ 😎🦁🔥", cat: "attitude" },

    { text: "Humse muqabla karne ki sochna bhi mat,<br>Hum haar kar bhi jeetna jaante hain.<br>Tumhari pehchan toh sirf tumhare naam se hai,<br>Hamara toh naam hi pehchan hai. 😎🔱👑", cat: "attitude" },
    { text: "हमसे मुकाबला करने की सोचना भी मत,<br>हम हार कर भी जीतना जानते हैं।<br>तुम्हारी पहचान तो सिर्फ तुम्हारे नाम से है,<br>हमारा तो नाम ही पहचान है। 😎🔱👑", cat: "attitude" },
    { text: "ہم سے مقابلہ کرنے کی سوچنا بھی مت<br>ہم ہار کر بھی جیتنا جانتے ہیں<br>تمہاری پہچان تو صرف تمہارے نام سے ہے<br>ہمارا تو نام ہی پہچان ہے۔ 😎🔱👑", cat: "attitude" },

    { text: "Badshah nahi bazi-gar hain hum,<br>Khel koi bhi ho, palatna jaante hain.<br>Hamari burayi wahi karte hain,<br>Jo hamari barabri nahi kar sakte. 😎💥🃏", cat: "attitude" },
    { text: "बादशाह नहीं बाज़ी-गर हैं हम,<br>खेल कोई भी हो, पलटना जानते हैं।<br>हमारी बुराई वही करते हैं,<br>जो हमारी बराबरी नहीं कर सकते। 😎💥🃏", cat: "attitude" },
    { text: "بادشاہ نہیں بازی گر ہیں ہم<br>کھیل کوئی بھی ہو پلٹنا جانتے ہیں<br>ہماری برائی وہی کرتے ہیں<br>جو ہماری برابری نہیں کر سکتے۔ 😎💥🃏", cat: "attitude" },

    { text: "Aag lagana hamari fitrat mein nahi,<br>Hamari shakhsiyat hi aisi hai ki log jal jaate hain.<br>Jitna tumne socha hai, hum usse kahin zyada hain,<br>Tumhare hosh udane ke liye hamara ek ishara hi kaafi hai. 🔥😏🚫", cat: "attitude" },
    { text: "आग लगाना हमारी फितरत में नहीं,<br>हमारी शख्सियत ही ऐसी है कि लोग जल जाते हैं।<br>जितना तुमने सोचा है, हम उससे कहीं ज़्यादा हैं,<br>तुम्हारे होश उड़ाने के लिए हमारा एक इशारा ही काफी है। 🔥😏🚫", cat: "attitude" },
    { text: "آگ لگانا ہماری فطرت میں نہیں<br>ہماری شخصیت ہی ایسی ہے کہ لوگ جل جاتے ہیں<br>جتنا تم نے سوچا ہے ہم اس سے کہیں زیادہ ہیں<br>تمہارے ہوش اڑانے کے لیے ہمارا ایک اشارہ ہی کافی ہے۔ 🔥😏🚫", cat: "attitude" },

    { text: "Sikka hamara bhi uchlega ek din fazaon mein,<br>Tab tumhari auqat hamari nigaahon mein hogi.<br>Jo log aaj humein dekh kar haste hain,<br>Kal hamari kamyabi unki raahon mein hogi. 😎💰🚀", cat: "attitude" },
    { text: "सिक्का हमारा भी उछलेगा एक दिन फिज़ाओं में,<br>तब तुम्हारी औकात हमारी निगाहों में होगी।<br>जो लोग आज हमें देख कर हँसते हैं,<br>कल हमारी कामयाबी उनकी राहों में होगी। 😎💰🚀", cat: "attitude" },
    { text: "سکہ ہمارا بھی اچھلے گا ایک دن فضاؤں میں<br>تب تمہاری اوقات ہماری نگاہوں میں ہوگی<br>جو لوگ آج ہمیں دیکھ کر ہنستے ہیں<br>کل ہماری کامیابی ان کی راہوں میں ہوگی۔ 😎💰🚀", cat: "attitude" },
      { text: "Humse jalne wale jalte rahein maza aata hai,<br>Kyunki hamara har din unhe naya dard de jata hai.<br>Sher apna rasta khud banata hai,<br>Baki duniya toh bas nakal karna jaanti hai. 😎🔥🦁", cat: "attitude" },
    { text: "हमसे जलने वाले जलते रहें मज़ा आता है,<br>क्योंकि हमारा हर दिन उन्हें नया दर्द दे जाता है।<br>शेर अपना रास्ता खुद बनाता है,<br>बाकी दुनिया तो बस नकल करना जानती है। 😎🔥🦁", cat: "attitude" },
    { text: "ہم سے جلنے والے جلتے رہیں مزہ آتا ہے<br>کیونکہ ہمارا ہر دن انہیں نیا درد دے جاتا ہے<br>شیر اپنا راستہ خود بناتا ہے<br>باقی دنیا تو بس نقل کرنا جانتی ہے۔ 😎🔥🦁", cat: "attitude" },

    { text: "Hamara naam hi kaafi hai tere darane ke liye,<br>Hum khud nahi aate apni dehshat jagane ke liye.<br>Jo log hamare raste mein kaante bichate hain,<br>Hum unhi kaanton par chalkar jeetna jaante hain. 😎🔱💥", cat: "attitude" },
    { text: "हमारा नाम ही काफी है तेरे डराने के लिए,<br>हम खुद नहीं आते अपनी दहशत जगाने के लिए।<br>जो लोग हमारे रास्ते में कांटे बिछाते हैं,<br>हम उन्हीं कांटों पर चलकर जीतना जानते हैं। 😎🔱💥", cat: "attitude" },
    { text: "ہمارا نام ہی کافی ہے تیرے ڈرانے کے لیے<br>ہم خود نہیں آتے اپنی دہشت جگانے کے لیے<br>جو لوگ ہمارے راستے میں کانٹے بچھاتے ہیں<br>ہم انہی کانٹوں پر چل کر جیتنا جانتے ہیں۔ 😎🔱💥", cat: "attitude" },

    { text: "Zindagi se humein koi gila nahi raha,<br>Kyunki humne khud hi kismat ko jhukana sikh liya.<br>Duniya ki kya majal jo humein gira sake,<br>Hum toh wo hain jo gir kar bhi sambhalna jaante hain. 😎👑🔝", cat: "attitude" },
    { text: "ज़िन्दगी से हमें कोई गिला नहीं रहा,<br>क्योंकि हमने खुद ही किस्मत को झुकाना सीख लिया।<br>दुनिया की क्या मजाल जो हमें गिरा सके,<br>हम तो वो हैं जो गिर कर भी संभलना जानते हैं। 😎👑🔝", cat: "attitude" },
    { text: "زندگی سے ہمیں کوئی گلہ نہیں رہا<br>کیونکہ ہم نے خود ہی قسمت کو جھکانا سیکھ لیا<br>دنیا کی کیا مجال جو ہمیں گرا سکے<br>ہم تو وہ ہیں جو گر کر بھی سنبھلنا جانتے ہیں۔ 😎👑🔝", cat: "attitude" },

    { text: "Meri burayi zara sambhal kar karna dosto,<br>Kyunki tumhare apno mein bhi mera hi sikka chalta hai.<br>Hamara andaz hi aisa hai ki log jal jaate hain,<br>Hum jeete hain apni marzi aur apni pehchan se. 😎🔥💯", cat: "attitude" },
    { text: "मेरी बुराई ज़रा संभल कर करना दोस्तों,<br>क्योंकि तुम्हारे अपनों में भी मेरा ही सिक्का चलता है।<br>हमारा अंदाज़ ही ऐसा है कि लोग जल जाते हैं,<br>हम जीते हैं अपनी मर्जी और अपनी पहचान से। 😎🔥💯", cat: "attitude" },
    { text: "میری برائی ذرا سنبھل کر کرنا دوستو<br>کیونکہ تمہارے اپنوں میں بھی میرا ہی سکہ چلتا ہے<br>ہمارا انداز ہی ایسا ہے کہ لوگ جل جاتے ہیں<br>ہم جیتے ہیں اپنی مرضی اور اپنی پہچان سے۔ 😎🔥💯", cat: "attitude" },

    { text: "Waqt aane do jawab bhi denge aur hisab bhi lenge,<br>Abhi toh bas khel shuru hua hai, poora maidan bhi lenge.<br>Hum toh wo parinde hain jo aag mein bhi udte hain,<br>Humein pinjron mein rehna bhata nahi. 😎🦅🔥", cat: "attitude" },
    { text: "वक़्त आने दो जवाब भी देंगे और हिसाब भी लेंगे,<br>अभी तो बस खेल शुरू हुआ है, पूरा मैदान भी लेंगे।<br>हम तो वो परिंदे हैं जो आग में भी उड़ते हैं,<br>हमें पिंजरों में रहना भाता नहीं। 😎🦅🔥", cat: "attitude" },
    { text: "وقت آنے دو جواب بھی دیں گے اور حساب بھی لیں گے<br>ابھی تو بس کھیل شروع ہوا ہے پورا میدان بھی لیں گے<br>ہم تو وہ پرندے ہیں جو آگ میں بھی اڑتے ہیں<br>ہمیں پنجروں میں رہنا بھاتا نہیں ۔ 😎🦅🔥", cat: "attitude" },
      { text: "Zindagi se yahi gila hai humein,<br>Tu bohot dair se mila hai humein.<br>Humsafar saath toh chale lekin,<br>Waqt ne kab mauka diya hai humein. ✨🥀📜", cat: "all" },
    { text: "ज़िन्दगी से यही गिला है हमें,<br>तू बहुत देर से मिला है हमें।<br>हमसफ़र साथ तो चले लेकिन,<br>वक़्त ने कब मौका दिया है हमें। ✨🥀📜", cat: "all" },
    { text: "زندگی سے یہی گلہ ہے ہمیں<br>تو بہت دیر سے ملا ہے ہمیں<br>ہم سفر ساتھ تو چلے لیکن<br>وقت نے کب موقع دیا ہے ہمیں ✨🥀📜", cat: "all" },

    { text: "Mohabbat mein koi shart nahi hoti,<br>Har kisi ki kismat mein ye nemat nahi hoti.<br>Humne toh tumhein bin maange hi paa liya thha,<br>Par shayad hamari chahat mein koi barkat nahi hoti. ❤️🤲🥀", cat: "all" },
    { text: "मोहब्बत में कोई शर्त नहीं होती,<br>हर किसी की किस्मत में ये नेमत नहीं होती।<br>हमने तो तुम्हें बिन मांगे ही पा लिया था,<br>पर शायद हमारी चाहत में कोई बरकत नहीं होती। ❤️🤲🥀", cat: "all" },
    { text: "محبت میں کوئی شرط نہیں ہوتی<br>ہر کسی کی قسمت میں یہ نعمت نہیں ہوتی<br>ہم نے تو تمہیں بن مانگے ہی پا لیا تھا<br>پر شاید ہماری چاہت میں کوئی برکت نہیں ہوتی ❤️🤲🥀", cat: "all" },

    { text: "Waqt aane do jawab bhi denge aur hisab bhi lenge,<br>Abhi toh bas khel shuru hua hai, pura maidan bhi lenge. 😎🦅🔥", cat: "attitude" },
    { text: "Hamari khamoshi ko hamari kamzori mat samajhna,<br>Hum wahan khade hote hain jahan log rasta bhool jate hain. 👑🔥✨", cat: "attitude" },

    { text: "Ab toh akelepan se dosti ho gayi hai,<br>Ab mehfilon ki zarurat nahi rahi. 💔🌑🥀", cat: "sad" },
    { text: "Jinhe humne apna samjha, unhone hi sikhaya,<br>Ki is duniya mein koi apna nahi hota. 💔🥀🍂", cat: "sad" },
      { text: "Khudi ko kar buland itna ke har taqdeer se pehle,<br>Khuda bande se khud pooche bata teri raza kya hai. 🦁✨🦅", cat: "all" },
    { text: "खुदी को कर बुलंद इतना कि हर तक़दीर से पहले,<br>ख़ुदा बंदे से खुद पूछे बता तेरी रज़ा क्या है। 🦁✨🦅", cat: "all" },
    { text: "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے<br>خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے 🦁✨🦅", cat: "all" },

    { text: "Sitaron se aage jahan aur bhi hain,<br>Abhi ishq ke imtihan aur bhi hain.<br>Tu shaheen hai parwaz hai kaam tera,<br>Tere samne aasman aur bhi hain. 🌌🚀🦅", cat: "all" },
    { text: "सितारों से आगे जहाँ और भी हैं,<br>अभी इश्क़ के इम्तिहाँ और भी हैं।<br>तू शाहीं है परवाज़ है काम तेरा,<br>तेरे सामने आसमाँ और भी हैं। 🌌🚀🦅", cat: "all" },
    { text: "ستاروں سے آگے جہاں اور بھی ہیں<br>ابھی عشق کے امتحان اور بھی ہیں<br>تو شاہیں ہے پرواز ہے کام تیرا<br>تیرے سامنے آسماں اور بھی ہیں 🌌🚀🦅", cat: "all" },

    { text: "Meri himmat ko parakhne ki galti mat karna,<br>Pehle bhi kai tufan ka rukh mod chuka hoon. 😎🔥🚩", cat: "attitude" },
    { text: "Hum apna rasta khud banate hain,<br>Bheed ka hissa banna hamari fitrat mein nahi. 🦁👑🔥", cat: "attitude" },

    { text: "Mohabbat ki dastan ab khatam hi samjho,<br>Ek mod aisa aaya ke dono juda ho gaye. 💔🥀🍂", cat: "sad" },
    { text: "Dard ki bhi apni ek ada hai,<br>Sahan karne wale par fida hai. 💔🌑🥀", cat: "sad" },

    { text: "Kitna ajeeb hai ye silsila mohabbat ka,<br>Koi mil kar bichad gaya, koi bichad kar mil gaya. ❤️✨🥀", cat: "love" },
    { text: "Tumhari ek muskurahat hi kafi hai,<br>Mere har dard ko bhulane ke liye. ❤️🌸✨", cat: "love" },
      { text: "Na hamsafar na kisi humnasheen se nikle ga,<br>Hamare paon ka kanta hami se nikle ga. ✨🚶‍♂️🌵", cat: "all" },
    { text: "ना हमसफ़र ना किसी हमनशीं से निकलेगा,<br>हमारे पाँव का काँटा हमीं से निकलेगा। ✨🚶‍♂️🌵", cat: "all" },
    { text: "نہ ہمسفر نہ کسی ہمنشیں سے نکلے گا<br>ہمارے پاؤں کا کانٹا ہمیں سے نکلے گا ✨🚶‍♂️🌵", cat: "all" },

    { text: "Dil se teri nigaah jigar tak utar gayi,<br>Dono ko ek adaa mein raza-mand kar gayi. ❤️✨🎯", cat: "all" },
    { text: "दिल से तेरी निगाह जिगर तक उतर गई,<br>दोनों को एक अदा में रजामंद कर गई। ❤️✨🎯", cat: "all" },
    { text: "دل سے تیری نگاہ جگر تک اتر گئی<br>دونوں کو ایک ادا میں رضا مند کر گئی ❤️✨🎯", cat: "all" },

    { text: "Sher khud apni taqat se raja kahlata hai,<br>Jungle mein chunte huye vote nahi hote. 🦁👑🔥", cat: "attitude" },
    { text: "Hamari sharafat ka fayda uthana band kar do,<br>Jis din hum badmash ho gaye, qayamat aa jayegi. 😎🔥🧨", cat: "attitude" },

    { text: "Kanch jaise hote hain hum jaise tute huye log,<br>Kabhi chubh jate hain toh kabhi chamak jate hain. 💔✨💎", cat: "sad" },
    { text: "Ab kiske liye royein is sheher-e-khamoshan mein,<br>Sabne apne apne chehre par mukhote pehen rakhe hain. 💔🎭🌑", cat: "sad" },

    { text: "Suno... tum meri woh khwahish ho,<br>Jo main har dua mein mangta hoon. ❤️🤲✨", cat: "love" },
    { text: "Bas ek tera sath chahiye,<br>Zindagi bitane ke liye nahi, balki har pal jine ke liye. ❤️🌸🌹", cat: "love" },

    { text: "Zindagi ki asli udaan abhi baaki hai,<br>Zindagi ke kai imtihan abhi baaki hain. 🚀🔥🎯", cat: "all" },
    { text: "ज़िन्दगी की असली उड़ान अभी बाकी है,<br>ज़िन्दगी के कई इम्तिहान अभी बाकी हैं। 🚀🔥🎯", cat: "all" },
    { text: "زندگی کی اصلی اڑان ابھی باقی ہے<br>زندگی کے کئی امتحان ابھی باقی ہیں 🚀🔥🎯", cat: "all" },
      { text: "Duniya ki bheed mein khud ko na khona,<br>Mushkil ho rasta toh bhi peeche na hona. 🚀🔥✨", cat: "all" },
    { text: "दुनिया की भीड़ में खुद को न खोना,<br>मुश्किल हो रास्ता तो भी पीछे न होना। 🚀🔥✨", cat: "all" },
    { text: "دنیا کی بھیڑ میں خود کو نہ کھونا<br>مشکل ہو راستہ تو بھی پیچھے نہ ہونا 🚀🔥✨", cat: "all" },

    { text: "Manzil milegi, bhatak kar hi sahi,<br>Gumrah toh woh hain jo ghar se nikle hi nahi. ✨🚶‍♂️🎯", cat: "all" },
    { text: "मंजिल मिलेगी, भटक कर ही सही,<br>गुमराह तो वो हैं जो घर से निकले ही नहीं। ✨🚶‍♂️🎯", cat: "all" },
    { text: "منزل ملے گی بھٹک کر ہی سہی<br>گمراہ تو وہ ہیں جو گھر سے نکلے ہی نہیں ✨🚶‍♂️🎯", cat: "all" },

    { text: "Hum kismat ke bharose nahi baithte,<br>Hum apni kismat khud likhne ka dum rakhte hain. 😎🔥👑", cat: "attitude" },
    { text: "Zulm ke khilaf meri awaaz hi kafi hai,<br>Dushmanon ke liye mera naam hi kafi hai. 🐯🔥💥", cat: "attitude" },

    { text: "Waqt sabka badalta hai,<br>Aaj tumhara hai, kal mera hoga. ⏳🔥👊", cat: "attitude" },

    { text: "Udaas kar deti hai har roz ye sham mujhe,<br>Lagta hai bhul raha hai koi dheere dheere mujhe. 💔🌑🥀", cat: "sad" },
    { text: "Humne toh ek hi shakhs par mohabbat khatam kar di,<br>Ab mohabbat kisi se ho, ye mumkin nahi raha. 💔🍂🥀", cat: "sad" },

    { text: "Zindagi mein bas tera sath chahiye,<br>Hathon mein tera hath chahiye. ❤️🌸✨", cat: "love" },
    { text: "Ek baar dekh lo mohabbat se,<br>Sari duniya bhula denge hum. ❤️🌹✨", cat: "love" },

    { text: "Nazar nazaara mangti hai, dil dildaar mangta hai,<br>Har kisi ki apni pasand hai, koi sukoon toh koi pyar mangta hai. ✨❤️🍃", cat: "all" },
    { text: "नज़र नज़ारा माँगती है, दिल दिलदार माँगता है,<br>हर किसी की अपनी पसंद है, कोई सुकून तो कोई प्यार माँगता है। ✨❤️🍃", cat: "all" },
    { text: "نظر نظارہ مانگتی ہے، دل دلدار مانگتا ہے<br>ہر کسی کی اپنی پسند ہے، کوئی سکون تو کوئی پیار مانگتا ہے ✨❤️🍃", cat: "all" },
      { text: "Hazaaron khwahishein aisi ke har khwahish pe dum nikle,<br>Bohot nikle mere armaan lekin phir bhi kam nikle.<br>Nikalna khuld se aadam ka sunte aaye hain lekin,<br>Bohot be-abru hokar tere kooche se hum nikle. ✨🏛️📜", cat: "all" },
    { text: "हज़ारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले,<br>बहुत निकले मेरे अरमान लेकिन फिर भी कम निकले।<br>निकलना खुल्द से आदम का सुनते आए हैं लेकिन,<br>बहुत बे-आबरू होकर तेरे कूचे से हम निकले। ✨🏛️📜", cat: "all" },
    { text: "ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے<br>بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے<br>نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن<br>بہت بے آبرو ہو کر تیرے کوچے سے ہم نکلے ✨🏛️📜", cat: "all" },

    { text: "Dekh toh dil ke jaan se uthta hai,<br>Ye dhuan kahan se uthta hai.<br>Gor kis dil jale ki hai ye falak,<br>Shola ek is makaan se uthta hai. 🥀🔥🌑", cat: "all" },
    { text: "देख तो दिल के जाँ से उठता है,<br>ये धुआँ कहाँ से उठता है।<br>गोर किस दिल जले की है ये फ़लक,<br>शोला एक इस मकान से उठता है। 🥀🔥🌑", cat: "all" },
    { text: "دیکھ تو دل کہ جاں سے اٹھتا ہے<br>یہ دھواں کہاں سے اٹھتا ہے<br>گور کس دل جلے کی ہے یہ فلک<br>شعلہ ایک اس مکاں سے اٹھتا ہے 🥀🔥🌑", cat: "all" },

    { text: "Lagta nahi hai dil mera ujde dayar mein,<br>Kiski bani hai aalam-e-na-payedar mein.<br>Kitna hai bad-naseeb 'Zafar' dafn ke liye,<br>Do gaz zameen bhi na mili koo-e-yaar mein. 🏚️🥀📜", cat: "all" },
    { text: "लगता नहीं है दिल मेरा उजड़े दयार में,<br>किसकी बनी है आलम-ए-ना-पायदार में।<br>कितना है बद-नसीब 'ज़फ़र' दफ़्न के लिए,<br>दो गज़ ज़मीन भी न मिली कू-ए-यार में। 🏚️🥀📜", cat: "all" },
    { text: "لگتا نہیں ہے دل میرا اجڑے دیار میں<br>کس کی بنی ہے عالمِ نا پائیدار میں<br>کتنا ہے بدنصیب ظفر دفن کے لئے<br>دو گز زمین بھی نہ ملی کوئے یار میں 🏚️🥀📜", cat: "all" },

    { text: "Sitaron se aage jahan aur bhi hain,<br>Abhi ishq ke imtihan aur bhi hain.<br>Isi roz-o-shab mein ulajh kar na reh ja,<br>Ke tere zaman-o-makan aur bhi hain. 🌌🚀🦅", cat: "all" },
    { text: "सितारों से आगे जहाँ और भी हैं,<br>अभी इश्क़ के इम्तिहाँ और भी हैं।<br>इसी रोज़-ओ-शब में उलझ कर न रह जा,<br>कि तेरे ज़मान-ओ-मक़ान और भी हैं। 🌌🚀🦅", cat: "all" },
    { text: "ستاروں سے آگے جہاں اور بھی ہیں<br>ابھی عشق کے امتحان اور بھی ہیں<br>اسی روز و شب میں الجھ کر نہ رہ جا<br>کہ تیرے زمان و مکاں اور بھی ہیں 🌌🚀🦅", cat: "all" },

    { text: "Hum ko mita sake ye zamane mein dam nahi,<br>Hum se zamana khud hai, zamane se hum nahi. 😎🔥🦁", cat: "attitude" },

    { text: "Dard minnat-kash-e-dawa na hua,<br>Main na accha hua, bura na hua. 💔🥀🍂", cat: "sad" },
      { text: "Ranjish hi sahi dil hi dukhane ke liye aa,<br>Aa phir se mujhe chhod ke jaane ke liye aa.<br>Pehle se marasim na sahi phir bhi kabhi toh,<br>Rasm-o-rah-e-duniya hi nibhane ke liye aa. 🥀📜✨", cat: "all" },
    { text: "रंजिश ही सही दिल ही दुखाने के लिए आ,<br>आ फिर से मुझे छोड़ के जाने के लिए आ।<br>पहले से मरासिम न सही फिर भी कभी तो,<br>रस्म-ओ-राह-ए-दुनिया ही निभाने के लिए आ। 🥀📜✨", cat: "all" },
    { text: "رنجش ہی سہی دل ہی دکھانے کے لئے آ<br>آ پھر سے مجھے چھوڑ کے جانے کے لئے آ<br>پہلے سے مراسم نہ سہی پھر بھی کبھی تو<br>رسم و راہِ دنیا ہی نبھانے کے لئے آ 🥀📜✨", cat: "all" },

    { text: "Duniya ke sitam yaad na apni hi wafa yaad,<br>Ab mujhko nahi kuch bhi tere pyar ke siwa yaad.<br>Jab koi haseen mukhda nazar aata hai mujhko,<br>Aa jati hai ek bhuli hui dastan-e-wafa yaad. ✨❤️📜", cat: "all" },
    { text: "दुनिया के सितम याद न अपनी ही वफ़ा याद,<br>अब मुझको नहीं कुछ भी तेरे प्यार के सिवा याद।<br>जब कोई हसीं मुखड़ा नज़र आता है मुझको,<br>आ जाती है एक भूली हुई दास्तान-ए-वफ़ा याद। ✨❤️📜", cat: "all" },
    { text: "دنیا کے ستم یاد نہ اپنی ہی وفا یاد<br>اب مجھ کو نہیں کچھ بھی تیرے پیار کے سوا یاد<br>جب کوئی حسیں مکھڑا نظر آتا ہے مجھ کو<br>آ جاتی ہے ایک بھولی ہوئی داستانِ وفا یاد ✨❤️📜", cat: "all" },

    { text: "Zindagi se yahi gila hai humein,<br>Tu bohot dair se mila hai humein.<br>Humsafar saath toh chale lekin,<br>Waqt ne kab mauka diya hai humein. ⏳🚶‍♂️🥀", cat: "all" },
    { text: "ज़िन्दगी से यही गिला है हमें,<br>तू बहुत देर से मिला है हमें।<br>हमसफ़र साथ तो चले लेकिन,<br>वक़्त ने कब मौका दिया है हमें। ⏳🚶‍♂️🥀", cat: "all" },
    { text: "زندگی سے یہی گلہ ہے ہمیں<br>تو بہت دیر سے ملا ہے ہمیں<br>ہم سفر ساتھ تو چلے لیکن<br>وقت نے کب موقع دیا ہے ہمیں ⏳🚶‍♂️🥀", cat: "all" },

    { text: "Wo humsafar thha magar us se humnawai na thhi,<br>Ke dhoop chhaon ka aalam raha judai na thhi. 💔🌑✨", cat: "sad" },
    { text: "Duniya ne tajurbaat-o-hawadis ki shakal mein,<br>Jo kuch mujhe diya hai wo lauta raha hoon main. 🦁🔥📜", cat: "attitude" },

    { text: "Mohabbat mein nahi hai farq jeene aur marne ka,<br>Usi ko dekh kar jeete hain jis kaafir pe dum nikle. ❤️✨🥀", cat: "love" },
      { text: "Dil se jo baat nikalti hai asar rakhti hai,<br>Par nahin taqat-e-parwaaz magar rakhti hai.<br>Qudsi-ul-asal hai rifat pe nazar rakhti hai,<br>Khak se uthti hai gardoon pe guzar rakhti hai. ✨🦅📜", cat: "all" },
    { text: "दिल से जो बात निकलती है असर रखती है,<br>पर नहीं ताक़त-ए-परवाज़ मगर रखती है।<br>कुदसी-उल-असल है रफ़अत पे नज़र रखती है,<br>ख़ाक से उठती है गर्दूँ पे गुज़र रखती है। ✨🦅📜", cat: "all" },
    { text: "دل سے جو بات نکلتی ہے اثر رکھتی ہے<br>پر نہیں طاقتِ پرواز مگر رکھتی ہے<br>قدسی الاصل ہے رفعت پہ نظر رکھتی ہے<br>خاک سے اٹھتی ہے گردوں پہ گزر رکھتی ہے ✨🦅📜", cat: "all" },

    { text: "Zindagi hai ya koi toofan hai,<br>Hum toh is jeene ke hathon mar chale.<br>Kya kismat thi hamari ke hum se,<br>Roshni ke naam par suraj dhal chale. 🥀🌑📜", cat: "all" },
    { text: "ज़िन्दगी है या कोई तूफ़ान है,<br>हम तो इस जीने के हाथों मर चले।<br>क्या किस्मत थी हमारी कि हम से,<br>रोशनी के नाम पर सूरज ढल चले। 🥀🌑📜", cat: "all" },
    { text: "زندگی ہے یا کوئی طوفان ہے<br>ہم تو اس جینے کے ہاتھوں مر چلے<br>کیا قسمت تھی ہماری کہ ہم سے<br>روشنی کے نام پر سورج ڈھل چلے 🥀🌑📜", cat: "all" },

    { text: "Woh jo hum mein tum mein qarar tha tumhein yaad ho ke na yaad ho,<br>Wahi waada yani nibah ka tumhein yaad ho ke na yaad ho.<br>Kabhi hum mein tum mein bhi chah thi kabhi hum se tum se bhi rah thi,<br>Kabhi hum bhi tum bhi the aashna tumhein yaad ho ke na yaad ho. ✨❤️🕰️", cat: "all" },
    { text: "वो जो हम में तुम में क़रार था तुम्हें याद हो कि न याद हो,<br>वही वादा यानी निबाह का तुम्हें याद हो कि न याद हो।<br>कभी हम में तुम में भी चाह थी कभी हम से तुम से भी राह थी,<br>कभी हम भी तुम भी थे आशना तुम्हें याद हो कि न याद हो। ✨❤️🕰️", cat: "all" },
    { text: "وہ جو ہم میں تم میں قرار تھا تمہیں یاد ہو کہ نہ یاد ہو<br>وہی وعدہ یعنی نباہ کا تمہیں یاد ہو کہ نہ یاد ہو<br>کبھی ہم میں تم میں بھی چاہ تھی کبھی ہم سے تم سے بھی راہ تھی<br>کبھی ہم بھی تم بھی تھے آشنا تمہیں یاد ہو کہ نہ یاد ہو ✨❤️🕰️", cat: "all" },

    { text: "Hasti apni hubaab ki si hai,<br>Ye numayish saraab ki si hai.<br>Naazuki us ke lab ki kya kahiye,<br>Pankhadi ek gulaab ki si hai. 🌸🥀📜", cat: "all" },
    { text: "हस्ती अपनी हबाब की सी है,<br>ये नुमाइश सराब की सी है।<br>नाज़ुकी उस के लब की क्या कहिए,<br>पंखड़ी एक गुलाब की सी है। 🌸🥀📜", cat: "all" },
    { text: "ہستی اپنی حباب کی سی ہے<br>یہ نمائش سراب کی سی ہے<br>نازکی اس کے لب کی کیا کہئے<br>پنکھڑی ایک گلاب کی سی ہے 🌸🥀📜", cat: "all" },

    { text: "Baazicha-e-atfal hai duniya mere aage,<br>Hota hai shab-o-roz tamasha mere aage. ✨🎭📜", cat: "attitude" },

    { text: "Hum ko mitana har kisi ke bas ki baat nahi,<br>Ye zamana hum se hai, hum zamane se nahi. 😎🔥🦁", cat: "attitude" },
      { text: "Kab tak dil ki khair manayein, kab tak rah dikhaoge,<br>Kab tak chain ki neend so-oge, kab tak humein rulaoge.<br>Baat niklegi toh phir door talak jayegi,<br>Log bewajah udasi ka sabab puchenge. ✨📜🥀", cat: "all" },
    { text: "कब तक दिल की खैर मनाएं, कब तक राह दिखाओगे,<br>कब तक चैन की नींद सोओगे, कब तक हमें रुलाओगे।<br>बात निकलेगी तो फिर दूर तलक जाएगी,<br>लोग बेवजह उदासी का सबब पूछेंगे। ✨📜🥀", cat: "all" },
    { text: "کب تک دل کی خیر منائیں کب تک راہ دکھاؤ گے<br>کب تک چین کی نیند سوؤ گے کب تک ہمیں رلاؤ گے<br>بات نکلے گی تو پھر دور تلک جائے گی<br>لوگ بے وجہ اداسی کا سبب پوچھیں گے ✨📜🥀", cat: "all" },

    { text: "Dil hi toh hai na sang-o-khisht, dard se bhar na aaye kyun,<br>Royenge hum hazaar baar, koi humein sataye kyun.<br>Dair nahi, haram nahi, dar nahi, aastaan nahi,<br>Baithe hain reh-guzar pe hum, ghair humein uthaye kyun. ✨🏛️🥀", cat: "all" },
    { text: "दिल ही तो है न संग-ओ-खिश्त, दर्द से भर न आए क्यों,<br>रोएंगे हम हज़ार बार, कोई हमें सताए क्यों।<br>दैर नहीं, हरम नहीं, दर नहीं, आस्तां नहीं,<br>बैठे हैं रहगुज़र पे हम, ग़ैर हमें उठाए क्यों। ✨🏛️🥀", cat: "all" },
    { text: "دل ہی تو ہے نہ سنگ و خشت درد سے بھر نہ آئے کیوں<br>روئیں گے ہم ہزار بار کوئی ہمیں ستائے کیوں<br>دیر نہیں حرم نہیں در نہیں آستاں نہیں<br>بیٹھے ہیں رہگزر پہ ہم غیر ہمیں اٹھائے کیوں ✨🏛️🥀", cat: "all" },

    { text: "Ishq par zor nahi hai ye woh aatish 'Ghalib',<br>Jo lagaye na lage aur bujhaye na bane.<br>Hum ne maana ke tagaful na karoge lekin,<br>Khak ho jayenge hum tum ko khabar hone tak. 🔥❤️📜", cat: "all" },
    { text: "इश्क़ पर ज़ोर नहीं है ये वो आतिश 'ग़ालिब',<br>जो लगाए न लगे और बुझाए न बने।<br>हम ने माना कि तग़ाफ़ुल न करोगे लेकिन,<br>खाक हो जाएंगे हम तुम को खबर होने तक। 🔥❤️📜", cat: "all" },
    { text: "عشق پر زور نہیں ہے یہ وہ آتش غالبؔ<br>جو لگائے نہ لگے اور بجھائے نہ بنے<br>ہم نے مانا کہ تغافل نہ کرو گے لیکن<br>خاک ہو جائیں گے ہم تم کو خبر ہونے تک 🔥❤️📜", cat: "all" },

    { text: "Hazaaron saal nargis apni be-noori pe roti hai,<br>Badi mushkil se hota hai chaman mein deeda-war paida. ✨👁️🌸", cat: "all" },
    { text: "हज़ारों साल नरगिस अपनी बे-नूरी पे रोती है,<br>बड़ी मुश्किल से होता है चमन में दीदा-वर पैदा। ✨👁️🌸", cat: "all" },
    { text: "ہزاروں سال نرگس اپنی بے نوری پہ روتی ہے<br>بڑی مشکل سے ہوتا ہے چمن میں دیدہ ور پیدا ✨👁️🌸", cat: "all" },

    { text: "Zulmat ko ziya, sarsar ko saba, bande ko khuda kya likhna,<br>Jo nahaq-e-zulm ko haq likhe, us shakhs ko zinda kya likhna. 😎🔥📜", cat: "attitude" },

    { text: "Na tha kuch toh khuda tha, kuch na hota toh khuda hota,<br>Duboya mujhko hone ne, na hota main toh kya hota. 🌌🌑📜", cat: "sad" },
      { text: "Duniya ke sitam yaad na apni hi wafa yaad,<br>Ab mujhko nahi kuch bhi tere pyar ke siwa yaad.<br>Jab koi haseen mukhda nazar aata hai mujhko,<br>Aa jati hai ek bhuli hui dastan-e-wafa yaad. ✨📜❤️", cat: "love" },
    { text: "दुनिया के सितम याद न अपनी ही वफ़ा याद,<br>अब मुझको नहीं कुछ भी तेरे प्यार के सिवा याद।<br>जब कोई हसीं मुखड़ा नज़र आता है मुझको,<br>आ जाती है एक भूली हुई दास्तान-ए-वफ़ा याद। ✨📜❤️", cat: "love" },
    { text: "دنیا کے ستم یاد نہ اپنی ہی وفا یاد<br>اب مجھ کو نہیں کچھ بھی تیرے پیار کے سوا یاد<br>جب کوئی حسیں مکھڑا نظر آتا ہے مجھ کو<br>آ جاتی ہے ایک بھولی ہوئی داستانِ وفا یاد ✨📜❤️", cat: "love" },

    { text: "Hasti apni hubaab ki si hai,<br>Ye numayish saraab ki si hai.<br>Naazuki us ke lab ki kya kahiye,<br>Pankhadi ek gulaab ki si hai. 🌸🥀📜", cat: "all" },
    { text: "हस्ती अपनी हबाब की सी है,<br>ये नुमाइश सराब की सी है।<br>नाज़ुकी उस के लब की क्या कहिए,<br>पंखड़ी एक गुलाब की सी है। 🌸🥀📜", cat: "all" },
    { text: "ہستی اپنی حباب کی سی ہے<br>یہ نمائش سراب کی سی ہے<br>نازکی اس کے لب کی کیا کہئے<br>پنکھڑی ایک گلاب کی سی ہے 🌸🥀📜", cat: "all" },

    { text: "Ghalib bura na maan jo waiz bura kahe,<br>Aisa bhi koi hai ke sab accha kahein jise.<br>Hum ko mita sake ye zamane mein dam nahi,<br>Hum se zamana khud hai, zamane se hum nahi. 😎🔥🦁", cat: "attitude" },
    { text: "ग़ालिब बुरा न मान जो वाइज़ बुरा कहे,<br>ऐसा भी कोई है कि सब अच्छा कहें जिसे।<br>हम को मिटा सके ये ज़माने में दम नहीं,<br>हम से ज़माना ख़ुद है, ज़माने से हम नहीं। 😎🔥🦁", cat: "attitude" },
    { text: "غالب برا نہ مان جو واعظ برا کہے<br>ایسا بھی کوئی ہے کہ سب اچھا کہیں جسے<br>ہم کو مٹا سکے یہ زمانے میں دم نہیں<br>ہم سے زمانہ خود ہے زمانے سے ہم نہیں 😎🔥🦁", cat: "attitude" },

    { text: "Ab toh ghabra ke ye kehte hain ke mar jayenge,<br>Mar ke bhi chain na paya toh kidhar jayenge.<br>Zindagi hai ya koi toofan hai,<br>Hum toh is jeene ke hathon mar chale. 🥀🌑🏚️", cat: "sad" },
    { text: "अब तो घबरा के ये कहते हैं कि मर जाएंगे,<br>मर के भी चैन न पाया तो किधर जाएंगे।<br>ज़िन्दगी है या कोई तूफ़ान है,<br>हम तो इस जीने के हाथों मर चले। 🥀🌑🏚️", cat: "sad" },
    { text: "اب تو گھبرا کے یہ کہتے ہیں کہ مر جائیں گے<br>مر کے بھی چین نہ پایا تو کدھر جائیں گے<br>زندگی ہے یا کوئی طوفان ہے<br>ہم تو اس جینے کے ہاتھوں مر چلے 🥀🌑🏚️", cat: "sad" },

    { text: "Sitaron se aage jahan aur bhi hain,<br>Abhi ishq ke imtihan aur bhi hain.<br>Tu shaheen hai parwaz hai kaam tera,<br>Tere samne aasman aur bhi hain. 🌌🦅✨", cat: "all" },
    { text: "सितारों से आगे जहाँ और भी हैं,<br>अभी इश्क़ के इम्तिहाँ और भी हैं।<br>तू शाहीं है परवाज़ है काम तेरा,<br>तेरे सामने आसमाँ और भी हैं। 🌌🦅✨", cat: "all" },
    { text: "ستاروں سے آگے جہاں اور بھی ہیں<br>ابھی عشق کے امتحان اور بھی ہیں<br>تو شاہیں ہے پرواز ہے کام تیرا<br>تیرے سامنے آسماں اور بھی ہیں 🌌🦅✨", cat: "all" },
  
  
    ];

let currentPage = 1;
const itemsPerPage = 10;
let currentCategory = 'all';

function filter(c) {
    currentCategory = c;
    currentPage = 1;
    renderShayri();
}

function changePage(step) {
    currentPage += step;
    window.scrollTo(0,0);
    renderShayri();
}
function renderShayri() {
    const l = document.getElementById('list');
    if(!l) return;
    l.innerHTML = ""; 
    const filteredData = currentCategory === 'all' ? database : database.filter(i => i.cat === currentCategory);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredData.slice(startIndex, endIndex);

    paginatedItems.forEach(item => {
        const cleanText = item.text.replace(/'/g, "\\'");
        l.innerHTML += `
            <div class="shayri-card">
                <p style="font-size:1.1rem; color:#2c3e50; line-height:1.6;">${item.text}</p>
                <button onclick="copyText('${cleanText}')" style="background:linear-gradient(45deg, #ff416c, #ff4b2b); color:white; border:none; padding:8px 18px; border-radius:25px; cursor:pointer; font-weight:bold;">Copy Shayri</button>
            </div>`;
    });
    renderPagination(totalPages);
}
function renderPagination(totalPages) {
    const l = document.getElementById('list');
    let pHTML = `<div style="text-align:center; margin-top:20px; padding-bottom:20px;">`;
    if (currentPage > 1) {
        pHTML += `<button onclick="changePage(-1)" style="padding:10px 15px; margin:5px; border-radius:10px; border:none; background:#3498db; color:white;">Previous</button>`;
    }
    if (currentPage < totalPages && totalPages > 1) {
        pHTML += `<button onclick="changePage(1)" style="padding:10px 15px; margin:5px; border-radius:10px; border:none; background:#3498db; color:white;">Next Page</button>`;
    }
    pHTML += `<p style="margin-top:10px; color:#7f8c8d;">Page ${currentPage} of ${totalPages}</p></div>`;
    l.innerHTML += pHTML;
}

function copyText(t) {
    navigator.clipboard.writeText(t).then(() => {
        alert("Shayri Copied! ✅");
    });
}

renderShayri();
