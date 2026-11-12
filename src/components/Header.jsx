import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="container header-inner">
        <a className="brand-wrap" href="#home" aria-label="Thulynan Home" onClick={closeMobileMenu}>
          <img
            className="brand-logo"
            src="/media/thulynan-logo.svg"
            alt="Thulynan"
            width="131"
            height="48"
            onError={(e) => {
              e.currentTarget.src = '/media/thulynan-logo-transparent.png';
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="nav-desktop" aria-label="Primary Navigation">
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#process">Process</a>
          <a className="nav-link" href="#impact">Capabilities</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#faq">FAQ</a>
        </nav>

        {/* Nav Actions */}
        <div className="nav-actions">
          <a className="btn btn-primary btn-sm btn-pill" href="#contact">
            Schedule Call
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <button
            className="mobile-menu-toggle"
            id="mobileMenuBtn"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileMenu"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <nav
        className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`}
        id="mobileMenu"
        aria-label="Mobile Navigation"
      >
        <a className="mobile-nav-link" href="#services" onClick={closeMobileMenu}>Services</a>
        <a className="mobile-nav-link" href="#process" onClick={closeMobileMenu}>Process</a>
        <a className="mobile-nav-link" href="#impact" onClick={closeMobileMenu}>Capabilities</a>
        <a className="mobile-nav-link" href="#about" onClick={closeMobileMenu}>About</a>
        <a className="mobile-nav-link" href="#faq" onClick={closeMobileMenu}>FAQ</a>
        <a
          className="btn btn-primary"
          href="#contact"
          style={{ marginTop: '8px' }}
          onClick={closeMobileMenu}
        >
          Schedule Discovery Call
        </a>
      </nav>
    </header>
  );
}

