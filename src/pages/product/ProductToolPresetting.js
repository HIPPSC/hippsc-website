import React from 'react';
import useTypingEffect from '../../hooks/useTypingEffect';

// components
import RequestContact from '../../components/RequestContact';

// css
import '../../css/product/ProductToolPresetting.css';

// assets
import ToolPresetterPic from '../../assets/tool-presetter-pic.png';


const ProductToolPresetting = () => {

    // typing effect
    const product_tool_presetting_text = `
    Every measurement, every cut, every finished product now holds a 
    new standard of excellence. Dive into a realm of unmatched 
    accuracy with HIPPSC Tool Presetter - where exceptional is the standard.`;

    const [productToolPresettingTitle, invisibleProductToolPresettingTitle, productToolPresettingTitleref] = useTypingEffect(product_tool_presetting_text, 1, 5);
    

    return (
        <div className='product-tool-presetting'>
            <div className="product-tool-presetting-title">
                <div className="product-tool-presetting-title-left" >
                    <div className="product-tool-presetting-title-left-top page-title-1-xxl">
                        Laser Tool Presetting
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
                            Micron-Level Accuracy
                        </div>
                        <div className="product-tool-presetting-features-item-body page-text-2">
                            Achieve unparalleled precision with measurements accurate to the micron, 
                            ensuring your projects meet the highest standards.
                        </div>
                    </div>
                    <div className="product-tool-presetting-features-item">
                        <div className="product-tool-presetting-features-item-title page-text-1">
                            Time-Saving Operations
                        </div>
                        <div className="product-tool-presetting-features-item-body page-text-2">
                            Slash setup times by up to 70%, driving swift transitions
                            from one task to the next, and elevating productivity.
                        </div>
                    </div>
                    <div className="product-tool-presetting-features-item">
                        <div className="product-tool-presetting-features-item-title page-text-1">
                            Cost Efficiency
                        </div>
                        <div className="product-tool-presetting-features-item-body page-text-2">
                            Reduce tooling expenses by optimizing tool life and minimizing waste, 
                            delivering a smart, cost-effective solution for your machining needs.
                        </div>
                    </div>

                </div>
            </div>

            <RequestContact />
        </div>
    );
};

export default ProductToolPresetting;