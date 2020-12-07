const nav_slide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main_menu');
    const navLinks = document.querySelectorAll('.main_menu li');

    let menuOpen = false;
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav_active');
        
        if(!menuOpen) {
            burger.classList.add('open');
            menuOpen = true;
          } else {
            burger.classList.remove('open');
            menuOpen = false;
          }

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

nav_slide();
