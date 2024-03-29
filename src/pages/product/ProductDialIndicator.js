import React from 'react';
import { Helmet } from 'react-helmet-async';
import useTypingEffect from '../../hooks/useTypingEffect';

// components
import RequestContact from '../../components/RequestContact';

// css
import '../../css/product/ProductToolPresetting.css';

// assets
import DialIndicatorPic from '../../assets/svg/dial-indicator-pic.svg';

//multilangual
import { useTranslation } from 'react-i18next';


const ProductDialIndicator = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effect
    const product_tool_presetting_text = t("product.Dp");

    const [productToolPresettingTitle, invisibleProductToolPresettingTitle, productToolPresettingTitleref] = useTypingEffect(product_tool_presetting_text, 1, 5);
    

    return (
        <div className='product-tool-presetting'>
            {/* metadata */}
            <Helmet>
                <title>Dial Indicator</title>
                <meta 
                    name="description" 
                    content="Step into the future of precision with HIPPSC Dial 
                    Indicator that's not just a measurement device but a smart 
                    partner in your quest for perfection." 
                />
                <meta name="keywords" content="shrink fit, tool holders, cnc machining" />
                <link rel="canonical" href="https://www.hippsc.com/dial_indicator" />
            </Helmet>

            {/* title */}
            <div className="product-tool-presetting-title">
                <div className="product-tool-presetting-title-left" >
                    <div className="product-tool-presetting-title-left-top page-title-1-xxl">
                        {t("product.Di")}
                        {/* Laser Tool Presetting */}
                    </div>
                    <div className="product-tool-presetting-title-left-bottom page-text-1" ref={productToolPresettingTitleref}>
                        <span >{productToolPresettingTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleProductToolPresettingTitle}</span>
                    </div>
                </div>
                <div className="product-tool-presetting-title-right">
                    <img src={DialIndicatorPic} alt="tool-presetter" />
                </div>
            </div>

            <div className="product-tool-presetting-features">
                <div className="product-tool-presetting-features-title">

                </div>
                <div className="product-tool-presetting-features-body">
                    <div className="product-tool-presetting-features-item">
                        <div className="product-tool-presetting-features-item-title page-text-1">
                            {t("product.DUt")}
                            {/* Micron-Level Accuracy */}
                        </div>
                        <div className="product-tool-presetting-features-item-body page-text-2">
                            {t("product.DUp")}
                            {/* Achieve unparalleled precision with measurements accurate to the micron, 
                            ensuring your projects meet the highest standards. */}
                        </div>
                    </div>
                    <div className="product-tool-presetting-features-item">
                        <div className="product-tool-presetting-features-item-title page-text-1">
                            {t("product.DIt")}
                            {/* Time-Saving Operations */}
                        </div>
                        <div className="product-tool-presetting-features-item-body page-text-2">
                            {t("product.DIp")}
                            {/* Slash setup times by up to 70%, driving swift transitions
                            from one task to the next, and elevating productivity. */}
                        </div>
                    </div>
                    <div className="product-tool-presetting-features-item">
                        <div className="product-tool-presetting-features-item-title page-text-1">
                            {t("product.DEt")}
                            {/* Cost Efficiency */}
                        </div>
                        <div className="product-tool-presetting-features-item-body page-text-2">
                            {t("product.DEp")}
                            {/* Reduce tooling expenses by optimizing tool life and minimizing waste, 
                            delivering a smart, cost-effective solution for your machining needs. */}
                        </div>
                    </div>

                </div>
            </div>

            <RequestContact />
        </div>
    );
};

export default ProductDialIndicator;