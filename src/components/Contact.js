import React from 'react';

import { FaLinkedin, FaTelegram, FaGithub, FaInstagram } from 'react-icons/fa';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
 
      <h3 className="contact-title"><b>Contact Me</b></h3>
      <div className="contact-container">
        <div className="contact-card">
          <p className="contact-subtitle">Feel free to connect with me on these platforms</p>

          <div className="contact-links">
            <a href="https://www.linkedin.com/in/sheetal-choudhary-4a9aa42b3" 
               className="contact-item linkedin-item">
              <FaLinkedin className="icon" />
              <span>LinkedIn</span>
            </a>
            
            <a href="http://t.me/Mera_ashiyaana" 
               className="contact-item telegram-item">
              <FaTelegram className="icon" />
              <span>Telegram</span>
            </a>
            
            <a href="https://github.com/sheetuchoudhary" 
               className="contact-item github-item">
              <FaGithub className="icon" />
              <span>Github</span>
            </a>
            
            <a href="https://www.instagram.com/sheetal.gari_o3" 
               className="contact-item instagram-item">
              <FaInstagram className="icon" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;