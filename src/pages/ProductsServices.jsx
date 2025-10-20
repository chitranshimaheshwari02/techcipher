import React from "react";
import "./ProductsServices.scss";

const ProductsServices = () => {
  return (
    <section className="products-services">
      <div className="container">
        <h1>Products & Services</h1>
        <p className="intro">
          At <strong>TechCipher</strong>, we deliver end-to-end digital solutions that help
          businesses grow, engage users, and stay ahead of the curve. Whether you
          need a stunning website, a powerful web application, or a user-friendly
          mobile app — we’ve got you covered. Explore our core offerings below:
        </p>

        <div className="service">
          <h2>🔹 Web Development</h2>
          <p>
            We build fast, secure, and scalable websites and web applications
            tailored to your business goals. Whether it's a custom CMS, an
            e-commerce store, or a full-scale enterprise solution, we focus on
            performance, functionality, and future-ready architecture.
          </p>
          <ul>
            <li>Custom Website Development</li>
            <li>E-Commerce Development (Shopify, WooCommerce, etc.)</li>
            <li>CMS Integration (WordPress, Drupal, etc.)</li>
            <li>Web Portals & Dashboards</li>
            <li>API Development & Integration</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>

        <div className="service">
          <h2>🔹 Web Design</h2>
          <p>
            Great design is more than just looking good — it’s about creating
            seamless user experiences that convert. Our design team combines
            creativity, UX/UI best practices, and brand strategy to craft engaging,
            intuitive interfaces.
          </p>
          <ul>
            <li>UI/UX Design</li>
            <li>Responsive Web Design</li>
            <li>Website Redesign & Revamp</li>
            <li>Wireframing & Prototyping</li>
            <li>Brand Identity & Visual Design</li>
            <li>Landing Page Design</li>
          </ul>
        </div>

        <div className="service">
          <h2>🔹 Mobile App Development</h2>
          <p>
            We turn innovative ideas into sleek, functional mobile applications for
            both iOS and Android. From concept to launch, our development process
            ensures your app meets your business needs while delighting users.
          </p>
          <ul>
            <li>iOS & Android App Development</li>
            <li>Cross-Platform App Development (Flutter, React Native)</li>
            <li>Native App Development</li>
            <li>App UI/UX Design</li>
            <li>App Testing & Quality Assurance</li>
            <li>App Maintenance & Upgrades</li>
          </ul>
        </div>

        <div className="service">
          <h2>🔹 Additional Services</h2>
          <p>
            To complement our core offerings, we also provide a range of digital
            services to support your project's success.
          </p>
          <ul>
            <li>Website Optimization & Speed Improvements</li>
            <li>SEO-Friendly Development</li>
            <li>Hosting & Domain Assistance</li>
            <li>Technology Consulting</li>
            <li>Project Management & Strategy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
