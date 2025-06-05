// ================================
// Hamburger Menu Functionality
// ================================

const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const toolsDropdown = document.getElementById('toolsDropdown');
const toolsMenu = document.getElementById('toolsMenu');

// Toggle sidebar
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'visible';
});

// Close sidebar when clicking outside
sidebarOverlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'visible';
});

// ================================
// Tools Dropdown Functionality
// ================================

toolsDropdown.addEventListener('click', () => {
    toolsDropdown.classList.toggle('active');
    toolsMenu.classList.toggle('active');
});

// ================================
// Sidebar Link Navigation Close
// ================================

document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = 'visible';
    });
});

// ================================
// Redirect to Specific Tool Page
// ================================

function redirectToTool(toolName) {
    const toolUrls = {
        'word-counter': '/tools/word-counter',
        'currency-converter': '/tools/currency-converter',
        'color-generator': '/tools/color-generator',
        'password-generator': '/tools/password-generator',
        'unit-converter': '/tools/unit-converter',
        'url-shortener': '/tools/url-shortener',
        'qr-generator': '/tools/qr-generator',
        'image-compressor': '/tools/image-compressor',
        'base64-encoder': '/tools/base64-encoder',
        'text-formatter': '/tools/text-formatter'
    };

    // Close sidebar before navigating
    hamburger.classList.remove('active');
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'visible';

    const toolUrl = toolUrls[toolName];
    if (toolUrl) {
        alert(`Redirecting to ${toolName.replace('-', ' ').toUpperCase()} tool...\nURL: ${toolUrl}`);
        // Uncomment below line to navigate in real app
        // window.location.href = toolUrl;
    }
}

// ================================
// Smooth Scroll for Anchor Links
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// Header Scroll Background Effect
// ================================

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 100
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(255, 255, 255, 0.1)';
});

// ================================
// Scroll Reveal Animation
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// ================================
// Tool Card Hover and Click Effects
// ================================

document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });

    card.addEventListener('click', () => {
        const toolName = card.querySelector('h3').textContent;
        alert(`Opening ${toolName}...`);
        // Optionally: call redirectToTool(toolName.toLowerCase().replace(/\s/g, '-'));
    });
});

// ================================
// Parallax Effect for Hero Section
// ================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// ================================
// Show Page After Loading
// ================================

window.addEventListener('load', () => {
    document.body.style.overflow = 'visible';
});
