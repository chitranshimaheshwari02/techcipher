import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">We’d love to hear from you! Fill out the form below or reach us directly.</p>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:techcipher.79@gmail.com">techcipher.79@gmail.com</a></p>
          <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
          <div className="social-links">
            <span>Follow Us:</span>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

