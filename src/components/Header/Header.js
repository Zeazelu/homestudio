import React from "react";
import './Header.css'
import Logo from '../../assets/logo.png'

function Header () {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = -120;
            const offsetPosition = element.offsetTop + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className="header__container">
            <div className="header__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header__wrapper">
                <div><a href="/">Strona główna</a></div>
                <div onClick={() => scrollTo("products")}>Produkty</div>
                <div onClick={() => scrollTo("marking")}>Znakowanie odzieży</div>
                <div onClick={() => scrollTo("contact")}>Kontakt</div>
            </div>
        </div>
    )
}


export default Header;