// ===================================
// MOBILE NAVIGATION
// ===================================

const menu = document.getElementById('menu');
const navLinks = document.getElementById('navLinks');

if (menu && navLinks) {

    menu.addEventListener('click', () => {

        const isOpen = navLinks.classList.toggle('open');

        menu.classList.toggle('active', isOpen);

        menu.setAttribute('aria-expanded', String(isOpen));

        menu.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation' : 'Open navigation'
        );

    });


    // CLOSE MENU AFTER CLICKING A LINK

    navLinks.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            navLinks.classList.remove('open');

            menu.classList.remove('active');

            menu.setAttribute('aria-expanded', 'false');

            menu.setAttribute('aria-label', 'Open navigation');

        });

    });

}


// ===================================
// AUTOMATIC FOOTER YEAR
// ===================================

const year = document.getElementById('year');

if (year) {

    year.textContent = new Date().getFullYear();

}


// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const header = document.querySelector('.site-header');

const updateHeader = () => {

    if (header) {

        header.classList.toggle(
            'scrolled',
            window.scrollY > 16
        );

    }

};

window.addEventListener('scroll', updateHeader, {
    passive: true
});

updateHeader();


// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================

const revealItems = document.querySelectorAll(

    '.section-heading, ' +
    '.about-story, ' +
    '.about-facts, ' +
    '.skill-card, ' +
    '.skill-footnote, ' +
    '.project-card, ' +
    '.milestone, ' +
    '.contact-copy, ' +
    '.contact-details'

);


if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(

        (entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                    obs.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.14
        }

    );


    revealItems.forEach(item => {

        item.classList.add('reveal');

        observer.observe(item);

    });

} else {

    revealItems.forEach(item => {

        item.classList.add('visible');

    });

}
