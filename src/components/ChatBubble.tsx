
import React, { useState, useRef, useEffect } from 'react';

const bubbleSize = 64;
const ASSISTANT_API_URL = 'https://swizbot.vercel.app/api/chat';

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm Swiz AI Assistant. Here to help on matters regarding SwizFusion AI Tech Hub. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  async function sendMessage(e) {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(ASSISTANT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text }),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: data.reply || 'Sorry, I did not understand that.' }
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: 'Sorry, there was a problem connecting to the assistant.' }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Chat Bubble */}
      <button
        aria-label="Open chat assistant"
        onClick={() => setOpen(true)}
        className="fixed z-50 bottom-20 right-6 bg-primary text-primary-foreground shadow-[0_12px_48px_rgba(99,102,241,0.45)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-150 hover:shadow-[0_32px_96px_rgba(99,102,241,0.65)] hover:translate-y-[-12px] focus:outline-none animate-float"
        style={{ width: bubbleSize, height: bubbleSize }}
      >
        {/* Robot icon */}
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="8" width="16" height="10" rx="4" fill="#fff" stroke="#6366f1" strokeWidth="2"/>
          <rect x="9" y="2" width="6" height="4" rx="2" fill="#6366f1" stroke="#6366f1" strokeWidth="1.5"/>
          <circle cx="8.5" cy="13" r="1.5" fill="#6366f1"/>
          <circle cx="15.5" cy="13" r="1.5" fill="#6366f1"/>
          <rect x="11" y="16" width="2" height="2" rx="1" fill="#6366f1"/>
          <line x1="4" y1="12" x2="2" y2="12" stroke="#6366f1" strokeWidth="1.5"/>
          <line x1="22" y1="12" x2="20" y2="12" stroke="#6366f1" strokeWidth="1.5"/>
        </svg>
      </button>

      {/* Modal Chat Window */}
      {open && (
  <div className="fixed z-50 bottom-24 right-6 flex items-end justify-end bg-transparent">
          {/* Modal background click closes chat */}
          <div className="fixed inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
            style={{ minHeight: 480, maxHeight: '90vh', width: '100%', maxWidth: 380 }}>
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-primary/90 text-primary-foreground px-4 py-2">
              <span className="font-semibold">Swiz AI Assistant</span>
              <button
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="ml-2 text-xl font-bold hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </div>
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-background">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] px-4 py-2 rounded-lg text-sm shadow
                    ${msg.from === 'user'
                      ? 'ml-auto bg-primary text-primary-foreground'
                      : 'mr-auto bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'}`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            {/* Input Box */}
            <form onSubmit={sendMessage} className="flex items-center gap-2 border-t px-3 py-2 bg-background">
              <input
                type="text"
                className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900 placeholder-gray-400"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                autoFocus
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground rounded-full px-4 py-2 font-semibold hover:bg-primary/90 transition"
                disabled={loading || !input.trim()}
              >
                {loading ? '...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes animate-fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: animate-fadeIn 0.3s cubic-bezier(.4,0,.2,1);
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
