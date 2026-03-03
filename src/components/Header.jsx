import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Instant<span>Ease</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About Us</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "" : "nav-cta"}>Contact Us</Link>
          {/* <Link to="/download" className="nav-cta">Get the App</Link> */}
        </nav>

        {/* Hamburger Button */}
        <button className={"hamburger" + (menuOpen ? " open" : "")} onClick={toggleMenu} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={"mobile-menu" + (menuOpen ? " open" : "")}>
        <nav className="mobile-nav">
          <Link to="/" className={location.pathname === "/" ? "mobile-link active" : "mobile-link"} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "mobile-link active" : "mobile-link"} onClick={closeMenu}>About Us</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "mobile-link active" : "mobile-cta"} onClick={closeMenu}>Contact Us</Link>
          {/* <Link to="/download" className="mobile-cta" onClick={closeMenu}>Get the App</Link> */}
        </nav>
      </div>

    </header>
  );
}

export default Header;