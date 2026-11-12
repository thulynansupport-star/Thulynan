import React, { useState, useEffect, useRef } from 'react';

const slidesData = [
  {
    image: '/media/service-web-platform.jpg',
    alt: 'Modern website and custom web platform engineering',
    icon: '🌐',
    title: 'Website & Web Engineering',
    tag: 'High Performance · Modern Design',
    tabNum: '01. Web Platforms',
    tabSub: 'Sub-Second SaaS',
    badgeLabel: 'Web Engineering · Performance · Modern Design',
  },
  {
    image: '/media/service-ai-agent.jpg',
    alt: 'AI-powered products, knowledge assistants and intelligent agents',
    icon: '🧠',
    title: 'AI Products & Intelligent Agents',
    tag: 'RAG · AI Agents · Copilots',
    tabNum: '02. AI Solutions',
    tabSub: 'Intelligent Systems',
    badgeLabel: 'AI Systems · Intelligent Agents · RAG',
  },
  {
    image: '/media/service-workflow-automation.jpg',
    alt: 'Connected business tools and automated workflows',
    icon: '⚙️',
    title: 'Business Process Automation',
    tag: 'Connected Tools · Smarter Workflows',
    tabNum: '03. Automation',
    tabSub: 'Smart Workflows',
    badgeLabel: 'Business Automation · Connected Workflows',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const handleTabClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container hero-grid">
        {/* Left Column: Copy & Actions */}
        <div className="hero-content">
          <div className="eyebrow eyebrow-accent">
            <span className="dot"></span>
            <span>Build Smarter</span>
            <span className="dot"></span>
            <span>Automate Faster</span>
            <span className="dot"></span>
            <span>Scale Seamlessly</span>
          </div>
          <h1 className="hero-title">
            Intelligent technology that <span className="accent-span">scales</span> your business.
          </h1>
          <p className="hero-lead">
            We build production AI agents, automated workflows, and high-performance web platforms. Built to save
            hundreds of operational hours and drive real business revenue.
          </p>

          <div className="hero-cta-group">
            <a className="btn btn-primary btn-pill" href="#contact">
              Schedule a Discovery Call
              <svg
                width="16"
                height="16"
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
            <a className="btn btn-secondary btn-pill" href="#services">
              Explore Our Solutions ↓
            </a>
          </div>

          {/* Startup Strengths / Core Pillars */}
          <div className="hero-stats">
            <div className="stat-item">
              <h4>AI-Native</h4>
              <p>Built with latest frontier LLMs &amp; tools</p>
            </div>
            <div className="stat-item">
              <h4>Swift</h4>
              <p>Delivery tailored to client needs</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>In-house custom code ownership</p>
            </div>
            <div className="stat-item">
              <h4>Direct</h4>
              <p>Work 1-on-1 with founders</p>
            </div>
          </div>
        </div>

        {/* Right Column: Animated Interactive Services Showcase */}
        <div
          className="hero-service-showcase"
          id="heroShowcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Window Header Bar */}
          <div className="showcase-header">
            <div className="showcase-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="showcase-status">
              <span className="showcase-live-dot"></span>
              <span id="showcaseStatusText">
                Live Preview · Service 0{currentIndex + 1} / 0{slidesData.length}
              </span>
            </div>
          </div>

          {/* Screen & Animated Slides */}
          <div className="showcase-screen">
            {slidesData.map((slide, idx) => (
              <div
                key={slide.title}
                className={`showcase-slide ${idx === currentIndex ? 'active' : ''}`}
                data-index={idx}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  width="688"
                  height="384"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                <div className="slide-gradient"></div>
                <div className="slide-caption-bar">
                  <div className="caption-title">
                    <span>{slide.icon}</span>
                    <span>{slide.title}</span>
                  </div>
                  <span className="caption-tag">{slide.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive 3-Tab Navigator */}
          <div className="showcase-tabs" id="showcaseTabs">
            {slidesData.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.tabNum}
                  className={`showcase-tab ${isActive ? 'active' : ''}`}
                  type="button"
                  data-tab={idx}
                  onClick={() => handleTabClick(idx)}
                >
                  <span className="tab-num">{slide.tabNum}</span>
                  <span className="tab-text">{slide.tabSub}</span>
                  <span
                    className="tab-bar-progress"
                    style={{
                      width: isActive ? '100%' : '0%',
                      transition: isActive && !isPaused ? 'width 4s linear' : 'none',
                    }}
                  ></span>
                </button>
              );
            })}
          </div>

          {/* Floating Feature Badge */}
          <div className="visual-float-badge">
            <span className="badge-icon-check">✓</span>
            <span id="showcaseFloatingBadge">
              {slidesData[currentIndex].badgeLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

