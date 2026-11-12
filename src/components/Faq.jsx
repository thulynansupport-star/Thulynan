import React, { useState } from 'react';

const faqs = [
  {
    question: 'How fast can you build and deploy our project?',
    answer:
      'Timelines are tailored directly to your project scope and business urgency. We deliver as swiftly as your requirements demand—simple automations and functional prototypes can often be deployed in days to a couple of weeks, while comprehensive web platforms are released in fast, iterative milestone phases. You have continuous staging access to test features as they are engineered.',
  },
  {
    question: 'Who owns the intellectual property and code?',
    answer:
      'You own 100% of the intellectual property. Upon milestone completion and final settlement, all Git repositories, infrastructure credentials, API accounts, and design files are transferred entirely to your organization with zero proprietary vendor lock-in.',
  },
  {
    question: 'How does your pricing model work?',
    answer:
      'We believe in transparent, predictable billing. Depending on your needs, we offer fixed-scope sprint pricing for well-defined deliverables (MVPs, websites, automations) or monthly dedicated engineering retainers for evolving product roadmaps.',
  },
  {
    question: 'How do you protect our confidential business data with AI?',
    answer:
      'Security is paramount. We deploy enterprise AI endpoints featuring zero-data retention policies (meaning your proprietary business data is never used to train public foundational models). We also support private on-premise vector stores and strict role-based access control.',
  },
  {
    question: 'Can you integrate with our existing software and legacy tools?',
    answer:
      'Yes. Whether you are using HubSpot, Salesforce, Notion, Slack, custom PostgreSQL databases, or proprietary internal software, we build custom REST/GraphQL middleware and webhooks to ensure seamless data flow across your entire software stack.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container faq-container">
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span> Clear Answers</div>
          <h2>Frequently asked questions</h2>
          <p className="lead">Everything you need to know about working with Thulynan.</p>
        </div>

        <div className="faq-accordion" id="faqAccordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer-panel">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

