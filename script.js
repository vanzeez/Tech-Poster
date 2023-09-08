// JavaScript (script.js)

// Function to add hover effect to elements
function addHoverEffects() {
    const container = document.querySelector('.container');
    const poster = document.querySelector('.poster img');
    const heading = document.querySelector('.heading');
    const eventDetails = document.querySelector('.event-details');

    container.addEventListener('mouseover', () => {
        // Apply hover effect to the entire container
        container.style.boxShadow = '0 0 40px rgba(255, 0, 0, 0.8)';
        // You can add other hover effects here
    });

    container.addEventListener('mouseout', () => {
        // Reset the styles on mouseout
        container.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
        // Reset other hover effects here
    });

    // Add hover effect for the poster image
    poster.addEventListener('mouseover', () => {
        // Apply hover effect for the poster
        poster.style.transform = 'scale(1.1)';
        // Add other poster hover effects here
    });

    poster.addEventListener('mouseout', () => {
        // Reset the poster styles on mouseout
        poster.style.transform = 'scale(1)';
        // Reset other poster hover effects here
    });

    // Add hover effect for the heading
    heading.addEventListener('mouseover', () => {
        // Apply hover effect for the heading
        heading.style.color = 'red';
        // Add other heading hover effects here
    });

    heading.addEventListener('mouseout', () => {
        // Reset the heading styles on mouseout
        heading.style.color = '#ffcc00';
        // Reset other heading hover effects here
    });

    // Add hover effect for event details with a popup
    eventDetails.addEventListener('mouseover', () => {
        // Show a popup or tooltip with additional information here
        // For example, you can create a hidden element and make it visible.
        // You can use CSS to style the popup.
    });

    eventDetails.addEventListener('mouseout', () => {
        // Hide the popup when the mouse leaves the event details
        // You can do this by hiding the element or setting its visibility to hidden.
    });

    // Similarly, add hover effects for other elements if needed.
}

// Call the function to add hover effects
addHoverEffects();

// Initialize particles.js with more particles
particlesJS('particles-js', {
    particles: {
        number: { value: 200, density: { enable: true, value_area: 800 } }, // Increased number of particles
        color: { value: '#ffffff' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.2, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});
