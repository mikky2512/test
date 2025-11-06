          
          
import React from "react"
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <h2 className="brand">My Website</h2>
      </div>

      <nav className="nav-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
          
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
