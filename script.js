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

window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
});
