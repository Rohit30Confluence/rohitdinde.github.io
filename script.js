document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars on scroll
    const skillLevels = document.querySelectorAll('.skill-level');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width; // Get the width set in inline style
                skillBar.style.width = '0%'; // Reset to 0 before animation
                setTimeout(() => {
                    skillBar.style.width = width; // Animate to original width
                }, 100); // Small delay to ensure reset happens
                observer.unobserve(skillBar); // Stop observing after animation
            }
        });
    }, observerOptions);

    skillLevels.forEach(level => {
        skillObserver.observe(level);
    });

    // Optional: Simple form submission (for contact form)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            // In a real application, you would send this data to a backend service (e.g., Formspree, Netlify Forms, or your own server)
            contactForm.reset(); // Clear the form
        });
    }
});
