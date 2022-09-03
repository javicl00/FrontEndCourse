//Selecting DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-items');
//Setting menu's initial state
let showingMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showingMenu) { //it isnt showing the menu
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        showingMenu = true;
    } else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        //Setting menu state
        showingMenu = false;
    }
}