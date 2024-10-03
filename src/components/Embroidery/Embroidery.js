import React from "react";
import "./Embroidery.css";
import Photo from "../../assets/embroidery.webp";

function Embroidery() {
  return (
    <div className="embroidery__container" id="marking">
      <div className="embroidery__image">
        <img src={Photo} alt="haft" />
      </div>
      <div className="embroidery__wrapper">
        <h2>
          Haft komputerowy to technika zdobienia tkanin i innych materiałów, w
          której wzory i projekty są tworzone za pomocą specjalnego programu
          komputerowego i następnie odtwarzane na tkaninach przy użyciu
          specjalnych maszyn komputerowych. W przeciwieństwie do tradycyjnego
          haftu ręcznego, haft komputerowy jest procesem zautomatyzowanym, co
          pozwala na dokładne i powtarzalne wzory oraz skomplikowane detale.
        </h2>
        <h2>Oferujemy szeroki zakres usług haftu komputerowego, w tym:</h2>
        <ul>
          <li>
            <span>Hafty na odzieży</span>
          </li>
          <li>
            <span>Hafty na ręcznikach</span>
          </li>
          <li>
            <span>Hafty na czapkach</span>
          </li>
          <li>
            <span>Hafty na obrusach</span>
          </li>
          <li>
            <span>Hafty na innych tekstyliach</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Embroidery;
