import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Resume.css';
import resume from '../../assets/ResumeCopy3.pdf';

const Resume = () => {
  return (
    <Container className="resume-container">
      <h1 className="resume-header">Resume</h1>
      <hr className="header-line" />
      <div className="resume-preview">
        <object
          data={resume}
          type="application/pdf"
          width="100%"
          height="1200px"
        >
          <p>
            Unable to display PDF file.{' '}
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </p>
        </object>
      </div>
    </Container>
  );
};

export default Resume;
