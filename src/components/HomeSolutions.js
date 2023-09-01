import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect'; 


// css & assets
import '../css/HomeSolutions.css';
import { BsArrowRight } from 'react-icons/bs';
import F15iPic from '../assets/F15i-pic.svg';
import H6iPic from '../assets/H6i-pic.svg';
import StoragePic from '../assets/storage-pic.svg';

const HomeSolutions = () => {

    // typing effects
    const f15i_title_text = "F15i";
    const h6i_title_text = "H6i";
    const storage_title_text = "Coming Soon ...";

    const [f15iTitle, invisibleF15iTitle, f15iTitleref] = useTypingEffect(f15i_title_text, 1, 100);
    const [h6iTitle, invisibleH6iTitle, h6iTitleref] = useTypingEffect(h6i_title_text, 1, 100);
    const [storageTitle, invisibleStorageTitle, storageTitleref] = useTypingEffect(storage_title_text, 1, 100);


    return (
        <div className='home-solutions'>
            <div className="home-solutions-title">
                <div className="page-title-2-bold-green">
                    HIPPSC
                </div>
                <div className="page-title-2">
                    Solutions
                </div>
            </div>

            <div className="home-solutions-item">
                <div className="home-solutions-item-left">
                    <div className="home-solutions-item-pic">
                        <img src={F15iPic} alt="Tool Holder" />
                    </div>
                    <div className="page-link-btn home-solutions-btn">
                        <div className="page-link-btn-text btn-text-1 ">
                            Learn more about F15i
                        </div>
                        <div className="page-link-btn-icon">
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div className="home-solutions-item-right">
                    <div className="home-solutions-item-title">
                        <div className="page-title-1-xl" ref={f15iTitleref}>
                            <span >{f15iTitle}</span>
                            <span style={{color: 'transparent'}}>{invisibleF15iTitle}</span>
                        </div>
                        <div className="page-title-1-xl liquid-cooling-text">
                            Liquid Cooling
                        </div>
                        <div className="page-title-1-xl">
                            Shrink Fit Machine
                        </div>
                    </div>
                    
                    <div className="home-solutions-item-description page-text-1">
                        The true brilliance of the F-15i resides in its groundbreaking rapid liquid cooling technology, 
                        seamlessly returning your tools to optimal temperature with unmatched speed.
                    </div>
                    <div className="home-solutions-item-description page-text-1">
                        Infused with quick-change heating coils and masterful temperature control, 
                        the F-15i transcends mere machinery; it's a symphony of excellence, 
                        a dynamic partner poised to transform your production landscape into a realm of unparalleled achievement.
                    </div>
                </div>
            </div>
            <div className="home-solutions-item">
                <div className="home-solutions-item-left">
                    <div className="home-solutions-item-pic">
                        <img src={H6iPic} alt="Tool Holder" />
                    </div>
                    <div className="page-link-btn home-solutions-btn">
                        <div className="page-link-btn-text btn-text-1 ">
                            Learn more about H6i
                        </div>
                        <div className="page-link-btn-icon">
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div className="home-solutions-item-right">
                    <div className="home-solutions-item-title">
                        <div className="page-title-1-xl" ref={h6iTitleref}>
                            <span >{h6iTitle}</span>
                            <span style={{color: 'transparent'}}>{invisibleH6iTitle}</span>
                        </div>
                        <div className="page-title-1-xl air-cooling-text">
                            Air Cooling
                        </div>
                        <div className="page-title-1-xl">
                            Shrink Fit Machine
                        </div>
                    </div>
                    
                    <div className="home-solutions-item-description page-text-1">
                        Discover the H6i, where compact design meets robust capability.
                    </div>
                    <div className="home-solutions-item-description page-text-1">
                        With a sleek design weighing just 25kg and a compact footprint of 540mm x 400mm x 780mm (H), 
                        the H6i is a versatile powerhouse, perfect for spaces where efficiency meets elegance.
                    </div>
                    <div className="home-solutions-item-description page-text-1">
                        From its flexible heating range to its innovative scanning code recognition, 
                        the H6i is more than a machine; it's a vision of efficiency, ready to transform your workspace.
                    </div>
                </div>
            </div>
            <div className="home-solutions-item">
                <div className="home-solutions-item-left">
                    <div className="home-solutions-item-pic intelligent-storage-pic">
                        <img src={StoragePic} alt="Tool Holder" />
                    </div>
                </div>
                <div className="home-solutions-item-right">
                    <div className="home-solutions-item-title">
                        <div className="page-title-1-xl">
                            HIPPSC
                        </div>
                        <div className="page-title-1-xl intelligent-storage-text">
                            Intelligent Tooling Storage
                        </div>
                        <div className="page-title-2-gray" ref={storageTitleref}>
                            <span >{storageTitle}</span>
                            <span style={{color: 'transparent'}}>{invisibleStorageTitle}</span>
                        </div>
                    </div>
                    <div className="page-link-btn home-solutions-btn">
                        <div className="page-link-btn-text btn-text-1 ">
                            Unlock the future - Join Us Now
                        </div>
                        <div className="page-link-btn-icon">
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomeSolutions;