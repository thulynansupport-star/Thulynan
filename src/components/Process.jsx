import React from 'react';

const phases = [
  {
    phase: 'PHASE 01',
    title: 'Discovery & Strategy',
    desc: 'We understand your goals, gather requirements, and define the project scope, priorities, and technical roadmap.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="11" y1="8" x2="11" y2="14"></line>
        <line x1="8" y1="11" x2="14" y2="11"></line>
      </svg>
    ),
  },
  {
    phase: 'PHASE 02',
    title: 'Prototyping & Validation',
    desc: 'We transform ideas into prototypes, validate the experience, and refine the solution based on your feedback.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
  },
  {
    phase: 'PHASE 03',
    title: 'Development & Integration',
    desc: 'We build, integrate, and test your solution through iterative development, ensuring quality and reliability at every step.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    phase: 'PHASE 04',
    title: 'Launch & Handover',
    desc: 'We deploy your solution and provide source code, documentation, and guidance for a smooth transition.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    phase: 'PHASE 05',
    title: 'Ongoing Support & Maintenance',
    desc: "Our partnership doesn't end at launch. We provide continued maintenance, updates, and upgrades as your business evolves.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"></polyline>
        <polyline points="1 20 1 14 7 14"></polyline>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span> How We Deliver</div>
          <h2>Built around your vision. Delivered with precision.</h2>
          <p className="lead">
            We tailor every development cycle to your business goals, project complexity, and timeline — keeping you
            involved through regular updates, working demos, and milestone-based delivery.
          </p>
        </div>

        <div className="process-timeline">
          {phases.map((p) => (
            <div className="process-card" key={p.phase}>
              <div className="process-card-header">
                <div className="process-phase-icon">
                  {p.icon}
                </div>
                <span className="step-badge">{p.phase}</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
