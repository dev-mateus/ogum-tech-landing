// ========================================
// MOBILE MENU
// ========================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
let mobileMenuOpen = false;

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOpen = !mobileMenuOpen;
        
        if (mobileMenuOpen) {
            // Open menu
            navLinks.style.display = 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'var(--white)';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '1rem';
            navLinks.style.borderBottom = '2px solid var(--black)';
            navLinks.style.gap = '1rem';
        } else {
            // Close menu
            if (window.innerWidth < 768) {
                navLinks.style.display = 'none';
            }
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768 && mobileMenuOpen) {
            navLinks.style.display = 'none';
            mobileMenuOpen = false;
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'static';
        navLinks.style.flexDirection = 'row';
        navLinks.style.padding = '0';
        navLinks.style.border = 'none';
        navLinks.style.gap = '2rem';
        mobileMenuOpen = false;
    } else {
        if (!mobileMenuOpen) {
            navLinks.style.display = 'none';
        }
    }
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default if href is just "#"
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .screenshot-placeholder, .stat-item, .tech-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================

const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.opacity = '1';
                navLink.style.fontWeight = '700';
            } else {
                navLink.style.opacity = '0.6';
                navLink.style.fontWeight = '600';
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ========================================
// PWA INSTALL PROMPT (Future)
// ========================================

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Update UI to show install button when PWA is ready
    const pwaButton = document.querySelector('.download-option-disabled .btn');
    if (pwaButton) {
        pwaButton.disabled = false;
        pwaButton.textContent = 'INSTALAR';
        pwaButton.parentElement.classList.remove('download-option-disabled');
        
        pwaButton.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to the install prompt: ${outcome}`);
                deferredPrompt = null;
            }
        });
    }
});

// ========================================
// ANALYTICS TRACKING (Optional)
// ========================================

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnText = e.target.textContent.trim();
        const btnHref = e.target.getAttribute('href');
        
        // You can send this to Google Analytics or similar
        console.log('Button clicked:', {
            text: btnText,
            href: btnHref,
            timestamp: new Date().toISOString()
        });
        
        // Example: Google Analytics 4
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'button_click', {
        //         'button_text': btnText,
        //         'button_url': btnHref
        //     });
        // }
    });
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images when added
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c⚔️ Ogum Tech', 'font-size: 24px; font-weight: bold;');
console.log('%cTecnologia a serviço da fé', 'font-size: 14px; color: #666;');
console.log('%cRepositório: https://github.com/dev-mateus/ogum-tech', 'font-size: 12px; color: #0066cc;');
console.log('%cContribuições são bem-vindas!', 'font-size: 12px; color: #00aa00;');
