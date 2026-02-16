<<<<<<< HEAD
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
=======
// 1. DATA CENTER (Ubah/Tambah di sini saja!)
const projectData = [
    {
        title: "E-Commerce Luxury",
        desc: "Platform belanja barang mewah dengan integrasi payment gateway.",
        tech: "React & Node.js"
    },
    {
        title: "Company Profile",
        desc: "Website instansi dengan animasi GSAP tingkat tinggi.",
        tech: "HTML, CSS, JS"
    },
    {
        title: "Mobile Banking UI",
        desc: "Desain aplikasi perbankan modern dan minimalis.",
        tech: "Figma & Flutter"
    },
    {
        title: "AI Chatbot App",
        desc: "Integrasi OpenAI untuk asisten pribadi pintar.",
        tech: "Python & React"
    }
];

// 2. FUNGSI MERENDER DATA (Otomatis membuat elemen)
function renderProjects() {
    const list = document.getElementById('project-list');
    
    projectData.forEach((project, index) => {
        const card = `
            <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <span class="tag">${project.tech}</span>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <a href="#" class="btn-gold" style="padding: 5px 15px; font-size: 12px;">View Detail</a>
            </div>
        `;
        list.innerHTML += card;
    });
}

// 3. JALANKAN SAAT HALAMAN DIBUKA
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });
    renderProjects();
});

// 4. Smooth Scrolling untuk Navbar & Sidebar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
>>>>>>> c228b70ff4c6b34b2a07d4572c7c4cc399e29ce7
});