/* =================================== Navbar toggle button =================================== */
let menuicon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

/* =================================== Sections =================================== */

let sections = document.querySelectorAll('section')
let nav = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            nav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id +']').classList.add('active')
            });
        }
    })
    /* =================================== Navbar =================================== */
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.screenY > 100)

    
    /* =================================== remove toggle icon when click =================================== */
    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

/* =================================== scroll transition =================================== */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .about-content', { origin: 'left' });
ScrollReveal().reveal('.home-img, .about-img, .services-container, .portfolio-box, .contact-form', { origin: 'right' });

//https://scrollrevealjs.org/






