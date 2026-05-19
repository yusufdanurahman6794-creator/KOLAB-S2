// SKILL BAR ANIMATION
document.querySelectorAll('.skill-fill').forEach(bar => {
  bar.style.animationPlayState = 'paused';
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting) return;
    bar.style.animationPlayState = 'running';
    obs.unobserve(bar);
  }, { threshold: 0.3 }).observe(bar);
});

// ===== SEND MESSAGE BUTTON =====
const sendBtn = document.querySelector('.send-btn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name = document.querySelector('.contact-input[type="text"]') ||
                 document.querySelector('.contact-input:first-of-type');
    const email = document.querySelector('.contact-input[type="email"]');
    const message = document.querySelector('.contact-textarea');

    if (name && email && message) {
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Mohon lengkapi semua field!');
        return;

        
      }
    }

              

    sendBtn.textContent = 'Terkirim! ✓';
    sendBtn.style.background = '#4caf50';
    sendBtn.disabled = true;

    setTimeout(() => {
      sendBtn.textContent = 'Send Messages';
      sendBtn.style.background = '';
      sendBtn.disabled = false;
      document.querySelectorAll('.contact-input').forEach(i => i.value = '');
    }, 3000);
  });
}

 AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });