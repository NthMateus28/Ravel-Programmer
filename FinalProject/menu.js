const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuImage = document.getElementById('menu-image');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');

    //O método includes() é uma maneira simples e eficiente de verificar se uma string contém um determinado valor em JavaScript.
        if (menuImage.src.includes("menu.png")) {
            menuImage.src = "../img/x.png"; 
        } else {
            menuImage.src = "../img/menu.png"; 
        }
    });
