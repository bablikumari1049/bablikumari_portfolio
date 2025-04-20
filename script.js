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

    // Tech Animation Setup
    const createCircuitLines = () => {
        const circuitContainer = document.querySelector('.circuit-lines');
        for (let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            line.className = 'circuit-line';
            line.style.top = `${Math.random() * 100}%`;
            line.style.animationDelay = `${Math.random() * 4}s`;
            circuitContainer.appendChild(line);
        }
    };

    const codeSnippets = [
        '#include <firmware.h>',
        'void setup() {',
        'int main(void) {',
        'GPIO_Init();',
        'while(1) {',
        'SPI_Transfer();',
        'ADC_Read();',
        'PWM_Update();',
        '}'
    ];

    const createCodeElements = () => {
        const codeContainer = document.querySelector('.code-elements');
        setInterval(() => {
            const code = document.createElement('div');
            code.className = 'code-element';
            code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            code.style.left = `${Math.random() * 100}%`;
            code.style.top = `${Math.random() * 100}%`;
            code.style.opacity = 0;
            codeContainer.appendChild(code);

            // Fade in
            requestAnimationFrame(() => {
                code.style.opacity = 0.3;
            });

            // Remove after animation
            setTimeout(() => {
                code.remove();
            }, 4000);
        }, 2000);
    };

    // Initialize tech animations
    createCircuitLines();
    createCodeElements();

    // Firmware Animation Setup
    function initFirmwareAnimations() {
        const hero = document.querySelector('.hero');
        
        // Clear existing firmware elements if any
        const existingElements = hero.querySelector('.firmware-elements');
        if (existingElements) {
            existingElements.remove();
        }
        
        const firmwareElements = document.createElement('div');
        firmwareElements.className = 'firmware-elements';
        hero.appendChild(firmwareElements);

        // Add circuit board background
        const circuitBoard = document.createElement('div');
        circuitBoard.className = 'circuit-board';
        firmwareElements.appendChild(circuitBoard);

        // Add binary rain with enhanced colors
        const binaryRain = document.createElement('div');
        binaryRain.className = 'binary-rain';
        firmwareElements.appendChild(binaryRain);

        // Create binary columns with varied colors
        for (let i = 0; i < 25; i++) {
            const column = document.createElement('div');
            column.className = 'binary-column';
            column.style.left = `${Math.random() * 100}%`;
            column.style.animationDelay = `${Math.random() * 8}s`;
            column.style.animationDuration = `${Math.random() * 4 + 6}s`; // Varied speeds
            column.textContent = generateBinaryString();
            binaryRain.appendChild(column);
        }

        // Add PCB traces with enhanced effects
        const tracePositions = [15, 35, 55, 75, 85];
        tracePositions.forEach((pos, index) => {
            // Horizontal traces
            const hTrace = document.createElement('div');
            hTrace.className = 'pcb-trace horizontal';
            hTrace.style.top = `${pos}%`;
            hTrace.style.left = `${Math.random() * 50}%`;
            hTrace.style.width = `${Math.random() * 100 + 50}px`;
            hTrace.style.animationDelay = `${Math.random() * 3}s`;
            firmwareElements.appendChild(hTrace);

            // Vertical traces
            const vTrace = document.createElement('div');
            vTrace.className = 'pcb-trace vertical';
            vTrace.style.left = `${pos}%`;
            vTrace.style.top = `${Math.random() * 50}%`;
            vTrace.style.height = `${Math.random() * 100 + 50}px`;
            vTrace.style.animationDelay = `${Math.random() * 3}s`;
            firmwareElements.appendChild(vTrace);
        });

        // Add LED indicators with varied colors
        for (let i = 0; i < 12; i++) {
            const led = document.createElement('div');
            led.className = 'led-indicator';
            led.style.left = `${Math.random() * 90 + 5}%`;
            led.style.top = `${Math.random() * 90 + 5}%`;
            led.style.animationDelay = `${Math.random() * 2}s`;
            firmwareElements.appendChild(led);
        }

        // Enhanced firmware code snippets
        const codeSnippets = [
            '#include <firmware.h>',
            'void setup() {',
            'GPIO_Init();',
            'SPI_Config();',
            'I2C_Init();',
            'ADC_Setup();',
            'PWM_Config();',
            'UART_Begin();',
            'while(1) {',
            'ReadSensors();',
            'ProcessData();',
            'UpdateOutputs();',
            'WDT_Reset();',
            '}',
            'ISR(TIMER0_OVF_vect) {',
            'uint16_t adc_val;',
            'DMA_Transfer();',
            'PORTB ^= _BV(LED);'
        ];

        // Create and add initial code snippets
        for (let i = 0; i < 4; i++) {
            createCodeSnippet();
        }

        // Continue adding snippets periodically with varied timing
        setInterval(createCodeSnippet, 2000);
        setTimeout(() => setInterval(createCodeSnippet, 2500), 1000);

        function createCodeSnippet() {
            const snippet = document.createElement('div');
            snippet.className = 'code-snippet';
            snippet.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            snippet.style.left = `${Math.random() * 80 + 10}%`;
            snippet.style.top = `${Math.random() * 80 + 10}%`;
            snippet.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;
            firmwareElements.appendChild(snippet);

            // Remove snippet after animation
            setTimeout(() => {
                snippet.remove();
            }, 4000);
        }

        // Add particle effects
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.setProperty('--tx', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--ty', `${Math.random() * 200 - 100}px`);
            firmwareElements.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }, 200);
    }

    function generateBinaryString() {
        return Array.from({length: 20}, () => Math.random() > 0.5 ? '1' : '0').join('');
    }

    // Initialize firmware animations immediately
    initFirmwareAnimations();

    // Refresh animations periodically to keep them dynamic
    setInterval(() => {
        initFirmwareAnimations();
    }, 30000); // Refresh every 30 seconds

    // Add chip decorations
    function createChipDecorations() {
        const hero = document.querySelector('.hero');
        const chipConfigs = [
            {
                position: { left: '15%', top: '25%' },
                label: 'CPU: Neural Net'
            },
            {
                position: { right: '20%', top: '35%' },
                label: 'Memory: Deep Learning'
            },
            {
                position: { left: '25%', bottom: '30%' },
                label: 'GPU: AI Processing'
            },
            {
                position: { right: '15%', bottom: '40%' },
                label: 'Data: ML Models'
            }
        ];

        chipConfigs.forEach((config, index) => {
            const chip = document.createElement('div');
            chip.className = 'chip-decoration';
            Object.assign(chip.style, config.position);
            chip.style.animationDelay = `${index * 1.2}s`;

            // Create pins container
            const pins = document.createElement('div');
            pins.className = 'pins';

            // Add horizontal pins
            for (let i = 0; i < 6; i++) {
                const pin = document.createElement('div');
                pin.className = 'pin horizontal';
                pin.style.left = i < 3 ? '-12px' : '100%';
                pin.style.top = `${(i % 3) * 40 + 20}%`;
                pins.appendChild(pin);
            }

            // Add vertical pins
            for (let i = 0; i < 6; i++) {
                const pin = document.createElement('div');
                pin.className = 'pin vertical';
                pin.style.top = i < 3 ? '-12px' : '100%';
                pin.style.left = `${(i % 3) * 40 + 20}%`;
                pins.appendChild(pin);
            }

            // Create inner grid
            const innerGrid = document.createElement('div');
            innerGrid.className = 'chip-inner-grid';
            for (let i = 0; i < 9; i++) {
                const cell = document.createElement('div');
                cell.style.animationDelay = `${Math.random() * 3}s`;
                innerGrid.appendChild(cell);
            }

            // Add label
            const label = document.createElement('div');
            label.className = 'chip-label';
            label.textContent = config.label;

            chip.appendChild(pins);
            chip.appendChild(innerGrid);
            chip.appendChild(label);
            hero.appendChild(chip);
        });
    }

    // Initialize chip decorations
    createChipDecorations();

    // Add computer animations to About section
    function createComputerAnimations() {
        const about = document.querySelector('.about');
        
        // Remove any existing computer animations
        const existingAnimation = about.querySelector('.computer-animation');
        if (existingAnimation) {
            existingAnimation.remove();
        }

        const computerAnimation = document.createElement('div');
        computerAnimation.className = 'computer-animation';

        // Create monitor
        const monitor = document.createElement('div');
        monitor.className = 'monitor';
        monitor.style.right = '15%';
        monitor.style.top = '20%';

        const monitorScreen = document.createElement('div');
        monitorScreen.className = 'monitor-screen';
        monitor.appendChild(monitorScreen);

        // Add code lines to monitor
        const codeSnippets = [
            'class Developer {',
            '  constructor() {',
            '    this.name = "Babli";',
            '    this.role = "ML Engineer";',
            '  }',
            '}',
            'const skills = ["AI", "ML"];',
            'while(true) {',
            '  code.write();',
            '  coffee.drink();',
            '}'
        ];

        codeSnippets.forEach((snippet, index) => {
            const codeLine = document.createElement('div');
            codeLine.className = 'code-line';
            codeLine.textContent = snippet;
            codeLine.style.top = `${index * 20}px`;
            codeLine.style.animationDelay = `${index * 0.5}s`;
            monitorScreen.appendChild(codeLine);
        });

        // Create keyboard
        const keyboard = document.createElement('div');
        keyboard.className = 'keyboard';
        keyboard.style.right = '17%';
        keyboard.style.top = '50%';

        // Create mouse
        const mouse = document.createElement('div');
        mouse.className = 'mouse';
        mouse.style.right = '8%';
        mouse.style.top = '50%';

        // Create floating code window
        const codeWindow = document.createElement('div');
        codeWindow.className = 'code-window';
        codeWindow.style.left = '15%';
        codeWindow.style.top = '30%';

        // Add window header
        const header = document.createElement('div');
        header.className = 'code-header';
        
        const dots = document.createElement('div');
        dots.className = 'window-dots';
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'window-dot';
            dots.appendChild(dot);
        }
        header.appendChild(dots);

        // Add window content
        const content = document.createElement('div');
        content.className = 'code-content';
        content.innerHTML = `
            import tensorflow as tf<br>
            import numpy as np<br><br>
            def train_model():<br>
            &nbsp;&nbsp;model = tf.keras.Sequential()<br>
            &nbsp;&nbsp;model.compile()<br>
            <span class="typing-line"></span>
        `;

        codeWindow.appendChild(header);
        codeWindow.appendChild(content);

        // Add all elements to the animation container
        computerAnimation.appendChild(monitor);
        computerAnimation.appendChild(keyboard);
        computerAnimation.appendChild(mouse);
        computerAnimation.appendChild(codeWindow);

        // Add animation container to about section
        about.appendChild(computerAnimation);
    }

    // Initialize computer animations when the about section is visible
    const aboutSection = document.querySelector('.about');
    const computerAnimationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createComputerAnimations();
                computerAnimationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    computerAnimationObserver.observe(aboutSection);
}); 