const hamburgerBtn = document.querySelector('.hamburger')! as HTMLButtonElement;
const closeBtn = document.querySelector('.closeBtn')! as HTMLButtonElement;
const menuBackdrop = document.querySelector('.menu-backdrop')! as HTMLDivElement;
const menuList = document.querySelector('.menu')! as HTMLDivElement;
const copyrightYear = document.querySelector('.year')! as HTMLSpanElement;
const cardBtns = document.getElementsByClassName('card-btn');

const getCurrentYear = new Date().getFullYear();
copyrightYear.innerHTML = getCurrentYear.toString();

for (const cardBtn of Array.from(cardBtns)) {
  cardBtn.addEventListener('click', onCardBtnClick, true);
}

hamburgerBtn.addEventListener('click', toggleMenu, false);
closeBtn.addEventListener('click', toggleMenu, false);

function toggleMenu() {
  if (menuBackdrop.classList.contains('showMenu')) {
    menuBackdrop.classList.remove('showMenu');
  } else {
    menuBackdrop.classList.add('showMenu');
  }
}

function onCardBtnClick(e: Event) {
  const btn = e.target as HTMLButtonElement;
  const cardHolderElm = btn.previousElementSibling;
  const cardInnerElm = cardHolderElm!.firstElementChild as HTMLDivElement;
  const imgElm = btn.firstElementChild as HTMLImageElement;

  if (btn.classList.contains('opened')) {
    cardInnerElm.style.transform = 'none';
    btn.classList.remove('opened');
    imgElm.src = 'assets/icon-cross.svg';
  } else {
    cardInnerElm.style.transform = 'rotateY(180deg)';
    btn.classList.add('opened');
    imgElm.src = 'assets/icon-close.svg';
  }
}
