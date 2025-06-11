import React from 'react';
import { Link } from 'react-router-dom';
// Stelle sicher, dass der Pfad zum Logo korrekt ist, von Navbar.jsx aus gesehen
import logo from '../assets/media/logo.png';

const Navbar = ({
  blurred,
  setBlurred,
  isMobileNavActive,
  setIsMobileNavActive,
  activeSubmenu,
  setActiveSubmenu
}) => {
  const handleNavigation = () => {
    setBlurred(false); // Blur-Effekt deaktivieren bei jeder Navigation
    setIsMobileNavActive(false); // Auch mobiles Menü schließen
    setActiveSubmenu(null); // Auch mobiles Submenü schließen
  };

  const handleMobileLinkClick = () => {
    handleNavigation(); // Allgemeine Navigationsbehandlung aufrufen
  };

  const handleMobileSubmenuLinkClick = (submenu) => {
    // Hier wird nur das Submenü geöffnet, keine Seiten-Navigation, also kein setBlurred(false)
    setActiveSubmenu(submenu);
  };

  return (
    <> {/* React Fragment, um mehrere Elemente auf oberster Ebene zurückzugeben */}
      <div
        className="blur-overlay"
        style={{
          opacity: blurred ? 1 : 0,
          pointerEvents: blurred ? 'auto' : 'none',
          // Wichtig: Die CSS-Stile für Positionierung (z.B. position: fixed, top: 0, left: 0, width: 100%, height: 100%, z-index)
          // und den eigentlichen Blur-Effekt (z.B. backdrop-filter: blur(5px); background-color: rgba(0,0,0,0.1);)
          // müssen in deiner globalen CSS-Datei (z.B. style.css) definiert sein.
        }}
      />
      <header>
        <nav className="navbar">
          <div className="logo">
            {/* Link zur Startseite sollte auch den Blur-Effekt deaktivieren */}
            <Link to="/" onClick={handleNavigation}>
              <img src={logo} alt="Studentenfutter Logo" />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav"
            onMouseEnter={() => setBlurred(true)}
            onMouseLeave={() => setBlurred(false)} // Dies sollte idealerweise reichen, aber wir fügen zusätzliche Sicherungen hinzu
          >
            <li>
              <a href="#products">Gerichte</a>
              <ul className="dropdown">
                {/* Alle Links, die zu einer anderen Seite führen oder die Ansicht stark ändern, sollten handleNavigation aufrufen */}
                <li><Link to="/speisekarte" onClick={handleNavigation}>Bowls</Link></li>
                <li><Link to="/speisekarte" onClick={handleNavigation}>Snacks</Link></li>
                <li><Link to="/speisekarte" onClick={handleNavigation}>Getränke</Link></li>
                <li><Link to="/speisekarte" onClick={handleNavigation}>Speisekarte</Link></li>
              </ul>
            </li>
            <li>
              <a href="#services">Angebote</a>
              <ul className="dropdown">
                {/* Anker-Links auf derselben Seite benötigen dies nicht unbedingt, aber es schadet nicht */}
                <li><a href="#pc-repair" onClick={() => setBlurred(false)}>Tagesgerichte</a></li>
                <li><a href="#phone-repair" onClick={() => setBlurred(false)}>Saisonales</a></li>
                <li><a href="#consulting" onClick={() => setBlurred(false)}>Angebote</a></li>
              </ul>
            </li>
            <li>
              <a href="#about">Über uns</a>
              <ul className="dropdown">
                <li><a href="#our-story" onClick={() => setBlurred(false)}>Unsere Geschichte</a></li>
                <li><a href="#team" onClick={() => setBlurred(false)}>Team</a></li>
                <li><a href="#values" onClick={() => setBlurred(false)}>Werte</a></li>
              </ul>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
              <ul className="dropdown">
                <li><a href="#location" onClick={() => setBlurred(false)}>Standort</a></li>
                <li><a href="#contact-form" onClick={() => setBlurred(false)}>Kontaktformular</a></li>
                <li><a href="#support" onClick={() => setBlurred(false)}>Support</a></li>
              </ul>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div
            className={`hamburger ${isMobileNavActive ? 'active' : ''}`}
            onClick={() => {
              setIsMobileNavActive(!isMobileNavActive);
              if (isMobileNavActive) { // Wenn das Menü geschlossen wird
                setBlurred(false); // Auch Blur entfernen, falls es durch Desktop-Hover aktiv war
                setActiveSubmenu(null);
              }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`mobile-nav ${isMobileNavActive ? 'active' : ''}`}>
            <ul className="mobile-nav-links">
              <li><a onClick={() => handleMobileSubmenuLinkClick('gerichte')}>Gerichte</a></li>
              <li><a onClick={() => handleMobileSubmenuLinkClick('angebote')}>Angebote</a></li>
              <li><a onClick={() => handleMobileSubmenuLinkClick('about')}>Über uns</a></li>
              <li><a onClick={() => handleMobileSubmenuLinkClick('kontakt')}>Kontakt</a></li>
            </ul>

            {/* Submenus */}
            <div className={`mobile-submenu ${activeSubmenu === 'gerichte' ? 'active' : ''}`} id="gerichte">
              <div className="submenu-header">
                <button className="back-btn" onClick={() => setActiveSubmenu(null)}>←</button>
                <span>Gerichte</span>
              </div>
              <ul>
                <li><Link to="/speisekarte" onClick={handleMobileLinkClick}>Bowls</Link></li>
                <li><Link to="/speisekarte" onClick={handleMobileLinkClick}>Snacks</Link></li>
                <li><Link to="/speisekarte" onClick={handleMobileLinkClick}>Getränke</Link></li>
                <li><Link to="/speisekarte" onClick={handleMobileLinkClick}>Speisekarte</Link></li>
              </ul>
            </div>
            <div className={`mobile-submenu ${activeSubmenu === 'angebote' ? 'active' : ''}`} id="angebote">
              <div className="submenu-header">
                <button className="back-btn" onClick={() => setActiveSubmenu(null)}>←</button>
                <span>Angebote</span>
              </div>
              <ul>
                <li><a href="#pc-repair" onClick={handleMobileLinkClick}>Tagesgerichte</a></li>
                <li><a href="#phone-repair" onClick={handleMobileLinkClick}>Saisonales</a></li>
                <li><a href="#consulting" onClick={handleMobileLinkClick}>Angebote</a></li>
              </ul>
            </div>
            <div className={`mobile-submenu ${activeSubmenu === 'about' ? 'active' : ''}`} id="about">
              <div className="submenu-header">
                <button className="back-btn" onClick={() => setActiveSubmenu(null)}>←</button>
                <span>Über uns</span>
              </div>
              <ul>
                <li><a href="#our-story" onClick={handleMobileLinkClick}>Unsere Geschichte</a></li>
                <li><a href="#team" onClick={handleMobileLinkClick}>Team</a></li>
                <li><a href="#values" onClick={handleMobileLinkClick}>Werte</a></li>
              </ul>
            </div>
            <div className={`mobile-submenu ${activeSubmenu === 'kontakt' ? 'active' : ''}`} id="kontakt">
              <div className="submenu-header">
                <button className="back-btn" onClick={() => setActiveSubmenu(null)}>←</button>
                <span>Kontakt</span>
              </div>
              <ul>
                <li><a href="#location" onClick={handleMobileLinkClick}>Standort</a></li>
                <li><a href="#contact-form" onClick={handleMobileLinkClick}>Kontaktformular</a></li>
                <li><a href="#support" onClick={handleMobileLinkClick}>Support</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;