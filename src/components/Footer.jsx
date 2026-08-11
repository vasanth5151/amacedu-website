import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">AMA College of Education</h3>
            <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
              Shaping future educators with excellence and dedication in Tamil Nadu.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-links">
              <li>info@amacedu.edu.in</li>
              <li>+91 123 456 7890</li>
              <li>Tamil Nadu, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AMA College of Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
