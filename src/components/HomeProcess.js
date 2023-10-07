import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect'; 


// css & assets
import '../css/HomeProcess.css';
import ToolHolderIcon from '../assets/svg/tool-holder-icon.svg';
import PrecisionIcon from '../assets/svg/precision-icon.svg';
import IdeaIcon from '../assets/svg/idea-icon.svg';

//multilangual
import { useTranslation } from 'react-i18next';


const HomeProcess = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effects
    const research_title_text = t("home.researchT");
    const precision_title_text = t("home.precisionT");
    const production_title_text = t("home.productionT");

    const [researchTitle, invisibleResearchTitle, researchTitleref] = useTypingEffect(research_title_text);
    const [precisionTitle, invisiblePrecisionTitle, precisionTitleref] = useTypingEffect(precision_title_text);
    const [productionTitle, invisibleProductionTitle, productionTitleref] = useTypingEffect(production_title_text);


    return (
        <div className='home-process'>
            <div className="home-process-title">
                <div className="home-process-title-top">
                    <div className="page-title-2-bold-green">
                        HIPPSC
                    </div>
                    <div className="page-title-2">
                        {t("home.pT1")}
                        {/* Shrink Fit — Engineered for  */}
                    </div>
                </div>
                <div className="page-title-2">
                    {t("home.pT2")}
                    {/* Precision, Built to Last */}
                </div>
            </div>

            <div className="home-process-item">
                <div className="home-process-item-left">
                    <div className="home-process-item-pic">
                        <img src={IdeaIcon} alt="Tool Holder" />
                    </div>
                </div>
                <div className="home-process-item-right">
                    <div className="home-process-item-number page-title-2-bold">
                        01 /
                    </div>
                    <div className="home-process-item-title page-title-3-bold-gray" ref={researchTitleref}>
                        <span >{researchTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleResearchTitle}</span>
                    </div>
                    <div className="home-process-item-description page-text-1">
                        {t("home.r1")}
                        {/* From the initial concept to the final product, 
                        every stage of development is meticulously crafted to ensure unparalleled quality and precision. */}
                    </div>
                    <div className="home-process-item-description page-text-1">
                        {t("home.r2")}
                        {/* Through rigorous testing and continuous refinement, 
                        we have created a range of products that not only meet but exceed industry standards. */}
                    </div>

                </div>
            </div>
            <div className="home-process-item">
                <div className="home-process-item-left">
                    <div className="home-process-item-pic">
                        <img src={PrecisionIcon} alt="Tool Holder" />
                    </div>
                </div>
                <div className="home-process-item-right">
                    <div className="home-process-item-number page-title-2-bold">
                        02 /
                    </div>
                    <div className="home-process-item-title page-title-3-bold-gray" ref={precisionTitleref}>
                        <span >{precisionTitle}</span>
                        <span style={{color: 'transparent'}}>{invisiblePrecisionTitle}</span>
                    </div>
                    <div className="home-process-item-description page-text-1">
                        {t("home.pre1")}
                        {/* Our precision testing process includes real-world simulations, 
                        where the tool holders are subjected to conditions that mirror actual machining environments, 
                        allowing us to assess their resilience and functionality under various operational stresses. */}
                    </div>
                    <div className="home-process-item-description page-text-1">
                        {t("home.pre2")}
                        {/* From dimensional analysis to material integrity, 
                        every aspect of the tool holder is scrutinized to detect even the slightest 
                        deviations from our stringent specifications. */}
                    </div>

                </div>
            </div>
            <div className="home-process-item">
                <div className="home-process-item-left">
                    <div className="home-process-item-pic">
                        <img src={ToolHolderIcon} alt="Tool Holder" />
                    </div>
                </div>
                <div className="home-process-item-right">
                    <div className="home-process-item-number page-title-2-bold">
                        03 /
                    </div>
                    <div className="home-process-item-title page-title-3-bold-gray" ref={productionTitleref}>
                        <span >{productionTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleProductionTitle}</span>
                    </div>
                    <div className="home-process-item-description page-text-1">
                        {t("home.pro1")}
                        {/* Operating within a state-of-the-art manufacturing facility, 
                        our skilled production team employs cutting-edge technology and 
                        lean manufacturing principles to optimize efficiency and responsiveness. */}
                    </div>
                    <div className="home-process-item-description page-text-1">
                        {t("home.pro2")}
                        {/* Our robust supply chain management, coupled with real-time monitoring and predictive analytics, 
                        allows us to meet customers’ demand and adjust production schedules proactively. */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomeProcess;