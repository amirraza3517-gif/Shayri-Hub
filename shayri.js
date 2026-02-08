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
    { text: "Teri aankhon ke darya mein doob jane ka dil karta hai...", cat: "romantic" },
    { text: "True love never dies, it only gets stronger with time.", cat: "romantic" },
    { text: "Teri muskurahat hi meri har thakan ka ilaaj hai.", cat: "romantic" },
    { text: "Tumhare saath bitaya har lamha mere liye ek haseen khwab jaisa hai.", cat: "romantic" },
    { text: "Ishq mein marne se behtar hai, kisi ke liye jeena seekh lo.", cat: "romantic" },
    { text: "Meri har saans mein tera hi naam hai, meri har khushi tere hi naam hai.", cat: "romantic" },
    { text: "Dil ki dhadkan ho tum, meri har dua ka asar ho tum.", cat: "romantic" },
    { text: "Tera sath hai toh mujhe kisi aur cheez ki zarurat nahi.", cat: "romantic" },
    { text: "Har pal tumhara khayal aata hai, ye ishq nahi toh aur kya hai?", cat: "romantic" },
    { text: "Mohabbat toh tumse tab bhi rahegi, jab tum hamare nahi rahoge.", cat: "romantic" },
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
    { text: "Mohabbat aur dosti mein wahi log tikte hain, jinhe rishton ki kadar hoti hai.", cat: "romantic" },
    { text: "Ek ladki ne mujhse pucha ki tum itne khush kaise rehte ho, maine kaha dusron se umeed kam rakhta hoon.", cat: "all" },
    { text: "Single rehne ka bhi apna maza hai, na kisi ke 'Online' hone ka darr na kisi ke 'Last Seen' ki chinta.", cat: "all" },
    { text: "Log kahte hain dukh bura hota hai, magar jab bhi aata hai kuch seekha kar jata hai.", cat: "sad" },
    { text: "Mera attitude meri nishani hai, tu bata tujhe koi pareshani hai?", cat: "all" },
    { text: "Duniya mein rehne ke liye do hi raste hain, ya toh dosti karo ya dushmani.", cat: "all" },
    { text: "Maine apne dil se pucha ki tu kyu rota hai kisi aur ke liye, dil ne kaha jo tera nahi ho sakta tu uske peeche kyu pagal hai.", cat: "sad" },
    { text: "Style aisa rakho ki log dekhte reh jayein, aur dushmani aisi ki dushman darta reh jaye.", cat: "all" },
    { text: "Suno! tum mere liye wahi ho jo mobile ke liye charger hai.", cat: "romantic" },
    { text: "Bharosa ek baar toot jaye toh phir kabhi nahi judta.", cat: "sad" },
    { text: "Duniya ke liye sirf ek insaan ho tum, magar mere liye poori duniya ho.", cat: "romantic" },
    { text: "Hamari khamoshi par mat jao, raakh ke niche hamesha aag dabi hoti hai.", cat: "all" },
    { text: "Duniya se hamesha do kadam aage chalo, taaki log tumhare piche rahein.", cat: "all" },
    { text: "Baap ke samne aiyyashi aur hamare samne badmashi beta soch samajh kar karna.", cat: "all" },
    { text: "Na kisi se darr hai, na kisi se bair, bas apni masti mein jeete hain.", cat: "all" },
    { text: "Aukaat ki baat mat kar pagli, hum toh unme se hain jo sharafat bhi dabdabe se karte hain.", cat: "all" },
    { text: "Kash tum samajh paate ki khamosh rehne walon ko bhi dard hota hai.", cat: "sad" },
    { text: "Mohabbat mein shartein nahi hoti, bas ek dusre ka sath hota hai.", cat: "romantic" },
    { text: "Zindagi ne itna toh sikha diya ki har koi apna nahi hota.", cat: "sad" },
    { text: "Teri ek muskurahat mere saare dukh door kar deti hai.", cat: "romantic" },
    { text: "Dard toh bahut hai dil mein, magar dikhane ki aadat nahi.", cat: "sad" },
    { text: "Hamari khamoshi ko hamari haar mat samajhna, hum wo hain jo shanti se toofaan late hain.", cat: "all" },
    { text: "Sun beta! Jitni teri aukaat hai, utna toh hum dushmano ko maaf kar dete hain.", cat: "all" },
    { text: "Log kahte hain dushmani buri hai, hum kahte hain dushman dandaar hona chahiye.", cat: "all" },
    { text: "Style mera naya hai, par khauf wahi purana hai.", cat: "all" },
    { text: "Hum un logon mein se nahi jo peeth peeche bolte hain, hum toh samne se khelte hain.", cat: "all" },
    { text: "Zindagi ne itna toh sikha diya, ki har kisi par aankh band karke bharosa nahi karte.", cat: "all" },
    { text: "Mohabbat toh unse hoti hai jo kismat mein nahi hote.", cat: "romantic" },
    { text: "Akele rehna seekh liya hai maine, kyunki jhoothe waadon se behtar hai akelapan.", cat: "sad" },
    { text: "Teri ek jhalak ke liye taraste hain hum, ye ishq nahi toh aur kya hai?", cat: "romantic" },
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
