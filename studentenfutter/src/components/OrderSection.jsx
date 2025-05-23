// OrderSection.jsx
import React from 'react';
//import '/assets/styles/OrderSection.css';

/**
 * Props:
 *  - lieferandoSlug: string (Shop-Slug für Lieferando)
 *  - uberEatsSlug: string (Shop-Slug für Uber Eats)
 */
export default function OrderSection({ lieferandoSlug, uberEatsSlug }) {
  return (
    <section id="order-online" className="order-section">
      <div className="container">
        <h2>Bestellen Sie jetzt online</h2>
        <p>Genießen Sie unsere Gerichte bequem zu Hause. Wählen Sie Ihren Lieblingslieferdienst.</p>
        <div className="cards">
          <a
            href={`https://www.lieferando.de/${lieferandoSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="order-card lieferando"
          >
            <img src="/assets/media/lieferando.png" alt="Lieferando Logo" />
            <button>Zu Lieferando</button>
          </a>
          <a
            href={`https://www.ubereats.com/de/store/${uberEatsSlug}/f7qnlGFpQBOVJS_7KtVtSA`}
            target="_blank"
            rel="noopener noreferrer"
            className="order-card ubereats"
          >
            <img src="/assets/media/ubereats.png" alt="Uber Eats Logo" />
            <button>Zu Uber Eats</button>
          </a>
        </div>
      </div>
    </section>
  );
}
