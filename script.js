function addHoverEffects() {
    const container = document.querySelector('.container');
    const poster = document.querySelector('.poster img');
    const heading = document.querySelector('.heading');

    // Apply box shadow and scale on container hover
    container.addEventListener('mouseover', () => {
        container.style.boxShadow = '0 0 40px rgba(255, 0, 0, 0.8)';
    });
    container.addEventListener('mouseout', () => {
        container.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
    });

    // Apply scale on poster hover
    poster.addEventListener('mouseover', () => {
        poster.style.transform = 'scale(1.1)';
    });
    poster.addEventListener('mouseout', () => {
        poster.style.transform = 'scale(1)';
    });

    // Change heading color on hover
    heading.addEventListener('mouseover', () => {
        heading.style.color = 'red';
    });
    heading.addEventListener('mouseout', () => {
        heading.style.color = '#ffcc00';
    });
}

// Call the function to add hover effects
addHoverEffects();

particlesJS('particles-js', {
    particles: {
        // Your particle settings...
    },
    interactivity: {
        // Your interactivity settings...
    },
    retina_detect: true
});
