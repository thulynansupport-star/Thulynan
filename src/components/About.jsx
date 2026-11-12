import React from 'react';

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        {/* Studio Story (full width) */}
        <div className="about-wrap">
          <div className="about-story">
            <div className="eyebrow"><span className="dot"></span> About Thulynan</div>
            <h2>Building purposeful digital infrastructure for modern businesses.</h2>
            <p>
              Thulynan is an AI-first technology studio founded in 2026 with a straightforward mission: eliminate
              operational busywork and build digital products that drive real business growth.
            </p>
            <p>
              Operating as a nimble, remote-first engineering studio based in Erode, India, we collaborate directly
              with ambitious founders and teams globally. We believe in direct founder-to-client partnership with zero
              agency bloat—delivering clean, production-ready code you fully own.
            </p>
            <div className="about-badges">
              <span className="about-badge"><span className="about-badge-dot"></span>Remote-First Studio</span>
              <span className="about-badge"><span className="about-badge-dot"></span>AI-Native Engineering</span>
              <span className="about-badge"><span className="about-badge-dot"></span>Direct Founder Collaboration</span>
            </div>
          </div>

          <div className="about-studio-frame">
            <img
              className="about-studio-img"
              src="/media/about-studio-lab.jpg"
              alt="Thulynan AI Engineering Studio Workspace"
              width="600"
              height="340"
              loading="lazy"
            />
            <div className="studio-badge-overlay">
              <span className="showcase-live-dot"></span>
              <span>Thulynan Technologies · India</span>
            </div>
          </div>
        </div>

        {/* Co-Founders — Equal Grid */}
        <div className="founders-grid">
          {/* Co-Founder: Archanaa S */}
          <div className="founder-card">
            <div className="founder-card-header">
              <img
                className="founder-avatar"
                src="/media/Archanaa.png"
                alt="Archanaa S — Co-Founder of Thulynan"
                width="76"
                height="76"
                loading="lazy"
              />
              <div className="founder-name-block founder-info">
                <h4>Archanaa S</h4>
                <span className="founder-role">Co-Founder</span>
              </div>
            </div>
            <p className="founder-bio">
              Archanaa is an AI-focused software engineer with experience in full-stack development, workflow automation,
              and AI research, bringing technical expertise to Thulynan.
            </p>
            <div className="founder-tags">
              <span>AI and LLM solutions</span>
              <span>Full-Stack Development</span>
              <span>DevOps</span>
            </div>
          </div>

          {/* Co-Founder: Srimathi E */}
          <div className="founder-card">
            <div className="founder-card-header">
              <img
                className="founder-avatar"
                src="/media/Srimathi.png"
                alt="Srimathi E — Co-Founder of Thulynan"
                width="76"
                height="76"
                loading="lazy"
              />
              <div className="founder-name-block founder-info">
                <h4>Srimathi E</h4>
                <span className="founder-role">Co-Founder</span>
              </div>
            </div>
            <p className="founder-bio">
              Srimathi is an AI-focused software engineer with experience in Generative AI, full-stack development,
              LLM applications, and workflow automation, bringing technical expertise to Thulynan.
            </p>
            <div className="founder-tags">
              <span>Generative AI</span>
              <span>AI &amp; Automation</span>
              <span>Full-Stack Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

