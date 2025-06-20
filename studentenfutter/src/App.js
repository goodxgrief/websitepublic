import React, { useState, useEffect } from 'react';
// useNavigate zum Import hinzufügen
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Carousel from './components/Carousel';
import OrderSection from './components/OrderSection';
import BowlsPage from './pages/BowlsPage';
import AngebotePage from './pages/AngebotePage'; // Importieren
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <-- Importieren


// CSS imports
import './assets/styles/carousel.css'
import './assets/styles/map.css'
import './assets/styles/style.css'; // Stelle sicher, dass Navbar-Styles hier oder in einer importierten Datei sind
import './assets/styles/angebot.css'
import './assets/styles/instagram.css'
import './assets/styles/OrderSection.css'
// Stelle sicher, dass ProductPage.css (oder wie auch immer deine BowlsPage.css heißt)
// in BowlsPage.jsx importiert wird und NICHT hier global, um Konflikte zu vermeiden.

// Asset imports
import leftVideo from './assets/media/left.mp4'
import rightVideo from './assets/media/right.mp4'
import mobileHero from './assets/media/mobile-hero.png'
import bowl1 from './assets/media/produktbilder/bowl1.jpg'
import snacks from './assets/media/produktbilder/snacks.jpg'
import drinks from './assets/media/produktbilder/drinks.jpg'
import offerImg from './assets/media/offer.png'
// import smoothieImg from './assets/media/offer.png'; // Ist identisch zu offerImg
import image1 from './assets/media/image1.jpg';
import image2 from './assets/media/image2.jpg';
import image3 from './assets/media/image3.jpg';
import KontaktPage from './pages/KontaktPage';

