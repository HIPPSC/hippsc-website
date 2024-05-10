import React from 'react';
import { Helmet } from 'react-helmet-async';
import useTypingEffect from '../../hooks/useTypingEffect';


// components
import RequestContact from '../../components/RequestContact';
import BrochureDownload from '../../components/BrochureDownload';
import VideoPlayer from '../../components/VideoPlayer';

// css
import '../../css/product/ProductH6i.css';

// assets
import H6iPic from '../../assets/svg/H6i-pic.svg';

// schema
import { h6iSchema } from '../../schema/schema';

//multilangual
import { useTranslation } from 'react-i18next';


const ProductH6i = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effect
    const product_h6i_text = t("product.H6p");

    const [productH6iTitle, invisibleProductH6iTitle, productH6iTitleref] = useTypingEffect(product_h6i_text, 1, 5);
    

    return (
        <div className='product-h6i'>
            {/* metadata */}
            <Helmet>
                <title>H6i Air Cooling Shrink Fit Machine - HIPPSC</title>
                <meta 
                    name="description" 
                    content="By leveraging advanced scanning recognition, the H6i shrink fit machine ensures impeccable accuracy, eliminating risks 
                    associated with manual overheating." 
                />
                <meta name="keywords" content="shrink fit machine, tool holders, cnc machining" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href="https://www.hippsc.com/product/shrink-fit-machines/h6i" />

                {/* schema */}
                <script type="application/ld+json">
                    {JSON.stringify(h6iSchema)}
                </script>

                {/* Facebook tags */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="H6i Air-cooling Shrink Fit Machine - HIPPSC" />
                <meta property="og:description" content="By leveraging advanced scanning recognition, the H6i shrink fit machine ensures impeccable accuracy, eliminating risks 
                                                         associated with manual overheating." />
                <meta property="og:url" content="https://www.hippsc.com/product/shrink-fit-machines/h6i/" />
                <meta property="og:site_name" content="HIPPSC" />
                <meta property="og:image" content="https://www.hippsc.com/static/media/H6i-pic.33d3096388eec4bc57e28382daacc246.svg" />
                <meta property="og:image:type" content="image/svg" />
                
                {/* Twitter tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@HIPPSCUSA" />
                <meta name="twitter:card" content='website' />
                <meta name="twitter:title" content='H6i Air-cooling Shrink Fit Machine - HIPPSC' />
                <meta name="twitter:description"  content="Find high-quality shrink machine for your CNC machine shops. Achieve unparalleled precision and efficiency with our shrink fit products."  />
            </Helmet>

            {/* title */}
            <div className="product-h6i-title">
                <div className="product-h6i-title-left" >
                    <h1 className="product-h6i-title-left-top page-title-1-xxl">
                        {t("product.H6t")}
                        {/* H6i Air Cooling */}
                    </h1>
                    <div className="product-h6i-title-left-bottom page-text-1" ref={productH6iTitleref}>
                        <span >{productH6iTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleProductH6iTitle}</span>
                    </div>
                </div>
                <div className="product-h6i-title-right">
                    <img src={H6iPic} alt="HIPPSC H6i Shrink Fit Machine" title='HIPPSC H6i Shrink Fit Machine'/>
                </div>
            </div>

            {/* features */}
            <div className="product-h6i-features">
                <h2 className="product-h6i-features-title page-title-1">
                    {t("product.H6F")}
                    {/* Features */}
                </h2>
                <div className="product-h6i-features-body">
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title page-text-1">
                            {t("product.H6It")}
                            {/* Intuitive Scanning Recognition */}
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.H6Ip")}
                            {/* By leveraging advanced scanning recognition, 
                            the H6i ensures impeccable accuracy, 
                            eliminating risks associated with manual overheating.  */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title page-text-1">
                            {t("product.H6Rt")}
                            {/* Rapid Coil Replacement */}
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.H6Rp")}
                            {/* With our swift coil replacement feature, 
                            we introduce you to an intelligent sensing shift 
                            system designed for today's fast-paced world.  */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title page-text-1">
                            {t("product.H6Pt")}
                            {/* Precision Temperature Control */}
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.H6Pp")}
                            {/* Our machine guarantees exact temperature regulation, 
                            coupled with a state-of-the-art coil overheat warning system.  */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title page-text-1">
                            {t("product.H6Vt")}
                            {/* Versatile Heating Range */}
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.H6Vp")}
                            {/* Catering to a broad spectrum of needs, 
                            the H6i's heating range spans from 3 to 32 mm, thanks to the revolutionary quick-change coils. */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title page-text-1">
                            {t("product.H6Lt")}
                            {/* LCD Operation Panel */}
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.H6Lp")}
                            {/* Provides a clear, high-definition display, 
                            allowing users to easily monitor machine performance, 
                            adjust settings, and troubleshoot issues.  */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title page-text-1">
                            {t("product.H6Et")}
                            {/* Effortless Handle Adjustability */}
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.H6Ep")}
                            {/* The Handle Up/Down Button offers users an unparalleled 
                            smooth experience. With its intuitive design, making 
                            adjustments becomes second nature. */}
                        </div>
                    </div>
                </div>
            </div>

            {/* division line  */}
            <div className="division-line"></div>


            {/* tech specs */}
            <div className="product-h6i-features">
                <h2 className="product-h6i-features-title page-title-1">
                    {t("product.t")}
                    {/* Tech Specs */}
                </h2>
                <div className="product-h6i-features-body">
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            6kw
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.p")}
                            {/* POWER */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            AC220V 50/60Hz
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.v")}
                            {/* VOLTAGE */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            16A
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.c")}
                            {/* CURRENT */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            25 kg
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.w")}
                            {/* WEIGHT */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            φ3 ~ φ32
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.h")}
                            {/* HEATING RANGE */}
                        </div>
                    </div>
                    <div className="product-h6i-features-item">
                        <h3 className="product-h6i-features-item-title product-h6i-features-tech-specs page-title-1-bold">
                            540 x 400 x 780(H)
                        </h3>
                        <div className="product-h6i-features-item-body page-text-2">
                            {t("product.d")} (mm)
                            {/* DIMENSION (mm) */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Youtube Video */}
            <VideoPlayer videoId="MNRtJfwhzu4" />

            {/* brochure download */}
            <BrochureDownload />

            {/* request contact btn */}
            <RequestContact />
        </div>
    );
};

export default ProductH6i;