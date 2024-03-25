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
                <title>HIPPSC - Your Shrink Fit Tooling Expert</title>
                <meta 
                    name="description" 
                    content="We craft best value shrink fit machine tools and
                    devices that enable machine shops to achieve unparalleled 
                    accuracy and efficiency." 
                />
                <meta name="keywords" content="machinery, CNC, machining, machinist, shrink fit, tool holders" />
                <link rel="canonical" href="https://www.hippsc.com" />
                
                {/* Facebook tags */}
                <meta property="og:type" content='article' />
                <meta property="og:title" content='HIPPSC - Your Shrink Fit Tooling Expert' />
                <meta property="og:description" content='We craft best value shrink fit machine tools and
                    devices that enable machine shops to achieve unparalleled 
                    accuracy and efficiency.' />
                <meta property="og:url" content='https://www.hippsc.com' />
                <meta property="og:image" content='https://www.hippsc.com/favicon.ico' />
                
                {/* Twitter tags */}
                <meta name="twitter:card" content='article' />
                <meta name="twitter:title" content='HIPPSC - Your Shrink Fit Tooling Expert' />
                <meta name="twitter:description" content='We craft best value shrink fit machine tools and
                    devices that enable machine shops to achieve unparalleled 
                    accuracy and efficiency.' />

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