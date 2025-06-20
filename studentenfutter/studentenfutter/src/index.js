// filepath: c:\Users\goodxgrief\Documents\GitHub\websitepublic\studentenfutter\src\pages\ContactPage.js
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
        <h1>Kontakt</h1>
        
        <section className="contact-info">
          <h2>Kontaktinformationen</h2>
          <p>Für Anfragen erreichen Sie uns unter:</p>
          <p><strong>Email:</strong> info@studentenfutter.de</p>
          <p><strong>Telefon:</strong> +49 123 456 789</p>
          <p><strong>Adresse:</strong> Studentenfutter Gießen, Kreuzpl. 2, 35390 Gießen</p>
        </section>

        <section className="contact-form">
          <h2>Kontaktformular</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Nachricht:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Absenden</button>
          </form>
        </section>

        <section className="imprint">
          <h2>Impressum</h2>
          <p><strong>Firmenname:</strong> Studentenfutter Gießen</p>
          <p><strong>Vertreten durch:</strong> Max Mustermann</p>
          <p><strong>Adresse:</strong> Kreuzpl. 2, 35390 Gießen</p>
          <p><strong>USt-IdNr:</strong> DE123456789</p>
          <p><strong>Kontakt:</strong> info@studentenfutter.de</p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;