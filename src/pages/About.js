import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';

//css & assets
import '../css/About.css';
import aboutBanner from '../assets/about-banner.jpg';
import {LiaHandshakeSolid} from 'react-icons/lia';
import {MdOutlineBiotech} from 'react-icons/md';
import {MdOutlineLeaderboard} from 'react-icons/md';
import {MdInsights} from 'react-icons/md';
import {RiCustomerService2Line} from 'react-icons/ri';

//multilangual
import { useTranslation } from 'react-i18next';



const About = () => {

    //--------mutilingual part --------
    const {t, i18n} = useTranslation("global");
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
                                HIPPSC
                            </div>
                            <div className="page-title-2">
                                Shrink Fit
                            </div>
                        </div>
                        
                        {/* Global Collaboration */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <LiaHandshakeSolid />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    01 /
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={collaborTitleref}>
                                    <span >{collaborTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleCollaborTitle}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    HIPPSC's profound collaboration with Germany highlights the importance of a globalized strategy. As a leader in advanced manufacturing, Germany offers specialized expertise in machinery, automation, and tooling technology, providing invaluable support to HIPPSC. 
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    Such international partnerships can help businesses quickly grasp advanced technologies and market trends, accelerating their own pace of innovation.
                                </div>
                            </div>
                        </div>

                        {/* Product Breakthrough */}
                        <div className="about-intro-item">
                            <div className="home-process-item-left">
                                <div className="home-process-item-pic">
                                    <MdOutlineBiotech />
                                </div>
                            </div>
                            <div className="home-process-item-right">
                                <div className="home-process-item-number page-title-2-bold">
                                    02 /
                                </div>
                                <div className="home-process-item-title page-title-3-bold-gray" ref={productTitleref}>
                                    <span >{productTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleProductTitle}</span>
                                </div>
                                <div className="home-process-item-description page-text-1">
                                    The brand has made breakthroughs in the development and application of shrink-fit tool holders and heat expansion machines, particularly with the introduction of a fully automatic intelligent heat expansion machine capable of heating both alloy steel and stainless steel tools.
                                </div>
                                <div className="home-process-item-description page-text-1">
                                    The advent of this technology has significantly improved efficiency and altered the industry's perceptions.
                                </div>

                            </div>
                        </div>

                        {/* Technological Edge */}
                        <div className="about-intro-item">
                            <div className="home-process-item-left">
                                <div className="home-process-item-pic">
                                    <MdOutlineLeaderboard />
                                </div>
                            </div>
                            <div className="home-process-item-right">
                                <div className="home-process-item-number page-title-2-bold">
                                    03 /
                                </div>
                                <div className="home-process-item-title page-title-3-bold-gray" ref={techTitleref}>
                                    <span >{techTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleTechTitle}</span>
                                </div>
                                <div className="home-process-item-description page-text-1">
                                    Being awarded numerous international and domestic patents, the fully automatic intelligent heat expansion machine introduced by HIPPSC is a revolutionary innovation in the industry. 
                                </div>
                                <div className="home-process-item-description page-text-1">
                                    Not only does it enhance processing efficiency, but it also offers a more precise and stable tool installation method, which is crucial for high-precision machining.
                                </div>
                            </div>
                        </div>

                        {/* Market Acumen */}
                        <div className="about-intro-item">
                            <div className="home-process-item-left">
                                <div className="home-process-item-pic">
                                    <MdInsights />
                                </div>
                            </div>
                            <div className="home-process-item-right">
                                <div className="home-process-item-number page-title-2-bold">
                                    04 /
                                </div>
                                <div className="home-process-item-title page-title-3-bold-gray" ref={marketTitleref}>
                                    <span >{marketTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleMarketTitle}</span>
                                </div>
                                <div className="home-process-item-description page-text-1">
                                    HIPPSC's meticulous market insight and accurate judgment keep it ahead of industry trends. They don't just settle for existing products but continually engage in research and innovation based on market demand, ensuring their products always remain at the forefront of the industry.
                                </div>
                                <div className="home-process-item-description page-text-1">
                                    
                                </div>
                            </div>
                        </div>

                        {/* Customer-centric Approach */}
                        <div className="about-intro-item about-intro-item-last">
                            <div className="home-process-item-left">
                                <div className="home-process-item-pic">
                                    <RiCustomerService2Line />
                                </div>
                            </div>
                            <div className="home-process-item-right">
                                <div className="home-process-item-number page-title-2-bold">
                                    05 /
                                </div>
                                <div className="home-process-item-title page-title-3-bold-gray" ref={customerTitleref}>
                                    <span >{customerTitle}</span>
                                    <span style={{color: 'transparent'}}>{invisibleCustomerTitle}</span>
                                </div>
                                <div className="home-process-item-description page-text-1">
                                    HIPPSC emphasizes offering excellent CNC tooling solutions for its vast clientele, indicating a customer-first mindset. By providing customized solutions to clients, HIPPSC establishes a robust customer base, ensuring the market position of its products.
                                </div>
                                <div className="home-process-item-description page-text-1">
                                    
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