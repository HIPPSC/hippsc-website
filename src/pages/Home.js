import React from 'react';
import { Helmet } from 'react-helmet-async';


// components
import HomeIntro from '../components/HomeIntro';
import HomeProcess from '../components/HomeProcess';
import HomeSolutions from '../components/HomeSolutions';
import RequestContact from '../components/RequestContact';

const Home = () => {
    
    return (
        <div>
            {/* metadata */}
            <Helmet>
                <title>HIPPSC | Shrink Fit Tool Holder and Machine</title>
                <meta 
                    name="description" 
                    content="We craft best value shrink fit tool holders and machine
                    devices that enable CNC machine shops to achieve unparalleled 
                    precision and efficiency — across diverse industrial applications." 
                />
                <meta name="keywords" content="shrink fit, tool holder, collet, collets, face mill, er collet, tool holder, tool chuck" />
                <link rel="canonical" href="https://www.hippsc.com" />
                
                {/* Facebook tags */}
                <meta property="og:type" content='website' />
                <meta property="og:title" content='HIPPSC | Shrink Fit Tool Holder and Machine' />
                <meta property="og:description"  content="We craft best value shrink fit tool holders and machine
                                                            devices that enable CNC machine shops to achieve unparalleled 
                                                            precision and efficiency — across diverse industrial applications."  />
                <meta property="og:url" content='https://www.hippsc.com' />
                <meta property="og:image" content='https://www.hippsc.com/favicon.ico' />
                
                {/* Twitter tags */}
                <meta name="twitter:card" content='website' />
                <meta name="twitter:title" content='HIPPSC - Your Shrink Fit Tooling Expert' />
                <meta name="twitter:description"  content="We craft best value shrink fit tool holders and machine
                                                            devices that enable CNC machine shops to achieve unparalleled 
                                                            precision and efficiency — across diverse industrial applications."  />

            </Helmet>

            {/* components */}
            <HomeIntro />
            <HomeProcess />
            <HomeSolutions />
            <RequestContact />
        </div>
    );
};

export default Home;