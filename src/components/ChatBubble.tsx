
import { useEffect } from 'react';

export default function ChatBubble() {
  useEffect(() => {
    // Only load Chatbase script once
    if (!document.getElementById('-L5A-iSmQXj0tfUNEh9j_')) {
      const script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.id = '-L5A-iSmQXj0tfUNEh9j_';
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
