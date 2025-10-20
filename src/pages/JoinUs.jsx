import React from "react";
import "./JoinUs.scss";

const JoinUs = () => {
  return (
    <section className="join-us">
      <div className="container">
        <h1>Join Us</h1>
        <p>
          Want to be part of TechCipher? We are always looking for talented
          designers, developers, and strategists. Apply today and let's innovate
          together!
        </p>

        <form className="join-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
