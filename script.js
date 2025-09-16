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

// DARK MODE 

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light';
    } else {
        darkModeToggle.textContent = 'Dark';
    }
});

