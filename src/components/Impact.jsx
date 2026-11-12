import React from 'react';

export default function Impact() {
  return (
    <section className="section" id="impact">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span> What We Solve</div>
          <h2>Technology that solves real business challenges.</h2>
          <p className="lead">
            We build intelligent systems, modern digital platforms, and automated workflows that
            simplify operations and help businesses move forward.
          </p>
        </div>

        <div className="impact-grid">
          {/* Card 01: AI Support */}
          <div className="impact-card">
            <div className="impact-metric">24/7</div>
            <div className="impact-highlight">Intelligent Support</div>
            <h4>AI-Powered Support Systems</h4>
            <p>
              Deploy intelligent AI assistants that understand your business knowledge, respond to customer
              queries, and assist your team around the clock.
            </p>
            <div className="impact-visual-pill">
              AI Agents · RAG · Knowledge Systems
            </div>
          </div>

          {/* Card 02: Business Automation */}
          <div className="impact-card">
            <div className="impact-metric">Less</div>
            <div className="impact-highlight">Manual Work</div>
            <h4>Automated Business Workflows</h4>
            <p>
              Connect your business tools, automate repetitive processes, and streamline everyday operations
              with intelligent workflows.
            </p>
            <div className="impact-visual-pill">
              API Integrations · Workflow Automation
            </div>
          </div>

          {/* Card 03: Web & SaaS */}
          <div className="impact-card">
            <div className="impact-metric">Fast</div>
            <div className="impact-highlight">Web Performance</div>
            <h4>Modern Web &amp; SaaS Platforms</h4>
            <p>
              Build responsive websites, custom applications, and scalable SaaS platforms designed for speed,
              usability, and growth.
            </p>
            <div className="impact-visual-pill">
              Next.js · Modern UI · Core Web Vitals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

