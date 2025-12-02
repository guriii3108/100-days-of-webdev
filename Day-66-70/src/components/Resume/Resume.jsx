import React, { useState } from 'react';
import './Resume.css';
import resumeData from '../../data/resume';
import ResumeHeader from './ResumeHeader';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import DownloadButton from './DownloadButton';
import { motion } from 'framer-motion';
import { FadeInUp } from '../animations/ScrollAnimation';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <section id="resume" className="resume-section">
      <FadeInUp>
        <div className="section-header">
          <h2>My Resume</h2>
          <p>My professional journey and qualifications</p>
        </div>
      </FadeInUp>

      <div className="resume-container">
        <FadeInUp delay={0.1}>
          <ResumeHeader resumeData={resumeData} />
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="resume-tabs">
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </FadeInUp>

        <div className="resume-content">
          {activeTab === 'experience' && (
            <FadeInUp delay={0.3}>
              <ExperienceSection experience={resumeData.experience} />
            </FadeInUp>
          )}
          
          {activeTab === 'education' && (
            <FadeInUp delay={0.3}>
              <EducationSection education={resumeData.education} />
            </FadeInUp>
          )}
          
          {activeTab === 'skills' && (
            <FadeInUp delay={0.3}>
              <SkillsSection skills={resumeData.skills} />
            </FadeInUp>
          )}
          
          {activeTab === 'certifications' && (
            <FadeInUp delay={0.3}>
              <CertificationsSection certifications={resumeData.certifications} />
            </FadeInUp>
          )}
        </div>

        <FadeInUp delay={0.4}>
          <DownloadButton />
        </FadeInUp>
      </div>
    </section>
  );
};

export default Resume;