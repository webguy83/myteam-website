var hamburgerBtn = document.querySelector('.hamburger');
var closeBtn = document.querySelector('.closeBtn');
var menuBackdrop = document.querySelector('.menu-backdrop');
var menuList = document.querySelector('.menu');
hamburgerBtn.addEventListener('click', toggleMenu, false);
closeBtn.addEventListener('click', toggleMenu, false);
// menuBackdrop.addEventListener('click', toggleMenu, true);
function toggleMenu() {
    if (menuBackdrop.classList.contains('showMenu')) {
        menuBackdrop.classList.remove('showMenu');
    }
    else {
        menuBackdrop.classList.add('showMenu');
    }
}
