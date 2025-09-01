import React, { useState } from 'react';

const bubbleSize = 64;

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Bubble */}
      <button
        aria-label="Open chat assistant"
        onClick={() => setOpen((v) => !v)}
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

      {/* Chat Window */}
      {open && (
        <div
          className="fixed z-50 bottom-24 right-6 w-[350px] max-w-[90vw] h-[500px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
        >
          <div className="flex items-center justify-between bg-primary/90 text-primary-foreground px-4 py-2">
            <span className="font-semibold">AI Assistant</span>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="ml-2 text-xl font-bold hover:text-red-500 transition-colors"
            >
              ×
            </button>
          </div>
          <iframe
            src="https://swizbot.vercel.app"
            title="SwizBot AI Assistant"
            className="flex-1 w-full border-0 bg-white"
            allow="clipboard-write;"
          />
        </div>
      )}
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
