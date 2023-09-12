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
            {/* <Route path="*" element={<NotFound />} /> 404 Page */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
