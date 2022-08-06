const headerBurger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');
const body = document.querySelector('body')

function clickBurger() {
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    body.classList.toggle('lock');
}

AOS.init();