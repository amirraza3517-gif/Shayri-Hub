const database = [
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
