import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="src/assets/logo.png" alt="Logo" id="logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#helper">Help</a>
          </li>
          <li>
            <Link to="/helper">Product</Link>
          </li>
          <li>
            <Link to="/helper">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
