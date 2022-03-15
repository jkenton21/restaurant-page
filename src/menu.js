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
                <h1>Odin's Pub</h1>
            </div>
            <div id="about">
                <h3>About Us</h3>
                <p>Welcome to Odin's Pub, your friendly neighborhood bar. Stop by for
                    a pint (or four) and the best fish and chips your money can buy (accoring 
                    to one random guy back in 2012). We host watch parties for all of the local teams
                    and gaurantee you will always leave a winner even if the teams dont.
                    Stop by whenever you get a chance and thank you for supporting small local
                    business. Can't wait to see you!
                </p>
            </div>
            <div id="hours">
                <h3>Hours</h3>
                <ul id="days">
                    <li>Monday: 10am - 2am</li>
                    <li>Tuesday: 10am - 2am</li>
                    <li>Wednesday: 10am - 2am</li>
                    <li>Thursday: 10am - 2am</li>
                    <li>Friday: 10am - 4am</li>
                    <li>Saturday: 10am - 4am</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
        </div>
        <div id="footer">
            <p>by jkenton21</p>
        </div>`;

        return menuPage;
}

export default loadMenu;