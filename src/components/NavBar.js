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



const NavBar = () => {
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
                    <Link to="/contact" className={`nav-bar-contact-btn rectangle-btn ${isNavOpen ? 'active' : ''}`}>
                        Contact Us
                        <BsArrowRight className='nav-bar-contact-btn-icon rectangle-btn-icon' />
                    </Link>

                    {/* EXPAND */}
                    <div className={isNavOpen ? "full-page-nav active" : "full-page-nav"}>
                        <NavPage key={Date.now()} />
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
                <div className="nav-bar-item page-text-2">
                    Products
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