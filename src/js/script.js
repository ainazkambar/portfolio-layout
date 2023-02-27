import * as isWebp from "./modules/isWebp.js";

isWebp.isWebp();

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.tools__skills-item-value'),
    indicators = document.querySelectorAll('.tools__skills-item-indicator');

counters.forEach( (item, i) => {
    indicators[i].style.width = item.innerHTML;
});