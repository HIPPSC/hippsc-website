import React from 'react';
import useTypingEffect from '../../hooks/useTypingEffect';

// css
import '../../css/product/ProductH6i.css';

// assets
import H6iPic from '../../assets/svg/H6i-pic.svg';


const ProductF15i = () => {

    // typing effect
    const product_h6i_text = `
    Welcome to the era of the H6i, where every task becomes an art form. 
    Beyond its compact design and powerful capabilities lies a story 
    of innovation and relentless pursuit of perfection. 
    The H6i is more than a machine; it's a statement, 
    a vision, and the future of precision all rolled into one.`;

    const [productH6iTitle, invisibleProductH6iTitle, productH6iTitleref] = useTypingEffect(product_h6i_text, 1, 5);
    

    return (
        <div className='product-h6i'>
            <div className="product-h6i-title">
                <div className="product-h6i-title-left" >
                    <div className="product-h6i-title-left-top page-title-1-xxl">
                        H6i Shrink Fit Machine
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

            <div className="product-h6i-features">
                <div className="product-h6i-features-title">

                </div>
                <div className="product-h6i-features-body">
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            Intuitive Scanning Recognition
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            By leveraging advanced scanning recognition, 
                            the H6i ensures impeccable accuracy, 
                            eliminating risks associated with manual overheating. 
                            Your operations are about to witness a revolution—where precision meets simplicity.
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            Rapid Coil Replacement
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            Time is the essence of productivity. 
                            With our swift coil replacement feature, 
                            we introduce you to an intelligent sensing shift 
                            system designed for today's fast-paced world. 
                            Say goodbye to delays and embrace the speed and efficiency of the H6i.
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            Precision Temperature Control
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            Our machine guarantees exact temperature regulation, 
                            coupled with a state-of-the-art coil overheat warning system. 
                            With the H6i, you're not just working with a tool; 
                            you're working with a guardian that ensures optimal 
                            performance without compromises.
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <div className="product-h6i-features-item-title page-text-1">
                            Versatile Heating Range
                        </div>
                        <div className="product-h6i-features-item-body page-text-2">
                            Catering to a broad spectrum of needs, 
                            the H6i's heating range spans from D3 to D32. 
                            But we don't just stop there. 
                            Our built-in precise positioning 
                            lines within the coil ensure unparalleled accuracy. 
                            Dive into a realm where every detail is fine-tuned to perfection.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductF15i;