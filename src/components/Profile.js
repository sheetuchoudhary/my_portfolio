import React from 'react';
import { motion } from 'framer-motion';
import CVButtons from './CVButtons';
import './Profile.css';
import './CVButtons.css';

export default function Profile(props) {
  
  return (
    <div className="profile-section">
      <div className="content-wrapper">
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="profile-content"
        >
          <h1 className="welcome-text">Hello Everyone</h1>
          <h2 className="name-text">{props.name}</h2>
          <h4>B.tech CSE Student</h4>
          <h4>Avantika University , Ujjain [M.P.] </h4>
              
          <p>Curious and motivated B.Tech CSE student with a passion for learning and exploring new technologies. Eager to apply knowledge and grow with experiences.</p>
          <hr className="divider" />
          
          {/* CV Buttons */}
          <CVButtons />
        </motion.div>
      </div>
    </div>
  );
}