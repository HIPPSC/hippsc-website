import React from 'react';
import useTypingEffect from '../../hooks/useTypingEffect';

// components
import RequestContact from '../../components/RequestContact';

// css
import '../../css/product/ProductToolPresetting.css';

// assets
import ToolPresetterPic from '../../assets/tool-presetter-pic.png';

//multilangual
import { useTranslation } from 'react-i18next';


const ProductToolPresetting = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effect
    const product_tool_presetting_text = t("product.Lp");

    const [productToolPresettingTitle, invisibleProductToolPresettingTitle, productToolPresettingTitleref] = useTypingEffect(product_tool_presetting_text, 1, 5);
    

    return (
        <div className='product-tool-presetting'>
            <div className="product-tool-presetting-title">
                <div className="product-tool-presetting-title-left" >
                    <div className="product-tool-presetting-title-left-top page-title-1-xxl">
                        {t("product.Lt")}
                        {/* Laser Tool Presetting */}
                    </div>
                    <div className="product-tool-presetting-title-left-bottom page-text-1" ref={productToolPresettingTitleref}>
                        <span >{productToolPresettingTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleProductToolPresettingTitle}</span>
                    </div>
                </div>
                <div className="product-tool-presetting-title-right">
                    <img src={ToolPresetterPic} alt="tool-presetter" />
                </div>
            </div>

            <div className="product-tool-presetting-features">
                <div className="product-tool-presetting-features-title">

                </div>
                <div className="product-tool-presetting-features-body">
                    <div className="product-tool-presetting-features-item">
                        <div className="product-tool-presetting-features-item-title page-text-1">
                            {t("product.LMt")}
                            {/* Micron-Level Accuracy */}
                        </div>
                        <div className="product-tool-presetting-features-item-body page-text-2">
                            {t("product.LMp")}
                            {/* Achieve unparalleled precision with measurements accurate to the micron, 
                            ensuring your projects meet the highest standards. */}
                        </div>
                    </div>
                    <div className="product-tool-presetting-features-item">
                        <div className="product-tool-presetting-features-item-title page-text-1">
                            {t("product.LTt")}
                            {/* Time-Saving Operations */}
                        </div>
                        <div className="product-tool-presetting-features-item-body page-text-2">
                            {t("product.LTp")}
                            {/* Slash setup times by up to 70%, driving swift transitions
                            from one task to the next, and elevating productivity. */}
                        </div>
                    </div>
                    <div className="product-tool-presetting-features-item">
                        <div className="product-tool-presetting-features-item-title page-text-1">
                            {t("product.LCt")}
                            {/* Cost Efficiency */}
                        </div>
                        <div className="product-tool-presetting-features-item-body page-text-2">
                            {t("product.LCp")}
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

export default ProductToolPresetting;