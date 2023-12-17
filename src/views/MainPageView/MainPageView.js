import React from "react";
import MainPage from "../../components/MainPage/MainPage";
import About from "../../components/About/About";
import MachineCard from "../../components/MachineCard/MachineCard";
import Contact from "../../components/Contact/Contact";
import '../Root/App.css';
import Title from "../../components/Title/Title";
import Embroidery from "../../components/Embroidery/Embroidery";
import DTF from "../../components/DTF/DTF";
import Foliaflex from "../../components/Foliaflex/Foliaflex";
import { promotedproducts } from "../../data/Products";
import PromotedCard from "../../components/PromotedCard/PromotedCard";

function MainPageView() {
    return (
    <div className='container'>
        <MainPage />
        <About />
        <Title title="NASZE PRODUKTY" />
        <PromotedCard products={promotedproducts} />
        <Title title="HAFT KOMPUTEROWY" />
        <Embroidery />
        <Title title="TRANSFER DTF" />
        <DTF />
        <Title title="NADRUK FOLIĄ FLEX" />
        <Foliaflex />
        <Title title="NASZE MASZYNY" />
        <MachineCard />
        <Title title="KONTAKT" />
        <Contact />
    </div>
    )
}

export default MainPageView;