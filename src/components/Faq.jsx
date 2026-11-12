import React, { useState } from 'react';


const faqs = [
  {
    question: 'How fast can you build and deploy our project?',
    answer:
      'Timelines depend on your project scope, complexity, and requirements. Smaller websites, prototypes, and automations may take days to weeks, while larger platforms require structured development milestones. We keep you involved through regular updates, working demos, and progress reviews.',
  },
  {
    question: 'How does your pricing model work?',
    answer:
      'We offer flexible pricing based on your project requirements. Depending on the scope, we provide fixed-price engagements for clearly defined deliverables or ongoing development arrangements for evolving product needs. Every proposal outlines the scope, deliverables, and estimated costs upfront.',
  },
  {
    question: 'How do you protect our confidential business data with AI?',
    answer:
      'We prioritize data security when designing AI solutions. Depending on the chosen architecture and providers, we implement appropriate safeguards such as access controls, secure data handling, and private deployment options. Security measures are tailored to your application and compliance requirements.',
  },
  {
    question: 'Can you integrate with our existing software and legacy tools?',
    answer:
      'Absolutely. We can connect your existing platforms, databases, and business tools through APIs, webhooks, and custom integrations. Our goal is to make your systems work together seamlessly without disrupting your existing operations.',
  },
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We work with startups, small and medium-sized businesses, and growing teams looking to build digital products, adopt AI, or streamline operations. Whether you are validating a new idea or improving existing systems, we tailor solutions to your business needs.',
  },
  {
    question: 'Will we own the source code and intellectual property?',
    answer:
      'Yes. Upon completion and as defined in our project agreement, you receive the project source code, documentation, and agreed deliverables. Ownership and licensing terms for third-party tools, libraries, and services are clearly outlined before development begins.',
  },
  {
    question: 'Do you provide support after project launch?',
    answer:
      'Yes. Our engagement can continue beyond launch through ongoing maintenance and support plans. We can help with bug fixes, performance improvements, security updates, and new features to keep your solution reliable as your business grows.',
  },
  {
    question: 'How involved will we be throughout development?',
    answer:
      'Your involvement is important to us. We collaborate with you from initial planning through final delivery, sharing regular progress updates, working demos, and review milestones. Your feedback helps us ensure the solution stays aligned with your vision.',
  },
  {
    question: 'Can we request changes during development?',
    answer:
      'Yes. We encourage feedback throughout the development process. Minor refinements can be incorporated into planned milestones, while significant changes to the original scope may require timeline and cost adjustments. We discuss these changes with you before proceeding.',
  },
  {
    question: 'How do we get started with Thulynan?',
    answer:
      'Getting started is simple. Schedule a discovery call or reach out through our contact form to share your idea, challenges, and goals. We will discuss your requirements, explore possible solutions, and outline the next steps for your project.',
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

