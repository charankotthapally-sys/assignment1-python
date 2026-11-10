// MOBILE NAVIGATION

const menu = document.getElementById('menu');

const navLinks = document.getElementById('navLinks');


menu.addEventListener('click', () => {

    const open = navLinks.classList.toggle('open');

    menu.setAttribute('aria-expanded', String(open));

    menu.textContent = open ? '×' : '☰';

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll('#navLinks a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('open');

        menu.setAttribute('aria-expanded', 'false');

        menu.textContent = '☰';

    });

});


// AUTOMATIC FOOTER YEAR

document.getElementById('year').textContent =
    new Date().getFullYear();


// SCROLL REVEAL ANIMATION

const items = document.querySelectorAll(
    '.heading, .about-grid, .card, .project, .achievement-list>div, .contact-links'
);


if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                obs.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });


    items.forEach(item => {

        item.classList.add('reveal');

        observer.observe(item);

    });

} else {

    items.forEach(item => {

        item.classList.add('visible');

    });

}
