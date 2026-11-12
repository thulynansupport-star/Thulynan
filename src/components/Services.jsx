import React from 'react';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span> Core Offerings</div>
          <h2>Engineered for commercial impact</h2>
          <p className="lead">
            We don't offer generic templates. We build bespoke digital infrastructure tailored to solve your exact
            business bottlenecks.
          </p>
        </div>

        <div className="services-grid">
          {/* 01. Web Platform Engineering */}
          <article className="service-card">
            <div className="service-thumb-wrap">
              <img
                className="service-thumb"
                src="/media/service-web-platform.jpg"
                alt="Website & Web Platform Engineering Mockup"
                width="600"
                height="340"
                loading="lazy"
              />
              <span className="service-thumb-tag">Next.js &amp; SaaS Platforms</span>
            </div>
            <span className="service-num">01 / PLATFORMS</span>
            <div className="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="service-title">Website &amp; Web Platform Engineering</h3>
            <p className="service-desc">
              High-converting websites, client portals, and custom SaaS applications built for performance,
              accessibility, and seamless user experiences.
            </p>
            <div className="service-deliverables">
              <h5>Key Deliverables</h5>
              <ul className="deliverable-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Custom corporate &amp; startup web applications
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Core Web Vitals optimization
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Modern Headless CMS integration
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Responsive mobile-first architecture
                </li>
              </ul>
            </div>
          </article>

          {/* 02. AI Solutions & Intelligent Products (Featured) */}
          <article className="service-card featured">
            <div className="service-thumb-wrap">
              <img
                className="service-thumb"
                src="/media/service-ai-agent.jpg"
                alt="AI Products & Intelligent Agents Interface"
                width="600"
                height="340"
                loading="lazy"
              />
              <span className="service-thumb-tag">Private RAG &amp; Copilots</span>
            </div>
            <span className="service-num">02 / AI SOLUTIONS</span>
            <div className="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M12 2a4 4 0 0 1 4 4c0 1.2-.5 2.2-1.3 3 .8.8 1.3 1.8 1.3 3a4 4 0 0 1-4 4 4 4 0 0 1-4-4c0-1.2.5-2.2 1.3-3A4 4 0 0 1 8 6a4 4 0 0 1 4-4Z">
                </path>
                <path d="M6 9H2M22 9h-4M6 15H2M22 15h-4M12 2v3M12 19v3"></path>
              </svg>
            </div>
            <h3 className="service-title">AI Solutions &amp; Intelligent Products</h3>
            <p className="service-desc">
              From custom AI applications to intelligent agents, we build practical AI solutions that help businesses
              automate tasks, access knowledge, and work smarter.
            </p>
            <div className="service-deliverables">
              <h5>Key Deliverables</h5>
              <ul className="deliverable-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Private RAG &amp; knowledge-based AI assistants
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Intelligent document processing
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Custom AI agents &amp; copilots
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  LLM integrations &amp; AI-powered applications
                </li>
              </ul>
            </div>
          </article>

          {/* 03. Workflow & Process Automation */}
          <article className="service-card">
            <div className="service-thumb-wrap">
              <img
                className="service-thumb"
                src="/media/service-workflow-automation.jpg"
                alt="Business Process Automation Canvas"
                width="600"
                height="340"
                loading="lazy"
              />
              <span className="service-thumb-tag">Workflow Pipelines</span>
            </div>
            <span className="service-num">03 / AUTOMATION</span>
            <div className="service-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z">
                </path>
              </svg>
            </div>
            <h3 className="service-title">Business Process Automation</h3>
            <p className="service-desc">
              Connect your business tools and streamline repetitive operations with intelligent workflows that reduce
              manual effort and improve operational efficiency.
            </p>
            <div className="service-deliverables">
              <h5>Key Deliverables</h5>
              <ul className="deliverable-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Custom multi-app integrations
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Automated CRM, email &amp; billing workflows
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Real-time operational alerts
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Automated reporting pipelines
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

