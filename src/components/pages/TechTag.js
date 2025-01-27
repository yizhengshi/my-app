import React from 'react';
import './styles/TechTag.css';

const TechTag = ({ tech }) => {
  return (
    <span className="tech-tag">
      {tech}
    </span>
  );
};

export default TechTag; 