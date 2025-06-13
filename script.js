// ==========================================
// PREMIUM DARK & GOLDEN THEME JAVASCRIPT
// ==========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // GOLDEN PARTICLE SYSTEM BACKGROUND
    // ==========================================
    function createGoldenParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'golden-particles-container';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        document.body.appendChild(particlesContainer);

        // Create floating golden particles
        for (let i = 0; i < 60; i++) {
            const particle = document.createElement('div');
            particle.className = 'golden-particle';
            
            const size = Math.random() * 4 + 1;
            const opacity = Math.random() * 0.6 + 0.2;
            const duration = Math.random() * 20 + 10;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, #ffd700, #ffb347);
                border-radius: 50%;
                opacity: ${opacity};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: goldenFloat ${duration}s infinite linear;
                box-shadow: 0 0 ${size * 2}px rgba(255, 215, 0, 0.3);
            `;
            
            particlesContainer.appendChild(particle);
        }

        // Add golden particle animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes goldenFloat {
                0% { 
                    transform: translateY(100vh) rotate(0deg); 
                    opacity: 0; 
                }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { 
                    transform: translateY(-100vh) rotate(360deg); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
    createGoldenParticles();

    // ==========================================
    // ENHANCED NAVBAR WITH GOLDEN ACCENTS
    // ==========================================
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Enhanced navbar scroll effects with golden border
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.borderBottom = '1px solid rgba(255, 215, 0, 0.3)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.backdropFilter = 'blur(5px)';
            navbar.style.borderBottom = '1px solid rgba(255, 215, 0, 0.1)';
            navbar.style.padding = '1rem 0';
        }
        
        // Hide/show navbar on scroll direction
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // ==========================================
    // GOLDEN SCROLL PROGRESS WITH GLOW
    // ==========================================
    function createGoldenScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'golden-scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #ffd700, #ffb347, #ff8c00);
            z-index: 1001;
            transition: width 0.3s ease;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
            
            // Add pulsing effect
            if (scrollPercent > 0) {
                progressBar.style.animation = 'goldenPulse 2s infinite';
            }
        });
    }
    createGoldenScrollProgress();

    // ==========================================
    // SMOOTH SCROLLING WITH GOLDEN HIGHLIGHT
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Add golden flash effect to target
                target.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.5)';
                target.style.transition = 'box-shadow 0.5s ease';
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                setTimeout(() => {
                    target.style.boxShadow = 'none';
                }, 1000);
            }
        });
    });

    // ==========================================
    // ADVANCED INTERSECTION OBSERVER ANIMATIONS
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add golden glow effect for special elements
                if (entry.target.classList.contains('service-card') || 
                    entry.target.classList.contains('portfolio-item')) {
                    entry.target.style.boxShadow = '0 10px 40px rgba(255, 215, 0, 0.2)';
                }
            }
        });
    }, observerOptions);

    // Enhanced animation setup
    document.querySelectorAll('.section, .about-card, .service-card, .portfolio-item, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });

    // ==========================================
    // PREMIUM TYPING ANIMATION WITH GOLDEN CURSOR
    // ==========================================
    function premiumTypeWriter(element, text, speed = 80) {
        let i = 0;
        element.innerHTML = '';
        
        // Add golden cursor
        const cursor = document.createElement('span');
        cursor.innerHTML = '|';
        cursor.style.cssText = `
            color: #ffd700;
            animation: goldenBlink 1s infinite;
        `;
        
        function type() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1);
                element.appendChild(cursor);
                i++;
                setTimeout(type, speed);
            } else {
                // Keep cursor blinking after typing
                setTimeout(() => {
                    cursor.style.opacity = '0';
                }, 3000);
            }
        }
        type();
    }

    // Apply to hero subtitle
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            premiumTypeWriter(heroSubtitle, originalText, 60);
        }, 1500);
    }

    // ==========================================
    // GOLDEN HOVER EFFECTS FOR INTERACTIVE ELEMENTS
    // ==========================================
    function addGoldenHoverEffects() {
        // Add hover effects to buttons
        document.querySelectorAll('button, .btn, .cta-button').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.6)';
                this.style.transform = 'translateY(-3px)';
                this.style.transition = 'all 0.3s ease';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
                this.style.transform = 'translateY(0)';
            });
        });

        // Add hover effects to cards
        document.querySelectorAll('.service-card, .portfolio-item, .about-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 20px 50px rgba(255, 215, 0, 0.3)';
                this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            });
        });
    }
    addGoldenHoverEffects();

    // ==========================================
    // GOLDEN COUNTER ANIMATION WITH SPARKLE EFFECT
    // ==========================================
    function animateGoldenCounter(element, target, duration = 2500) {
        let start = 0;
        const increment = target / (duration / 16);
        
        // Add sparkle effect
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.cssText = `
            position: absolute;
            top: -10px;
            right: -10px;
            animation: sparkleRotate 2s infinite;
        `;
        element.style.position = 'relative';
        element.appendChild(sparkle);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.firstChild.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.firstChild.textContent = target;
            }
        }
        updateCounter();
    }

    // Enhanced counters for about cards
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card, index) => {
        const counter = document.createElement('div');
        counter.style.cssText = `
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(45deg, #ffd700, #ff8c00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        `;
        
        const counters = ['150', '500', '24', '100'];
        const suffixes = ['+', '+', '/7', '%'];
        
        counter.innerHTML = `<span>0</span>${suffixes[index]}`;
        card.insertBefore(counter, card.querySelector('h3'));
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateGoldenCounter(counter, parseInt(counters[index]));
                    setTimeout(() => {
                        counter.innerHTML = counters[index] + suffixes[index];
                    }, 2500);
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        counterObserver.observe(card);
    });

    // ==========================================
    // ENHANCED MOBILE MENU WITH GOLDEN ACCENTS
    // ==========================================
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Golden hamburger animation
            const hamburgers = this.querySelectorAll('.hamburger');
            hamburgers.forEach((line, index) => {
                line.style.background = '#ffd700';
                line.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
                
                if (this.classList.contains('active')) {
                    if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) line.style.opacity = '0';
                    if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                }
            });
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                const hamburgers = mobileMenu.querySelectorAll('.hamburger');
                hamburgers.forEach(line => {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                });
            });
        });
    }

    // ==========================================
    // GOLDEN THEME TOGGLE WITH ANIMATION
    // ==========================================
    function createGoldenThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '🌙';
        themeToggle.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 2px solid #ffd700;
            background: linear-gradient(45deg, #000000, #1a1a1a);
            color: #ffd700;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
        `;
        
        themeToggle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(15deg)';
            this.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.6)';
        });
        
        themeToggle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
        });
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('golden-light-theme');
            this.innerHTML = document.body.classList.contains('golden-light-theme') ? '☀️' : '🌙';
            
            // Add click animation
            this.style.transform = 'scale(0.8)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
        
        document.body.appendChild(themeToggle);
    }
    createGoldenThemeToggle();

    // ==========================================
    // GOLDEN CONTACT FORM ENHANCEMENTS
    // ==========================================
    const form = document.forms['submit-to-google-sheet'];
    if (form) {
        // Add golden focus effects to form inputs
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#ffd700';
                this.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
                this.style.transition = 'all 0.3s ease';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                this.style.boxShadow = 'none';
            });
        });

        const scriptURL = 'https://script.google.com/macros/s/AKfycbygAX0zMM2Tezd9i3eYijRMZt25s60GLkK_qtYOh3QGK-R2yvRtqHRcThcDgjmMfsVX/exec';
        
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            // Add loading animation
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.style.background = 'linear-gradient(45deg, #ffd700, #ff8c00)';
            
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    // Success animation
                    submitBtn.textContent = '✨ Sent!';
                    submitBtn.style.background = 'linear-gradient(45deg, #00ff00, #32cd32)';
                    
                    setTimeout(() => {
                        alert("Thanks! Your message was sent successfully.");
                        form.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = '';
                    }, 2000);
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    submitBtn.textContent = 'Error - Try Again';
                    submitBtn.style.background = 'linear-gradient(45deg, #ff0000, #ff6b6b)';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = '';
                    }, 3000);
                });
        });
    }

    // ==========================================
    // PERFORMANCE OPTIMIZATIONS
    // ==========================================
    
    // Lazy loading with golden shimmer effect
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Add shimmer effect while loading
                img.style.background = 'linear-gradient(90deg, rgba(255,215,0,0.1) 25%, rgba(255,215,0,0.3) 50%, rgba(255,215,0,0.1) 75%)';
                img.style.backgroundSize = '200% 100%';
                img.style.animation = 'shimmer 1.5s infinite';
                
                img.src = img.dataset.src;
                img.onload = () => {
                    img.style.animation = 'none';
                    img.style.background = 'none';
                };
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));

    // Enhanced debounce for better performance
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

    console.log('🌟 Premium Dark & Golden Theme JavaScript loaded successfully! ✨');
});

// ==========================================
// ENHANCED CSS ANIMATIONS AND STYLES
// ==========================================
const goldenThemeStyles = `
    @keyframes goldenPulse {
        0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.6); }
        50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.9); }
    }
    
    @keyframes goldenBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    @keyframes sparkleRotate {
        0% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(90deg) scale(1.2); }
        50% { transform: rotate(180deg) scale(1); }
        75% { transform: rotate(270deg) scale(1.2); }
        100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: linear-gradient(135deg, rgba(0,0,0,0.95), rgba(26,26,26,0.95));
        padding: 2rem 1rem;
        border-top: 2px solid rgba(255, 215, 0, 0.3);
        border-bottom: 2px solid rgba(255, 215, 0, 0.3);
        backdrop-filter: blur(10px);
    }
    
    .nav-links.active a {
        color: #ffd700;
        padding: 0.8rem 0;
        border-bottom: 1px solid rgba(255, 215, 0, 0.2);
        transition: all 0.3s ease;
    }
    
    .nav-links.active a:hover {
        color: #ffffff;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        transform: translateX(10px);
    }
    
    .golden-light-theme {
        --primary-bg: #fafafa;
        --secondary-bg: #ffffff;
        --accent-bg: #f0f0f0;
        --text-primary: #2c2c2c;
        --text-secondary: #4a4a4a;
        --text-muted: #666666;
        --golden-accent: #b8860b;
    }
    
    .golden-light-theme .golden-particle {
        background: radial-gradient(circle, #b8860b, #daa520) !important;
        box-shadow: 0 0 10px rgba(184, 134, 11, 0.4) !important;
    }
    
    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
        
        .nav-links.active {
            display: flex;
        }
        
        .golden-particles-container {
            opacity: 0.5;
        }
    }
    
    @media (prefers-reduced-motion: reduce) {
        .golden-particle,
        .golden-scroll-progress,
        .sparkle {
            animation: none !important;
        }
    }
`;

// Inject enhanced styles
const goldenStyleSheet = document.createElement('style');
goldenStyleSheet.textContent = goldenThemeStyles;
document.head.appendChild(goldenStyleSheet);