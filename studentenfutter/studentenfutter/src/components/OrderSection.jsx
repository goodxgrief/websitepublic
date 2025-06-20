// filepath: c:\Users\goodxgrief\Documents\GitHub\websitepublic\studentenfutter\src\pages\ContactPage.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './assets/styles/KontaktPage.css'; // Import the CSS file for styling

const ContactPage = ({ blurred, setBlurred, isMobileNavActive, setIsMobileNavActive, activeSubmenu, setActiveSubmenu }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

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

      <div className="contact-page">
        <h1>Kontaktieren Sie uns</h1>
        <p>Wir freuen uns auf Ihre Nachricht! Füllen Sie das Formular aus, und wir werden uns so schnell wie möglich bei Ihnen melden.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Nachricht:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Absenden</button>
        </form>

        <section className="contact-info">
          <h2>Kontaktinformationen</h2>
          <p><strong>Adresse:</strong> Studentenfutter Gießen, Kreuzpl. 2, 35390 Gießen</p>
          <p><strong>Telefon:</strong> +49 123 456 789</p>
          <p><strong>E-Mail:</strong> info@studentenfutter-giessen.de</p>
        </section>

        <section className="imprint">
          <h2>Impressum</h2>
          <p><strong>Angaben gemäß § 5 TMG:</strong></p>
          <p>Studentenfutter Gießen<br />
          Kreuzpl. 2<br />
          35390 Gießen</p>
          <p><strong>Vertreten durch:</strong> Max Mustermann</p>
          <p><strong>Kontakt:</strong><br />
          Telefon: +49 123 456 789<br />
          E-Mail: info@studentenfutter-giessen.de</p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;