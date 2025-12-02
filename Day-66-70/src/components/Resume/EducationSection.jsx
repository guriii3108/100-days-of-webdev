import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = ({ education }) => {
  return (
    <div className="education-section">
      <div className="timeline">
        {education.map((edu, index) => (
          <motion.div 
            key={edu.id} 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <span>{edu.duration}</span>
            </div>
            <div className="timeline-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-institution">
                <span className="institution-name">{edu.institution}</span>
                <span className="education-location">{edu.location}</span>
              </div>
              <p className="education-description">{edu.description}</p>
              
              <div className="achievements">
                <h4>Achievements</h4>
                <ul>
                  {edu.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;