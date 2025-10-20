import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <p>Have a project in mind? Get in touch with our team!</p>

        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
