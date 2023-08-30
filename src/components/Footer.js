import React from 'react';

// css & assets
import '../css/Footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-info">
                <div className="footer-info-social-media">
                    <div className="footer-info-social-media-item">
                        <AiOutlineLinkedin />
                    </div>
                    <div className="footer-info-social-media-item">
                        <AiOutlineYoutube />
                    </div>
                    <div className="footer-info-social-media-item">
                        <AiOutlineInstagram />
                    </div>
                </div>
                <div className="footer-info-license">
                    © 2023 HIPPSC Technology Ltd., Co. All rights reserved.
                </div>
                <div className="footer-info-email">

                </div>
            </div>
            <div className="footer-offerings">
                <div className="footer-offerings-title page-text-2">
                    OFFERINGS
                </div>
                <div className="footer-item">
                    Shrink Fit Tool Holders
                </div>
                <div className="footer-item">
                    F15i Liquid Cooling Machine
                </div>
                <div className="footer-item">
                    H6i Air Cooling Machine
                </div>
                <div className="footer-item">
                    Laser Tool Setting Machine
                </div>
                <div className="footer-item">
                    Intelligent Tool Storage
                </div>
            </div>
            <div className="footer-about">
                <div className="footer-about-title page-text-2">
                    COMPANY
                </div>
                <div className="footer-item">
                    About HIPPSC
                </div>
                <div className="footer-item">
                    Our History
                </div>
                <div className="footer-item">
                    Our Team
                </div>
                <div className="footer-item">
                    Qualification
                </div>
                <div className="footer-item">
                    Sustainability
                </div>
            </div>
            <div className="footer-contact">
                <div className="footer-contact-title page-text-2">
                    COMPANY
                </div>
                <div className="footer-item">
                    Contact Form
                </div>
                <div className="footer-item">
                    Dongguan, China
                </div>
                <div className="footer-item">
                    Shenzhen, China
                </div>
                <div className="footer-item">
                    Shanghai, China
                </div>
                <div className="footer-item">
                    California, US
                </div>
                <div className="footer-item">
                    Texas, US
                </div>
            </div>
        </div>
    );
};

export default Footer;