import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// functions
import ScrollToTop from './functions/ScrollToTop';

// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/services/Service';
import RequestQuote from './pages/RequestQuote';
import About from './pages/About';

import ProductHolders from './pages/product/ProductHolders';
import ProductH6i from './pages/product/ProductH6i';
import ProductF15i from './pages/product/ProductF15i';
import ProductToolPresetting from './pages/product/ProductToolPresetting';
import ProductDialIndicator from './pages/product/ProductDialIndicator';

import ProductHoldersCatalog from './pages/product/ProductHoldersCatalog';
import ProductHoldersDetails from './pages/product/ProductHoldersDetails';

import ServiceGetStarted from './pages/services/ServiceGetStarted';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';
import BlogAdmin from './pages/Blog/BlogAdmin';


function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <NavBar />
        <div className="App-Body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
                
            <Route path="/request_quote" element={<RequestQuote />} />
            <Route path="/product/holders" element={<ProductHolders />} />
            <Route path="/product/h6i" element={<ProductH6i />} />
            <Route path="/product/f15i" element={<ProductF15i />} />
            <Route path="/product/tool_presetting" element={<ProductToolPresetting />} />
            <Route path="/product/dial_indicator" element={<ProductDialIndicator />} />

            <Route path="/product/holders/:material/:holderType" element={<ProductHoldersCatalog />} />
            <Route path="/product/holders/:material/:holderType/:holderModel" element={<ProductHoldersDetails />} />
            

            <Route path="/service/get_started" element={<ServiceGetStarted />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogPost />} />
            <Route path="/blog/admin" element={<BlogAdmin />} />
            {/* <Route path="*" element={<NotFound />} /> 404 Page */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
