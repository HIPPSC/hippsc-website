import React from 'react';

// css & assets
import '../css/HomeSolutions.css';
import { BsArrowRight } from 'react-icons/bs';
import F15iPic from '../assets/F15i-pic.svg';
import H6iPic from '../assets/H6i-pic.svg';
import StoragePic from '../assets/storage-pic.svg';

const HomeSolutions = () => {


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
                        <div className="page-title-1-xl">
                            F15i
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
                        <div className="page-title-1-xl">
                            H6i
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
                        <div className="page-title-2-gray">
                            Coming Soon ...
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