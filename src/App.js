import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductsServices from "./pages/ProductsServices";
import Testimonials from "./pages/Testimonials";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import JoinUs from "./pages/JoinUs";

import "./index.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