// Komponente für den Inhalt der Startseite
// WICHTIG: Diese Komponente wurde aus der 'App'-Komponente herausgezogen.
// Das verhindert, dass sie bei jeder Zustandsänderung in 'App' neu erstellt wird,
// was zum Verlust des Zustands in untergeordneten Komponenten (wie dem 'openDropdown' in Navbar) führte.
const HomePageContent = ({
  blurred, isMobileNavActive, activeSubmenu, carouselIdx, touchStartX, touchEndX, siteData,
  cardData, handleTouchStart, handleTouchMove, handleTouchEnd, prevCard, nextCard,
  setBlurred, setIsMobileNavActive, setActiveSubmenu
}) => {
  // useNavigate-Hook für die Navigation verwenden
  const navigate = useNavigate();

  useEffect(() => {
    // Instagram Embed neu laden
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    // Observer für Animationen auf der Startseite
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    // Elemente auf der Startseite beobachten
    document.querySelectorAll('.instagram-gallery figure, .angebot-section .card').forEach((el) => {
      observer.observe(el);
    });

    // Observer bei Verlassen der Komponente aufräumen
    return () => observer.disconnect();
  }, []);

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

      {/* Hero Sections */}
      <section className="hero-section desktop-hero">
        <div className="hero-background">
          <video className="video-left" autoPlay muted loop playsInline>
            <source src={leftVideo} type="video/mp4" />
          </video>
          <div className="hero-image">
            <span className="cta-text">"mit veganen und glutenfreien Optionen!"</span>
          </div>
          <video className="video-right" autoPlay muted loop playsInline>
            <source src={rightVideo} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="hero-section mobile-hero">
        <div className="mobile-hero-image">
          <img src={mobileHero} alt="Studentenfutter Mobile Hero" />
        </div>
        <div className="hero-text">
          <span className="cta-text">"mit veganen und glutenfreien Optionen!"</span>
        </div>
      </section>

      {/* Product Carousel */}
      <div className="product-carousel-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
        <h2>Unsere Produkte</h2>
        <p className="intro-paragraph">Entdecken Sie ihre neuen Lieblingsgerichte. Eine große Auswahl an leckeren und gesunden Gerichten.</p>
        <h3 id="carousel-heading">{cardData[carouselIdx].title}</h3>
        <div className="carousel">
          {cardData.map((card, i) => {
            const pos = (i - carouselIdx + cardData.length) % cardData.length;
            return (
              <div
                key={i}
                className={`category position-${pos}`}
                style={{ backgroundImage: `url(${card.img})` }}
              >
                <div className="card-overlay"><p>{card.title}</p></div>
                {/* Button im Carousel könnte auch zur /speisekarte linken */}
                {/* Den onClick-Handler anpassen, um navigate zu verwenden */}
                <button className="card-button" onClick={() => navigate(card.href)}>
                  Mehr erfahren
                </button>
              </div>
            );
          })}
          <button className="nav-btn nav-prev" aria-label="Vorherige Karte" onClick={prevCard}>❮</button>
          <button className="nav-btn nav-next" aria-label="Nächste Karte" onClick={nextCard}>❯</button>
        </div>
      </div>

      {/* Angebot Section */}
      <section className="angebot-section">
          <header className="section-header">
          <h2>Aktuell im Angebot</h2>
          <p>Unsere neuesten Kreationen aktuell im Angebot. Mit Kreativität und Liebe zubereitet.</p>
        </header>
          <div className="card"> {/* className statt class */}
            <div className="content">
              <h3 className="offer-heading">Hausgemachte Waffeln!</h3>
              <p className="description">Hier steht die Beschreibung Ihres Angebots. Verwöhnen Sie Ihre Gäste mit unserem leckeren Special!</p>
              <Link to="/angebote#waffeln" className="action-btn">
                Mehr erfahren
              </Link>
            </div>
            <div className="image-wrapper">
              <img src={offerImg} alt="Hausgemachte Waffeln" />
            </div>
          </div>
          <div className="card purple"> {/* className statt class */}
            <div className="content">
              <h3 className="offer-heading">Frische Smoothies!</h3>
              <p className="description">Genieße unsere erfrischenden Smoothies aus frischen Früchten und Beeren.</p>
              <Link to="/angebote#smoothies" className="action-btn">Entdecken</Link>
            </div>
            <div className="image-wrapper">
              <img src={offerImg} alt="Frische Smoothies" /> {/* smoothieImg war identisch, daher offerImg beibehalten */}
            </div>
          </div>
        </section>

      {/* Location Section */}
      <section id="location" className="section">
        <h2>Kommen Sie uns besuchen</h2>
        <p>Neben dem guten Essen bieten wir auch eine heimische Atmosphäre an. Kommen Sie vorbei, um es selbst zu erleben.</p>
        <div className="location-container">
          <div className="opening-hours">
            <h3>Öffnungszeiten</h3>
            <ul>
              {siteData.opening_hours.map((slot, idx) => (
                <li key={idx}><strong>{slot.days}:</strong> {slot.hours}</li>
              ))}
            </ul>
            <p className="address">
              <strong>Adresse:</strong><br />
              Studentenfutter Gießen<br />
              Kreuzpl. 2<br />
              35390 Gießen
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.744037612495!2d8.672531777105644!3d50.58546366657675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc592913647307%3A0x7249afbd06dbc046!2sStudentenfutter%20Gie%C3%9Fen!5e0!3m2!1sde!2sde!4v1681766424048!5m2!1sde!2sde"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    
    {/*Order Section*/}
    <section className="order-section">
      <div>
        <OrderSection lieferandoSlug="studentenfutter" uberEatsSlug="studentenfutter" />
      </div>
    </section>

      {/* Instagram Section */}
      <section className="instagram-section">
        <h2>Folg uns, um Up-to-Date zu bleiben!</h2>
        <div className="instagram-flex-container">
          <div className="instagram-container">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/DAtWDg1N6I1/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{ background: '#FFF', border: 0 }}
            ></blockquote>
          </div>
          <div className="instagram-gallery">
            <figure>
              <img src={image1} alt="Beschreibung 1" />
              <div className="text-content">
                <figcaption>Frisch zubereitete Bowl mit saisonalen Zutaten</figcaption>
                <p className="description-instagram">Unsere Bowl-Kreationen werden täglich frisch mit regionalen und saisonalen Zutaten zubereitet. Eine perfekte Kombination aus Geschmack und Ausgewogenheit.</p>
              </div>
            </figure>
            <figure>
              <img src={image2} alt="Beschreibung 2" />
              <div className="text-content">
                <figcaption>Hausgemachte Smoothies in verschiedenen Variationen</figcaption>
                <p className="description-instagram">Erfrischende Smoothies aus frischen Früchten und Superfoods. Der perfekte Energieboost für zwischendurch.</p>
              </div>
            </figure>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


