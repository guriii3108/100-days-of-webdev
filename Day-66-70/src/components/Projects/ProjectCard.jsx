import React from 'react';
import './ProjectCard.css';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      className="project-card"
      onClick={onClick}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <motion.button 
            className="view-project-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-tag">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;