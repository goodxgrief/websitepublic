import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from './components/Carousel';
import OrderSection from './components/OrderSection';
// CSS imports
import './assets/styles/carousel.css'
import './assets/styles/map.css'
import './assets/styles/style.css'
import './assets/styles/angebot.css'
import './assets/styles/instagram.css'
import './assets/styles/OrderSection.css'

// Asset imports
import logo from './assets/media/logo.png'
import leftVideo from './assets/media/left.mp4'
import rightVideo from './assets/media/right.mp4'
import mobileHero from './assets/media/mobile-hero.png'
import bowl1 from './assets/media/produktbilder/bowl1.jpg'
import snacks from './assets/media/produktbilder/snacks.jpg'
import drinks from './assets/media/produktbilder/drinks.jpg'
import offerImg from './assets/media/offer.png'
import smoothieImg from './assets/media/offer.png'
import image1 from './assets/media/image1.jpg';
import image2 from './assets/media/image2.jpg';
import image3 from './assets/media/image3.jpg';



const App = () => {
  const [blurred, setBlurred] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [siteData, setSiteData] = useState({ opening_hours: [] });

  const cardData = [
    { title: 'ausgewogene Snacks', img: snacks, href: '#zielseite.html' },
    { title: 'Frische Bowls', img: bowl1, href: 'zielseite.html' },
    { title: 'Hausgemachte Drinks', img: drinks, href: '#zielseite.html' }
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
    // Swipe nach links → nächstes Element
    nextCard();
  } else if (delta < -threshold) {
    // Swipe nach rechts → vorheriges Element
    prevCard();
  }
  // Reset (optional)
  setTouchStartX(0);
  setTouchEndX(0);
};

/*
  // Scroll-based navbar hide/show
  useEffect(() => {
    let lastScrollPos = 0;
    const onScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (window.innerWidth > 768) {
        const nav = document.querySelector('.navbar');
        if (currentScrollPos > lastScrollPos) {
          nav.classList.add('hidden');
        } else {
          nav.classList.remove('hidden');
        }
        lastScrollPos = currentScrollPos;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
*/
  // Carousel controls
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
      threshold: 0.1 // Element wird sichtbar wenn 10% im Viewport sind
    }
  );

  // Alle figure Elemente beobachten
  document.querySelectorAll('.instagram-gallery figure').forEach((figure) => {
    observer.observe(figure);
  });

  // Cleanup
  return () => observer.disconnect();
}, []);

