import React from "react";
import './Contact.css';

function Contact() {
    return (
        <div className="contact__container" id="contact">
            <div className="contact__wrapper">
                <h2>Cennik</h2>
                <h1>Wycena haftu</h1>
                <h1>Wycena druku DTF</h1>
            </div>
            <div className="contact__wrapper">
                <h2>Linki</h2>
                <a href="https://www.facebook.com/profile.php?id=100060165242799"><h1>Strona główna</h1></a>
                <h1>Facebook</h1>
                <h1>Allegro</h1>
            </div>
            <div className="contact__wrapper">
                <h2>Kontakt</h2>
                <h1>ul. Ks. Kard. Wyszyńskiego 5D, 29-100 Włoszczowa</h1>
                <h1>+48 505 020 807</h1>
                <h1>anna123_26@wp.pl</h1>
            </div>
            <div className="contact__wrapper">
                <h2>Dojazd</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.127128914351!2d19.984644715894554!3d50.847330066568745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717656bf1234403%3A0x87e9ff41756681e7!2sHome%20Studio%20-%20Szycie%20%26%20Haft!5e0!3m2!1spl!2spl!4v1660051322952!5m2!1spl!2spl" title='googlemaps'></iframe>
            </div>
        </div>
    )
}

export default Contact;