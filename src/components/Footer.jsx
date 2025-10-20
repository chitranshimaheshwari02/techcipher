import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 TechCipher. All rights reserved.</p>
      <ul>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
