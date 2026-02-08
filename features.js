// Har 1 second mein check karega aur button lagayega
setInterval(() => {
    // Ye aapke shayari cards ko dhund raha hai
    const cards = document.querySelectorAll('.shayri-card');

    cards.forEach((card) => {
        // Button lagane ke liye card ke andar ka footer dhundna
        let footer = card.querySelector('.card-footer') || card;

        // Agar WhatsApp button pehle se nahi hai toh lagao
        if (!card.querySelector('.wa-share-btn')) {
            const waBtn = document.createElement('button');
            waBtn.className = 'wa-share-btn';
            waBtn.innerHTML = '🟢 WhatsApp';
            
            // Stylish Design
            waBtn.style.cssText = "background:#25D366; color:white; border:none; padding:7px 15px; border-radius:20px; cursor:pointer; font-weight:bold; margin-top:10px; font-size:12px; transition: 0.3s;";

            waBtn.onclick = function() {
                // Card ka text nikalna
                const text = card.innerText.replace('🟢 WhatsApp', '').trim();
                const siteUrl = window.location.href;
                window.open("https://wa.me/?text=" + encodeURIComponent(text + "\n\nSuniye ye shayari: " + siteUrl));
            };

            footer.appendChild(waBtn);
        }
    });
}, 1000);
