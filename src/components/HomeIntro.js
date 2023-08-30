import React, { useEffect } from 'react';


// css
import '../css/HomeIntro.css';

// assets
import { BsArrowRight } from 'react-icons/bs';
import banner from '../assets/home-banner.png';

const HomeIntro = () => {

    // animation for title
    const text = "Precision in Every Cut, Shrink Fit Innovation for Modern Machining";
    const words = text.split(' ');

    useEffect(() => {
        const letters = document.querySelectorAll('.letter');
        let delay = 0;
        
        letters.forEach(letter => {
          setTimeout(() => {
            letter.classList.add('show-letter');
          }, delay);
          delay += 20; // 0.025 second delay for each letter
        });
    }, []);
    
    
    
    

      

    return (
        <div className='home-intro'>
            <div className="home-title">
                <div className="page-title-1-bold">
                    {words.map((word, wordIndex) => (
                        <span key={wordIndex} className="word">
                            {Array.from(word).map((letter, letterIndex) => (
                            <span key={`${wordIndex}-${letterIndex}`} className="letter">{letter}</span>
                            ))}
                        </span>
                    )).reduce((prev, curr) => [prev, <span key={Math.random()} className="letter">&nbsp;</span>, curr])}
                </div>
            </div>
            <div className="home-banner">
                <img src={banner} 
                     className="banner-image"
                     alt="banner" />
            </div>
            <div className="home-description">
                <div className="home-description-1">
                    <div className="page-title-2">
                        Revolutionizing Precision Engineering 
                        — from automotive assembly lines to aerospace manufacturing.
                    </div>
                </div>
                <div className="home-description-2">
                    <div className="home-description-left">
                        <div className="page-title-3">
                            We craft industry-leading shrink-fit holders and machines 
                            that enable machine shops to achieve unparalleled accuracy and efficiency 
                            — across diverse industrial applications.
                        </div>
                    </div>
                    <div className="home-description-right">
                        <div className="page-text-1 home-description-text">
                            We are in a time of remarkable technological advancement. 
                            Our company recognizes our customers' critical need to utilize shrink fit technology for precise, 
                            reliable cutting — and to excel in the competitive manufacturing landscape.
                        </div>
                        <div className="page-text-1 home-description-text">
                            Industries cannot afford to compromise on quality. 
                            Bring precision engineering to the core of everything that matters most to your production.
                        </div>
                        
                        <div className="page-link-btn">
                            <div className="page-link-btn-text btn-text-1 ">
                                Learn more about our study on 
                                Shrink Fit Technology
                            </div>
                            <div className="page-link-btn-icon">
                                <BsArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeIntro;