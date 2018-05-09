import React from "react";
import "./Navbar.css";
import {Container} from 'reactstrap';

// Navbar component
const Navbar = props => (
  <Container>
  <nav className="navbar fixed-top navbar-dark navbar-custom p-2">
     <span className="navbar-text text-white"></span>
    <span className="navbar-text text-white">Contact me</span>
  </nav>
  </Container>
);

export default Navbar;
