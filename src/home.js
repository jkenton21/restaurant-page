//JavaScript Module for Loading the Restaurant Home Page
function loadHome() {
    
    const homePage = document.getElementById('container')

    homePage.innerHTML = `
            <div id="name">
                <h1>Odin's Pub</h1>
                <img src="./img/nikola-jovanovic-QGPmWrclELg-unsplash.jpg" alt="pub" width="300">
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
            </div>`;

        return homePage;
}

export default loadHome;