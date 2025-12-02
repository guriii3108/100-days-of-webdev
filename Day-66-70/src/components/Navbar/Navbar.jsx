import React, { useState } from 'react';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">Gurveer Singh</a>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#skills">Skills</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="navbar-actions">
          <ThemeToggle />
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;