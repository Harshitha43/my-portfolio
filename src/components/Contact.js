// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-item">Email: harshithasd2019@gmail.com</p>
      <p className="contact-item">Phone: +91 9686757124</p>
      <p className="contact-item">Location: Bengaluru</p>
      
      <h3 className="social-title">Connect with Me</h3>
      <ul className="social-links">
        <li><a href="https://www.linkedin.com/in/harshitha-s-d-b404881aa/"
         target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://leetcode.com/harshithasdevaraj" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
        <li><a href="https://hackerrank.com/harshithasd2019" target="_blank" rel="noopener noreferrer">HackerRank</a></li>
        <li><a href="https://github.com/Harshitha43" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>
  );
};

export default Contact;
