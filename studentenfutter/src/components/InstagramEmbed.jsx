// src/components/InstagramEmbed.jsx
import React, { useEffect } from 'react';

export default function InstagramEmbed() {
  useEffect(() => {
    // Wenn das Instagram-Script bereits geladen ist, verarbeite alle Blockquotes
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/p/DAtWDg1N6I1/"
      data-instgrm-version="14"
      style={{ maxWidth: '540px', margin: 'auto' }}
    />
  );
}
