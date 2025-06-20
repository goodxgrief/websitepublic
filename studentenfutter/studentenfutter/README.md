### Step 1: Create the `ContactPage` Component

Create a new file named `ContactPage.js` in the `src/pages` directory. Here’s a sample implementation:

```javascript
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
    // Handle form submission logic here (e.g., send to an API)
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
          <p><strong>Adresse:</strong> Studentenfutter Gießen, Kreuzpl. 2, 35390 Gießen</p>
          <p><strong>Telefon:</strong> +49 123 456 789</p>
          <p><strong>E-Mail:</strong> info@studentenfutter.de</p>
        </section>

        <section className="contact-form">
          <h2>Kontaktformular</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail:</label>
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
          <p><strong>Firma:</strong> Studentenfutter Gießen</p>
          <p><strong>Vertreten durch:</strong> Max Mustermann</p>
          <p><strong>USt-IdNr:</strong> DE123456789</p>
          <p><strong>Haftungsausschluss:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
```

### Step 2: Create the CSS File

Create a new CSS file named `KontaktPage.css` in the `src/assets/styles` directory. Here’s a sample CSS to style the contact page:

```css
/* filepath: c:\Users\goodxgrief\Documents\GitHub\websitepublic\studentenfutter\src\assets\styles\KontaktPage.css */

.contact-page {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.contact-info, .contact-form, .imprint {
  margin-bottom: 40px;
}

h1, h2 {
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

.submit-btn {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #218838;
}
```

### Step 3: Update the `App.js` File

Now, you need to add a route for the `ContactPage` in your `App.js` file. Here’s how to do it:

```javascript
import ContactPage from './pages/ContactPage'; // Import the new ContactPage

// Inside the <Routes> component
<Route path="/kontakt" element={
  <ContactPage
    blurred={blurred}
    setBlurred={setBlurred}
    isMobileNavActive={isMobileNavActive}
    setIsMobileNavActive={setIsMobileNavActive}
    activeSubmenu={activeSubmenu}
    setActiveSubmenu={setActiveSubmenu}
  />
} />
```

### Step 4: Add a Link to the Contact Page

You may want to add a link to the contact page in your navigation or footer. For example, in your `Navbar` component, you can add:

```javascript
<Link to="/kontakt">Kontakt</Link>
```

### Conclusion

With these steps, you have created a new `ContactPage` that includes contact information, a contact form, an imprint, and matches the style of the rest of the website. You can further customize the styles and functionality as needed.