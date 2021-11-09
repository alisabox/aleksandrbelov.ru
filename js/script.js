// Mobile menu

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

// Mapbox

const PIN_ICON_PATH = 'img/pin.svg';
const Coordinates = {
  LAT: 54.731706508891634,
  LNG: 20.500724826856697,
}
const MainPinSize = {
  WIDTH: 52,
  HEIGHT: 52,
};

L.mapbox.accessToken = 'pk.eyJ1IjoiYnV6eWJlZSIsImEiOiJja3ZwY3E0eTY3NHlzMzJtc253N3dhaG9mIn0.ZLLnYDnOXqVWEmTUO89N7Q';
var map = L.mapbox.map('map')
  .setView([Coordinates.LAT, Coordinates.LNG], 14)
  .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));


const mainPinIcon = L.icon({
  iconUrl: PIN_ICON_PATH,
  iconSize: [MainPinSize.WIDTH, MainPinSize.HEIGHT],
  iconAnchor: [MainPinSize.WIDTH/2, MainPinSize.HEIGHT],
});

const mainPinMarker = L.marker(
  {
    lat: Coordinates.LAT,
    lng: Coordinates.LNG,
  },
  {
    draggable: false,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);