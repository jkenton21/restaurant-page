//JavaScript Module for Loading the Restaurant Home Page
function loadContact() {
    
    const contactPage = document.getElementById('container')

    contactPage.innerHTML = `
            <div id="name">
                <h1>Contact Information</h1>
                <img src="./img/nikola-jovanovic-QGPmWrclELg-unsplash.jpg" alt="pub" width="300">
            </div>
            <div id="about">
                <h3>Call Us!</h3>
                <p>Our Carry out hours are posted below and differ slightly from our
                regular hours. Great for late night eats! To place an order call us at
                678-999-8212! Also we can be reached by email for other inquiries at
                fakeOdinsPub@email.com. We can't wait to hear from you!
                </p>
            </div>
            <div id="hours">
                <h3>Carry Out Hours</h3>
                <ul id="days">
                    <li>Monday: 10am - 1am</li>
                    <li>Tuesday: 10am - 1am</li>
                    <li>Wednesday: 10am - 1am</li>
                    <li>Thursday: 10am - 1am</li>
                    <li>Friday: 10am - 1am</li>
                    <li>Saturday: 10am - 1am</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>`;

        return contactPage;
}

export default loadContact;