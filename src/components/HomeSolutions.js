import React from 'react';
import { Link } from 'react-router-dom';
import useTypingEffect from '../hooks/useTypingEffect'; 


// css & assets
import '../css/HomeSolutions.css';
import { BsArrowRight } from 'react-icons/bs';
import F15iPic from '../assets/svg/F15i-pic.svg';
import H6iPic from '../assets/svg/H6i-pic.svg';
import PresetterPic from '../assets/svg/presetter-pic.svg';
import DialIndicatorPic from '../assets/svg/dial-indicator-pic.svg';
import StoragePic from '../assets/svg/storage-pic.svg';

//multilangual
import { useTranslation } from 'react-i18next';


const HomeSolutions = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effects
    const f15i_title_text = "F15i";
    const h6i_title_text = "H6i";
    const presetter_title_text = t("home.laser")
    const indicator_title_text = t("home.indicator")
    const storage_title_text = t("home.storage");

    const [f15iTitle, invisibleF15iTitle, f15iTitleref] = useTypingEffect(f15i_title_text, 1, 100);
    const [h6iTitle, invisibleH6iTitle, h6iTitleref] = useTypingEffect(h6i_title_text, 1, 100);
    const [storageTitle, invisibleStorageTitle, storageTitleref] = useTypingEffect(storage_title_text, 1, 100);
    const [presetterTitle, invisiblePresetterTitle, presetterTitleref] = useTypingEffect(presetter_title_text, 1, 100);
    const [indicatorTitle, invisibleIndicatorTitle, indicatorTitleref] = useTypingEffect(indicator_title_text, 1, 100);


    return (
        <div className='home-solutions'>
            <div className="home-solutions-title">
                <div className="page-title-2-bold-green">
                    HIPPSC
                </div>
                <div className="page-title-2">
                    {t("home.sol")}
                    {/* Solutions */}
                </div>
            </div>

            {/* F15i */}
            <div className="home-solutions-item">
                <div className="home-solutions-item-left">
                    <div className="home-solutions-item-pic">
                        <img src={F15iPic} alt="Tool Holder" />
                    </div>
                    <Link  to='/product/shrink-fit-machines/f15i' className="page-link-btn home-solutions-btn">
                        <h2 className="page-link-btn-text btn-text-1 ">
                            {t("home.learn")}F15i
                            {/* Learn more about F15i */}
                        </h2>
                        <div className="page-link-btn-icon">
                            <BsArrowRight />
                        </div>
                    </Link>
                </div>
                <div className="home-solutions-item-right">
                    <div className="home-solutions-item-title">
                        <h2 className="page-title-1-xl" ref={f15iTitleref}>
                            <span >{f15iTitle}</span>
                            <span style={{color: 'transparent'}}>{invisibleF15iTitle}</span>
                        </h2>
                        <div className="page-title-1-xl liquid-cooling-text">
                            {t("home.liq")}
                            {/* Liquid Cooling */}
                        </div>
                        <div className="page-title-1-xl">
                            {t("home.sfm")}
                            {/* Shrink Fit Machine */}
                        </div>
                    </div>
                    
                    <div className="home-solutions-item-description page-text-1">
                        {t("home.F1")}
                        {/* The true brilliance of the F-15i resides in its groundbreaking rapid liquid cooling technology, 
                        seamlessly returning your tools to optimal temperature with unmatched speed. */}
                    </div>
                    <div className="home-solutions-item-description page-text-1">
                        {t("home.F2")}
                        {/* Infused with quick-change heating coils and masterful temperature control, 
                        the F-15i transcends mere machinery; it's a symphony of excellence, 
                        a dynamic partner poised to transform your production landscape into a realm of unparalleled achievement. */}
                    </div>
                </div>
            </div>

            {/* H6i */}
            <div className="home-solutions-item">
                <div className="home-solutions-item-left">
                    <div className="home-solutions-item-pic">
                        <img src={H6iPic} alt="Tool Holder" />
                    </div>
                    <Link to='/product/shrink-fit-machines/h6i' className="page-link-btn home-solutions-btn">
                        <div className="page-link-btn-text btn-text-1 ">
                            {t("home.learn")}H6i
                            {/* Learn more about H6i */}
                        </div>
                        <div className="page-link-btn-icon">
                            <BsArrowRight />
                        </div>
                    </Link>
                </div>
                <div className="home-solutions-item-right">
                    <div className="home-solutions-item-title">
                        <h2 className="page-title-1-xl" ref={h6iTitleref}>
                            <span >{h6iTitle}</span>
                            <span style={{color: 'transparent'}}>{invisibleH6iTitle}</span>
                        </h2>
                        <div className="page-title-1-xl air-cooling-text">
                            {t("home.air")}
                            {/* Air Cooling */}
                        </div>
                        <div className="page-title-1-xl">
                            {t("home.sfm")}
                            {/* Shrink Fit Machine */}
                        </div>
                    </div>
                    
                    <div className="home-solutions-item-description page-text-1">
                        {t("home.H1")}
                    </div>
                    <div className="home-solutions-item-description page-text-1">
                        {t("home.H2")}
                    </div>
                    <div className="home-solutions-item-description page-text-1">
                        {t("home.H3")}
                    </div>
                </div>
            </div>

            {/* tool presetter */}
            <div className="home-solutions-item">
                <div className="home-solutions-item-left">
                    <div className="home-solutions-item-pic">
                        <img src={PresetterPic} alt="Tool Holder" />
                    </div>
                    <Link to='/product/tool_presetting' className="page-link-btn home-solutions-btn">
                        <div className="page-link-btn-text btn-text-1 ">
                            {t("home.learn") + t("home.laser") + t("home.tps") + t("home.m")}
                            {/* Learn more about H6i */}
                        </div>
                        <div className="page-link-btn-icon">
                            <BsArrowRight />
                        </div>
                    </Link>
                </div>
                <div className="home-solutions-item-right">
                    <div className="home-solutions-item-title">
                        <h2 className="page-title-1-xl" ref={presetterTitleref}>
                            <span >{presetterTitle}</span>
                            <span style={{color: 'transparent'}}>{invisiblePresetterTitle}</span>
                        </h2>
                        <div className="page-title-1-xl tool-presetter-text">
                            {t("home.tps")}
                            {/* Air Cooling */}
                        </div>
                        <div className="page-title-1-xl">
                            {t("home.presetter")}
                            {/* Shrink Fit Machine */}
                        </div>
                    </div>
                    
                    <div className="home-solutions-item-description page-text-1">
                        {t("home.L1")}
                    </div>
                    <div className="home-solutions-item-description page-text-1">
                        {t("home.L2")}
                    </div>
                </div>
            </div>

            {/* dial indicator */}
            <div className="home-solutions-item">
                <div className="home-solutions-item-left">
                    <div className="home-solutions-item-pic">
                        <img src={DialIndicatorPic} alt="Tool Holder" />
                    </div>
                    <Link to='/product/dial_indicator' className="page-link-btn home-solutions-btn">
                        <div className="page-link-btn-text btn-text-1 ">
                            {t("home.learn") + t("home.indicator")}
                            {/* Learn more about H6i */}
                        </div>
                        <div className="page-link-btn-icon">
                            <BsArrowRight />
                        </div>
                    </Link>
                </div>
                <div className="home-solutions-item-right">
                    <div className="home-solutions-item-title">
                        <h2 className="page-title-1-xl" ref={indicatorTitleref}>
                            <span >{indicatorTitle}</span>
                            <span style={{color: 'transparent'}}>{invisibleIndicatorTitle}</span>
                        </h2>
                        <div className="page-title-1-xl">
                            {/* {t("home.m")} */}
                            {/* Shrink Fit Machine */}
                        </div>
                    </div>
                    
                    <div className="home-solutions-item-description page-text-1">
                        {t("home.D1")}
                    </div>
                    <div className="home-solutions-item-description page-text-1">
                        {t("home.D2")}
                    </div>
                </div>
            </div>

            {/* intelligent storage */}
            <div className="home-solutions-item">
                <div className="home-solutions-item-left">
                    <div className="home-solutions-item-pic intelligent-storage-pic">
                        <img src={StoragePic} alt="Tool Holder" />
                    </div>
                </div>
                <div className="home-solutions-item-right">
                    <div className="home-solutions-item-title">
                        <div className="page-title-1-xl">
                            HIPPSC
                        </div>
                        <h2 className="page-title-1-xl intelligent-storage-text">
                            {t("home.its")}
                            {/* Intelligent Tooling Storage */}
                        </h2>
                        <div className="page-title-2-gray" ref={storageTitleref}>
                            <span >{storageTitle}</span>
                            <span style={{color: 'transparent'}}>{invisibleStorageTitle}</span>
                        </div>
                    </div>
                    <div className="page-link-btn home-solutions-btn">
                        <div className="page-link-btn-text btn-text-1 ">
                            {t("home.join")}
                            {/* Unlock the future - Join Us Now */}
                        </div>
                        <div className="page-link-btn-icon">
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomeSolutions;