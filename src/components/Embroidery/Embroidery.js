import React from "react";
import './Embroidery.css';
import Photo from '../../assets/embroidery.png'
import { Link } from "react-router-dom";

function Embroidery() {
    return (
        <div className="embroidery__container">
            <div className="embroidery__image">
                <img src={Photo} alt="haft" />             
            </div>
            <div className="embroidery__wrapper">
                <h2>Haft komputerowy to technika zdobienia tkanin i innych materiałów, w której wzory i projekty są tworzone za pomocą specjalnego programu komputerowego i następnie odtwarzane na tkaninach przy użyciu specjalnych maszyn komputerowych. W przeciwieństwie do tradycyjnego haftu ręcznego, haft komputerowy jest procesem zautomatyzowanym, co pozwala na dokładne i powtarzalne wzory oraz skomplikowane detale.</h2>
                <h2>Oferujemy szeroki zakres usług haftu komputerowego, w tym:</h2>
                <ul>
                    <li><span>Hafty na odzieży</span></li>
                    <li><span>Hafty na ręcznikach</span></li>
                    <li><span>Hafty na czapkach</span></li>
                    <li><span>Hafty na obrusach</span></li>
                    <li><span>Hafty na innych tekstyliach</span></li>
                </ul>
                <Link to="/embroidery" className="embroidery__link" >
                    <span>Kliknij aby sprawdzić wykonane przez nas hafty...</span>
                </Link>
            </div>
        </div>
    )
}

export default Embroidery;