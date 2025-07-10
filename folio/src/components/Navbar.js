// src/components/Navbar.js

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className = "name">
            <span className="name-highlight">Francisco</span> Camacho
      </div>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about"></Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
