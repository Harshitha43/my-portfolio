// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Ecommerce-website',
    description:  'A responsive React website featuring advanced animations, a shopping cart, total amount calculation, and item management. Technologies used: React, HTML, CSS, JavaScript.',
    demoLink: 'https://harshitha43.github.io/Ecommerce-website/',
    githubLink: 'https://github.com/Harshitha43/Ecommerce-website',
  },
  {
    title: 'Attendance Managemenet System',
    description: 
    'A comprehensive attendance management system with three login roles: Admin, Manager, and User. Built using React for the frontend, Node.js for the backend, and PgAdmin for database management. Users can view profile details, check leave balance, and apply for leave. Admins have access to all employee records and can approve or reject leave requests. Managers have similar functionality but can only view and manage leave requests for employees within their department.',
    videoLink: 'https://drive.google.com/file/d/14vGVu62I4L7vImgAMZUyF8k5aSd0scTb/view?usp=sharing',
    githubLink: 'https://github.com/Harshitha43/attendance_managemnet_system',
  },
  {
    title: 'Task Manager',
    description: 
    'A simple, functional task management application developed using HTML, CSS, and JavaScript. This project provides users with the ability to manage a list of tasks with core features like adding, editing, and deleting tasks. Each task is displayed in a list format, making it easy for users to organize their tasks.',
    demoLink: 'https://harshitha43.github.io/Task_Manager/',
    githubLink: 'https://github.com/Harshitha43/Task_Manager',
  },
  {
    title: 'Typeahead',
    description: 
    'A user-friendly, real-time typeahead search component developed with HTML, CSS, and JavaScript. This project enhances the search experience by suggesting results dynamically as the user types, helping them find information faster and more efficiently.',
    demoLink: 'https://harshitha43.github.io/Typeahead/',
    githubLink: 'https://github.com/Harshitha43/Typeahead',
  },

  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.videoLink ? (
              <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Demo Video
              </a>
            ) : (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
            )}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
