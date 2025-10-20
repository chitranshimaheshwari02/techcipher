import React from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h1>Testimonials</h1>
        <p>See what our clients say about working with TechCipher.</p>

        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>"TechCipher built our website from scratch and the results were amazing!"</p>
            <strong>- John Doe, CEO</strong>
          </div>
          <div className="testimonial-card">
            <p>"Their team is responsive, professional, and very creative."</p>
            <strong>- Jane Smith, Founder</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
