import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';

//css & assets
import '../css/About.css';
import aboutBanner from '../assets/about-banner.webp';
import aboutPic1 from '../assets/about-pic1.webp';
import aboutPic2 from '../assets/about-pic2.webp';
import aboutPic3 from '../assets/about-pic3.webp';
import aboutPic4 from '../assets/about-pic4.webp';
import aboutPic5 from '../assets/about-pic5.webp';

//multilangual
import { useTranslation } from 'react-i18next';



const About = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------
    
    //typing effect
    const about_title_text = t("about.titleA");
    const collabor_title_text = t("about.titleG");
    const product_title_text = t("about.titleP");
    const tech_title_text = t("about.titleT");
    const market_title_text = t("about.titleM");
    const customer_title_text = t("about.titleC");
    

    const [aboutTitle, invisibleAboutTitle, aboutTitleref] = useTypingEffect(about_title_text, 1, 30);
    const [collaborTitle, invisibleCollaborTitle, collaborTitleref] = useTypingEffect(collabor_title_text);
    const [productTitle, invisibleProductTitle, productTitleref] = useTypingEffect(product_title_text);
    const [techTitle, invisibleTechTitle, techTitleref] = useTypingEffect(tech_title_text);
    const [marketTitle, invisibleMarketTitle, marketTitleref] = useTypingEffect(market_title_text);
    const [customerTitle, invisibleCustomerTitle, customerTitleref] = useTypingEffect(customer_title_text);
    
    return (
        <div>
            <body className="about">

                <header className="about-header">
                    <div className="about-title page-title-1-xxl" ref={aboutTitleref}>
                        <span >{aboutTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleAboutTitle}</span>
                    </div>
                    <div className="about-banner banner-image">
                        <img src={aboutBanner} alt="about-banner" />
                    </div>
                </header>

                <main>

                    <div className="about-intro">

                        {/* Introduction Title */}
                        <div className="about-intro-title">
                            <div className="page-title-2-bold-green">
                                Since
                            </div>
                            <div className="page-title-2">
                                1998
                            </div>
                        </div>
                        
                        {/* Global Collaboration */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                     <img src={aboutPic1} alt="about-banner" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    1998
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={collaborTitleref}>
                                    <span >{collaborTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleCollaborTitle}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p1G")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p2G")}
                                </div>
                            </div>
                        </div>

                        {/* Product Breakthrough */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src={aboutPic2} alt="about-banner" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2005
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={productTitleref}>
                                    <span >{productTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleProductTitle}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p1P")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p2P")}
                                </div>

                            </div>
                        </div>

                        {/* Technological Edge */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src={aboutPic3} alt="about-banner" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2011
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={techTitleref}>
                                    <span >{techTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleTechTitle}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p1T")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p2T")}
                                </div>
                            </div>
                        </div>

                        {/* Market Acumen */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src={aboutPic4} alt="about-banner" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2018
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={marketTitleref}>
                                    <span >{marketTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleMarketTitle}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p1M")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p2M")}
                                </div>
                            </div>
                        </div>

                        {/* Customer-centric Approach */}
                        <div className="about-intro-item about-intro-item-last">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src={aboutPic5} alt="about-banner" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2023
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={customerTitleref}>
                                    <span >{customerTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleCustomerTitle}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p1C")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p2C")}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="about-honor">

                    </div>
                </main>
                
                <footer>

                </footer>

            </body>   
        </div>
    );
};

export default About;