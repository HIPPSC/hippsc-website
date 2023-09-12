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



const NavBar = () => {

    // nav page handler
    const [isNavOpen, setNavOpen] = useState(false);

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
                        Contact Us
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

                {/* PRODUCTS */}
                <div className="nav-bar-item dropdown page-text-2">
                    Products
                    <div className="nav-bar-dropdown-content" ref={dropdownRef}>
                        <div className='nav-bar-dropdown-item page-text-2'>Shrink Fit Holders</div>
                        <div className='nav-bar-dropdown-item page-text-2'>Shrink Fit Machines</div>
                        <div className='nav-bar-dropdown-item page-text-2'>Tool Setting Machine</div>
                    </div>
                </div>

                {/* SERVICES */}
                <div className="nav-bar-item page-text-2">
                    Services
                </div>

                {/* ABOUT */}
                <div className="nav-bar-item page-text-2">
                    About
                </div>
            </div>
        </div>
    );
};

export default NavBar;