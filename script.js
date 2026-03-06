/**
 * IEPeasy - Main Brand Interactivity
 * Founder: Chassity Brown
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOBILE NAVIGATION TOGGLE ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.desktop-nav');
    const navLinks = document.querySelectorAll('.desktop-nav a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active-mobile');
            
            // Basic mobile styling injection if not handled fully in CSS
            if (nav.classList.contains('active-mobile')) {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '85px';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = 'white';
                nav.style.padding = '40px';
                nav.style.borderBottom = '2px solid var(--lavender)';
                nav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
            } else {
                nav.style.display = 'none';
            }

            // Toggle Icon Animation (Hamburger to X)
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close mobile menu automatically when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 900) {
                nav.classList.remove('active-mobile');
                nav.style.display = 'none';
                const icon = menuToggle.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    });


    // --- 2. PREMIUM SCROLL REVEAL ---
    // This makes sections "fade in and slide up" as the teacher scrolls
    const revealElements = document.querySelectorAll('.reveal');

    const checkReveal = () => {
        // Trigger the animation when the element is 15% up from the bottom of the screen
        const triggerBottom = (window.innerHeight / 5) * 4.2;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    // Run on scroll
    window.addEventListener('scroll', checkReveal);
    // Run once on load to catch elements already in the "Hero" view
    checkReveal();


    // --- 3. SMOOTH ANCHOR SCROLLING ---
    // Prevents "jumping" and instead "glides" to the section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Ignore generic '#' links (like the logo or placeholders)
            if (targetId !== "#" && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 90; // Keeps the sticky header from covering titles
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // --- 4. HEADER SCROLL OOMPH ---
    // Adds a subtle shadow to the header ONLY after the user starts scrolling
    const mainHeader = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            mainHeader.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
            mainHeader.style.padding = "15px 0"; // Subtle shrink effect
        } else {
            mainHeader.style.boxShadow = "none";
            mainHeader.style.padding = "25px 0";
        }
    });

    // --- 5. DEVELOPER CONSOLE LOG ---
    console.log("✨ IEPeasy Site Loaded Successfully!");
    console.log("Note: Remember to replace 'YOUR_GOOGLE_FORM_URL' in the HTML with your actual Google Form link.");

});