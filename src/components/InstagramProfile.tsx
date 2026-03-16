'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramProfile() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const s = document.createElement('script');
      s.src = 'https://www.instagram.com/embed.js';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="max-w-full overflow-hidden pb-12">
      <blockquote
        className="instagram-media max-w-full! w-128"
        data-instgrm-permalink="https://www.instagram.com/elite_eats_inc/"
        data-instgrm-version="14"
      />
    </div>
  );
}
