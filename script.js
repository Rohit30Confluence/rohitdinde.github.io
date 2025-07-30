// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Close mobile nav if open
        if (document.querySelector('.nav-links').classList.contains('nav-active')) {
            document.querySelector('.nav-links').classList.remove('nav-active');
            document.querySelector('.burger').classList.remove('toggle');
        }

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();


// Optional: Add a simple fade-in on scroll for sections (requires Intersection Observer API)
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    threshold: 0.2, // Trigger when 20% of the section is visible
    rootMargin: "0px"
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Add a class for fade-in animation
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('fade-on-scroll'); // Add initial hidden class
    sectionObserver.observe(section);
});

// Add CSS for fade-in effect:
/*
.fade-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in {
    opacity: 1;
    transform: translateY(0);
}
*/

// Add CSS for navLinkFade animation:
/*
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
*/
