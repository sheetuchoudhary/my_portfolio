import React from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

import './Projectcard.css';

function ProjectCard({ title, description, details, link, borderColor, image }) {
  return (
    <div className="Box">
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}>
      <Card className={`project-card border-${borderColor}`}>
        {image && (
          <Card.Img variant="top" src={image} className="project-image" />
        )}
        <Card.Body>
          <Card.Title className="project-title">{title}</Card.Title>
          <Card.Text className="project-description">{description}</Card.Text>
          <Card.Text className="project-details">{details}</Card.Text>
          <Card.Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            More details
          </Card.Link>
        </Card.Body>
      </Card>
    </motion.div>
    </div>
  );
}

export default ProjectCard;