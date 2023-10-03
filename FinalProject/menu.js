const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuImage = document.getElementById('menu-image');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');

        if (menuImage.src.includes("menu.png")) {
            menuImage.src = "../img/x.png"; 
        } else {
            menuImage.src = "../img/menu.png"; 
        }
    });
