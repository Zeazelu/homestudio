import React from "react";
import './Contact.css';

function Contact() {
    return (
        <div className="contact__container">
            <div className="contact__wrapper">
                <h2>Cennik</h2>
                <h1>Wycena haftu</h1>
                <h1>Wycena druku DTF</h1>
            </div>
            <div className="contact__wrapper">
                <h2>Linki</h2>
                <h1>Strona główna</h1>
                <h1>Facebook</h1>
                <h1>Allegro</h1>
            </div>
            <div className="contact__wrapper">
                <h2>Kontakt</h2>
                <h1>ul. Ks. Kard. Wyszyńskiego 5D, 29-100 Włoszczowa</h1>
                <h1>+48 505 020 807</h1>
                <h1>anna123_26@wp.pl</h1>
            </div>
        </div>
    )
}

export default Contact;