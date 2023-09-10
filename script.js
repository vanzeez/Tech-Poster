function addHoverEffects() {
    const container = document.querySelector('.container');
    const poster = document.querySelector('.poster img');
    const heading = document.querySelector('.heading');
    const eventDetails = document.querySelector('.event-details');

    container.addEventListener('mouseenter', () => {
        container.style.boxShadow = '0 0 40px rgba(52, 152, 219, 0.8)';
    });

    container.addEventListener('mouseleave', () => {
        container.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.5)';
    });

    poster.addEventListener('mouseenter', () => {
        poster.style.transform = 'scale(1.05)';
    });

    poster.addEventListener('mouseleave', () => {
        poster.style.transform = 'scale(1)';
    });

    heading.addEventListener('mouseenter', () => {
        heading.style.color = '#2980b9';
    });

    heading.addEventListener('mouseleave', () => {
        heading.style.color = '#3498db';
    });

    eventDetails.addEventListener('mouseenter', () => {
        eventDetails.style.transform = 'scale(1.02)';
    });

    eventDetails.addEventListener('mouseleave', () => {
        eventDetails.style.transform = 'scale(1)';
    });
}

function showRules() {
    const popup = document.getElementById('rules-popup');
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('rules-popup');
    popup.style.display = 'none';
}

function addTeamHoverEffects() {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach((member) => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'scale(1.05)';
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'scale(1)';
        });
    });
}

function addTeacherHoverEffects() {
    const teacherMembers = document.querySelectorAll('.teacher-member');

    teacherMembers.forEach((member) => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'scale(1.05)';
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'scale(1)';
        });
    });
}

const sanchaarLink = document.querySelector('.sanchaar-link');
sanchaarLink.addEventListener('click', (e) => {
    window.location.href = 'http://techmaticsolutions.com';
});

const instagramLink = document.querySelector('.instagram-link');
instagramLink.addEventListener('click', (e) => {
    window.location.href = 'https://instagram.com/techfest_sanchaar_official?igshid=NzZhOTFlYzFmZQ==';
});

document.addEventListener('DOMContentLoaded', function () {
particlesJS('particles-js', {
    particles: {
        number: { value: 200, density: { enable: true, value_area: 800 } },
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
});
    
