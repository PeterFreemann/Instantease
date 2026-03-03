import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Instant<span>Ease</span></h3>
            <p className="footer-description">
              Your trusted partner for instant delivery of health, wellness, and beauty products.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li className="footer-link">Pharmacy &amp; Wellness</li>
              <li className="footer-link">Healthy Food &amp; Drinks</li>
              <li className="footer-link">Beauty &amp; Skincare</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Get Our Apps</h4>
            <ul className="footer-links">
              <li className="footer-link">Customer App</li>
              <li className="footer-link">Vendor App</li>
              <li className="footer-link">Rider App</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} InstantEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;