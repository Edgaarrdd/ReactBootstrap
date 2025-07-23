import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarFastGo from './components/NavbarFastGo';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import './assets/css/styles.css';

function App() {
  return (
    <Router>
      <NavbarFastGo />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {<Route path="/services" element={<Services />} />}
          {<Route path="/contact" element={<Contact />} /> }
          {<Route path="/about" element={<About />} />}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}


export default App;
