import React from 'react';
import { Helmet } from 'react-helmet';
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
                <title>Shrink Fit Holders</title>
                <meta 
                    name="description" 
                    content="Engineered with a high-temperature resistant surface, 
                    our tooling combats carbon accumulation, ensuring a perennially pristine 
                    appearance and extending the tool holder's lifespan.." 
                />
                <meta name="keywords" content="shrink fit, tool holders, cnc machining" />
            </Helmet>

            {/* title */}
            <div className="product-holders-title">
                <div className="product-holders-title-left page-title-1-xxl" ref={productHoldersTitleref}>
                    <span >{productHoldersTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleProductHoldersTitle}</span>
                </div>
                <div className="product-holders-title-right page-title-3">
                    {t("product.Htp")}
                    {/* World-Class Tool Holders for the Modern Manufacturing */}
                </div>
            </div>

            <div className="product-holders-selection-title page-title-1">
                {t("product.Hmas")} →
            </div>
            <div className="product-holders-selection">
                <Link to='/product/holders/alloy-steel/BBT'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={BBT30SR} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       BBT
                    </div>
                </Link>
                <Link to='/product/holders/alloy-steel/HSK'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={HSK50ASR} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       HSK
                    </div>
                </Link>
                <Link to='/product/holders/alloy-steel/SK'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={SK40SR} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       SK
                    </div>
                </Link>
            </div>

            <div className="product-holders-selection-title page-title-1">
                {t("product.Hmss")} →
            </div>
            <div className="product-holders-selection">
                <Link to='/product/holders/stainless-steel/BBT'
                      className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={BBT30MRA} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       BBT
                    </div>
                </Link>
                <Link to='/product/holders/stainless-steel/BT' 
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={BT15MRA} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       BT
                    </div>
                </Link>
                <Link to='/product/holders/stainless-steel/HSK'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={HSK25EMRA} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       HSK
                    </div>
                </Link>
                <Link to='/product/holders/stainless-steel/SK'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={SK40MRAMSB} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       SK
                    </div>
                </Link>
                
                <Link to='/product/holders/stainless-steel/ISO'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={ISO20MRA} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       ISO
                    </div>
                </Link>
                <Link to='/product/holders/stainless-steel/SP'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={SP25MCS} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       SP
                    </div>
                </Link>
                <Link to='/product/holders/stainless-steel/Micron'
                    className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={ONEMICRON} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       Micron
                    </div>
                </Link>
            </div>

            <div className="product-holders-body">
                <div className="product-holders-body-title page-title-1-xl" ref={bodyTitleref}>
                    <span >{bodyTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleBodyTitle}</span>
                </div>
                <div className="product-holders-body-content">
                    {/* <div className="product-holders-body-left">
                        
                        <div className="product-holders-body-pic">
                            <img src={productHolderBodyPic} alt="holder1" />
                        </div>
                    </div> */}
                    <div className="product-holders-body-right">
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title1Ref}>
                                <span>{title1}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle1}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HAp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title2Ref}>
                                <span>{title2}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle2}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HPp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title3Ref}>
                                <span>{title3}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle3}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HIp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title4Ref}>
                                <span>{title4}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle4}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HOp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title5Ref}>
                                <span>{title5}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle5}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HUp")}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title6Ref}>
                                <span>{title6}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle6}</span>
                            </div>
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