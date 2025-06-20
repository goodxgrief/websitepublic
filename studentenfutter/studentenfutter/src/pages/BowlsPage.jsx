// filepath: c:\Users\goodxgrief\Documents\GitHub\websitepublic\studentenfutter\src\pages\ContactPage.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './assets/styles/KontaktPage.css'; // Import the CSS file

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
    // Handle form submission logic here (e.g., send to an API)
    console.log('Form submitted:', formData);
    // Reset form
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
        <h1>Kontakt</h1>
        <section className="contact-info">
          <h2>Kontaktinformationen</h2>
          <p>Telefon: +49 123 456 789</p>
          <p>Email: info@studentenfutter.de</p>
          <p>Adresse: Studentenfutter Gießen, Kreuzpl. 2, 35390 Gießen</p>
        </section>

        <section className="contact-form">
          <h2>Kontaktformular</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Nachricht:
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>
            <button type="submit">Absenden</button>
          </form>
        </section>

        <section className="imprint">
          <h2>Impressum</h2>
          <p>Angaben gemäß § 5 TMG:</p>
          <p>Studentenfutter Gießen<br />
          Kreuzpl. 2<br />
          35390 Gießen<br />
          Deutschland</p>
          <p>Vertreten durch:<br />
          Max Mustermann</p>
          <p>Kontakt:<br />
          Telefon: +49 123 456 789<br />
          Email: info@studentenfutter.de</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;