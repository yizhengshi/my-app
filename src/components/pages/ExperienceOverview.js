import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import "./styles/ExperienceOverview.css";

const ExperienceOverview = (props) => {
  const renderTechStack = () => {
    if (!props.tech) return null;
    
    const techArray = props.tech.split(',').map(tech => tech.trim());
    return (
      <div className="tech-stack-container">
        <div className="tech-stack-label">{props.word || "Tech Stack:"}</div>
        <div className="tech-tags">
          {techArray.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Container className="experience-item">
      <div className="experience-header">
        <div className="title-section">
          <div className="experience-title">{props.title}</div>
          <div className="experience-year">{props.year}</div>
        </div>
        <div className="meta-section">
          <div className="experience-position">{props.position}</div>
          <div className="experience-location">{props.location}</div>
        </div>
      </div>
      
      <div className="experience-description">
        {props.description}
      </div>
      
      {renderTechStack()}
    </Container>
  );
};

export default ExperienceOverview;
