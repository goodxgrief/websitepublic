// filepath: c:\Users\goodxgrief\Documents\GitHub\websitepublic\studentenfutter\src\pages\ContactPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './assets/styles/KontaktPage.css'; // Import the CSS file

const ContactPage = ({ blurred, setBlurred, isMobileNavActive, setIsMobileNavActive, activeSubmenu, setActiveSubmenu }) => {
  return (
    <>
      <Helmet>
        <title>Kontakt - Studentenfutter Gießen</title>
      </Helmet>
      <Navbar
        blurred={blurred}
        setBlurred={setBlurred}
        isMobileNavActive={isMobileNavActive}
        setIsMobileNavActive={setIsMobileNavActive}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="contact-page">
        <h1>Kontakt</h1>
        <section className="contact-info">
          <h2>Kontaktinformationen</h2>
          <p><strong>Adresse:</strong> Studentenfutter Gießen, Kreuzpl. 2, 35390 Gießen</p>
          <p><strong>Telefon:</strong> +49 123 456789</p>
          <p><strong>E-Mail:</strong> info@studentenfutter-giessen.de</p>
        </section>

        <section className="contact-form">
          <h2>Kontaktformular</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">E-Mail:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Nachricht:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Absenden</button>
          </form>
        </section>

        <section className="imprint">
          <h2>Impressum</h2>
          <p><strong>Firma:</strong> Studentenfutter Gießen</p>
          <p><strong>Vertreten durch:</strong> Max Mustermann</p>
          <p><strong>USt-IdNr:</strong> DE123456789</p>
          <p><strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr.</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;