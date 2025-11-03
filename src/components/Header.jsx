import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // Toggle body class and overflow
    if (newState) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'auto';
    }
  };
  
  // Close menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/ministries', label: 'Ministries' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      ref={headerRef} 
      className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
      role="banner"
    >
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={toggleMobileMenu}
          role="button"
          aria-label="Close menu"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMobileMenu()}
        />
      )}
      
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo" aria-label="Home">
            <div className="logo-content">
              <img 
                src="/cropped-LOGOmsa.png" 
                alt="Church Logo" 
                className="logo-image"
              />
            </div>
          </Link>

          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="main-navigation"
          >
            <span className="menu-icon">
              <FaBars className="menu-open" />
              <FaTimes className="menu-close" />
            </span>
            <span className="sr-only">{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>

          <div 
            id="main-navigation"
            className={`nav-container ${isMobileMenuOpen ? 'mobile-visible' : ''}`}
          >
            <div className="nav-content">
              <ul className="nav-links">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                      aria-current={location.pathname === link.path ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="cta-buttons">
                <Link to="/give" className="btn btn-outline" onClick={closeMobileMenu}>
                  Give Online
                </Link>
                <Link to="/visit" className="btn btn-primary" onClick={closeMobileMenu}>
                  Plan a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
