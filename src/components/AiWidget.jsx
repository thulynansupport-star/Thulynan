import React, { useState, useRef, useEffect } from 'react';

const botReplies = {
  pricing:
    'We offer transparent milestone-based pricing for deliverables or dedicated monthly retainers for ongoing builds. Would you like our founders to provide a customized quote?',
  ai:
    'We build private RAG knowledge base agents, custom customer support bots, and autonomous operational pipelines using Claude, GPT-4o, and custom API integrations with strict zero-data retention privacy.',
  speed:
    'We deliver as swiftly as your project requirements and business urgency demand, providing working software demos across each milestone.',
  default:
    'Thanks for your question! We specialize in custom AI agents, business process automations, and modern web applications. Drop your work email in our contact form below, and our founders will reply within 1 business day!',
};

export default function AiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! 👋 I'm Thulynan's assistant. Ask me about our custom AI agents, automation sprint pricing, or web engineering timelines.",
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend !== undefined ? textToSend : inputVal).trim();
    if (!query) return;

    // Append user message
    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    setInputVal('');

    // Determine bot reply with slight delay
    setTimeout(() => {
      const lower = query.toLowerCase();
      let replyText = botReplies.default;
      if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) {
        replyText = botReplies.pricing;
      } else if (lower.includes('ai') || lower.includes('agent') || lower.includes('bot')) {
        replyText = botReplies.ai;
      } else if (
        lower.includes('fast') ||
        lower.includes('speed') ||
        lower.includes('timeline') ||
        lower.includes('week') ||
        lower.includes('mvp')
      ) {
        replyText = botReplies.speed;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: replyText }]);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="ai-widget-wrap">
      {/* Trigger Button */}
      <button
        className="ai-trigger-btn"
        id="aiChatTrigger"
        aria-label="Open Thulynan AI Assistant"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span className="ai-pulse-dot" aria-hidden="true"></span>
      </button>

      {/* Chat Window */}
      <div
        className={`ai-chat-window ${isOpen ? 'active' : ''}`}
        id="aiChatWindow"
        role="dialog"
        aria-modal="true"
        aria-label="Thulynan AI Assistant"
      >
        <div className="chat-head">
          <div>
            <div className="chat-head-title">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
              Thulynan AI Copilot
            </div>
            <span className="chat-head-sub">Instant answers &amp; scope scoping</span>
          </div>
          <button
            className="chat-close-btn"
            id="aiChatClose"
            aria-label="Close chat window"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="chat-body" id="chatBody" ref={chatBodyRef}>
          {messages.map((m, idx) => (
            <div key={idx} className={`chat-msg ${m.sender}`}>
              {m.text}
            </div>
          ))}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="chat-quick-suggestions">
          <button
            className="quick-chip"
            type="button"
            onClick={() => handleSendMessage('How does sprint pricing work?')}
          >
            Pricing model
          </button>
          <button
            className="quick-chip"
            type="button"
            onClick={() => handleSendMessage('Can you build custom AI agents?')}
          >
            AI agent capabilities
          </button>
          <button
            className="quick-chip"
            type="button"
            onClick={() => handleSendMessage('How fast can you build our MVP?')}
          >
            Delivery speed
          </button>
        </div>

        <div className="chat-footer">
          <input
            className="chat-input"
            id="chatInput"
            type="text"
            ref={inputRef}
            placeholder="Ask about services or pricing..."
            aria-label="Chat input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="chat-send-btn"
            id="chatSendBtn"
            type="button"
            onClick={() => handleSendMessage()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

