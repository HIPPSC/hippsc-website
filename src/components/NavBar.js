import React from 'react';

//css
import '../css/NavBar.css'

const NavBar = () => {

    return (
        <div className="nav-bar">

            {/* NAV_BAR_UPPER */}
            <div className="nav-bar-upper">
                
                {/* LEFT PART */}
                <div className="nav-bar-left">
                    {/* LOGO */}
                    <div className="logo">
                        HIPPSC
                    </div>
                </div>
                
                
                {/* RIGHT PART */}
                <div className="nav-bar-right">
                    {/* CONTACT */}
                    <div className="nav-bar-contact-btn">
                        Contact Us
                    </div>

                    {/* EXPAND */}
                    <div className="nav-bar-expand-btn">

                    </div>

                </div>
                
            </div>

            {/* NAV_BAR_LOWER */}
            <div className="nav-bar-lower">

                {/* PRODUCTS */}
                <div className="nav-bar-products">
                    Products
                </div>

                {/* SERVICES */}
                <div className="nav-bar-services">
                    Services
                </div>

                {/* NEWS */}
                <div className="nav-bar-news">
                    News
                </div>

                {/* ABOUT */}
                <div className="nav-bar-about">
                    About
                </div>
            </div>
        </div>
    );
};

export default NavBar;