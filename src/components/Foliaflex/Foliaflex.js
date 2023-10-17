import React from "react";
import './Foliaflex.css'
import Photo from '../../assets/cutting out stickers.jpg'

function Foliaflex() {
    return (
        <div className="foliaflex__container">
            <div className="foliaflex__image">
            <img src={Photo} alt="foliaflex" width="550px" />          
        </div>
        <div className="foliaflex__wrapper">
            <h2>Folia Flex to zaawansowana technologia znakowania odzieży, która pozwala na stworzenie trwałych i estetycznych wzorów na tkaninach. Nasza firma specjalizuje się w wykorzystaniu tej innowacyjnej metody, aby dostarczyć Ci spersonalizowaną odzież, która wyróżni Cię z tłumu.</h2>
            <h1>Kiedy DTF a kiedy Folia Flex?</h1>
            <div className="foliaflex__compare">
                <div>
                    <ul>
                        <h1>DTF</h1>
                        <li><span>Przeznaczenie na duże powierzchnie: DTF jest często używane do znakowania większych obszarów na tkaninach, takich jak grafiki na całej koszulce.</span></li>
                        <li><span>Wielobarwne wzory i zdjęcia: DTF może reprodukować skomplikowane wzory i zdjęcia z wieloma kolorami i detalami.</span></li>
                        <li><span>Tkaniny bawełniane: DTF doskonale nadaje się do znakowania na tkaninach bawełnianych.</span></li>
                        <li><span>Elastyczność tkanin: DTF jest bardziej elastyczne, co sprawia, że jest bardziej odpowiednie do tkanin rozciągliwych, takich jak odzież sportowa.</span></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h1>Folia Flex</h1>
                        <li><span>Niewielkie nakłady produkcyjne: Folia Flex jest bardziej odpowiednia, jeśli potrzebujesz małe ilości znakowanej odzieży, na przykład do spersonalizowanych koszulek na urodziny lub wydarzenia firmowe.</span></li>
                        <li><span>Proste wzory: Folia Flex jest najlepsza do jednokolorowych lub prostych wielokolorowych wzorów. Jest to szczególnie przydatne w przypadku tekstu, logo lub grafiki o wyraźnych konturach.</span></li>
                        <li><span>Odzież sportowa: Jeśli znakowana odzież będzie intensywnie używana, na przykład w sporcie, folia Flex jest bardziej trwała i wytrzymała.</span></li>
                        <li><span>Wzory o małym rozmiarze: Folia Flex jest doskonała do znakowania niewielkich wzorów, na przykład na kieszeniach koszulki.</span></li>
                    </ul>
                </div>
            </div>
            <h2>Podsumowując, wybór między DTF a folią Flex zależy od Twoich konkretnych potrzeb i preferencji. Jeśli masz pytania dotyczące konkretnych projektów, zawsze warto skonsultować się z nami, aby wybrać odpowiednią technologię.</h2>
        </div>
    </div>
    )
}

export default Foliaflex;