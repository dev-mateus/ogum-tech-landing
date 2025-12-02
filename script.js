// ========================================
// MOBILE MENU
// ========================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 768 && 
            !mobileMenuBtn.contains(e.target) && 
            !navLinks.contains(e.target) &&
            navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

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
            entry.target.classList.add('visible');
            // Unobserve after animation (performance optimization)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements on DOMContentLoaded for better performance
document.addEventListener('DOMContentLoaded', () => {
    // Add data-animate attribute and observe
    const animatedElements = document.querySelectorAll('.feature-card, .screenshot-placeholder, .stat-item, .tech-item');
    
    animatedElements.forEach(el => {
        el.setAttribute('data-animate', '');
        observer.observe(el);
    });
});

// ========================================
// ACTIVE NAV LINK ON SCROLL (Throttled)
// ========================================

const sections = document.querySelectorAll('section[id]');
let ticking = false;

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
                navLink.setAttribute('aria-current', 'page');
            } else {
                navLink.style.opacity = '0.6';
                navLink.style.fontWeight = '600';
                navLink.removeAttribute('aria-current');
            }
        }
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            highlightNavLink();
        });
        ticking = true;
    }
}, { passive: true });

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
