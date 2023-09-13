import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';

//css & assets
import '../css/About.css';
import aboutBanner from '../assets/about-banner.jpg';


const About = () => {
    
    //typing effect
    const about_title_text = "About HIPPSC";
    const origin_title_text = "Company Origin";
    const future_title_text = "Future Prospects";

    const [aboutTitle, invisibleAboutTitle, aboutTitleRef] = useTypingEffect(about_title_text, 1, 30);
    const [originTitle, invisibleOriginTitle, originTitleRef] = useTypingEffect(origin_title_text);
    const [futureTitle, invisibleFutureTitle, futureTitleRef] = useTypingEffect(future_title_text);
    
    return (
        <div>
            <body className="about">

                <header className="about-header">
                    <div className="about-title page-title-1-xxl" ref={aboutTitleRef}>
                        <span >{aboutTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleAboutTitle}</span>
                    </div>
                    <div className="about-banner banner-image">
                        <img src={aboutBanner} alt="about-banner" />
                    </div>
                </header>

                <main>
                    <div className="about-intro">
                        <div className="about-intro-title">
                            <div className="page-title-2-bold-green">
                                HIPPSC
                            </div>
                            <div className="page-title-2" display="flex">
                                Origin & Future
                            </div>
                        </div>
                        
                        <div className="about-intro-item">
                            <div className="about-intro-item-left">
                                <div className="about-intro-item-pic">
                                    {/* <img src={}> */}
                                </div>
                            </div>

                            <div className="about-intro-item-right"></div>
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