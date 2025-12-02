import React, { useState } from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FadeInUp } from '../animations/ScrollAnimation';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & Others' }
  ];
  
  const skillsData = [
    // Frontend Skills
    { 
      id: 1, 
      name: 'HTML5', 
      category: 'frontend', 
      proficiency: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      id: 2, 
      name: 'CSS3', 
      category: 'frontend', 
      proficiency: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      id: 3, 
      name: 'JavaScript', 
      category: 'frontend', 
      proficiency: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      id: 4, 
      name: 'React', 
      category: 'frontend', 
      proficiency: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      id: 5, 
      name: 'Redux', 
      category: 'frontend', 
      proficiency: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
    },
    { 
      id: 6, 
      name: 'Tailwind CSS', 
      category: 'frontend', 
      proficiency: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    },
    
    // Backend Skills
    { 
      id: 7, 
      name: 'Node.js', 
      category: 'backend', 
      proficiency: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      id: 8, 
      name: 'Express.js', 
      category: 'backend', 
      proficiency: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    { 
      id: 9, 
      name: 'MongoDB', 
      category: 'backend', 
      proficiency: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      id: 10, 
      name: 'Firebase', 
      category: 'backend', 
      proficiency: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    { 
      id: 11, 
      name: 'SQL', 
      category: 'backend', 
      proficiency: 65,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    
    // Tools & Others
    { 
      id: 12, 
      name: 'Git', 
      category: 'tools', 
      proficiency: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
      id: 13, 
      name: 'GitHub', 
      category: 'tools', 
      proficiency: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    { 
      id: 14, 
      name: 'VS Code', 
      category: 'tools', 
      proficiency: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    { 
      id: 15, 
      name: 'Figma', 
      category: 'tools', 
      proficiency: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    { 
      id: 16, 
      name: 'Responsive Design', 
      category: 'tools', 
      proficiency: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="skills-section">
      <FadeInUp>
        <div className="section-header">
          <h2>My Skills</h2>
          <p>Here are my technical skills and proficiency levels</p>
        </div>
      </FadeInUp>
      
      <FadeInUp delay={0.1}>
        <div className="skills-filter">
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </FadeInUp>
      
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <FadeInUp key={skill.id} delay={0.1 + index * 0.05}>
            <motion.div 
              className="skill-card"
              whileHover={{ 
                y: -10, 
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-proficiency">
                <div className="proficiency-bar-bg">
                  <motion.div 
                    className="proficiency-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  ></motion.div>
                </div>
                <span className="proficiency-text">{skill.proficiency}%</span>
              </div>
            </motion.div>
          </FadeInUp>
        ))}
      </div>
      
      <FadeInUp delay={0.3}>
        <div className="skills-summary">
          <h3>Additional Skills</h3>
          <div className="additional-skills">
            <motion.span 
              className="additional-skill"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
            >
              Problem Solving
            </motion.span>
            <motion.span 
              className="additional-skill"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
            >
              Team Collaboration
            </motion.span>
            <motion.span 
              className="additional-skill"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
            >
              Agile Methodology
            </motion.span>
            <motion.span 
              className="additional-skill"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
            >
              UI/UX Design
            </motion.span>
            <motion.span 
              className="additional-skill"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
            >
              Responsive Design
            </motion.span>
            <motion.span 
              className="additional-skill"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
            >
              SEO Basics
            </motion.span>
            <motion.span 
              className="additional-skill"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
            >
              Performance Optimization
            </motion.span>
            <motion.span 
              className="additional-skill"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
            >
              Cross-Browser Compatibility
            </motion.span>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
};

export default Skills;