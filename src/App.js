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
import RequestQuote from './pages/RequestQuote';
import About from './pages/About';
import ProductHolders from './pages/product/ProductHolders';
import ProductH6i from './pages/product/ProductH6i';
import ProductF15i from './pages/product/ProductF15i';
import ProductToolPresetting from './pages/product/ProductToolPresetting';


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
            <Route path="/request_quote" element={<RequestQuote />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/holders" element={<ProductHolders />} />
            <Route path="/product/h6i" element={<ProductH6i />} />
            <Route path="/product/f15i" element={<ProductF15i />} />
            <Route path="/product/tool_presetting" element={<ProductToolPresetting />} />
            {/* <Route path="*" element={<NotFound />} /> 404 Page */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
