import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">TechCipher</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/products-services" onClick={closeMenu}>Products & Services</Link></li>
        <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
        <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/join-us" onClick={closeMenu}>Join Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
