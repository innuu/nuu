document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       1. REVEAL ON SCROLL
    ========================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up')
        .forEach(el => observer.observe(el));


    /* =========================
       2. TYPING ANIMATION
    ========================= */
    const professions = [
        "Fullstack Developer",
        "Software Engineer",
        "UI/UX Designer"
    ];

    let profIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-text');

    function typeEffect() {
        if (!typingElement) return;

        const currentWord = professions[profIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        let speed = isDeleting ? 90 : 160;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1800;
            isDeleting = true;
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            profIndex = (profIndex + 1) % professions.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();


    /* =========================
       3. PROJECT AUTO RENDER
       (VERSI LIGHT THEME)
    ========================= */
    const projectData = [
        {
            title: "E-Commerce Website",
            desc: "Platform belanja online modern dengan UI responsif.",
            tech: "HTML • CSS • JavaScript"
        },
        {
            title: "Company Profile",
            desc: "Website profil perusahaan dengan animasi modern.",
            tech: "Frontend Development"
        },
        {
            title: "Portfolio Website",
            desc: "Website personal branding dengan typing animation.",
            tech: "UI Design"
        }
    ];

    const projectList = document.getElementById('project-list');

    if (projectList) {
        projectData.forEach(project => {

            const card = document.createElement('div');
            card.className = 'card fade-up';

            card.innerHTML = `
                <span class="tag">${project.tech}</span>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
            `;

            projectList.appendChild(card);
            observer.observe(card);
        });
    }


    /* =========================
       4. SMOOTH SCROLL NAVBAR
    ========================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute('href')
            );

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});