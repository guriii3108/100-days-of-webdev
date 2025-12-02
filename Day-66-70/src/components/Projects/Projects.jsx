import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projects from '../../data/projects';
import { motion } from 'framer-motion';
import { FadeInUp } from '../animations/ScrollAnimation';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="projects-section">
      <FadeInUp>
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Here are some of my recent work</p>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="filter-buttons">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </FadeInUp>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <FadeInUp key={project.id} delay={0.1 * index}>
            <ProjectCard project={project} onClick={() => openModal(project)} />
          </FadeInUp>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;