import React from 'react';
import { Helmet } from 'react-helmet-async';
import useTypingEffect from '../../hooks/useTypingEffect';

// components
import RequestContact from '../../components/RequestContact';
import BrochureDownload from '../../components/BrochureDownload';
import VideoPlayer from '../../components/VideoPlayer';

// css
import '../../css/product/ProductF15i.css';

// assets
import F15iPic from '../../assets/svg/F15i-pic.svg';

// schema
import { f15iSchema } from '../../schema/schema';

//multilangual
import { useTranslation } from 'react-i18next';


const ProductF15i = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effect
    const product_f15i_text = t("product.F15p");

    const [productF15iTitle, invisibleProductF15iTitle, productF15iTitleref] = useTypingEffect(product_f15i_text, 1, 5);
    

    return (
        <div className='product-f15i'>
            {/* metadata */}
            <Helmet>
                <title>F15i Liquid Cooling Shrink Fit Machine - HIPPSC</title>
                <meta 
                    name="description" 
                    content="HIPPSC F15i shrink fit machine employs a quick heating mechanism utilizing quick-change induction coil, 
                             ensuring rapid heating, cooling, and tool changing.
                    " 
                />
                <meta name="keywords" content="shrink fit machine, tool holders, cnc machining" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href="https://www.hippsc.com/product/shrink-fit-machines/f15i" />

                 {/* schema */}
                 <script type="application/ld+json">
                    {JSON.stringify(f15iSchema)}
                </script>

                {/* Facebook tags */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="F15i Liquid-cooling Shrink Fit Machine - HIPPSC" />
                <meta property="og:description" content="HIPPSC F15i shrink fit machine employs a quick heating mechanism utilizing an induction coil that generates 
                                                         high-frequency magnetic fields, ensuring rapid heating and tool changing." />
                <meta property="og:url" content="https://www.hippsc.com/product/shrink-fit-machines/f15i/" />
                <meta property="og:site_name" content="HIPPSC" />
                <meta property="og:image" content="http://www.hippsc.com/static/media/F15i-pic.1919980f6588ffbd0476cf82f1602b43.svg" />
                <meta property="og:image:type" content="image/svg" />
                
                {/* Twitter tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@HIPPSCUSA" />
                <meta name="twitter:card" content='website' />
                <meta name="twitter:title" content='F15i Liquid-cooling Shrink Fit Machine - HIPPSC' />
                <meta name="twitter:description"  content="Find high-quality shrink machine for your CNC machine shops. Achieve unparalleled precision and efficiency with our shrink fit products."  />
            </Helmet>

            {/* title */}
            <div className="product-f15i-title">
                <div className="product-f15i-title-left" >
                    <h1 className="product-f15i-title-left-top page-title-1-xxl">
                        {t("product.F15t")}
                        {/* F15i Liquid Cooling */}
                    </h1>
                    <div className="product-f15i-title-left-bottom page-text-1" ref={productF15iTitleref}>
                        <span >{productF15iTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleProductF15iTitle}</span>
                    </div>
                </div>
                <div className="product-f15i-title-right">
                    <img src={F15iPic} alt="HIPPSC F15i Shrink Fit Machine" title='HIPPSC F15i Shrink Fit Machine' />
                </div>
            </div>

            {/* features */}
            <div className="product-f15i-features">
                <h2 className="product-f15i-features-title page-title-1">
                    {t("product.F15F")}
                    {/* Features */}
                </h2>
                <div className="product-f15i-features-body">
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title page-text-1">
                            {t("product.F15ICt")}
                            {/* Instant Cool Down */}
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.F15ICp")}
                            {/* After a heating cycle, the liquid cooling system quickly brings 
                            down the temperature, ensuring that tools are ready for immediate use, 
                            reducing downtime and increasing productivity. */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title page-text-1">
                            {t("product.F15ISt")}
                            {/* Intuitive Scanning Recognition */}
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.F15ISp")}
                            {/* By leveraging advanced scanning recognition, 
                            the F15i ensures impeccable accuracy, 
                            eliminating risks associated with manual overheating.  */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title page-text-1">
                            {t("product.F15Rt")}
                            {/* Rapid Coil Replacement */}
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.F15Rp")}
                            {/* With our swift coil replacement feature, 
                            we introduce you to an intelligent sensing shift 
                            system designed for today's fast-paced world.  */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title page-text-1">
                            {t("product.F15Pt")}
                            {/* Precision Temperature Control */}
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.F15Pp")}
                            {/* Our machine guarantees exact temperature regulation, 
                            coupled with a world-class coil overheat warning system.  */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title page-text-1">
                            {t("product.F15Vt")}
                            {/* Versatile Heating Range */}
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.F15Vp")}
                            {/* Catering to a broad spectrum of needs, 
                            the H6i's heating range spans from D3 to D32. 
                            But we don't just stop there.  */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title page-text-1">
                            {t("product.F15St")}
                            {/* Silent Operation */}
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.F15Sp")}
                            {/* Liquid cooling is not just efficient but also quiet,
                            leading to a more focused and less disruptive workshop environment. */}
                        </div>
                    </div>

                </div>
            </div>
            
            {/* division line  */}
            <div className="division-line"></div>

             {/* tech specs */}
             <div className="product-f15i-features">
                <h2 className="product-f15i-features-title page-title-1">
                    {t("product.t")}
                    {/* Tech Specs */}
                </h2>
                <div className="product-f15i-features-body">
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title product-f15i-features-tech-specs page-title-1-bold">
                            15kw
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.p")}
                            {/* POWER */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title product-f15i-features-tech-specs page-title-1-bold">
                            380V
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.v")}
                            {/* VOLTAGE */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title product-f15i-features-tech-specs page-title-1-bold">
                            32A
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.c")}
                            {/* CURRENT */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title product-f15i-features-tech-specs page-title-1-bold">
                            215 kg
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.w")}
                            {/* WEIGHT */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title product-f15i-features-tech-specs page-title-1-bold">
                            φ3 ~ φ32
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.h")}
                            {/* HEATING RANGE */}
                        </div>
                    </div>
                    <div className="product-f15i-features-item">
                        <h3 className="product-f15i-features-item-title product-f15i-features-tech-specs page-title-1-bold">
                            950 x 710 x 1600(H)
                        </h3>
                        <div className="product-f15i-features-item-body page-text-2">
                            {t("product.d")} (mm)
                            {/* DIMENSION (mm) */}
                        </div>
                    </div>
                </div>
            </div>

             {/* Youtube Video */}
             <VideoPlayer videoId="3DzPvVhgoLQ" />

            {/* brochure download */}
            <BrochureDownload />

            {/* request contact */}
            <RequestContact />
        </div>
    );
};

export default ProductF15i;