import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import offerImg from '../assets/media/offer.png';
import '../assets/styles/AngebotePage.css';

const AngebotePage = ({
  blurred, setBlurred, isMobileNavActive, setIsMobileNavActive, activeSubmenu, setActiveSubmenu
}) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      // Eine kleine Verzögerung stellt sicher, dass das Element im DOM vorhanden ist, bevor gescrollt wird.
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [hash]);

  const offers = [
    {
      id: 'waffeln',
      title: 'Hausgemachte Belgische Waffeln',
      description: 'Genießen Sie unsere frisch zubereiteten belgischen Waffeln. Außen knusprig, innen weich. Serviert mit einer Auswahl an Toppings wie frischen Früchten, Schokoladensauce, Puderzucker oder einer Kugel Vanilleeis. Ein perfekter Genuss für jede Tageszeit!',
      details: [
        { item: 'Mit Puderzucker & Apfelmus', price: '4,50 €' },
        { item: 'Mit Schokoladensauce & Banane', price: '5,50 €' },
        { item: 'Mit frischen Früchten der Saison', price: '6,00 €' },
        { item: 'Mit einer Kugel Eis nach Wahl', price: '+ 1,50 €' }
      ],
      imgSrc: offerImg,
      imgAlt: 'Hausgemachte Waffeln mit Früchten'
    },
    {
      id: 'smoothies',
      title: 'Erfrischende & Gesunde Smoothies',
      description: 'Unsere Smoothies werden aus 100% frischen Früchten und Superfoods gemixt. Ohne Zuckerzusatz. Wählen Sie aus unseren beliebten Kreationen oder stellen Sie Ihren eigenen Smoothie zusammen. Der perfekte Vitamin-Kick für einen energiegeladenen Tag.',
      details: [
        { item: 'Grüner Smoothie (Spinat, Apfel, Banane)', price: '3,80 €' },
        { item: 'Beeren-Mix (Erdbeere, Himbeere, Blaubeere)', price: '4,20 €' },
        { item: 'Exotic (Mango, Ananas, Kokos)', price: '4,50 €' },
        { item: 'Individuell zusammenstellbar', price: 'Ab 4,00 €' }
      ],
      imgSrc: offerImg, 
      imgAlt: 'Frische Smoothies in verschiedenen Sorten'
    }
  ];

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
      <main className="angebote-page-container angebote-section">
        <header className="section-header">
          <h1>Unsere aktuellen Angebote</h1>
          <p>Mit Liebe und besten Zutaten für Sie zubereitet.</p>
        </header>
        
        {offers.map((offer, index) => (
          <div key={offer.id} id={offer.id} className={`card ${index % 2 !== 0 ? 'purple' : ''}`}>
            <div className="card-content-wrapper">
              <div className="content_angebote">
                <h3 className="offer-heading">{offer.title}</h3>
                <p className="description">{offer.description}</p>
                {offer.details && (
                  <ul className="offer-details">
                    {offer.details.map((detail, i) => (
                      <li key={i}>
                        <span>{detail.item}</span>
                        <span className="detail-price">{detail.price}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="image-wrapper">
                <img src={offer.imgSrc} alt={offer.imgAlt} />
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default AngebotePage;