import './css/App.css';

// pages
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-Body">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
