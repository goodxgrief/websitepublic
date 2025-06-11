// filepath: src/pages/BowlsPage.js
import React, { useState } from 'react'; // useState importieren
import Navbar from '../components/Navbar'; // Navbar importieren
import '../assets/styles/BowlsPage.css';

const BowlsPage = () => {
  // Lokaler State für die Navbar auf dieser Seite
  const [blurred, setBlurred] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <> {/* Fragment verwenden, um Navbar und section zu umschließen */}
      <Navbar
        blurred={blurred}
        setBlurred={setBlurred}
        isMobileNavActive={isMobileNavActive}
        setIsMobileNavActive={setIsMobileNavActive}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <section id="bowls" className="bowl-section" role="region" aria-labelledby="bowls-heading">
        <div className="container">
          <h2 id="bowls-heading">Unsere Bowls</h2>
          <p className="intro">Frische, gesunde und kreative Bowls für jeden Geschmack.</p>
          <div className="bowls-grid">
            {/* Avocado Quinoa Bowl Card */}
            <div className="bowl-card" style={{animationDelay: "0s"}}>
              <div className="image-wrapper_Bowl"> {/* Beachte: _Bowl am Ende, um Konflikt mit .image-wrapper zu vermeiden, falls noch vorhanden */}
                <img loading="lazy" src="https://tb-static.uber.com/prod/image-proc/processed_images/fc820e600487e0eca99e24c60930b17b/bc9c318a9c96996e2d990faf2b0c65f6.jpeg" alt="Avocado Quinoa Bowl" />
              </div>
              <h3>Avocado Quinoa Bowl</h3>
              <p className="short-desc">Cremige Avocado, Quinoa, Kirschtomaten, Gurken und frische Kräuter.</p>
              <span className="price">€9,50</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Unsere Avocado Quinoa Bowl kombiniert proteinreiches Quinoa mit gesunden Fetten der Avocado. Perfekt für einen leichten Mittagstisch!</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Poke Lachs Bowl Card */}
            <div className="bowl-card" style={{animationDelay: "0.1s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80" alt="Poke Lachs Bowl" />
              </div>
              <h3>Poke Lachs Bowl</h3>
              <p className="short-desc">Marinierter Lachs, Edamame, Mango, Avocado und Sesam.</p>
              <span className="price">€12,00</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Unsere Poke Lachs Bowl ist inspiriert von hawaiianischer Küche und vereint frischen Lachs mit exotischer Mango.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Mexikanische Fiesta Bowl Card */}
            <div className="bowl-card" style={{animationDelay: "0.2s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1572441710555-2d0fc8f40274?auto=format&fit=crop&w=400&q=80" alt="Mexikanische Fiesta Bowl" />
              </div>
              <h3>Mexikanische Fiesta Bowl</h3>
              <p className="short-desc">Hähnchen, schwarze Bohnen, Mais, Paprika, Reis und Salsa.</p>
              <span className="price">€10,50</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Die Mexikanische Fiesta Bowl bringt würziges Hähnchen und Salsa ins Spiel – ein Fest der Aromen!</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BowlsPage;