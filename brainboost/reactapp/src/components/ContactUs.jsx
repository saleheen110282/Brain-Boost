import React, { useState } from 'react';
import Footer from "./Footer/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API call here to send the form data to the server
    setFormStatus('Your message has been submitted successfully!');
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  // Inline styles
  const styles = {
    page: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "87vh",
        backgroundColor: "#f7f7f7",
        padding: "20px",
        gap: "150px",
    },
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff' ,
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: "2.5rem",
      color: "#333"
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      minHeight: '150px',
      resize: 'vertical',
    },
    formStatus: {
      textAlign: 'center',
      marginTop: '20px',
      color: 'green',
    },
    footer: {
        borderTop: '1px solid #202020',
      marginTop: '25px',
      marginLeft: '25px',
      width: '100vw',
      paddingTop: '25px',
      boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)', // Box shadow on top
      },
  };

  return (
    <div style={styles.page}>
        <div>
        <h2 style={styles.header}>Contact Us</h2>
      <div style={styles.container}>
        <p style={{  marginBottom: "25px", color: "#333" }}>If you have any questions or feedback, feel free to reach out to us!</p>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
          </div>

          <button type="submit" className="primary-btn">
            Submit
          </button>
        </form>
        {formStatus && <p style={styles.formStatus}>{formStatus}</p>}
      </div>
        </div>
      
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
