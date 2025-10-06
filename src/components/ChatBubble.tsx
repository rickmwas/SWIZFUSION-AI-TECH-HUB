
import React, { useState, useEffect } from 'react';

const bubbleSize = 64;

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      // Only load Chatbase script once
      if (!document.getElementById('-L5A-iSmQXj0tfUNEh9j_')) {
        const script = document.createElement('script');
        script.src = 'https://www.chatbase.co/embed.min.js';
        script.id = '-L5A-iSmQXj0tfUNEh9j_';
        script.domain = 'www.chatbase.co';
        document.body.appendChild(script);
      }
    }
  }, [open]);

  return (
    <>
      {/* Floating Chat Bubble */}
      {!open && (
        <button
          aria-label="Open chat assistant"
          onClick={() => setOpen(true)}
          className="fixed z-50 bottom-20 right-6 bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:translate-y-[-8px] focus:outline-none animate-float"
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
      )}
      {/* Modal overlay for chatbase widget */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
            style={{ minHeight: 480, maxHeight: '90vh', width: '100%', maxWidth: 380 }}>
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2">
              <span className="font-semibold">Swiz AI Assistant</span>
              <button
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="ml-2 text-xl font-bold hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </div>
            {/* Chatbase widget will appear automatically when script loads */}
          </div>
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