const App = () => {
  const [blurred, setBlurred] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [siteData, setSiteData] = useState({ opening_hours: [] });

  // Die Definition von HomePageContent wurde von hier nach oben verschoben.

  // Die href-Werte hier sind für das Carousel.
  // Wenn Klicks im Carousel auch zur /speisekarte führen sollen, passe sie an.
  // Ansonsten können sie auch auf Anker-IDs auf der Startseite zeigen, falls gewünscht.
  const cardData = [
    { title: 'Frische Bowls', img: snacks, href: '/speisekarte#snacks' }, // Beispiel für Anker
    { title: 'Hausgemachte Drinks', img: bowl1, href: '/speisekarte#bowls' }, // Beispiel für Link zur Seite
    { title: 'Ausgewogene Snacks', img: drinks, href: '/speisekarte#getraenke' } // Beispiel für Anker
  ];

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const delta = touchStartX - touchEndX;
    const threshold = 50; // Mindestdistanz in px

    if (delta > threshold) {
      nextCard();
    } else if (delta < -threshold) {
      prevCard();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  const prevCard = () => setCarouselIdx((carouselIdx - 1 + cardData.length) % cardData.length);
  const nextCard = () => setCarouselIdx((carouselIdx + 1) % cardData.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    // Beobachtet jetzt nur noch Elemente, die nicht in HomePageContent sind (z.B. auf der Speisekarte)
    document.querySelectorAll('.bowl-card').forEach((el) => { 
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch('/data/site_data.json') // Pfad korrigiert, falls deine JSON dort liegt
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setSiteData(data))
      .catch(error => console.error('Fehler beim Laden der Seitendaten:', error));
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* <-- Hier einfügen */}
      <div className="App"> {/* In React wird className statt class verwendet */}
        <Helmet>
          <title>Studentenfutter Gießen</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
          <script async src="//www.instagram.com/embed.js"></script> {/* Instagram Script hier, damit es einmal geladen wird */}
        </Helmet>

        <Routes> {/* Definiert die verschiedenen Routen der App */}
          <Route path="/" element={
            <HomePageContent
              blurred={blurred}
              isMobileNavActive={isMobileNavActive}
              activeSubmenu={activeSubmenu}
              carouselIdx={carouselIdx}
              touchStartX={touchStartX}
              touchEndX={touchEndX}
              siteData={siteData}
              cardData={cardData}
              handleTouchStart={handleTouchStart}
              handleTouchMove={handleTouchMove}
              handleTouchEnd={handleTouchEnd}
              prevCard={prevCard}
              nextCard={nextCard}
              setBlurred={setBlurred}
              setIsMobileNavActive={setIsMobileNavActive}
              setActiveSubmenu={setActiveSubmenu}
            />
          } />
          <Route path="/speisekarte" element={<BowlsPage />} /> {/* Route für deine BowlsPage */}
          <Route path="/angebote" element={
            <AngebotePage
              blurred={blurred}
              setBlurred={setBlurred}
              isMobileNavActive={isMobileNavActive}
              setIsMobileNavActive={setIsMobileNavActive}
              activeSubmenu={activeSubmenu}
              setActiveSubmenu={setActiveSubmenu}
            />
          } />

            <Route path="/kontakt" element={
            <KontaktPage
              blurred={blurred}
              setBlurred={setBlurred}
              isMobileNavActive={isMobileNavActive}
              setIsMobileNavActive={setIsMobileNavActive}
              activeSubmenu={activeSubmenu}
              setActiveSubmenu={setActiveSubmenu}
            />
          } />
          {/* Hier könnten weitere Routen für andere separate Seiten stehen */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;