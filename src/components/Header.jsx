import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-link">
          <div className="logo-icon">A</div>
          <div className="logo-text">
            AMA <span>College of Education</span>
          </div>
        </Link>
        <nav className="desktop-nav">
          <div className="nav-item dropdown">
            <span className="nav-link">About</span>
            <div className="dropdown-menu">
              <Link to="/about-us" className="dropdown-item">About Us</Link>
              <Link to="/about-college" className="dropdown-item">About College</Link>
              <Link to="/blog" className="dropdown-item">Blogs</Link>
            </div>
          </div>
          <Link to="/academics" className="nav-item">
            <span className="nav-link">Academic</span>
          </Link>
          <Link to="/facilities" className="nav-item">
            <span className="nav-link">Facilities</span>
          </Link>
          <Link to="/curriculum" className="nav-item">
            <span className="nav-link">Curriculum</span>
          </Link>
          <Link to="/admissions" className="nav-item">
            <span className="nav-link">Admission</span>
          </Link>
          <Link to="/gallery" className="nav-item">
            <span className="nav-link">Gallery</span>
          </Link>
          <div className="nav-item dropdown">
            <span className="nav-link">ERP</span>
            <div className="dropdown-menu">
              <a href="https://amacedu.beebasoft.com/user-login" target="_blank" rel="noreferrer" className="dropdown-item">Student Login</a>
              <a href="https://amacedu.beebasoft.com/login" target="_blank" rel="noreferrer" className="dropdown-item">Staff Login</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
