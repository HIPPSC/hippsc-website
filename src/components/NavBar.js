import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// effects
import useSequentialEffect from '../hooks/useSequentialEffect';

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

    // nav page handler
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

    

    // dropdown handler
    const [dropdownVisible, setDropdownVisible] = useState(true);
    const handleDropdownItemClick = () => {
        setDropdownVisible(false); // Hide the dropdown when an item is clicked
        // wait for 0.5s
        setTimeout(() => {
            setDropdownVisible(true); // Show the dropdown again
        }, 500);
    };


    // sequential effects
    const dropdownRef = useRef(null);
    useSequentialEffect(dropdownRef, '.nav-bar-dropdown-item', 100);
    

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
                    <div className="nav-bar-item dropdown page-text-2">
                        {t("navbar.p")}
                        <div className={`nav-bar-dropdown-content ${!dropdownVisible ? 'nav-bar-dropdown-content-hidden' : ''}`} ref={dropdownRef} onMouseEnter={() => setDropdownVisible(true)}>
                            <Link to="/product/holders" 
                                className='nav-bar-dropdown-item page-text-2'
                                onClick={handleDropdownItemClick}>
                                    {t("navbar.pS")}
                                    {/* Shrink Fit Holders */}
                            </Link>
                            <Link to='/product/h6i'
                                className='nav-bar-dropdown-item page-text-2'
                                onClick={handleDropdownItemClick}>
                                    {t("navbar.pH")}
                                    {/* H6i Shrink Fit Machine */}
                            </Link>
                            <Link to='/product/f15i'
                                className='nav-bar-dropdown-item page-text-2'
                                onClick={handleDropdownItemClick}>
                                    {t("navbar.pF")}
                                    {/* F15i Shrink Fit Machine */}
                            </Link>
                            <Link to='/product/tool_presetting'
                                className='nav-bar-dropdown-item page-text-2'
                                onClick={handleDropdownItemClick}>
                                    {t("navbar.pL")}
                                    {/* Laser Presetting Machine */}
                            </Link>
                        </div>
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