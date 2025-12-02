import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({ skills }) => {
  return (
    <div className="skills-section">
      <div className="technical-skills">
        <h3>Technical Skills</h3>
        <div className="skill-bars">
          {skills.technical.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-container">
                <motion.div 
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="soft-skills">
        <h3>Soft Skills</h3>
        <div className="soft-skills-container">
          {skills.soft.map((skill, index) => (
            <motion.div 
              key={index} 
              className="soft-skill-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)', color: 'white' }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="languages">
        <h3>Languages</h3>
        <div className="languages-container">
          {skills.languages.map((language, index) => (
            <div key={index} className="language-item">
              <span className="language-name">{language.name}</span>
              <span className="language-proficiency">{language.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;