// ============================================
// PARTICLE BACKGROUND CONFIGURATION
// ============================================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00D9FF'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00D9FF',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
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

// ============================================
// TYPING EFFECT FOR HERO TEXT
// ============================================
const typingText = document.querySelector('.typing-text');
const textArray = [
    'AI/ML Engineer',
    'Backend Developer',
    'Blockchain Enthusiast',
    'Python Developer',
    'LLM Specialist'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 500);
});

// ============================================
// SCROLL ANIMATIONS FOR SECTIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// SKILL CARDS HOVER EFFECT
// ============================================
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(0, 217, 255, 0.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(30, 41, 59, 0.6)';
    });
});

// ============================================
// PROJECT CARDS HOVER EFFECT
// ============================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(124, 58, 237, 0.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(30, 41, 59, 0.6)';
    });
});

// ============================================
// CURSOR GLOW EFFECT (OPTIONAL - EXTRA FANCY)
// ============================================
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 217, 255, 0.6), transparent);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Enlarge cursor glow on clickable elements
document.querySelectorAll('a, button, .skill-card, .project-card').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursorGlow.style.width = '40px';
        cursorGlow.style.height = '40px';
    });
    
    elem.addEventListener('mouseleave', () => {
        cursorGlow.style.width = '20px';
        cursorGlow.style.height = '20px';
    });
});

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c🚀 Welcome to Vansh\'s Portfolio!', 'color: #00D9FF; font-size: 20px; font-weight: bold;');
console.log('%c💡 Interested in the code? Check out my GitHub!', 'color: #7C3AED; font-size: 14px;');
console.log('%c📧 Contact: vanshmojidrawork@gmail.com', 'color: #F59E0B; font-size: 14px;');