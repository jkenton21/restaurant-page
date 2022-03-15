//Main Javascript file to import Modules that will be used in the webpage

//Add HTML code to main file
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

initialLoad();

function navigatePages() {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');

    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    contactButton.addEventListener('click', loadContact);
}

function initialLoad() {
    loadHome();
    navigatePages();
}

console.log("Hello World!");