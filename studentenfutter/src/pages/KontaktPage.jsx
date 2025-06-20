import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/KontaktPage.css';

const KontaktPage = ({
  blurred, setBlurred, isMobileNavActive, setIsMobileNavActive, activeSubmenu, setActiveSubmenu
}) => {
  const { hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      // Wenn kein Hash vorhanden ist, zum Seitenanfang scrollen.
      if (!hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Ansonsten zum Element mit der entsprechenden ID scrollen.
        const id = hash.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    }, 100);
  }, [hash]);

  return (
    <div className={`kontakt-page ${blurred ? 'blurred' : ''}`}>
      <Navbar
        blurred={blurred}
        setBlurred={setBlurred}
        isMobileNavActive={isMobileNavActive}
        setIsMobileNavActive={setIsMobileNavActive}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <main className="kontakt-page-container">
        <header className="section-header">
          <h1>Kontakt & Impressum</h1>
          <p>Wir freuen uns auf Ihre Nachricht und Ihren Besuch.</p>
        </header>

        <section id="kontakt" className="kontakt-section">
          <div className="kontakt-details">
            <h2>Kontaktinformationen</h2>
            <p>Sie haben Fragen oder möchten uns etwas mitteilen? Zögern Sie nicht, uns zu kontaktieren.</p>
            <address>
              <strong>Studentenfutter Gießen</strong><br />
              Kreuzpl. 2<br />
              35390 Gießen<br /><br />
              <strong>Telefon:</strong> <a href="tel:+496411234567">+49 641 1234567</a><br />
              <strong>E-Mail:</strong> <a href="mailto:info@studentenfutter-giessen.de">info@studentenfutter-giessen.de</a>
            </address>
          </div>

          <div className="kontakt-form-container">
            <h2>Schreiben Sie uns</h2>
            <form className="kontakt-form" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Betreff</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Nachricht</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Nachricht senden</button>
            </form>
          </div>
        </section>

        <section id="impressum" className="impressum-section">
          <h2>Impressum</h2>
          <div className="impressum-content">
            <p><strong>Angaben gemäß § 5 TMG:</strong></p>
            <p>
              Max Mustermann<br />
              Studentenfutter Gießen<br />
              Kreuzpl. 2<br />
              35390 Gießen
            </p>
            <p>
              <strong>Vertreten durch:</strong><br />
              Max Mustermann
            </p>
            <p>
              <strong>Kontakt:</strong><br />
              Telefon: +49 (0) 641 1234567<br />
              E-Mail: info@studentenfutter-giessen.de
            </p>
            <p>
              <strong>Umsatzsteuer-ID:</strong><br />
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
            <p>
              <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
              Max Mustermann<br />
              Anschrift wie oben
            </p>
            <p>
              <strong>Haftungsausschluss (Disclaimer) und Urheberrecht:</strong><br />
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KontaktPage;