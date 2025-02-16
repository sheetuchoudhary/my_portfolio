import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

const CVButtons = ({ onDownload, onView }) => {
  return (
    <div className="cv-buttons">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cv-button download-btn"
        onClick={onDownload}
      >
        <FaDownload className="button-icon" />
        Download CV
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cv-button view-btn"
        onClick={onView}
      >
        <FaEye className="button-icon" />
        View CV
      </motion.button>
    </div>
  );
};

export default CVButtons;