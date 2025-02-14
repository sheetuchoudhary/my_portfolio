import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer()
{
    return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
   
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span className="text-white fw-bold">Thank You....</span>
        </Navbar.Brand>

        <Nav className="ms-auto">
          <NavLink to="https://www.linkedin.com/in/sheetal-choudhary-4a9aa42b3" className="nav-link">LinkedIn</NavLink>
          <NavLink to="http://t.me/Mera_ashiyaana" className="nav-link">Telegram</NavLink>
          <NavLink to="https://github.com/sheetuchoudhary" className="nav-link">Github</NavLink>
          <NavLink to="https://www.instagram.com/sheetal.gari_o3?igsh=MW8wNWVydDBhamRrYw==" className="nav-link">Instagram</NavLink>
        </Nav>
      </Container>
    </Navbar>
    );
}

export default Footer;