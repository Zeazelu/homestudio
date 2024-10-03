import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact__container" id="contact">
      <div className="contact__wrapper">
        <h1>Napisz do nas!</h1>
        <form className="contact__form">
          <label>Imię i nazwisko</label>
          <input></input>
          <label>Adres email</label>
          <input></input>
          <label>Treść zapytania</label>
          <textarea></textarea>
        </form>
        <div className="contact__wrapper__row">
          <input type="checkbox" />
          <p>
            Zgadzam się i akceptuję <b>Regulamin</b> oraz{" "}
            <b>Politykę Prywatności</b>
          </p>
        </div>
        <button className="contact__button__black">WYŚLIJ WIADOMOŚĆ</button>
      </div>
    </div>
  );
}

export default Contact;
