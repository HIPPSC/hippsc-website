import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import useTypingEffect from '../../hooks/useTypingEffect';

// components
import RequestContact from '../../components/RequestContact';
import BrochureDownload from '../../components/BrochureDownload';
import VideoPlayer from '../../components/VideoPlayer';

// css
import '../../css/product/ProductHolders.css';

// svg - alloy steel
import BBT30SR from '../../assets/holders/alloySteel/BBT30-SR.svg';
import HSK50ASR from '../../assets/holders/alloySteel/HSK50A-SR.svg';
import SK40SR from '../../assets/holders/alloySteel/SK40-SR.svg';

// svg - stainless steel
import BBT30MRA from '../../assets/holders/stainlessSteel/BBT30-MRA.svg';
import BT15MRA from '../../assets/holders/stainlessSteel/BT15-MRA.svg';
import HSK25EMRA from '../../assets/holders/stainlessSteel/HSK25E-MRA.svg';
import ISO20MRA from '../../assets/holders/stainlessSteel/ISO20-MRA.svg';
import SK40MRAMSB from '../../assets/holders/stainlessSteel/SK40-MRAMSB.svg';
import SP25MCS from '../../assets/holders/stainlessSteel/SP25-MCS.svg';
import ONEMICRON from '../../assets/holders/stainlessSteel/ONE-MICRON.svg';

// schema
import { holderSchema } from '../../schema/schema';

//multilangual
import { useTranslation } from 'react-i18next';


