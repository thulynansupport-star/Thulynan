import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand-wrap" href="#home" aria-label="Thulynan Home">
              <img
                className="brand-logo"
                src="/media/thulynan-logo.svg"
                alt="Thulynan"
                width="142"
                height="52"
                onError={(e) => {
                  e.currentTarget.src = '/media/thulynan-logo-transparent.png';
                }}
              />
            </a>
            <p>
              Intelligent digital infrastructure engineered to scale modern businesses. No templates. In-house custom
              code.
            </p>
            <div className="social-links-group">
              <a
                href="https://www.linkedin.com/company/thulynan/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Thulynan on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/thulynan/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Thulynan on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul className="footer-links">
              <li><a href="#services">Website Development</a></li>
              <li><a href="#services">AI Products &amp; Agents</a></li>
              <li><a href="#services">Process Automation</a></li>
              <li><a href="#services">MVP Rapid Sprints</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><a href="#about">About Our Studio</a></li>
              <li><a href="#process">Delivery Methodology</a></li>
              <li><a href="#impact">Capabilities &amp; ROI</a></li>
              <li><a href="#faq">Client FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Direct Contact</h5>
            <ul className="footer-links">
              <li><a href="mailto:contact@thulynan.in">contact@thulynan.in</a></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Erode, India</span></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Remote-First · Global Reach</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Thulynan. All rights reserved.</p>
          <p>Engineered with intent. Driven by execution.</p>
        </div>
      </div>
    </footer>
  );
}

