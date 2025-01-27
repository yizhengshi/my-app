import React from "react";
import { Container, Button } from "react-bootstrap";
import TechTag from "./TechTag";

class ProjectOverview extends React.Component {
  getButtons = () => {
    if (this.props.github) {
      return (
        <div className="project-buttons-container">
          <Button
            className="project-button"
            target="_blank"
            href={this.props.github}
          >
            GitHub
          </Button>
          <Button
            className="project-button"
            target="_blank"
            href={this.props.web}
          >
            Demo
          </Button>
        </div>
      );
    }
    return null;
  };

  render() {
    const techStack = this.props.tech.split(", ");

    return (
      <Container className="project-overview">
        <div className="project-row space-between">
          <div className="project-title">{this.props.title}</div>
          <div className="project-year">{this.props.year}</div>
        </div>
        <div className="project-row space-between" style={{ marginTop: "12px" }}>
          <div className="project-description">{this.props.description}</div>
        </div>
        <div className="project-row space-between" style={{ marginTop: "16px", alignItems: "center" }}>
          <div className="project-tech-section">
            <div className="project-tech-tags">
              {techStack.map((tech, index) => (
                <TechTag key={index} tech={tech.trim()} />
              ))}
            </div>
          </div>
          {this.getButtons()}
        </div>
      </Container>
    );
  }
}

export default ProjectOverview;
