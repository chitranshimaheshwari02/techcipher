// import HeroSection from "../components/HeroSection";
// import "./Home.scss";

// const Home = () => {
//   return (
//     <div className="home">
//       <HeroSection />
//       <section className="intro">
//         <h2>Welcome to TechCipher</h2>
//         <p>We turn ideas into impactful digital experiences.</p>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import "./Home.scss";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />

      <section className="intro">
        <div className="container">
          <h2>Welcome to TechCipher</h2>
          <p>
            Where design meets functionality and innovation fuels digital growth.
            We’re a creative technology company specializing in <strong>web development</strong>,
            <strong> web design</strong>, and <strong>mobile app development</strong>.
            Our mission is to help businesses transform ideas into intuitive,
            scalable, and high-performing digital experiences.
          </p>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <h2>What We Do</h2>
          <div className="cards">
            <div className="card">
              <h3>Web Development</h3>
              <p>
                We craft modern, scalable websites and apps that blend performance
                with beautiful design.
              </p>
            </div>

            <div className="card">
              <h3>Web Design</h3>
              <p>
                Our UI/UX designs turn complex ideas into simple, elegant, and
                engaging user experiences.
              </p>
            </div>

            <div className="card">
              <h3>Mobile App Development</h3>
              <p>
                We build intuitive mobile apps for iOS and Android that keep users
                coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Let’s Build Something Amazing Together</h2>
          <p>
            Ready to transform your digital presence? Partner with TechCipher to
            bring your ideas to life.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
