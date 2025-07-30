document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// You can add more JavaScript here for:
// - Dynamic content loading
// - Form validation (if you add a contact form)
// - Animations or effects
// - Dark mode toggle (if desired)

