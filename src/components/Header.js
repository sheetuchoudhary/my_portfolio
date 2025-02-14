import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import my1 from "../image/my.jpg";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
   
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image 
            src={my1} 
            alt="Profile" 
            width="80px"  
            height="80px" 
            roundedCircle 
            className="me-3" 
          />
          <span className="text-white fw-bold">Sh.....</span>
        </Navbar.Brand>

        <Nav className="ms-auto">
          <NavLink to="/home" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/skill" className="nav-link">Skill</NavLink>
          <NavLink to="/projectlist" className="nav-link">Projects</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
