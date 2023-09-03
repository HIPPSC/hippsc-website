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
                        <a  href="https://www.linkedin.com/company/hippsc/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <AiOutlineLinkedin />
                        </a>
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
            <div className="footer-offerings footer-section">
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
            <div className="footer-about footer-section">
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
            <div className="footer-contact footer-section">
                <div className="footer-contact-title page-text-2">
                    CONTACT
                </div>
                <div className="footer-item">
                    Contact Form
                </div>
                <div className="footer-item">
                    Branches
                </div>
            </div>
        </div>
    );
};

export default Footer;