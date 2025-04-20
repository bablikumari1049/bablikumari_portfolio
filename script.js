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

    // Animate elements on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    // Apply animations to elements
    document.querySelectorAll('.skill-item, .project-item, section h2, .achievement-item, .cert-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        animateOnScroll.observe(item);
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
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    };

    document.querySelector('.hero').addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) {
            createParticle(e.clientX, e.clientY);
        }
    });

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