import React from 'react';
import useTypingEffect from '../../hooks/useTypingEffect';


// components
import RequestContact from '../../components/RequestContact';
import BrochureDownload from '../../components/BrochureDownload';

// css
import '../../css/product/ProductH6i.css';

// assets
import H6iPic from '../../assets/svg/H6i-pic.svg';


const ProductH6i = () => {

    // typing effect
    const product_h6i_text = `
    Welcome to the era of the H6i, where every task becomes an art form. 
    Beyond its compact design and powerful capabilities lies a story 
    of innovation and relentless pursuit of perfection.`;

    const [productH6iTitle, invisibleProductH6iTitle, productH6iTitleref] = useTypingEffect(product_h6i_text, 1, 5);
    

    return (
        <div className='product-h6i'>
            <div className="product-h6i-title">
                <div className="product-h6i-title-left" >
                    <div className="product-h6i-title-left-top page-title-1-xxl">
                        H6i Air Cooling
                    </div>
                    <div className="product-h6i-title-left-bottom page-text-1" ref={productH6iTitleref}>
                        <span >{productH6iTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleProductH6iTitle}</span>
                    </div>
                </div>
                <div className="product-h6i-title-right">
                    <img src={H6iPic} alt="" />
                </div>
            </div>

            {/* features */}
            <div className="product-h6i-features">
                <div className="product-h6i-features-title page-title-1">
                    Features
                </div>
                <div className="product-h6i-features-body">
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            Intuitive Scanning Recognition
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            By leveraging advanced scanning recognition, 
                            the H6i ensures impeccable accuracy, 
                            eliminating risks associated with manual overheating.                         </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            Rapid Coil Replacement
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            With our swift coil replacement feature, 
                            we introduce you to an intelligent sensing shift 
                            system designed for today's fast-paced world. 
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            Precision Temperature Control
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            Our machine guarantees exact temperature regulation, 
                            coupled with a state-of-the-art coil overheat warning system. 
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            Versatile Heating Range
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            Catering to a broad spectrum of needs, 
                            the H6i's heating range spans from 3 to 32 mm, thanks to the revolutionary quick-change coils.
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            LCD Operation Panel
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            Provides a clear, high-definition display, 
                            allowing users to easily monitor machine performance, 
                            adjust settings, and troubleshoot issues. 

                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            Effortless Handle Adjustability
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            The Handle Up/Down Button offers users an unparalleled 
                            smooth experience. With its intuitive design, making 
                            adjustments becomes second nature.
                        </div>
                    </div>
                </div>
            </div>

            {/* division line  */}
            <div className="division-line"></div>


            {/* tech specs */}
            <div className="product-h6i-features">
                <div className="product-h6i-features-title page-title-1">
                    Tech Specs
                </div>
                <div className="product-h6i-features-body">
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            6kw
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            POWER                
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            AC220V 50/60Hz
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            VOLTAGE
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            16A
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            CURRENT
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            25 kg
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            WEIGHT    
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            φ3 ~ φ32
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            HEATING RANGE
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            540 x 400 x 780(H)
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            DIMENSION (mm)
                        </div>
                    </div>
                </div>
            </div>

            {/* brochure download */}
            <BrochureDownload />

            {/* request contact btn */}
            <RequestContact />
        </div>
    );
};

export default ProductH6i;