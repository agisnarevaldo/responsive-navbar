const btnMenu = document.querySelector('.btn-menu input');
const nav = document.querySelector('nav ul');

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('slide');
});