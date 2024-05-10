import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect'; 


// css & assets
import '../css/BrochureDownload.css';
import { BsArrowRight } from 'react-icons/bs';

//multilangual
import { useTranslation } from 'react-i18next';


const BrochureDownload = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effects
    const footer_title_text = t("download.Dt");
    const [footerTitle, invisibleFooterTitle, footerTitleref] = useTypingEffect(footer_title_text);


    return (
        <div className="brochure-download">
            <h3 className="product-holders-footer-title page-title-1" ref={footerTitleref}>
                <span>{footerTitle}</span>
                <span style={{color: 'transparent'}}>{invisibleFooterTitle}</span>
            </h3>
            <a href="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/brochures/20231207+HIPPSC+Shrink+Fit+Brochure.pdf" 
               download target='blank'>
                <div className="product-holders-footer-btn rectangle-btn">
                    {t("download.D")}
                    {/* Download */}
                    <BsArrowRight className='rectangle-btn-icon'/>
                </div>
            </a>
        </div>
    );
};

export default BrochureDownload;