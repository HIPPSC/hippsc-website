import React from 'react';
import { Link } from 'react-router-dom';
import useTypingEffect from '../../hooks/useTypingEffect';

// components
import RequestContact from '../../components/RequestContact';
import BrochureDownload from '../../components/BrochureDownload';

// css
import '../../css/product/ProductHolders.css';

// svg - alloy steel
import BBT30SR from '../../assets/holders/alloySteel/BBT30-SR.svg';
import BBT40SR from '../../assets/holders/alloySteel/BBT40-SR.svg';
import BBT40SRC from '../../assets/holders/alloySteel/BBT40-SRC.svg';
import BBT40SRV from '../../assets/holders/alloySteel/BBT40-SRV.svg';
import BBT50SR from '../../assets/holders/alloySteel/BBT50-SR.svg';
import HSK40ESR from '../../assets/holders/alloySteel/HSK40E-SR.svg';
import HSK50ASR from '../../assets/holders/alloySteel/HSK50A-SR.svg';
import HSK50ESR from '../../assets/holders/alloySteel/HSK50E-SR.svg';
import HSK63ASR from '../../assets/holders/alloySteel/HSK63A-SR.svg';
import HSK63ASRC from '../../assets/holders/alloySteel/HSK63A-SRC.svg';
import HSK63ASRV from '../../assets/holders/alloySteel/HSK63A-SRV.svg';
import HSK63FSR from '../../assets/holders/alloySteel/HSK63F-SR.svg';
import HSK100ASR from '../../assets/holders/alloySteel/HSK100A-SR.svg';
import SK40SR from '../../assets/holders/alloySteel/SK40-SR.svg';


// svg - stainless steel
import BBT30MRA from '../../assets/holders/stainlessSteel/BBT30-MRA.svg';
import BBT40MRAMSB from '../../assets/holders/stainlessSteel/BBT40-MRAMSB.svg';
import BT15MRA from '../../assets/holders/stainlessSteel/BT15-MRA.svg';
import HSK25EMRA from '../../assets/holders/stainlessSteel/HSK25E-MRA.svg';
import HSK32EMRA from '../../assets/holders/stainlessSteel/HSK32E-MRA.svg';
import HSK40EMRA from '../../assets/holders/stainlessSteel/HSK40E-MRA.svg';
import HSK50AMRAMSB from '../../assets/holders/stainlessSteel/HSK50A-MRAMSB.svg';
import HSK50EMRAMSB from '../../assets/holders/stainlessSteel/HSK50E-MRAMSB.svg';
import HSK63AMRAMSB from '../../assets/holders/stainlessSteel/HSK63A-MRAMSB.svg';
import HSK63FMRAMSB from '../../assets/holders/stainlessSteel/HSK63F-MRAMSB.svg';
import ISO20MRA from '../../assets/holders/stainlessSteel/ISO20-MRA.svg';
import ISO25MRA from '../../assets/holders/stainlessSteel/ISO25-MRA.svg';
import SK40MRAMSB from '../../assets/holders/stainlessSteel/SK40-MRAMSB.svg';




import productHolderBodyPic from '../../assets/product-holder-body-pic.jpg';

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
                {/* <div className="product-holders-selection-item">
                    <div className="product-holders-selection-pic">
                        <img src={SK40SR} alt="holder1" />
                    </div>
                    <div className="product-holders-selection-item-title page-title-2">
                       HSK-63
                    </div>
                </div> */}
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
                                {/* Engineered with a high-temperature resistant surface, 
                                our tooling combats carbon accumulation, 
                                ensuring a perennially pristine appearance 
                                and extending the tool holder's lifespan. */}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title2Ref}>
                                <span>{title2}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle2}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HPp")}
                                {/* Leveraging precision-crafted tool holders, 
                                we've achieved a reduction in tool wear by over 30%, 
                                minimizing tool replacements and amplifying operational efficiency. */}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title3Ref}>
                                <span>{title3}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle3}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HIp")}
                                {/* Our innovations are the cornerstone of industries 
                                demanding precision and reliability, 
                                including aerospace, defense, and precision mold manufacturing. */}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title4Ref}>
                                <span>{title4}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle4}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HOp")}
                                {/* Featuring the SRS/SRV slim-wall design, 
                                our tooling is meticulously crafted to avoid interference, 
                                making it the go-to choice for quintessential 5-axis machining. */}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title5Ref}>
                                <span>{title5}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle5}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HUp")}
                                {/* Guaranteed 100% dust-proof design prevents the ingress of metal shavings and dust, 
                                ensuring unparalleled tool mounting accuracy. */}
                            </div>
                        </div>
                        <div className="product-holders-body-item">
                            <div className="product-holders-body-item-title page-text-1" ref={title6Ref}>
                                <span>{title6}</span>
                                <span style={{color: 'transparent'}}>{invisibleTitle6}</span>
                            </div>
                            <div className="product-holders-body-item-content page-text-1">
                                {t("product.HEp")}
                                {/* Designed for simplicity and precision, 
                                our tooling guarantees consistent mounting accuracy 
                                without the need for specialists or the burdensome task of tool alignment. */}
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