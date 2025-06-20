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
      
      <main className="contact-page">
        <h1>Kontaktieren Sie uns</h1>
        
        <section className="contact-info">
          <h2>Kontaktinformationen</h2>
          <p>Adresse: Studentenfutter Gießen, Kreuzpl. 2, 35390 Gießen</p>
          <p>Telefon: +49 123 456 789</p>
          <p>Email: <a href="mailto:info@studentenfutter.de">info@studentenfutter.de</a></p>
        </section>

        <section className="contact-form">
          <h2>Kontaktformular</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Nachricht:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Absenden</button>
          </form>
        </section>

        <section className="imprint">
          <h2>Impressum</h2>
          <p>Angaben gemäß § 5 TMG:</p>
          <p>Studentenfutter Gießen<br />
          Kreuzpl. 2<br />
          35390 Gießen<br />
          Telefon: +49 123 456 789<br />
          Email: <a href="mailto:info@studentenfutter.de">info@studentenfutter.de</a></p>
          <p>Vertreten durch: Max Mustermann</p>
          <p>Umsatzsteuer-ID: DE123456789</p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;