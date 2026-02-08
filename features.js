// Part 1: WhatsApp Share Logic
function shareWhatsApp(id) {
    const textElement = document.getElementById(id);
    if (!textElement) return;
    
    const text = textElement.innerText;
    const url = window.location.href;
    
    // Message ko WhatsApp format mein taiyar karna
    const shareMsg = encodeURIComponent(text + "\n\nPadhiye aur bhi aisi shayari yahan: " + url);
    
    // WhatsApp App ya Web kholna
    window.open(`https://wa.me/?text=${shareMsg}`, '_blank');
}
// Part 2: Automatic Button Placement
function addWhatsAppButtons() {
    const cards = document.querySelectorAll('.shayri-card');
    
    cards.forEach((card, index) => {
        const footer = card.querySelector('.card-footer');
        // Check karna ki button pehle se toh nahi laga
        if (footer && !footer.querySelector('.share-btn')) {
            const shareBtn = document.createElement('button');
            shareBtn.className = 'share-btn';
            shareBtn.innerText = 'WhatsApp';
            
            // Stylish Green Button Design
            shareBtn.style.cssText = "background: #25D366; color: white; border: none; padding: 6px 12px; border-radius: 4px; margin-left: 8px; cursor: pointer; font-weight: bold; font-size: 0.8rem;";
            
            // Click karne par Part 1 wala function chalana
            shareBtn.onclick = () => shareWhatsApp(`txt-${index}`);
            
            footer.appendChild(shareBtn);
        }
    });
}

// Har 2 second mein check karna (taki naye page par bhi button aa jaye)
setInterval(addWhatsAppButtons, 2000);
