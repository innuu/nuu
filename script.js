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
});