// src/components/Carousel.jsx
import React, { useState, useRef } from 'react';

export default function Carousel({ items }) {
  // 1. State für die aktuelle Karte
  const [idx, setIdx] = useState(0);

  // 2. Ref, um touchStartX zwischen Renders zu speichern
  const touchStartX = useRef(0);

  const threshold = 50; // Mindest-Distanz für einen Swipe

  // 3. Touch-Handler
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > threshold) {
      setIdx(prev => (prev + 1) % items.length);
    } else if (touchEndX - touchStartX.current > threshold) {
      setIdx(prev => (prev - 1 + items.length) % items.length);
    }
  };

  // 4. Desktop-Pfeile
  const prev = () => setIdx(prev => (prev - 1 + items.length) % items.length);
  const next = () => setIdx(prev => (prev + 1) % items.length);

  // 5. Das rendert React:
  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {items.map((item, i) => {
        // position-0 = aktuelle Karte, 1/2 die dahinter
        const pos = (i - idx + items.length) % items.length;
        return (
          <div
            key={i}
            className={`category position-${pos}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >

            <button
              className="card-button"
              onClick={() => window.location.href = item.link}
            >
              Mehr erfahren
            </button>
          </div>
        );
      })}

      {/* Desktop-Navigation */}
      <button className="nav-btn nav-prev" aria-label="Vorherige Karte" onClick={prev}>
        ❮
      </button>
      <button className="nav-btn nav-next" aria-label="Nächste Karte" onClick={next}>
        ❯
      </button>
    </div>
  );
}
