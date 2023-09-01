import React from 'react';

// components
import NavBar from '../components/NavBar';
import HomeIntro from '../components/HomeIntro';
import HomeProcess from '../components/HomeProcess';
import HomeSolutions from '../components/HomeSolutions';
import RequestContact from '../components/RequestContact';

const Home = () => {
    
    return (
        <div>
            {/* <NavBar /> */}
            <HomeIntro />
            <HomeProcess />
            <HomeSolutions />
            <RequestContact />
        </div>
    );
};

export default Home;