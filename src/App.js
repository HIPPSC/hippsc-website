import './css/App.css';

// pages
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="App-Body">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