const ProductHolders = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effect
    const product_holders_text = t("product.Ht");
    const [productHoldersTitle, invisibleProductHoldersTitle, productHoldersTitleref] = useTypingEffect(product_holders_text);
    
    const body_title_text = t("product.He");
    const [bodyTitle, invisibleBodyTitle, bodyTitleref] = useTypingEffect(body_title_text);

    const title1_text = t("product.HAt");
    const [title1, invisibleTitle1, title1Ref] = useTypingEffect(title1_text);

    const title2_text = t("product.HPt");
    const [title2, invisibleTitle2, title2Ref] = useTypingEffect(title2_text);

    const title3_text = t("product.HIt");
    const [title3, invisibleTitle3, title3Ref] = useTypingEffect(title3_text);

    const title4_text = t("product.HOt");
    const [title4, invisibleTitle4, title4Ref] = useTypingEffect(title4_text);

    const title5_text = t("product.HUt");
    const [title5, invisibleTitle5, title5Ref] = useTypingEffect(title5_text);

    const title6_text = t("product.HEt");
    const [title6, invisibleTitle6, title6Ref] = useTypingEffect(title6_text);



    

    return (
        <div className='product-holders'>
            {/* metadata */}
            <Helmet>
                <title>Shrink Fit Tool Holders/Chucks - HIPPSC</title>
                <meta 
                    name="description" 
                    content="HIPPSC shrink fit tool holders are engineered with a high-temperature resistant surface, ensuring
                    fast CNC machining setup and high precision tool holding." 
                />

                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href="https://www.hippsc.com/product/shrink-fit-tool-holders" />

                {/* schema */}
                <script type="application/ld+json">
                    {JSON.stringify(holderSchema)}
                </script>

                {/* Facebook tags */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Shrink Fit Tool Holders - HIPPSC" />
                <meta property="og:description" content="HIPPSC shrink fit tool holders are engineered with a high-temperature resistant surface, ensuring
                                                         fast CNC machining setup and high precision tool holding" />
                <meta property="og:url" content="https://www.hippsc.com/product/shrink-fit-tool-holders/" />
                <meta property="og:site_name" content="HIPPSC" />
                <meta property="og:image" content="http://www.hippsc.com/static/media/HSK50A-SR.5099e078bdd0ce6b66e5ff73b628af25.svg" />
                <meta property="og:image:type" content="image/png" />
                
                {/* Twitter tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@HIPPSCUSA" />
                <meta name="twitter:card" content='website' />
                <meta name="twitter:title" content='Shrink Fit Tool Holders - HIPPSC' />
                <meta name="twitter:description"  content="HIPPSC shrink fit tool holders are engineered with a high-temperature resistant surface, ensuring
                                                           fast CNC machining setup and high precision tool holding"  />
            </Helmet>

            {/* title */}
            <div className="product-holders-title">
                <h1 className="product-holders-title-left page-title-1-xxl" ref={productHoldersTitleref}>
                    <span >{productHoldersTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleProductHoldersTitle}</span>
                </h1>
                <h2 className="product-holders-title-right page-title-3">
                    {t("product.Htp")}
                    {/* World-Class Tool Holders for the Modern Manufacturing */}
                </h2>
            </div>

            <h3 className="product-holders-selection-title page-title-1">
                {t("product.Hmas")} →
            </h3>
            <div className="product-holders-selection">
                <Link to='/product/shrink-fit-tool-holders/alloy-steel/BBT'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={BBT30SR} alt="HIPPSC BBT Shrink Fit Tool Holder - Alloy Steel" title="HIPPSC BBT Shrink Fit Tool Holder - Alloy Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       BBT
                    </h4>
                </Link>
                <Link to='/product/shrink-fit-tool-holders/alloy-steel/HSK'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={HSK50ASR} alt="HIPPSC HSK Shrink Fit Tool Holder - Alloy Steel" title="HIPPSC HSK Shrink Fit Tool Holder - Alloy Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       HSK
                    </h4>
                </Link>
                <Link to='/product/shrink-fit-tool-holders/alloy-steel/SK'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={SK40SR} alt="HIPPSC SK Shrink Fit Tool Holder - Alloy Steel" title="HIPPSC SK Shrink Fit Tool Holder - Alloy Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       SK
                    </h4>
                </Link>
            </div>

            <h3 className="product-holders-selection-title page-title-1">
                {t("product.Hmss")} →
            </h3>
            <div className="product-holders-selection">
                <Link to='/product/shrink-fit-tool-holders/stainless-steel/BBT'
                      className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={BBT30MRA} alt="HIPPSC BBT Shrink Fit Tool Holder - Stainless Steel" title="HIPPSC BBT Shrink Fit Tool Holder - Stainless Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       BBT
                    </h4>
                </Link>
                <Link to='/product/shrink-fit-tool-holders/stainless-steel/BT' 
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={BT15MRA} alt="HIPPSC BT Shrink Fit Tool Holder - Stainless Steel" title="HIPPSC BT Shrink Fit Tool Holder - Stainless Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       BT
                    </h4>
                </Link>
                <Link to='/product/shrink-fit-tool-holders/stainless-steel/HSK'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={HSK25EMRA} alt="HIPPSC HSK Shrink Fit Tool Holder - Stainless Steel" title="HIPPSC HSK Shrink Fit Tool Holder - Stainless Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       HSK
                    </h4>
                </Link>
                <Link to='/product/shrink-fit-tool-holders/stainless-steel/SK'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={SK40MRAMSB} alt="HIPPSC SK Shrink Fit Tool Holder - Stainless Steel" title="HIPPSC SK Shrink Fit Tool Holder - Stainless Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       SK
                    </h4>
                </Link>
                
                <Link to='/product/shrink-fit-tool-holders/stainless-steel/ISO'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={ISO20MRA} alt="HIPPSC ISO Shrink Fit Tool Holder - Stainless Steel" title="HIPPSC ISO Shrink Fit Tool Holder - Stainless Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       ISO
                    </h4>
                </Link>
                <Link to='/product/shrink-fit-tool-holders/stainless-steel/SP'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={SP25MCS} alt="HIPPSC SP Shrink Fit Tool Holder - Stainless Steel" title="HIPPSC SP Shrink Fit Tool Holder - Stainless Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       SP
                    </h4>
                </Link>
                <Link to='/product/shrink-fit-tool-holders/stainless-steel/Micron'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={ONEMICRON} alt="HIPPSC MICRON Shrink Fit Tool Holder - Stainless Steel" title="HIPPSC MICRON Shrink Fit Tool Holder - Stainless Steel"/>
                    </div>
                    <h4 className="product-holders-selection-item-title page-title-2">
                       Micron
                    </h4>
                </Link>
            </div>

            <div className="product-holders-body">
                <h2 className="product-holders-body-title page-title-1-xl" ref={bodyTitleref}>
                    <span >{bodyTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleBodyTitle}</span>
                </h2>
                <div className="product-holders-body-content">
                    {/* <div className="product-holders-body-left">
                        
                        <div className="product-holders-body-pic">
                            <img src={productHolderBodyPic} alt="HIPPSC" />
                        </div>
                    </div> */}
                    <div className="product-holders-body-right">
                        <div className="product-holders-body-item">
                            <h3 className="product-holders-body-item-title page-text-1" ref={title1Ref}>
                                <span>{title1}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle1}</span>
                            </h3>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HAp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <h3 className="product-holders-body-item-title page-text-1" ref={title2Ref}>
                                <span>{title2}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle2}</span>
                            </h3>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HPp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <h3 className="product-holders-body-item-title page-text-1" ref={title3Ref}>
                                <span>{title3}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle3}</span>
                            </h3>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HIp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <h3 className="product-holders-body-item-title page-text-1" ref={title4Ref}>
                                <span>{title4}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle4}</span>
                            </h3>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HOp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <h3 className="product-holders-body-item-title page-text-1" ref={title5Ref}>
                                <span>{title5}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle5}</span>
                            </h3>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HUp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <h3 className="product-holders-body-item-title page-text-1" ref={title6Ref}>
                                <span>{title6}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle6}</span>
                            </h3>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HEp")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Youtube Video */}
            <VideoPlayer videoId="tR2mLYMYDok" />

            <BrochureDownload />
            <RequestContact />
        </div>
    );
};

export default ProductHolders;