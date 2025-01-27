import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Education.css';
import YaleLogo from '../../assets/images/yale-logo.png';
import UWLogo from '../../assets/images/wisc.png';

const Education = () => {
  return (
    <Container className="education-container">
      <h1 className="education-header">Education</h1>
      <hr className="header-line" />
      
      <div className="education-entry">
        <div className="education-content">
          <div className="education-main">
            <span className="university-name">Yale University</span>
            <ul className="degree-list">
              <li>Master of Science - MS, Computer Science
                <ul className="details-list">
                  <li>Aug 2023 - May 2025</li>
                  <li>Grade: 4.00/4.00</li>
                  <li>Awards: Full ride scholarship, Dean's List</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="school-logo">
            <img src={YaleLogo} alt="Yale University Logo" />
          </div>
        </div>
      </div>

      <div className="education-entry">
        <div className="education-content">
          <div className="education-main">
            <span className="university-name">University of Wisconsin-Madison</span>
            <ul className="degree-list">
              <li>Bachelor of Science - BS, Computer Science
                <ul className="details-list">
                  <li>Sep 2020 - May 2023</li>
                  <li>Grade: 4.00/4.00</li>
                  <li>Awards: Highest Honor, Dean's List</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="school-logo">
            <img src={UWLogo} alt="Yale University Logo" />
          </div>
        </div>
      </div>

      <h2 className="coursework-header">Relevant Coursework</h2>
      <ul className="course-list">
        <li>CPSC 526: Build Distributed System</li>
        <li>CPSC 519: Full Stack Web Programming</li>
        <li>CPSC 583: Deep Learning on Graphs-Structured Data</li>
        <li>CPSC 552: Deep Learning Theory and Applications</li>
        <li>CPSC 577: Natural Language Processing</li>
        <li>CS 540: Artificial Intelligence</li>
        <li>CS 300: Data Structure</li>
        <li>CS 577: Algorithm</li>
        <li>CS 368: Programming C++</li>
        <li>CS 537: Operating System</li>
        <li>CS 354: Machine Oragnization and Programming</li>
        <li>CS 564: Database Management System</li>
        <li>CS 640: Computer Networking</li>
        <li>ECE/CS 252: Computer Engineering</li>
        <li>CS 539: Computer Vision</li>
        <li>ECE/CS 532: Matrix Methods in Machine Learning</li>
      </ul>
    </Container>
  );
};

export default Education; 