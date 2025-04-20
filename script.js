document.addEventListener('DOMContentLoaded', () => {
    // Scroll Progress Bar
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / totalScroll) * 100;
        scrollProgress.style.width = `${progress}%`;
    });

    // Matrix background effect
    const matrixBg = document.querySelector('.matrix-bg');
    const numberOfColumns = Math.floor(window.innerWidth / 20); // One column every 20px

    for (let i = 0; i < numberOfColumns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDelay = `${Math.random() * 8}s`;
        matrixBg.appendChild(column);
    }

    // Navigation elements
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const sections = document.querySelectorAll('section');

    // Scroll handling for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#fff';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scrolling for navigation links
    navLinksItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileNavToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Mobile Navigation Toggle
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !mobileNavToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileNavToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Active section highlighting
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinksItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(item => {
        observer.observe(item);
    });

    // Skill icons rotation on scroll
    const skillItems = document.querySelectorAll('.skill-item i');
    window.addEventListener('scroll', () => {
        skillItems.forEach(icon => {
            const rotation = window.scrollY * 0.2;
            icon.style.transform = `rotate(${rotation}deg)`;
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        hero.style.backgroundPositionY = `${scroll * 0.5}px`;
    });

    // Enhanced skill items animation
    const skillItemsEnhanced = document.querySelectorAll('.skill-item');
    skillItemsEnhanced.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        
        // Add hover effect for skill icons
        const icon = item.querySelector('i');
        item.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(360deg)';
        });
        item.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Enhanced certification items animation
    const certItems = document.querySelectorAll('.cert-item');
    certItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        
        // Add hover effect for certification icons
        const icon = item.querySelector('i');
        item.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(360deg)';
        });
        item.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Enhanced achievement items animation
    const achievementItemsEnhanced = document.querySelectorAll('.achievement-item');
    achievementItemsEnhanced.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        
        // Add hover effect for achievement items
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.02)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Intersection Observer for animations
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-item, .cert-item, .achievement-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        animateOnScroll.observe(item);
    });

    // Publication link hover effect
    document.querySelectorAll('.publication-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Tech stack hover effects
    document.querySelectorAll('.tech-stack span').forEach(tech => {
        tech.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        tech.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0) rotate(0)';
        });
    });

    // Particle effect for hero section
    const createParticle = (x, y) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 3 and 7 pixels
        const size = Math.random() * 4 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Set starting position
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 100 + 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        hero.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 1000);
    };

    // Create particles on mouse move
    hero.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) { // Control particle density
            createParticle(e.clientX, e.clientY);
        }
    });

    // Create random particles periodically
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.8;
        if (Math.random() > 0.9) {
            createParticle(x, y);
        }
    }, 200);

    // Add animation to education items
    const eduItems = document.querySelectorAll('.edu-item');
    eduItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observerSkill.observe(item);
    });

    // Add animation to achievement items
    const achievementItems = document.querySelectorAll('.achievement-item, .cert-item');
    achievementItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observerSkill.observe(item);
    });
}); 