useEffect(() => {
    // Achte darauf, dass die site_data.json im public-Verzeichnis liegt oder über die URL erreichbar ist.
    fetch('/data/site_data.json')
      .then(response => response.json())
      .then(data => setSiteData(data))
      .catch(error => console.error('Fehler beim Laden der Daten:', error));
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Studentenfutter Gießen</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div
        className="blur-overlay"
        style={{
          opacity: blurred ? 1 : 0,
          pointerEvents: blurred ? 'auto' : 'none'
        }}
      />
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Studentenfutter Logo" />
            </a>
          </div>
          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav"
            onMouseEnter={() => setBlurred(true)}
            onMouseLeave={() => setBlurred(false)}>
            <li>
              <a href="#products">Gerichte</a>
              <ul className="dropdown">
                <li><a href="gaming-pcs.html">Bowls</a></li>
                <li><a href="#business-pcs">Snacks</a></li>
                <li><a href="#accessories">Getränke</a></li>
                <li><a href="#accessories">Speisekarte</a></li>
              </ul>
            </li>
            <li>
              <a href="#services">Angebote</a>
              <ul className="dropdown">
                <li><a href="#pc-repair">Tagesgerichte</a></li>
                <li><a href="#phone-repair">Saisonales</a></li>
                <li><a href="#consulting">Angebote</a></li>
              </ul>
            </li>
            <li>
              <a href="#about">Über uns</a>
              <ul className="dropdown">
                <li><a href="#our-story">Unsere Geschichte</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#values">Werte</a></li>
              </ul>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
              <ul className="dropdown">
                <li><a href="#location">Standort</a></li>
                <li><a href="#contact-form">Kontaktformular</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div
            className={`hamburger ${isMobileNavActive ? 'active' : ''}`}
            onClick={() => setIsMobileNavActive(!isMobileNavActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`mobile-nav ${isMobileNavActive ? 'active' : ''}`}>
            <ul className="mobile-nav-links">
              <li><a onClick={() => setActiveSubmenu('gerichte')}>Gerichte</a></li>
              <li><a onClick={() => setActiveSubmenu('angebote')}>Angebote</a></li>
              <li><a onClick={() => setActiveSubmenu('about')}>Über uns</a></li>
              <li><a onClick={() => setActiveSubmenu('kontakt')}>Kontakt</a></li>
            </ul>

            {/* Submenus */}
            <div className={`mobile-submenu ${activeSubmenu === 'gerichte' ? 'active' : ''}`} id="gerichte">
              <div className="submenu-header">
                <button className="back-btn" onClick={() => setActiveSubmenu(null)}>←</button>
                <span>Gerichte</span>
              </div>
              <ul>
                <li><a href="gaming-pcs.html">Bowls</a></li>
                <li><a href="#business-pcs">Snacks</a></li>
                <li><a href="#accessories">Getränke</a></li>
                <li><a href="#accessories">Speisekarte</a></li>
              </ul>
            </div>
            <div className={`mobile-submenu ${activeSubmenu === 'angebote' ? 'active' : ''}`} id="angebote">
              <div className="submenu-header">
                <button className="back-btn" onClick={() => setActiveSubmenu(null)}>←</button>
                <span>Angebote</span>
              </div>
              <ul>
                <li><a href="#pc-repair">Tagesgerichte</a></li>
                <li><a href="#phone-repair">Saisonales</a></li>
                <li><a href="#consulting">Angebote</a></li>
              </ul>
            </div>
            <div className={`mobile-submenu ${activeSubmenu === 'about' ? 'active' : ''}`} id="about">
              <div className="submenu-header">
                <button className="back-btn" onClick={() => setActiveSubmenu(null)}>←</button>
                <span>Über uns</span>
              </div>
              <ul>
                <li><a href="#our-story">Unsere Geschichte</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#values">Werte</a></li>
              </ul>
            </div>
            <div className={`mobile-submenu ${activeSubmenu === 'kontakt' ? 'active' : ''}`} id="kontakt">
              <div className="submenu-header">
                <button className="back-btn" onClick={() => setActiveSubmenu(null)}>←</button>
                <span>Kontakt</span>
              </div>
              <ul>
                <li><a href="#location">Standort</a></li>
                <li><a href="#contact-form">Kontaktformular</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

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
                <button className="card-button" onClick={() => window.location.href = card.href}>
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
<section class="angebot-section">
    <header className="section-header">
    <h2>Aktuell im Angebot</h2>
    <p>Unsere neuesten Kreationen aktuell im Angebot. Mit Kreativität und Liebe zubereitet.</p>
  </header>
    <div class="card">
      <div class="content">
        <h3 class="offer-heading">Hausgemachte Waffeln!</h3>
        <p class="description">Hier steht die Beschreibung Ihres Angebots. Verwöhnen Sie Ihre Gäste mit unserem leckeren Special!</p>
        <button class="action-btn">Mehr erfahren</button>
      </div>
      <div class="image-wrapper">
        <img src={offerImg} alt="Hausgemachte Waffeln" />
      </div>
    </div>
    <div class="card purple">
      <div class="content">
        <h3 class="offer-heading">Frische Smoothies!</h3>
        <p class="description">Genieße unsere erfrischenden Smoothies aus frischen Früchten und Beeren.</p>
        <button class="action-btn">Entdecken</button>
      </div>
      <div class="image-wrapper">
        <img src={offerImg} alt="Frische Smoothies" />
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
        {/* Dein restliches Layout */}
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

      <Helmet>
        <script async src="//www.instagram.com/embed.js"></script>
      </Helmet>
      
    </div>
  );
};

export default App;