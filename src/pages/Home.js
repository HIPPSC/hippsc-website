import React from 'react';
import { Helmet } from 'react-helmet';

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
                    content="
                    We craft industry-leading shrink-fit holders and 
                    machines that enable machine shops to achieve unparalleled 
                    accuracy and efficiency — across diverse industrial applications." 
                />
                <meta name="keywords" content="shrink-fit, tool holders, cnc machining" />
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