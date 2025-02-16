import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaTelegram, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="elegant-footer">
      <Container>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sheetal-choudhary-4a9aa42b3" className="social-icon linkedin-icon">
            <FaLinkedin />
          </a>
          <a href="http://t.me/Mera_ashiyaana" className="social-icon telegram-icon ">
            <FaTelegram />
          </a>
          <a href="https://github.com/sheetuchoudhary" className="social-icon github-icon">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/sheetal.gari_o3" className="social-icon instagram-icon">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-text">
        <p>Limbapipliya ,Ujjain [M.P.] </p>
          <p>&copy; {new Date().getFullYear()} Sheetal Choudhary....My Portfolio</p>
          <p>___Thank you___</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;