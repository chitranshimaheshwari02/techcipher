import React from "react";
import "./JoinUs.scss";

const JoinUs = () => {
  return (
    <section className="join-us">
      <div className="container">
        <h1>Careers at TechCipher</h1>
        <p className="intro">
          When you work with TechCipher, you get more than just a service provider —
          you get a team that truly cares about your success.
        </p>

        <div className="why-join">
          <h2>Why Work With Us?</h2>
          <p>
            Ready to get started? Contact us today and discover how we can help you
            achieve your goals.
          </p>
        </div>

        <div className="join-content">
          <div className="join-card">
            <h3>Dedicated and Skilled Team</h3>
            <p>
              We’re proud of our people. Our talented professionals are passionate
              about what they do and committed to your success. From planning to
              delivery, we work hand-in-hand with you to bring your vision to life.
            </p>
          </div>

          <div className="join-card">
            <h3>Customized, Innovative Solutions</h3>
            <p>
              No two clients are the same — and neither are our solutions. We take
              time to understand your goals, challenges, and opportunities, then
              craft strategies that perfectly fit your needs.
            </p>
          </div>

          <div className="join-card">
            <h3>Transparent Communication</h3>
            <p>
              We believe in honesty and openness. You’ll always know what’s
              happening, why it matters, and how it benefits your business. We keep
              you informed every step of the way.
            </p>
          </div>

          <div className="join-card">
            <h3>Commitment to Long-Term Partnerships</h3>
            <p>
              For us, it’s not just about one project — it’s about building
              relationships that last. We aim to be your trusted partner as your
              business grows and evolves.
            </p>
          </div>
        </div>

        <div className="cta">
          <p>Interested in joining our team?</p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
