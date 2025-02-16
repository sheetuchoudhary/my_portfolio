import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import my1 from "../image/my.jpg";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="elegant-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-container">
          <Image
            src={my1}
            alt="Profile"
            className="nav-profile-img"
            roundedCircle
          />
          <span className="brand-name">Sheetal</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/skill" className="nav-link">Skills</NavLink>
            <NavLink to="/projectlist" className="nav-link">Projects</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
