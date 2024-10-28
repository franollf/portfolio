// Header.tsx
import React from 'react';
import './Header.css';

interface HeaderProps {
  onHelpClick: () => void; // Add onHelpClick prop
}

const Header: React.FC<HeaderProps> = ({ onHelpClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#bio">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#volunteer-experience">Volunteer Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><button className ="help-button" onClick={onHelpClick}>Help</button></li> {/* Help button */}
      </ul>
    </nav>
  );
};

export default Header;
