import React from "react";
import "./Navbar.css";

// Navbar component
const Navbar = props => (
  <nav className="navbar fixed-top navbar-dark navbar-custom p-3">
    <span className="navbar-brand">My portfolio</span>
    <span className="navbar-text text-white"></span>
    <span className="navbar-text text-white">Contact me</span>
  </nav>
);

export default Navbar;
