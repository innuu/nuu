document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intersection Observer (Reveal on Scroll)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // 2. Typing Animation Logic
    const professions = ["Fullstack Developer", "Software Engineer", "UI/UX Designer"];
    let profIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-text');

    function typeEffect() {
        const currentWord = professions[profIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2000; // Jeda di akhir kata
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            profIndex = (profIndex + 1) % professions.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    if (typingElement) typeEffect();
});