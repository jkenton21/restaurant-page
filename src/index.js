//Main Javascript file to import Modules that will be used in the webpage

//Import Modules to index file
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

//Initial load function
initialLoad();

//listen for navigation buttons to be clicked and load the desired page
//function navigatePages() {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');

    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    contactButton.addEventListener('click', loadContact);
//}

//load the home page initially then listen for buttons to be clicked
function initialLoad() {
    loadHome();
//    navigatePages();
}