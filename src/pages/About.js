import React from 'react';
import { Helmet } from 'react-helmet-async';

// typing effect
import useTypingEffect from '../hooks/useTypingEffect';

//css & assets
import '../css/About.css';

//multilangual
import { useTranslation } from 'react-i18next';



const About = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------
    
    //typing effect
    const title = t("about.title");
    const subtitle1 = t("about.subtitle1");
    const subtitle2 = t("about.subtitle2");
    const subtitle3 = t("about.subtitle3");
    const subtitle4 = t("about.subtitle4");
    const subtitle5 = t("about.subtitle5");
    const subtitle6 = t("about.subtitle6");
    const subtitle7 = t("about.subtitle7");
    const subtitle8 = t("about.subtitle8");
    

    const [mainTitle, invisibleMainTitle, mainTitleRef] = useTypingEffect(title, 1, 30);

    const [subTitle1, invisibleSubTitle1, subTitle1Ref] = useTypingEffect(subtitle1);
    const [subTitle2, invisibleSubTitle2, subTitle2Ref] = useTypingEffect(subtitle2);
    const [subTitle3, invisibleSubTitle3, subTitle3Ref] = useTypingEffect(subtitle3);
    const [subTitle4, invisibleSubTitle4, subTitle4Ref] = useTypingEffect(subtitle4);
    const [subTitle5, invisibleSubTitle5, subTitle5Ref] = useTypingEffect(subtitle5);
    const [subTitle6, invisibleSubTitle6, subTitle6Ref] = useTypingEffect(subtitle6);
    const [subTitle7, invisibleSubTitle7, subTitle7Ref] = useTypingEffect(subtitle7);
    const [subTitle8, invisibleSubTitle8, subTitle8Ref] = useTypingEffect(subtitle8);
    
    return (
        <div>
            {/* metadata */}
            <Helmet>
                <title>About HIPPSC</title>
                <meta 
                    name="description" 
                    content="HIPPSC is more than just a tooling supplier. We are a global leader in precision engineering," 
                />
                <meta name="keywords" content="machinery, CNC, machining, machinist, shrink fit, tool holders" />
                <link rel='canonical' href='https://www.hippsc.com/about' />
            </Helmet>

            <body className="about">

                <header className="about-header">
                    <div className="about-title page-title-1-xxl" ref={mainTitleRef}>
                        <span> {mainTitle} </span>
                        <span style={{color: 'transparent'}}>{invisibleMainTitle}</span>
                    </div>
                    <div className="about-banner banner-image">
                        <img src="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/contact-page-banner.webp" alt="about-banner" />
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
                                     <img src="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/about-page/about-icon1.svg"
                                          alt="about-icon" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    1998
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={subTitle1Ref}>
                                    <span >{subTitle1}</span>
                                    <span style={{color: 'transparent'}}>{invisibleSubTitle1}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p11")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p12")}
                                </div>
                            </div>
                        </div>

                        {/* Product Breakthrough */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/about-page/about-icon2.svg"
                                          alt="about-icon" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2005
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={subTitle2Ref}>
                                    <span >{subTitle2}</span>
                                    <span style={{color: 'transparent'}}>{invisibleSubTitle2}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p21")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p22")}
                                </div>

                            </div>
                        </div>

                        {/* Technological Edge */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/about-page/about-icon3.svg"
                                          alt="about-icon" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2011
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={subTitle3Ref}>
                                    <span >{subTitle3}</span>
                                    <span style={{color: 'transparent'}}>{invisibleSubTitle3}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p31")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p32")}
                                </div>
                            </div>
                        </div>

                        {/* Milestone */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/about-page/about-icon4.svg"
                                          alt="about-icon" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2015
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={subTitle4Ref}>
                                    <span >{subTitle4}</span>
                                    <span style={{color: 'transparent'}}>{invisibleSubTitle4}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p41")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p42")}
                                </div>
                            </div>
                        </div>

                        {/* Market Acumen */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/about-page/about-icon6.svg"
                                          alt="about-icon" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2018
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={subTitle5Ref}>
                                    <span >{subTitle5}</span>
                                    <span style={{color: 'transparent'}}>{invisibleSubTitle5}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p51")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p52")}
                                </div>
                            </div>
                        </div>

                        {/* Liuqid Cool Invention */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/about-page/about-icon5.svg"
                                          alt="about-icon" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2020
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={subTitle6Ref}>
                                    <span >{subTitle6}</span>
                                    <span style={{color: 'transparent'}}>{invisibleSubTitle6}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p61")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p62")}
                                </div>
                            </div>
                        </div>

                        {/* Quick Change Coil */}
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/about-page/about-icon7.svg"
                                          alt="about-icon" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2022
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={subTitle7Ref}>
                                    <span >{subTitle7}</span>
                                    <span style={{color: 'transparent'}}>{invisibleSubTitle7}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p71")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p72")}
                                </div>
                            </div>
                        </div>


                        {/* Automation */}
                        <div className="about-intro-item about-intro-item-last">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    <img src="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/about-page/about-icon8.svg"
                                          alt="about-icon" />
                                </div>
                            </div>
                            <div className="about-intro-item-right">
                                <div className="about-intro-item-number page-title-2-bold">
                                    2023
                                </div>
                                <div className="about-intro-item-title page-title-3-bold-gray" ref={subTitle8Ref}>
                                    <span >{subTitle8}</span>
                                    <span style={{color: 'transparent'}}>{invisibleSubTitle8}</span>
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p81")}
                                </div>
                                <div className="about-intro-item-description page-text-1">
                                    {t("about.p82")}
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