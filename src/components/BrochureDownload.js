import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect'; 
import { Link } from 'react-router-dom';


// css & assets
import '../css/BrochureDownload.css';
import { BsArrowRight } from 'react-icons/bs';


const BrochureDownload = () => {

    // typing effects
    const footer_title_text = "Get Shrink Fit Catalog";
    const [footerTitle, invisibleFooterTitle, footerTitleref] = useTypingEffect(footer_title_text);


    return (
        <div className="brochure-download">
            <div className="product-holders-footer-title page-title-1" ref={footerTitleref}>
                <span>{footerTitle}</span>
                <span style={{color: 'transparent'}}>{invisibleFooterTitle}</span>
            </div>
            <a href="https://drive.google.com/file/d/1qBBn53mhpUQd47l99NnAry4R-Ucjoe9I/view?usp=share_link" download target='blank'>
                <div className="product-holders-footer-btn rectangle-btn">
                    Download
                    <BsArrowRight className='rectangle-btn-icon'/>
                </div>
            </a>
        </div>
    );
};

export default BrochureDownload;