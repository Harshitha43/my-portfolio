// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">I'm an experienced software engineer specializing in frontend development, with a strong focus on creating responsive and engaging user interfaces.</p>
      
      <div className="section experience">
        <h3 className="section-title">Experience</h3>
        <div className="experience-details">
          <h4 className="company-name">Webwings Global Solutions Pvt Ltd</h4>
          <p><strong>Role:</strong> Software Engineer</p>
          <p><strong>Duration:</strong> 2023 - Present</p>
          <p>Responsibilities:</p>
          <ul className="responsibilities-list">
            <li>Led the development of a corporate website, focusing on responsive design and visually engaging animations.</li>
            <li>Built a web application providing real-time data updates for a seamless user experience.</li>
            <li>Developed a smart TV application featuring an interactive interface optimized for performance and usability.</li>
            <li>Collaborated with backend teams and designers to ensure efficient project delivery and integration.</li>
          </ul>
        </div>
      </div>

      <div className="section education">
        <h3 className="section-title">Education</h3>
        <div className="education-details">
          <p><strong>Sahyadri College of Engineering and Management</strong></p>
          <p><strong>CGPA:</strong> 8.41</p>
          <p><strong>Degree:</strong> B.Tech/B.E., Class of 2023</p>
        </div>
      </div>

      <div className="section skills">
        <h3 className="section-title">Skills</h3>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>C++</li>
          <li>Data Structures</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
