import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { FaLinkedin, FaTelegram, FaGithub, FaInstagram } from 'react-icons/fa'; // Import Icons
import "./Contact.css"; // Custom Styling

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="card shadow-lg p-4 text-center">
          <h3 className="text-primary fw-bold">Contact Me</h3>
          <p className="text-muted">Feel free to connect with me on these platforms</p>

          <div className="contact-links mt-3">
            <a href="https://www.linkedin.com/in/sheetal-choudhary-4a9aa42b3" className="contact-item">
              <FaLinkedin className="icon linkedin" /> LinkedIn
            </a>
            <a href="http://t.me/Mera_ashiyaana" className="contact-item">
              <FaTelegram className="icon telegram" /> Telegram
            </a>
            <a href="https://github.com/sheetuchoudhary" className="contact-item">
              <FaGithub className="icon github" /> Github
            </a>
            <a href="https://www.instagram.com/sheetal.gari_o3?igsh=MW8wNWVydDBhamRrYw==" className="contact-item">
              <FaInstagram className="icon instagram" /> Instagram
            </a>
          </div>
        </div>
      </div>
    );
  }
}
