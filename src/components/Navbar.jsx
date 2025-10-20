import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TechCipher</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products-services">Products & Services</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/join-us">Join Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
