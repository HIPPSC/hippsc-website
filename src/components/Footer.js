import React from 'react';
import { Link } from 'react-router-dom';

// css & assets
import '../css/Footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


//multilangual
import { useTranslation } from 'react-i18next';

const Footer = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------
    
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
                        <a  href="https://www.youtube.com/@HIPPSC" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <AiOutlineYoutube />
                        </a>
                    </div>
                    <div className="footer-info-social-media-item">
                        <a  href="https://www.instagram.com/hippsc_official/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <AiOutlineInstagram />
                        </a>
                    </div>
                    <div className="footer-info-social-media-item smaller-icon">
                        <a  href="https://www.facebook.com/hippscofficial" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <FaFacebookSquare />
                        </a>
                    </div>
                    <div className="footer-info-social-media-item smaller-icon">
                        <a  href="https://twitter.com/HIPPSCUSA" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <RiTwitterXLine />
                        </a>
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
                    {t("footer.of")}
                    {/* OFFERINGS */}
                </div>
                <Link to='/product/holders'>
                    <div className="footer-item">
                        {t("footer.ofS")}
                        {/* Shrink Fit Holders */}
                    </div>
                </Link>
                <Link to='/product/h6i'>
                    <div className="footer-item">
                        {t("footer.ofH")}
                        {/* H6i Shrink Fit Machine */}
                    </div>
                </Link>
                <Link to='/product/f15i'>
                    <div className="footer-item">
                        {t("footer.ofF")}
                        {/* F15i Shrink Fit Machine */}
                    </div>
                </Link>
                <Link to='/product/tool_presetting'>
                    <div className="footer-item">
                        {t("footer.ofL")}
                        {/* Laser Presetting Machine */}
                    </div>
                </Link>
                <div className="footer-item">
                    {t("footer.ofI")}
                    {/* Intelligent Tool Storage */}
                </div>
            </div>
            <div className="footer-about footer-section">
                <div className="footer-about-title page-text-2">
                    {t("footer.co")}
                    {/* COMPANY */}
                </div>
                <Link to='/about'>
                    <div className="footer-item">
                        {t("footer.coA")}
                        {/* About HIPPSC */}
                    </div>
                </Link>
                <div className="footer-item">
                    {/* {t("footer.coOH")} */}
                    {/* Our History */}
                </div>
                <div className="footer-item">
                    {/* {t("footer.coOT")} */}
                    {/* Our Team */}
                </div>
                <div className="footer-item">
                    {/* {t("footer.coQ")} */}
                    {/* Qualification */}
                </div>
                <div className="footer-item">
                    {/* {t("footer.coS")} */}
                    {/* Sustainability */}
                </div>
            </div>
            <div className="footer-contact footer-section">
                <div className="footer-contact-title page-text-2">
                    {t("footer.ct")}
                    {/* CONTACT */}
                </div>
                <Link to="/request_quote">
                    <div className="footer-item">
                        {t("footer.ctR")}
                        {/* Request for Quote */}
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="footer-item">
                        {t("footer.ctL")}
                        {/* Locations */}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Footer;