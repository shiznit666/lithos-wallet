/* ========================================
   LITHOS WALLET - Interactive JavaScript
   Premium Cold Wallet Showcase
======================================== */

document.addEventListener('DOMContentLoaded', function () {
    // ========== Navigation Scroll Effect ==========
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    // Add scrolled class to nav on scroll
    function handleNavScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll(); // Initial check

    // Mobile nav toggle
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile nav on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ========== Smooth Scroll for Anchor Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Scroll Reveal Animation ==========
    const revealElements = document.querySelectorAll('.section-header, .product-feature, .feature-card, .spec-category');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'visible');
                // Optional: Unobserve after animation
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // ========== Interactive Hotspots ==========
    const hotspots = document.querySelectorAll('.hotspot');
    let activeHotspot = null;

    hotspots.forEach(hotspot => {
        // Click handler for mobile and desktop
        hotspot.addEventListener('click', function (e) {
            e.stopPropagation();

            // If clicking the same hotspot, close it
            if (activeHotspot === this) {
                this.classList.remove('active');
                activeHotspot = null;
                return;
            }

            // Close previously active hotspot
            if (activeHotspot) {
                activeHotspot.classList.remove('active');
            }

            // Activate this hotspot
            this.classList.add('active');
            activeHotspot = this;
        });

        // Mouse enter/leave for desktop hover (in addition to click)
        hotspot.addEventListener('mouseenter', function () {
            if (window.innerWidth > 768) {
                // Close other active hotspots
                if (activeHotspot && activeHotspot !== this) {
                    activeHotspot.classList.remove('active');
                }
                this.classList.add('active');
                activeHotspot = this;
            }
        });
    });

    // Close hotspots when clicking outside
    document.addEventListener('click', function (e) {
        if (activeHotspot && !e.target.closest('.hotspot')) {
            activeHotspot.classList.remove('active');
            activeHotspot = null;
        }
    });

    // Close hotspots on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && activeHotspot) {
            activeHotspot.classList.remove('active');
            activeHotspot = null;
        }
    });

    // ========== Hero Product Parallax Effect ==========
    const heroProduct = document.getElementById('hero-product');
    const heroSection = document.getElementById('hero');

    if (heroProduct && heroSection) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;

            if (scrolled < heroHeight) {
                const parallaxValue = scrolled * 0.2;
                heroProduct.style.transform = `translateY(${parallaxValue}px)`;
            }
        });
    }

    // ========== Form Submission Handler ==========
    const notifyForm = document.getElementById('notify-form');

    if (notifyForm) {
        notifyForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            // Simple validation
            if (!emailInput.value || !emailInput.validity.valid) {
                emailInput.focus();
                return;
            }

            // Simulate form submission
            submitBtn.textContent = 'Envoi...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Success state
                submitBtn.textContent = 'Inscrit ✓';
                submitBtn.style.background = '#4ade80';
                emailInput.value = '';

                // Reset after delay
                setTimeout(() => {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }

    // ========== Stats Counter Animation ==========
    const stats = document.querySelectorAll('.stat-value');
    let statsAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                animateStats();
                statsAnimated = true;
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    function animateStats() {
        stats.forEach(stat => {
            stat.style.opacity = '0';
            stat.style.transform = 'translateY(20px)';

            setTimeout(() => {
                stat.style.transition = 'all 0.6s ease';
                stat.style.opacity = '1';
                stat.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // ========== Feature Cards Stagger Animation ==========
    const featureCards = document.querySelectorAll('.feature-card');

    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });

    featureCards.forEach(card => {
        featureObserver.observe(card);
    });

    // ========== Schematic Image Glow Effect ==========
    const schematicImage = document.getElementById('schematic-image');
    const schematicWrapper = document.querySelector('.schematic-wrapper');

    if (schematicImage && schematicWrapper) {
        schematicWrapper.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            schematicImage.style.filter = `drop-shadow(0 0 40px rgba(201, 169, 98, 0.2))`;
        });

        schematicWrapper.addEventListener('mouseleave', function () {
            schematicImage.style.filter = '';
        });
    }

    // ========== Prefers Reduced Motion ==========
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition-slow', '0ms');
        document.documentElement.style.setProperty('--transition-slower', '0ms');

        // Remove scroll reveal animations
        revealElements.forEach(el => {
            el.classList.add('visible');
        });
    }

    // ========== Console Easter Egg ==========
    console.log('%c🔐 LITHOS WALLET', 'font-size: 24px; font-weight: bold; color: #c9a962;');
    console.log('%cLa pierre angulaire de votre patrimoine numérique.', 'font-size: 14px; color: #a0a0a0;');
    console.log('%c💼 Intéressé par notre équipe? hello@lithos.io', 'font-size: 12px; color: #666;');
});

// ========== Utility: Debounce Function ==========
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========== Utility: Throttle Function ==========
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
