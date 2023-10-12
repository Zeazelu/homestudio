import React from "react";
import './Header.css'
import Logo from '../../assets/logo.png'

function Header () {
    return (
        <div className="header__container">
            <div className="header__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header__wrapper">
                <div>Strona główna</div>
                <div>O nas</div>
                <div>Galeria</div>
                <div>Kontakt</div>
            </div>
        </div>
    )
}


export default Header;