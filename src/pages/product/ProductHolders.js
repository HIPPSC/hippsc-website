import React from 'react';
import useTypingEffect from '../../hooks/useTypingEffect';

// components
import RequestContact from '../../components/RequestContact';
import BrochureDownload from '../../components/BrochureDownload';

// css
import '../../css/product/ProductHolders.css';

// assets
import holder1 from '../../assets/svg/holder1.svg';
import holder2 from '../../assets/svg/holder2.svg';
import holder3 from '../../assets/svg/holder3.svg';
import productHolderBodyPic from '../../assets/product-holder-body-pic.jpg';
import { BsArrowRight } from 'react-icons/bs';


const ProductHolders = () => {

    // typing effect
    const product_holders_text = "Shrink Fit Holders"
    const [productHoldersTitle, invisibleProductHoldersTitle, productHoldersTitleref] = useTypingEffect(product_holders_text);
    
    const body_title_text = "Engineering Elegance: Unveiling Tomorrow's Tooling Solutions →"
    const [bodyTitle, invisibleBodyTitle, bodyTitleref] = useTypingEffect(body_title_text);

    const title1_text = "Advanced Surface Protection";
    const [title1, invisibleTitle1, title1Ref] = useTypingEffect(title1_text);

    const title2_text = "Precision-Driven Longevity";
    const [title2, invisibleTitle2, title2Ref] = useTypingEffect(title2_text);

    const title3_text = "Industry-Leading Applications";
    const [title3, invisibleTitle3, title3Ref] = useTypingEffect(title3_text);

    const title4_text = "Optimized Design for 5-Axis Machining";
    const [title4, invisibleTitle4, title4Ref] = useTypingEffect(title4_text);

    const title5_text = "Unparalleled Protection";
    const [title5, invisibleTitle5, title5Ref] = useTypingEffect(title5_text);

    const title6_text = "Effortless Precision";
    const [title6, invisibleTitle6, title6Ref] = useTypingEffect(title6_text);
    

    return (
        <div className='product-holders'>
            <div className="product-holders-title">
                <div className="product-holders-title-left page-title-1-xxl" ref={productHoldersTitleref}>
                    <span >{productHoldersTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleProductHoldersTitle}</span>
                </div>
                <div className="product-holders-title-right page-title-3">
                    World-Class Tool Holders for the Modern Manufacturing
                </div>
            </div>
            <div className="product-holders-banner">
                <div className="product-holders-banner-pic">
                    <img src={holder1} alt="holder1" />
                </div>
                <div className="product-holders-banner-pic">
                    <img src={holder2} alt="holder1" />
                </div>
                <div className="product-holders-banner-pic">
                    <img src={holder3} alt="holder1" />
                </div>
            </div>

            <div className="product-holders-body">
                <div className="product-holders-body-title page-title-1-xl" ref={bodyTitleref}>
                    <span >{bodyTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleBodyTitle}</span>
                </div>
                <div className="product-holders-body-content">
                    <div className="product-holders-body-left">
                        
                        <div className="product-holders-body-pic">
                            <img src={productHolderBodyPic} alt="holder1" />
                        </div>
                    </div>
                    <div className="product-holders-body-right">
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title1Ref}>
                                <span>{title1}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle1}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                Engineered with a high-temperature resistant surface, 
                                our tooling combats carbon accumulation, 
                                ensuring a perennially pristine appearance 
                                and extending the tool holder's lifespan.
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title2Ref}>
                                <span>{title2}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle2}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                Leveraging precision-crafted tool holders, 
                                we've achieved a reduction in tool wear by over 30%, 
                                minimizing tool replacements and amplifying operational efficiency.
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title3Ref}>
                                <span>{title3}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle3}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                Our innovations are the cornerstone of industries 
                                demanding precision and reliability, 
                                including aerospace, defense, and precision mold manufacturing.
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title4Ref}>
                                <span>{title4}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle4}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                Featuring the SRS/SRV slim-wall design, 
                                our tooling is meticulously crafted to avoid interference, 
                                making it the go-to choice for quintessential 5-axis machining.
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title5Ref}>
                                <span>{title5}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle5}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                Guaranteed 100% dust-proof design prevents the ingress of metal shavings and dust, 
                                ensuring unparalleled tool mounting accuracy.
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title6Ref}>
                                <span>{title6}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle6}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                Designed for simplicity and precision, 
                                our tooling guarantees consistent mounting accuracy 
                                without the need for specialists or the burdensome task of tool alignment.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BrochureDownload />
            <RequestContact />
        </div>
    );
};

export default ProductHolders;