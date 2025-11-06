import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <div className="contact-cards">

        <div className="card">
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="card">
          <h3>Email Us</h3>
          <p>mahi@example.com</p>
        </div>

        <div className="card">
          <h3>Visit Office</h3>
          <p>xyz, Gujarat</p>
        </div>

      </div>

      <div className="contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb="
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>

    </div>
  );
}

export default Contact;
