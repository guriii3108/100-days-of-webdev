import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = ({ experience }) => {
  return (
    <div className="experience-section">
      <div className="timeline">
        {experience.map((job, index) => (
          <motion.div 
            key={job.id} 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <span>{job.duration}</span>
            </div>
            <div className="timeline-content">
              <h3 className="job-title">{job.position}</h3>
              <div className="job-company">
                <span className="company-name">{job.company}</span>
                <span className="job-location">{job.location}</span>
              </div>
              <p className="job-description">{job.description}</p>
              
              <div className="achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {job.achievements.map((achievement, i) => (
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
              
              <div className="tech-used">
                {job.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;