document.addEventListener('DOMContentLoaded', () => {
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

    // Add animation to skill items when they come into view
    const skillItems = document.querySelectorAll('.skill-item');
    const observerSkill = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observerSkill.observe(item);
    });

    // Add animation to education items
    const eduItems = document.querySelectorAll('.edu-item');
    eduItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observerSkill.observe(item);
    });

    // Add animation to project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
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