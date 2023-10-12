import React from "react";
import MainPage from "../../components/MainPage/MainPage";
import About from "../../components/About/About";
import Card from "../../components/Card/Card";
import MachineCard from "../../components/MachineCard/MachineCard";
import Contact from "../../components/Contact/Contact";
import '../Root/App.css';
import Title from "../../components/Title/Title";
import Embroidery from "../../components/Embroidery/Embroidery";
import DTF from "../../components/DTF/DTF";

function MainPageView() {
    return (
    <div className='container'>
        <MainPage />
        <About />
        <Title title="NASZE PRODUKTY" />
        <Card />
        <Title title="HAFT KOMPUTEROWY" />
        <Embroidery />
        <Title title="TRANSFER DTF" />
        <DTF />
        <Title title="MASZYNY NA KTÓRYCH PRACUJEMY" />
        <MachineCard />
        <Contact />
    </div>
    )
}

export default MainPageView;