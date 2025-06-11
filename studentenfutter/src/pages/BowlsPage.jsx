// filepath: src/pages/BowlsPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/BowlsPage.css';
import Footer from '../components/Footer';

const BowlsPage = () => {
  // Lokaler State für die Navbar auf dieser Seite
  const [blurred, setBlurred] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <>
      <Navbar
        blurred={blurred}
        setBlurred={setBlurred}
        isMobileNavActive={isMobileNavActive}
        setIsMobileNavActive={setIsMobileNavActive}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      
      {/* Bowls Section */}
      <section id="bowls" className="bowl-section" role="region" aria-labelledby="bowls-heading">
        <div className="container">
          <h2 id="bowls-heading">Bowls</h2>
          <p className="intro">Frische, gesunde und kreative Bowls für jeden Geschmack.</p>
          <div className="bowls-grid">
            {/* Kartoffel-Bowl */}
            <div className="bowl-card" style={{animationDelay: "0s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" alt="Kartoffel-Bowl" />
              </div>
              <h3>Kartoffel-Bowl</h3>
              <p className="short-desc">mit gerösteten Kartoffeln, Linsen, grünem Hummus, Zwiebeln, Gänseblümchen, Rote-Bete und Hanfsamen</p>
              <span className="price">€11,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Unsere Kartoffel-Bowl ist ein warmes, nahrhaftes Gericht mit gerösteten Kartoffeln als Basis, ergänzt durch proteinreiche Linsen und grünen Hummus.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Quinoa-Bowl */}
            <div className="bowl-card" style={{animationDelay: "0.1s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" alt="Quinoa-Bowl" />
              </div>
              <h3>Quinoa-Bowl</h3>
              <p className="short-desc">mit buttrigem Quinoa, gebratenen Brokkoli, kandiertem Ingwer, frischem Mangold, Gurgutsalat und veganem Caesar-Dressing</p>
              <span className="price">€12,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Eine nährstoffreiche Bowl mit buttigem Quinoa und frischem Gemüse, verfeinert mit unserem hausgemachten veganen Caesar-Dressing.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Porridge Section */}
      <section id="porridge" className="bowl-section" role="region" aria-labelledby="porridge-heading">
        <div className="container">
          <h2 id="porridge-heading">Porridge</h2>
          <p className="intro">Warme, nahrhafte Porridge-Variationen für einen perfekten Start in den Tag.</p>
          <div className="bowls-grid">
            {/* Kokos-Porridge */}
            <div className="bowl-card" style={{animationDelay: "0s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=400&q=80" alt="Kokos-Porridge" />
              </div>
              <h3>Kokos-Porridge</h3>
              <p className="short-desc">mit Haferflocken, Banane und geröstetem Kokosstrips</p>
              <span className="price">€5,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Cremiger Porridge mit exotischem Kokosgeschmack, verfeinert mit frischer Banane und knusprigen Kokosstrips.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Peanutbutter/Jam-Porridge */}
            <div className="bowl-card" style={{animationDelay: "0.1s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1571197119282-7c4e2c2b03ce?auto=format&fit=crop&w=400&q=80" alt="Peanutbutter Jam Porridge" />
              </div>
              <h3>Peanutbutter/Jam-Porridge</h3>
              <p className="short-desc">mit Haferflocken, Erdnussbutter und Beerenmarmelade</p>
              <span className="price">€6,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Die perfekte Kombination aus cremiger Erdnussbutter und süßer Beerenmarmelade auf warmem Haferbrei.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Earl Grey-Porridge */}
            <div className="bowl-card" style={{animationDelay: "0.2s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=400&q=80" alt="Earl Grey Porridge" />
              </div>
              <h3>Earl Grey-Porridge</h3>
              <p className="short-desc">mit aromatischem Earl Grey Tee, Bergamotte, Walnusscrunch und Heidelbeeren</p>
              <span className="price">€6,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Ein außergewöhnlicher Porridge mit dem eleganten Geschmack von Earl Grey Tee, verfeinert mit Walnüssen und frischen Heidelbeeren.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Warme Gerichte Section */}
      <section id="warme-gerichte" className="bowl-section" role="region" aria-labelledby="warme-gerichte-heading">
        <div className="container">
          <h2 id="warme-gerichte-heading">Warme Gerichte</h2>
          <p className="intro">Herzhafte warme Speisen für jeden Geschmack.</p>
          <div className="bowls-grid">
            {/* Brokkoli-Creme-Suppe */}
            <div className="bowl-card" style={{animationDelay: "0s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80" alt="Brokkoli-Creme-Suppe" />
              </div>
              <h3>Brokkoli-Creme-Suppe</h3>
              <p className="short-desc">Cremige Brokkolisuppe, gepopft mit Hafermilch und Knoblauchöl, serviert mit frischem Brot aus der Area</p>
              <span className="price">€8,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Eine cremige, nährstoffreiche Suppe aus frischem Brokkoli, verfeinert mit Hafermilch und aromatischem Knoblauchöl.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Lauch-Creme-Suppe */}
            <div className="bowl-card" style={{animationDelay: "0.1s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80" alt="Lauch-Creme-Suppe" />
              </div>
              <h3>Lauch-Creme-Suppe</h3>
              <p className="short-desc">Cremige Lauchsuppe, gepopft mit Hafermilch und Knoblauchöl, serviert mit frischem Brot aus der Area</p>
              <span className="price">€8,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Zarte Lauchsuppe mit cremiger Konsistenz, verfeinert mit Hafermilch und serviert mit frischem Brot.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Reispfanne */}
            <div className="bowl-card" style={{animationDelay: "0.2s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80" alt="Reispfanne" />
              </div>
              <h3>Reispfanne</h3>
              <p className="short-desc">Asiatische Reispfanne mit buntem Gemüse, Sojasouce, Ananasstücken in herzerwärmender Teriyaki-Soße</p>
              <span className="price">€11,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Eine bunte asiatische Reispfanne mit frischem Gemüse und süßen Ananasstücken in unserer hausgemachten Teriyaki-Soße.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Linseneintopf */}
            <div className="bowl-card" style={{animationDelay: "0.3s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80" alt="Linseneintopf" />
              </div>
              <h3>Linseneintopf</h3>
              <p className="short-desc">Herzhafter Linseneintopf mit Kartoffeln, Möhren, Sellerie in Gemüsebrühe, serviert mit frischem Brot</p>
              <span className="price">€11,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Ein traditioneller, herzhafter Eintopf mit Linsen und Wurzelgemüse, perfekt für kalte Tage und serviert mit frischem Brot.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Snack-Theke Section */}
      <section id="snacks" className="bowl-section" role="region" aria-labelledby="snacks-heading">
        <div className="container">
          <h2 id="snacks-heading">Snack-Theke</h2>
          <p className="intro">Kleine Köstlichkeiten und herzhafte Snacks für zwischendurch.</p>
          <div className="bowls-grid">
            {/* Quiche */}
            <div className="bowl-card" style={{animationDelay: "0s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1571197119282-7c4e2c2b03ce?auto=format&fit=crop&w=400&q=80" alt="Quiche" />
              </div>
              <h3>Quiche</h3>
              <p className="short-desc">Klassische Quiche mit wechselnden saisonalen Füllungen aus Eiermilch und Bergkäse</p>
              <span className="price">€4,00</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Unsere hausgemachte Quiche wird täglich frisch zubereitet mit saisonalen Zutaten und würzigem Bergkäse.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Soda-Bread */}
            <div className="bowl-card" style={{animationDelay: "0.1s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80" alt="Soda-Bread" />
              </div>
              <h3>Soda-Bread</h3>
              <p className="short-desc">Knuspriges Soda-Bread, Frischkäse, verschiedene mit hausgemachten Aufstrichen</p>
              <span className="price">€2,50</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Frisch gebackenes irisches Soda-Bread mit cremigem Frischkäse und unseren hausgemachten Aufstrichen.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Galette */}
            <div className="bowl-card" style={{animationDelay: "0.2s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1571197119282-7c4e2c2b03ce?auto=format&fit=crop&w=400&q=80" alt="Galette" />
              </div>
              <h3>Galette</h3>
              <p className="short-desc">Herzhafte Galette, verschiedene Marmeladen, Muesli, saisonale Früchte</p>
              <span className="price">€5,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Eine vielseitige französische Galette, die sowohl herzhaft als auch süß mit verschiedenen Toppings genossen werden kann.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Wraps */}
            <div className="bowl-card" style={{animationDelay: "0.3s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1607099014631-6dd300c02813?auto=format&fit=crop&w=400&q=80" alt="Wraps" />
              </div>
              <h3>Wraps</h3>
              <p className="short-desc">Frische Wraps mit verschiedenen Füllungen und Toppings</p>
              <span className="price">ab €5,90</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Unsere Wraps werden frisch zubereitet mit einer Auswahl an gesunden Füllungen und leckeren Toppings.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Getränke Section */}
      <section id="getraenke" className="bowl-section" role="region" aria-labelledby="getraenke-heading">
        <div className="container">
          <h2 id="getraenke-heading">Getränke</h2>
          <p className="intro">Erfrischende und belebende Getränke für jeden Geschmack.</p>
          <div className="bowls-grid">
            {/* Heidelberg Limo */}
            <div className="bowl-card" style={{animationDelay: "0s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=400&q=80" alt="Heidelberg Limo" />
              </div>
              <h3>Heidelberg Limo</h3>
              <p className="short-desc">Erfrischende regionale Limonade</p>
              <span className="price">€3,50</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Unsere regionale Heidelberg Limo ist natürlich und erfrischend - perfekt für warme Tage.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Wasser */}
            <div className="bowl-card" style={{animationDelay: "0.1s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=400&q=80" alt="Wasser" />
              </div>
              <h3>Wasser</h3>
              <p className="short-desc">Stilles oder sprudelndes Mineralwasser</p>
              <span className="price">€2,00</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Frisches, klares Mineralwasser - still oder mit Sprudel, je nach Wunsch.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Hot Chocolate */}
            <div className="bowl-card" style={{animationDelay: "0.2s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=400&q=80" alt="Hot Chocolate" />
              </div>
              <h3>Hot Chocolate</h3>
              <p className="short-desc">Cremige heiße Schokolade</p>
              <span className="price">€3,50</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Eine reichhaltige, cremige heiße Schokolade, perfekt für gemütliche Momente.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Americano */}
            <div className="bowl-card" style={{animationDelay: "0.3s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" alt="Americano" />
              </div>
              <h3>Americano</h3>
              <p className="short-desc">Klassischer Americano Kaffee</p>
              <span className="price">€3,20</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Ein klassischer Americano - starker Espresso mit heißem Wasser verlängert.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Cappuccino */}
            <div className="bowl-card" style={{animationDelay: "0.4s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80" alt="Cappuccino" />
              </div>
              <h3>Cappuccino</h3>
              <p className="short-desc">Cremiger Cappuccino mit Milchschaum</p>
              <span className="price">€3,70</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Ein perfekt ausgewogener Cappuccino mit cremigem Milchschaum und aromatischem Espresso.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
            {/* Espresso */}
            <div className="bowl-card" style={{animationDelay: "0.5s"}}>
              <div className="image-wrapper_Bowl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80" alt="Espresso" />
              </div>
              <h3>Espresso</h3>
              <p className="short-desc">Starker italienischer Espresso</p>
              <span className="price">€2,50</span>
              <details className="details">
                <summary>Mehr Details</summary>
                <p>Ein intensiver, aromatischer Espresso aus hochwertigen Bohnen - der perfekte Wachmacher.</p>
              </details>
              <a href="#" className="btn">Jetzt bestellen</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BowlsPage;