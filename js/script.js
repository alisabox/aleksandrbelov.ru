const bodyElement = document.querySelector('body');
const header = bodyElement.querySelector('.header');
const menuButton = header.querySelector('.header__nav-button');
const menuElement = header.querySelector('.header__nav');

const handleMenuClick = (evt) => {
  evt.preventDefault();
  const section = bodyElement.querySelector(evt.target.getAttribute('href'));
  if (section) {
    section.scrollIntoView();
    menuElement.classList.remove('header__nav--open');
    menuButton.classList.remove('header__nav-button--open');
    bodyElement.style.overflow = '';
  }
}

const handleMenuButtonClick = () => {
  menuElement.classList.toggle('header__nav--open');
  menuButton.classList.toggle('header__nav-button--open');
  if (bodyElement.style.overflow === '') {
    bodyElement.style.overflow = 'hidden';
  } else {
    bodyElement.style.overflow = '';
  }
}

menuButton.addEventListener('click', handleMenuButtonClick);
menuElement.addEventListener('click', handleMenuClick);