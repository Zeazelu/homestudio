import React from "react";
import './DTF.css';
import { Link } from "react-router-dom";
import Photo from '../../assets/stickers to clothing.jpg'

function DTF() {
    return (
        <div className="dtf__container">
            <div className="dtf__wrapper">
                <h2>DTF, czyli Direct to Fabric lub Direct to Garment, to zaawansowana metoda druku, która umożliwia dokładne i trwałe oznakowanie odzieży i tekstyliów. Nasza firma specjalizuje się w wykorzystaniu tej technologii, aby dostarczać wyjątkowe i spersonalizowane produkty dla naszych klientów.</h2>
                <h2>Oferujemy szeroki zakres możliwości znakowania odzieży, koszulek, bluz, toreb i innych tekstyliów. Nasze rozwiązania są idealne zarówno dla klientów indywidualnych, jak i dla firm.</h2>
                <h2>Technologia DTF zapewnia trwałe i wysokiej jakości oznakowanie, które nie blaknie ani nie spiera się nawet po wielu praniach. Twoje ubrania będą wyglądać świetnie przez długi czas.</h2>
                <h1>Dlaczego Wybrać Nas?</h1>
                <ul>
                    <li><span>Mamy wiele lat doświadczenia w dostarczaniu wysokiej jakości produktów.</span></li>
                    <li><span>Nasze oznakowanie DTF jest trwałe i odporne na zużycie, co gwarantuje długotrwałą satysfakcję.</span></li>
                    <li><span>Nasza produkcja jest efektywna, dzięki czemu możemy dostarczyć Ci spersonalizowane produkty w krótkim czasie.</span></li>
                </ul>
            </div>
            <div className="dtf__image">
                <img src={Photo} alt="dtf" width="550px" />             
            </div>
        </div>
    )
}

export default DTF;