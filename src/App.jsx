import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import Terms from './pages/Terms';
import Legal from './pages/Legal';
import Service from './pages/Service';
import Customers from './pages/Customers';
import Vendors from './pages/Vendors';
import Riders from './pages/Riders';
import './App.css';

function ScrollToTop() {
  // `key` changes on every navigation, so clicking the same #section link twice still scrolls.
  // Sections set scroll-margin-top so the sticky header doesn't cover their titles;
  // smooth scrolling comes from CSS and is skipped when the user prefers reduced motion.
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, key]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/riders" element={<Riders />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/services/:slug" element={<Service />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;