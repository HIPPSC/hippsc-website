import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// components
import NavPage from './NavPage';

//css
import '../css/NavBar.css'
import logo from '../assets/logo.jpg'
import { BsArrowRight } from 'react-icons/bs';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

//multilangual
import { useTranslation } from 'react-i18next';



const NavBar = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    //--------mutilingual part --------
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const {t, i18n} = useTranslation("global");

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    }

    const switchLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    //---------------------------------

    const openNavPage = () => {
        // toggle nav page
        setNavOpen(!isNavOpen);

        // disable scrolling
        if (!isNavOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const closeNavPage = () => {
        if (!isNavOpen) return;

        // toggle nav page
        setNavOpen(false);

        // disable scrolling
        document.body.classList.remove('no-scroll');
    };
    

    return (
        <div className="nav-bar">

            {/* NAV_BAR_UPPER */}
            <div className="nav-bar-upper">
                {/* LEFT PART */}
                <div className="nav-bar-left">
                    {/* LOGO */}
                    <Link to="/" className="nav-bar-logo">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                
                {/* RIGHT PART */}
                <div className="nav-bar-right">
                    {/* CONTACT */}
                    <Link to="/contact" className={`nav-bar-contact-btn rectangle-btn ${isNavOpen ? 'active' : ''}`} onClick={() => closeNavPage()}>
                        {t("navbar.c")}
                        <BsArrowRight className='nav-bar-contact-btn-icon rectangle-btn-icon' />
                    </Link>

                    {/* EXPAND */}
                    <div className={isNavOpen ? "full-page-nav active" : "full-page-nav"}>
                        <NavPage key={Date.now()} closeNav={() => openNavPage()} />
                    </div>

                    <div className={`nav-bar-expand-btn rectangle-btn ${isNavOpen ? 'active' : ''}`}
                        onClick={openNavPage}
                    >
                        <CiMenuBurger className='nav-bar-expand-icon' />
                        <RxCross1 className='nav-bar-close-icon' />
                    </div>
                </div>
            </div>

            {/* NAV_BAR_LOWER */}
            <div className="nav-bar-lower">

                <div className="nav-bar-left">
                    {/* PRODUCTS */}
                    <div className="nav-bar-item page-text-2">
                        {t("navbar.p")}
                    </div>

                    {/* SERVICES */}
                    <div className="nav-bar-item page-text-2">
                        {t("navbar.s")}
                    </div>

                    {/* ABOUT */}
                    <Link to="/about" className="nav-bar-item page-text-2">
                        {t("navbar.a")}
                    </Link>
                </div>
                
                {/* SWITCH LANGUAGE */}
                <div className="nav-bar-right">
                    <div className="nav-bar-item page-text-2 " onClick={toggleDropdown}>
                        {t("navbar.l")}
                    </div>

                    {/* Language Dropdown */}
                    {isDropdownOpen && (
                        <div className="language-dropdown">
                            <div className="nav-bar-item dropdown-item" onClick={() => switchLanguage('en')}>English</div>
                            <div className="nav-bar-item dropdown-item" onClick={() => switchLanguage('cn')}>Chinese</div>
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;