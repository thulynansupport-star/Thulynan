import React, { useState } from 'react';

const serviceOptions = [
  'Web Platform',
  'AI Agent / Bot',
  'Workflow Automation',
  'Full MVP Sprint',
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState('Web Platform');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const targetEmail = 'contact@thulynan.in';
    const payload = {
      name: formData.name,
      email: formData.email,
      service: selectedService,
      message: formData.message,
      _subject: `New Project Inquiry: [${selectedService}] from ${formData.name}`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setSelectedService('Web Platform');
      } else {
        throw new Error('Form submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(
        'Could not send inquiry automatically. Click below to email us directly.'
      );
    }
  };

  const getDirectMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${selectedService}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || ''}\nEmail: ${formData.email || ''}\nService: ${selectedService}\n\nGoals / Requirements:\n${formData.message || ''}`
    );
    return `mailto:contact@thulynan.in?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container contact-grid">
        {/* Contact Details */}
        <div className="contact-info">
          <div className="eyebrow eyebrow-accent"><span className="dot"></span> Start Your Project</div>
          <h2>Let's build technology that moves the needle.</h2>
          <p>
            Have a clear roadmap or just a business challenge you want to automate? Tell us what you are looking to
            build. We review every inquiry and reply within 1 business day.
          </p>

          <div className="direct-contact-item">
            <div className="contact-icon-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Direct Email</span>
              <p style={{ fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>
                <a href="mailto:contact@thulynan.in">contact@thulynan.in</a>
              </p>
            </div>
          </div>

          <div className="direct-contact-item">
            <div className="contact-icon-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Calendar Scheduling</span>
              <p style={{ fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>
                <a href="mailto:contact@thulynan.in?subject=Discovery%20Call%20Request">
                  Request a 20-min Discovery Call &rarr;
                </a>
              </p>
            </div>
          </div>

          {/* Timezone Alignment Badge */}
          <div className="timezone-card">
            <h5>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
              Global Delivery &amp; Timezone Coverage
            </h5>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
              Headquartered in Erode, India. Working overlapping business hours with client teams across:
            </p>
            <div className="timezone-pill-list">
              <span className="tz-tag">United States (EST/PST)</span>
              <span className="tz-tag">United Kingdom (GMT/BST)</span>
              <span className="tz-tag">Middle East (GST)</span>
              <span className="tz-tag">India (IST)</span>
              <span className="tz-tag">Singapore (SGT)</span>
            </div>

            {/* Global Route Vector Map Card */}
            <div className="map-delivery-card" aria-label="Thulynan Global Delivery Locations">
              <div className="map-grid-bg" aria-hidden="true"></div>
              <svg className="map-svg-routes" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
                <path d="M 68 38 Q 48 10, 20 22" fill="none" stroke="rgba(249, 115, 22, 0.45)" strokeWidth="0.8"
                  strokeDasharray="1.5 1.5" />
                <path d="M 68 38 Q 50 14, 38 18" fill="none" stroke="rgba(249, 115, 22, 0.45)" strokeWidth="0.8"
                  strokeDasharray="1.5 1.5" />
                <path d="M 68 38 Q 60 26, 54 30" fill="none" stroke="rgba(249, 115, 22, 0.45)" strokeWidth="0.8"
                  strokeDasharray="1.5 1.5" />
                <path d="M 68 38 Q 78 42, 84 46" fill="none" stroke="rgba(249, 115, 22, 0.45)" strokeWidth="0.8"
                  strokeDasharray="1.5 1.5" />
              </svg>
              <span className="map-ping-node" style={{ top: '22%', left: '20%' }}><span className="ping-dot"></span> New York</span>
              <span className="map-ping-node" style={{ top: '18%', left: '38%' }}><span className="ping-dot"></span> London</span>
              <span className="map-ping-node" style={{ top: '30%', left: '54%' }}><span className="ping-dot"></span> Dubai</span>
              <span className="map-ping-node" style={{ top: '38%', left: '68%', fontWeight: 700 }}><span className="ping-dot hub"></span> India (HQ)</span>
              <span className="map-ping-node" style={{ top: '46%', left: '84%' }}><span className="ping-dot"></span> Singapore</span>
              <div className="map-badge-footer">
                <span className="showcase-live-dot"></span>
                <span>Active Delivery Coverage (US, UK, EMEA &amp; APAC)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          <form id="projectForm" onSubmit={handleSubmit}>
            {/* Project Type Selection */}
            <div className="form-group">
              <label className="form-label">What can we help you build?</label>
              <div className="service-interest-pills" id="interestPills">
                {serviceOptions.map((opt) => (
                  <span
                    key={opt}
                    className={`interest-pill ${selectedService === opt ? 'selected' : ''}`}
                    data-value={opt}
                    onClick={() => setSelectedService(opt)}
                  >
                    {opt}
                  </span>
                ))}
              </div>
              <input type="hidden" name="projectType" id="projectTypeInput" value={selectedService} />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="clientName">Your Name *</label>
              <input
                className="form-input"
                id="clientName"
                name="name"
                type="text"
                placeholder="e.g. Alex Morgan"
                required
                disabled={status === 'submitting'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="clientEmail">Work Email *</label>
              <input
                className="form-input"
                id="clientEmail"
                name="email"
                type="email"
                placeholder="alex@company.com"
                required
                disabled={status === 'submitting'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="clientMessage">Project Details / Goals *</label>
              <textarea
                className="form-textarea"
                id="clientMessage"
                name="message"
                placeholder="Briefly describe what you are looking to solve or build..."
                required
                disabled={status === 'submitting'}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              className="btn btn-primary btn-pill"
              type="submit"
              disabled={status === 'submitting'}
              style={{ width: '100%', opacity: status === 'submitting' ? 0.75 : 1, cursor: status === 'submitting' ? 'wait' : 'pointer' }}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>

            {status === 'success' && (
              <div className="form-status success" id="formStatus" style={{ display: 'block', marginTop: '14px', color: '#15803d', fontWeight: 600 }}>
                ✓ Thank you! Your message has been sent to contact@thulynan.in. We will review and reply within 1 business day.
              </div>
            )}

            {status === 'error' && (
              <div className="form-status error" style={{ display: 'block', marginTop: '14px', color: '#b91c1c', fontSize: '0.875rem' }}>
                ⚠️ {errorMessage}{' '}
                <a
                  href={getDirectMailto()}
                  style={{ color: '#ea580c', fontWeight: 600, textDecoration: 'underline' }}
                >
                  Send via Mail Client &rarr;
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
