// import "./About.scss";

// const About = () => {
//   return (
//     <section className="about">
//       <div className="about-container">
//         <h1 className="about-title">About TechCipher</h1>

//         <p className="about-text">
//           Welcome to <strong>TechCipher</strong>, where design meets functionality and innovation fuels digital growth.
//           We are a creative technology company specializing in web development, web design, and mobile app development,
//           helping businesses transform ideas into intuitive, scalable, and high-performing digital products.
//         </p>

//         <p className="about-text">
//           Founded on a passion for problem-solving and a commitment to quality, our mission is simple: to build digital
//           experiences that not only look great but also work flawlessly. From beautifully responsive websites to robust
//           e-commerce platforms and custom mobile apps, we tailor every solution to meet the unique needs of our clients
//           and their users.
//         </p>

//         <p className="about-text">
//           What sets us apart is our collaborative approach. We don’t just take a brief and deliver a product — we partner
//           with you to understand your business, your challenges, and your goals. Our team of designers, developers, and
//           strategists work hand-in-hand to ensure every pixel, every line of code, and every user interaction adds value
//           and supports your growth.
//         </p>

//         <p className="about-text">
//           Whether you're launching a new startup, reimagining your brand online, or developing a game-changing mobile
//           app, TechCipher is here to turn your vision into reality — with clean code, creative design, and a clear
//           strategy behind it all.
//         </p>

//         <div className="about-cta">
//           <p>Let’s build something amazing together.</p>
//           <button className="about-btn">Contact Us</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1>About Us</h1>
        <p className="intro">
          Welcome to <strong>TechCipher</strong>, where design meets functionality
          and innovation fuels digital growth. We are a creative technology company
          specializing in web development, web design, and mobile app development —
          helping businesses transform ideas into intuitive, scalable, and
          high-performing digital products.
        </p>

        <div className="about-content">
          <div className="text-block">
            <p>
              Founded on a passion for problem-solving and a commitment to quality,
              our mission is simple: to build digital experiences that not only look
              great but also work flawlessly. From beautifully responsive websites
              to robust e-commerce platforms and custom mobile apps, we tailor every
              solution to meet the unique needs of our clients and their users.
            </p>
            <p>
              What sets us apart is our <strong>collaborative approach</strong>. We
              don’t just take a brief and deliver a product — we partner with you to
              understand your business, your challenges, and your goals. Our team of
              designers, developers, and strategists work hand-in-hand to ensure
              every pixel, every line of code, and every user interaction adds value
              and supports your growth.
            </p>
            <p>
              Whether you're launching a new startup, reimagining your brand online,
              or developing a game-changing mobile app, TechCipher is here to turn
              your vision into reality — with clean code, creative design, and a
              clear strategy behind it all.
            </p>
            <p className="closing">
              <em>Let’s build something amazing together.</em>
            </p>
          </div>

          <div className="image-block">
            <img
              src="/images/about-team.jpg"
              alt="TechCipher team working collaboratively"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
