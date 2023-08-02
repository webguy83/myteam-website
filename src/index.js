var hamburgerBtn = document.querySelector('.hamburger');
var closeBtn = document.querySelector('.closeBtn');
var menuBackdrop = document.querySelector('.menu-backdrop');
var menuList = document.querySelector('.menu');
var cardBtns = document.getElementsByClassName('card-btn');
for (var _i = 0, _a = Array.from(cardBtns); _i < _a.length; _i++) {
    var cardBtn = _a[_i];
    cardBtn.addEventListener('click', onCardBtnClick, true);
}
hamburgerBtn.addEventListener('click', toggleMenu, false);
closeBtn.addEventListener('click', toggleMenu, false);
function toggleMenu() {
    if (menuBackdrop.classList.contains('showMenu')) {
        menuBackdrop.classList.remove('showMenu');
    }
    else {
        menuBackdrop.classList.add('showMenu');
    }
}
function onCardBtnClick(e) {
    var btn = e.target;
    var cardHolderElm = btn.previousElementSibling;
    var cardInnerElm = cardHolderElm.firstElementChild;
    var imgElm = btn.firstElementChild;
    if (btn.classList.contains('opened')) {
        cardInnerElm.style.transform = 'none';
        btn.classList.remove('opened');
        imgElm.src = '../assets/icon-cross.svg';
    }
    else {
        cardInnerElm.style.transform = 'rotateY(180deg)';
        btn.classList.add('opened');
        imgElm.src = '../assets/icon-close.svg';
    }
}
