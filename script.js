// JavaScript to add hover effects
function addHoverEffects() {
    const container = document.querySelector('.container');
    const poster = document.querySelector('.poster img');
    const heading = document.querySelector('.heading');

    // Apply box shadow on container hover
    container.addEventListener('mouseover', () => {
        container.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.8)';
    });
    container.addEventListener('mouseout', () => {
        container.style.boxShadow = '0 0 10px rgba(52, 152, 219, 0.5)';
    });

    // Apply scale on poster hover
    poster.addEventListener('mouseover', () => {
        poster.style.transform = 'scale(1.02)';
    });
    poster.addEventListener('mouseout', () => {
        poster.style.transform = 'scale(1)';
    });

    // Change heading color on hover
    heading.addEventListener('mouseover', () => {
        heading.style.color = '#3498db';
    });
    heading.addEventListener('mouseout', () => {
        heading.style.color = '#ffcc00';
    });
}

// Call the function to add hover effects
addHoverEffects();

// Particle.js settings
particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: '#3498db' },
        shape: { type: 'circle' },
        opacity: { value: 0.2, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#3498db', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});
