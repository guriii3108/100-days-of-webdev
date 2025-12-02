import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FadeInUp, FadeInLeft, FadeInRight } from '../animations/ScrollAnimation';
import aboutImage from '../../assets/images/piccc.jpg'; // Add your image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <FadeInUp>
          <h2>About Me</h2>
          <div className="section-underline"></div>
        </FadeInUp>
      </div>

      <div className="about-content">
        <FadeInLeft>
          <div className="about-image-container">
            <motion.img 
              src={aboutImage} 
              alt="About Me" 
              className="about-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {/* <div className="experience-badge">
              <span className="years">1+</span>
              <span className="text">Years of Experience</span>
            </div> */}
          </div>
        </FadeInLeft>

        <FadeInRight>
          <div className="about-text">
            <h3>Full Stack Developer & AI/ML Engineer</h3>
            <p className="about-intro">
            I’m Gurveer Singh, a Computer Science Engineer specializing in Artificial Intelligence & Machine Learning from Chandigarh University. I am passionate about leveraging AI, machine learning, and data science to solve complex real-world problems. My expertise includes computer vision (YOLOv8, OpenCV), deep learning, predictive modeling, and automation, allowing to build intelligent and scalable solutions.
            </p>
            <p>
            In addition to AI, I have strong full-stack development skills in Python, ReactJS, NodeJS, JavaScript, and SQL, enabling me to integrate AI-powered solutions into dynamic applications. Being diligent, result-oriented, and innovative, I constantly strive to optimize processes and create impactful solutions that drive business growth and enhance user experiences.
            </p>
            {/* <p>
              With 3+ years of experience in web development, I've worked on a variety of projects ranging from small business websites to complex enterprise applications. I specialize in building responsive, accessible, and performant web applications using modern technologies.
            </p> */}
            
            <div className="personal-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Gurveer Singh</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">sgurveer97@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Punjab, India</span>
              </div>
              <div className="info-item">
                <span className="info-title">Availability:</span>
                <span className="info-value">Open to opportunities</span>
              </div>
            </div>
            
            <div className="about-skills">
              <h4>My Skills</h4>
              <div className="skill-tags">
                <motion.span 
                  className="skill-tag"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  JavaScript
                </motion.span>
                <motion.span 
                  className="skill-tag"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  React.js
                </motion.span>
                <motion.span 
                  className="skill-tag"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  Node.js
                </motion.span>
                <motion.span 
                  className="skill-tag"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  HTML/CSS
                </motion.span>
                <motion.span 
                  className="skill-tag"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  MongoDB
                </motion.span>
                <motion.span 
                  className="skill-tag"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  Express.js
                </motion.span>
                <motion.span 
                  className="skill-tag"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  UI/UX Design
                </motion.span>
                <motion.span 
                  className="skill-tag"
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  Responsive Design
                </motion.span>
              </div>
            </div>
            
            <motion.a 
              href="/resume.pdf" 
              download
              className="download-cv-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 112, 243, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </motion.a>
          </div>
        </FadeInRight>
      </div>
    </section>
  );
};

export default About;