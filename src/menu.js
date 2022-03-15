//JavaScript Module for Loading the Restaurant Menu Page
function loadMenu() {
    
    const menuPage = document.getElementById('content')

    menuPage.innerHTML = `
    <div id="header">
            <button type="button" id="home">HOME</button>
            <button type="button" id="menu">MENU</button>
            <button type="button" id="contact">CONTACT INFO</button>
        </div>
        <div id="container">
            <div id="name">
                <h1>Odin's Menu</h1>
                <img src="./img/nikola-jovanovic-QGPmWrclELg-unsplash.jpg" alt="pub" width="300">
            </div>
            <div id="menuDiv">
                <h3>Today's Menu</h3>
                <ul id="menuList">
                    <li>Odin's Fish & Chips - $12</li>
                    <li>Guinness Pint - $5</li>
                    <li>Cheeseburger - $9</li>
                    <li>Domestic Pint - $4</li>
                    <li>Chicken Tenders - $9</li>
                    <li>Cola - $2</li>
                    <li>Gameday Special: Bowl of Chili w/ drink - $8</li>
                </ul>
            </div>
        </div>
        <div id="footer">
            <p>by jkenton21 photo by <a href="https://unsplash.com/s/photos/pub">Nikola Jovanovic</a></p>
        </div>`;

        return menuPage;
}

export default loadMenu;