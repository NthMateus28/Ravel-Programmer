const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('open'); // Adicione ou remova a classe 'open'
});
