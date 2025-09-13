// LOCO MOTIVE SMOOTH SCROLL 

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.8,
    lerp: 0.1,
});

// NAVBAR NAVIGATION 

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        scroll.scrollTo(targetId);
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save user preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
    }
});

// Check for saved user preference on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Set icon to sun
} else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Set icon to moon
}
