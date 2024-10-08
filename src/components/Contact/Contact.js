import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

function Contact() {
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [formError, setFormError] = useState(null); // Błędy formularza
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);

  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE;
  const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE;
  const SITEKEY_LOCALHOST = process.env.REACT_APP_RECAPTCHA_SITE_KEY_LOCALHOST;
  const SITEKEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY_PRODUCTION;

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setRecaptchaVerified(true);
  };

  const resetForm = () => {
    setFormError(null);
  };

  const handleAgreementChange = (e) => {
    setIsAgreementChecked(e.target.checked);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = e.target.elements;

    // Sprawdzanie, czy pola formularza są wypełnione
    if (!user_name.value || !user_email.value || !message.value) {
      setFormError("Wypełnij wszystkie pola formularza.");
      return;
    }

    // Sprawdzanie poprawności adresu e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email.value)) {
      setFormError("Podaj poprawny adres email.");
      return;
    }

    // Sprawdzanie, czy zgoda została zaznaczona
    if (!isAgreementChecked) {
      setFormError("Proszę zaakceptować regulamin i politykę prywatności.");
      return;
    }

    // Sprawdzanie, czy reCAPTCHA została zweryfikowana
    if (!recaptchaVerified) {
      setFormError("Proszę zweryfikować reCAPTCHA przed wysłaniem formularza.");
      return;
    }

    try {
      // Wysłanie e-maila
      await emailjs.sendForm(SERVICE, TEMPLATE, e.target, {
        publicKey: PUBLIC_KEY,
      });
      console.log("SUCCESS!");

      // Resetowanie formularza i stanów
      resetForm();
      setIsFormSubmitted(true);
      setFormError(null); // Usunięcie błędu po pomyślnym wysłaniu formularza

      // Automatyczne ukrycie komunikatu o sukcesie po 5 sekundach
      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.log("FAILED...", error.text);
      setFormError(
        "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie."
      );
    }
  };

  return (
    <div className="contact__container" id="contact">
      <div className="contact__wrapper">
        <h1>Napisz do nas!</h1>
        <form onSubmit={sendEmail} className="contact__form">
          <label>Imię i nazwisko</label>
          <input type="text" name="user_name"></input>
          <label>Adres email</label>
          <input type="email" name="user_email"></input>
          <label>Treść zapytania</label>
          <textarea name="message"></textarea>
          <div className="contact__wrapper__row">
            <input
              type="checkbox"
              checked={isAgreementChecked}
              onChange={handleAgreementChange}
            />
            <p>
              Zgadzam się i akceptuję <b>Regulamin</b> oraz{" "}
              <b>Politykę Prywatności</b>
            </p>
          </div>
          <ReCAPTCHA sitekey={SITEKEY} onChange={onChange} />
          <button type="submit" className="contact__button__black">
            WYŚLIJ WIADOMOŚĆ
          </button>
        </form>

        {/* Wyświetlanie komunikatów o błędach */}
        {formError && <p className="error__message">{formError}</p>}
        {isFormSubmitted && (
          <p className="success__message">
            Formularz został pomyślnie wysłany!
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
