import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import useTypingEffect from '../hooks/useTypingEffect'; 
import useSequentialEffect from '../hooks/useSequentialEffect';


// css
import '../css/NavPage.css';

// assets
// import news1 from '../assets/sampleImgs/news1.jpg';
// import news2 from '../assets/sampleImgs/news2.jpg';
// import study1 from '../assets/sampleImgs/study1.png';
// import study2 from '../assets/sampleImgs/study2.png';

//multilangual
import { useTranslation } from 'react-i18next';


const NavPage = ({ closeNav }) => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effects
    const navigation_title_text = t("navbar.pageN");
    // const latest_news_title_text = t("navbar.pageL");
    // const our_studies_title_text = t("navbar.pageO");
    const [navigationTitle, invisibleNavigationTitle, navigationTitleref] = useTypingEffect(navigation_title_text);
    // const [latestNewsTitle, invisibleLatestNewsTitle, latestNewsTitleref] = useTypingEffect(latest_news_title_text);
    // const [ourStudiesTitle, invisibleOurStudiesTitle, ourStudiesTitleref] = useTypingEffect(our_studies_title_text);


    const leftNavRef = useRef(null);
    const navMiddleCardRef = useRef(null);
    const navRightCardRef = useRef(null);
    useSequentialEffect(leftNavRef, '.nav-page-left-item', 100);
    useSequentialEffect(navMiddleCardRef, '.nav-page-card', 200);
    useSequentialEffect(navRightCardRef, '.nav-page-card', 200);
    



    return (
        <div className='nav-page'>
            <div className="nav-page-left" ref={leftNavRef}>
                <div className="nav-page-title" ref={navigationTitleref}>
                    <span >{navigationTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleNavigationTitle}</span>
                </div>
                <Link to="/about" className="nav-page-left-item" onClick={() => closeNav()}>
                    {t("navbar.Na")}
                    {/* About HIPPSC */}
                </Link>
                <div className="nav-page-left-item">
                    {t("navbar.No")}
                    {/* Our Offerings */}
                </div>
                <Link   to='/product/shrink-fit-tool-holders' 
                        className="nav-page-left-item" 
                        onClick={() => closeNav()}>
                    {t("navbar.Ns")}
                    {/* ↳ Shrink Fit Holders */}
                </Link>
                <Link   to='/product/shrink-fit-machines/h6i' 
                        className="nav-page-left-item"
                        onClick={() => closeNav()}>
                    ↳ H6i
                </Link>
                <Link   to='/product/shrink-fit-machines/f15i' 
                        className="nav-page-left-item"
                        onClick={() => closeNav()}>
                    ↳ F15i
                </Link>
                <Link   to='/product/tool_presetting' 
                        className="nav-page-left-item"
                        onClick={() => closeNav()}>
                    {t("navbar.Nl")}
                    {/* ↳ Laser Presetting Machine */}
                </Link>
                <Link   to='/product/dial_indicator' 
                        className="nav-page-left-item"
                        onClick={() => closeNav()}>
                    {t("navbar.Nd")}
                    {/* ↳ Laser Presetting Machine */}
                </Link>
        
                <Link to="/contact" className="nav-page-left-item" onClick={() => closeNav()}>
                    {t("navbar.Nc")}
                    {/* Contact Us */}
                </Link>
                <Link to="/request_quote" className="nav-page-left-item" onClick={() => closeNav()}>
                    {t("navbar.Nr")}
                    {/* Request for Quote */}
                </Link>
            </div>

            {/* <div className="nav-page-middle" ref={navMiddleCardRef}>
                <div className="nav-page-title" ref={latestNewsTitleref}>
                    <span>{latestNewsTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleLatestNewsTitle}</span>
                </div>
                <div className="nav-page-card">
                    <div className="nav-page-card-date">
                        JULY 25, 2022
                    </div>
                    <div className="nav-page-card-img">
                        <img src={news1} alt="news1" />
                    </div>
                    <div className="nav-page-card-title">
                        CIMT2021 Beijing Machine Tool Show Hipps newest products exposure, 
                        you certainly have not seen! Automatic intelligent water-cooled thermal expansion machine
                    </div>
                </div>
                <div className="nav-page-card">
                    <div className="nav-page-card-date">
                        JULY 25, 2022
                    </div>
                    <div className="nav-page-card-img">
                        <img src={news2} alt="news1" />
                    </div>
                    <div className="nav-page-card-title">
                        High-precision heat-expandable extension rods are here to 
                        break the traditional innovation revolution!
                    </div>
                </div>
            </div>

            <div className="nav-page-right" ref={navRightCardRef}>
                <div className="nav-page-title" ref={ourStudiesTitleref}>
                    <span>{ourStudiesTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleOurStudiesTitle}</span>
                </div>
                <div className="nav-page-card">
                    <div className="nav-page-card-date">
                        JULY 25, 2022
                    </div>
                    <div className="nav-page-card-img">
                        <img src={study1} alt="news1" />
                    </div>
                    <div className="nav-page-card-title">
                        Practical examples of Dream Series toolholders in impeller machining shared
                    </div>
                </div>
                <div className="nav-page-card">
                    <div className="nav-page-card-date">
                        JULY 25, 2022
                    </div>
                    <div className="nav-page-card-img">
                        <img src={study2} alt="news1" />
                    </div>
                    <div className="nav-page-card-title">
                        Five-axis linkage machining of impeller machining cases
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default NavPage;