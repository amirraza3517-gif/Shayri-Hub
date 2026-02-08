// WhatsApp Share Function
function shareWhatsApp(id) {
    const text = document.getElementById(id).innerText;
    const url = window.location.href;
    const shareMsg = encodeURIComponent(text + "\n\nPadhiye aur bhi aisi shayari yahan: " + url);
    window.open(`https://wa.me/?text=${shareMsg}`, '_blank');
}

// Ye function buttons ko automatically add kar dega bina purana code chhede
window.onload = function() {
    setInterval(() => {
        const cards = document.querySelectorAll('.card-footer');
        cards.forEach((footer, index) => {
            if (!footer.querySelector('.share-btn')) {
                const shareBtn = document.createElement('button');
                shareBtn.className = 'share-btn';
                shareBtn.innerText = 'WhatsApp';
                shareBtn.style.cssText = "background: #25D366; color: white; border: none; padding: 5px 10px; border-radius: 5px; margin-left: 5px; cursor: pointer;";
                shareBtn.onclick = () => shareWhatsApp(`txt-${index}`);
                footer.appendChild(shareBtn);
            }
        });
    }, 1000); // Har ek second mein check karega ki naya card aaya ya nahi
};
