                                            /*  Bissard ?????  */
let menuIcon = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('close');                                                             
    navigation.classList.toggle('active');
}



                                            /* LA SECTION SCROLLENTE: color la page sur la quel on est */
let sections = document.querySelectorAll('section');
let lienNav = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            lienNav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


                            /* menu allant avec sn contenu */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


                            /* clicker sur le menu pour effacer le contour menu et venir au lien demander */
    menuIcon.classList.remove('logo-facebook');
    navigation.classList.remove('active');
};


                            /* scroll jouer sur les effets de scroll comme il se doit*/
ScrollReveal({ 
    /* reset: true, */
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.contenu-accueil, .en-tete', { origin: 'top' });
ScrollReveal().reveal('.image-accueil, .contenu-services, .lieu-portfolio, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.contenu-accueil h1, .propos-img', { origin: 'left' });
ScrollReveal().reveal('.contenu-accueil p, .contenu-propos', { origin: 'right' });


                                /* Ecriture et effacement de mon texte */
const typed = new Typed('.multi-texte', {
    strings: ['Développeur Web', 'Designer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});