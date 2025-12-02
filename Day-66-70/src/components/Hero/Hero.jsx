import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { FadeInLeft, FadeInRight } from '../animations/ScrollAnimation';
import heroImage from '../../assets/images/IMG_0281.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <FadeInLeft>
          <h1>Hi, I'm <span className="highlight">Gurveer Singh</span></h1>
        </FadeInLeft>
        
        <FadeInLeft delay={0.1}>
          <h2>I'm a <span className="typing">Web Developer</span></h2>
        </FadeInLeft>
        
        <FadeInLeft delay={0.2}>
          <p>I create modern and responsive web applications</p>
        </FadeInLeft>
        
        <FadeInLeft delay={0.3}>
          <div className="hero-buttons">
            <motion.a 
              href="#projects" 
              className="btn primary-btn"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 112, 243, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn secondary-btn"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 112, 243, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </FadeInLeft>
      </div>
      
      <FadeInRight>
        <div className="hero-image">
          <motion.img 
            src={heroImage} 
            alt="Your Name - Web Developer" 
            className="profile-image"
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut" 
            }}
          />
        </div>
      </FadeInRight>
    </section>
  );
};

export default Hero;