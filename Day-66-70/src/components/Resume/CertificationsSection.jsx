import React from 'react';
import { motion } from 'framer-motion';

const CertificationsSection = ({ certifications }) => {
  return (
    <div className="certifications-section">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div 
            key={cert.id} 
            className="certification-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
          >
            <div className="certification-content">
              <h3 className="certification-name">{cert.name}</h3>
              <div className="certification-details">
                <span className="issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certificate
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;