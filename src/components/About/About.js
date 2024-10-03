import React from "react";
import Photo from "../../assets/tailor-machine.webp";
import "./About.css";
function About() {
  return (
    <div className="about__container">
      <div className="about__title">
        <h2>
          Witaj w naszym świecie unikalnych projektów i wyjątkowej precyzji
        </h2>
      </div>
      <div className="about__image">
        <img src={Photo} alt="haft" />
      </div>
      <div className="about__wrapper">
        <h1>Nasza Pasja - Tworzenie Rzeczy Wyjątkowych</h1>
        <h2>
          Nasza firma to miejsce, gdzie sztuka i rzemiosło spotykają się w
          pięknych projektach, które przekraczają granice wyobraźni. Każdy
          produkt, który wychodzi z naszej pracowni, jest wyjątkowy i
          dostosowany do Twoich indywidualnych potrzeb.
        </h2>
        <h2>
          Jeśli jesteś gotowy odkryć świat nieograniczonych możliwości,
          zapraszamy do kontaktu z nami. Chętnie rozmawiamy o Twoich projektach
          i pomagamy Ci zrealizować Twoje marzenia.
        </h2>
      </div>
    </div>
  );
}

export default About;
