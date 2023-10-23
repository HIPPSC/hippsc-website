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
import { CiGlobe } from 'react-icons/ci';

//multilangual
import { useTranslation } from 'react-i18next';



const NavBar = () => {

    // nav page handler
    const [isNavOpen, setNavOpen] = useState(false);

    //--------mutilingual part --------
    const {t, i18n} = useTranslation("global");

    const switchLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    //---------------------------------

    // nav page handler
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
    const [productDropdownVisible, setProductDropdownVisible] = useState(true);
    const handleProductDropdownItemClick = () => {
        setProductDropdownVisible(!productDropdownVisible);
    };

    const [lgDropdownVisible, setLgDropdownVisible] = useState(true);


    // sequential effects
    const productDropdownRef = useRef(null);
    useSequentialEffect(productDropdownRef, '.nav-bar-dropdown-item', 100);
    const lgDropdownRef = useRef(null);
    useSequentialEffect(lgDropdownRef, '.nav-bar-dropdown-item', 100);
    

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
                    <div className="nav-bar-item nav-bar-left-item dropdown page-text-2" 
                         onClick={handleProductDropdownItemClick}>
                            {t("navbar.p")}
                        <div className={`nav-bar-dropdown-content ${!productDropdownVisible ? 'nav-bar-dropdown-content-hidden' : ''}`} ref={productDropdownRef}>
                            <Link to="/product/holders" 
                                className='nav-bar-dropdown-item page-text-2'
                                onClick={handleProductDropdownItemClick}>
                                    {t("navbar.pS")}
                                    {/* Shrink Fit Holders */}
                            </Link>
                            <Link to='/product/h6i'
                                className='nav-bar-dropdown-item page-text-2'
                                onClick={handleProductDropdownItemClick}>
                                    {t("navbar.pH")}
                                    {/* H6i Shrink Fit Machine */}
                            </Link>
                            <Link to='/product/f15i'
                                className='nav-bar-dropdown-item page-text-2'
                                onClick={handleProductDropdownItemClick}>
                                    {t("navbar.pF")}
                                    {/* F15i Shrink Fit Machine */}
                            </Link>
                            <Link to='/product/tool_presetting'
                                className='nav-bar-dropdown-item page-text-2'
                                onClick={handleProductDropdownItemClick}>
                                    {t("navbar.pL")}
                                    {/* Laser Presetting Machine */}
                            </Link>
                        </div>
                    </div>

                    {/* SERVICES */}
                    <Link to="/service"
                        className="nav-bar-item nav-bar-left-item page-text-2">
                        {t("navbar.s")}
                    </Link>

                    {/* ABOUT */}
                    <Link to="/about" 
                          className="nav-bar-item nav-bar-left-item page-text-2">
                        {t("navbar.a")}
                    </Link>
                    
                </div>
                
                
                
                {/* SWITCH LANGUAGE */}
                <div className="nav-bar-right">
                    
                    {/* Language Dropdown */}
                    <div className="nav-bar-item dropdown page-text-2"
                        onClick={() => setLgDropdownVisible(!lgDropdownVisible)}>
                            <div className="language-dropdown">
                                <CiGlobe className='nav-bar-dropdown-icon' />
                                {t("navbar.l")}
                            </div>
                        <div className={`nav-bar-dropdown-content ${!lgDropdownVisible ? 'nav-bar-dropdown-content-hidden' : ''}`} ref={lgDropdownRef}>
                            <div className="nav-bar-dropdown-item page-text-2" onClick={() => switchLanguage('en')}>
                                English
                            </div>
                            <div className="nav-bar-dropdown-item page-text-2" onClick={() => switchLanguage('cn')}>
                                中文
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;