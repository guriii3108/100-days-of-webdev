import React from 'react';
import { motion } from 'framer-motion';
import resumePDF from '../../assets/resume.pdf'; // You'll need to add your PDF file

const DownloadButton = () => {
  return (
    <div className="download-resume-container">
      <motion.a 
        href={resumePDF} 
        download="YourName_Resume.pdf"
        className="download-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Full Resume
      </motion.a>
    </div>
  );
};

export default DownloadButton;