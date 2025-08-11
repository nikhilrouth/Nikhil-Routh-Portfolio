import React from "react";
import "./App.css";  // We'll add basic styles here
import Skills from "./Skills";
import ResumePDF from '/src/Resume/Nikhil Routh Software Developer 3.pdf';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaPhoneAlt } from "react-icons/fa";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      {/* Hero Section */}
      <section className="hero" id="home">
       
        <h1 className="hero-title" >Nikhil Routh</h1>
        <p className="hero-pitch">
          Software Engineer with 5+ years of experience building scalable, high-performance applications — from enterprise microservices to AI-powered platforms — blending clean code with measurable business impact.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href={ResumePDF} className="btn secondary" target="_blank" rel="noopener noreferrer">
  Download Resume
</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
  <h2 className="about-title">About Me</h2>
  
  <div className="about-card">
    <p>
      I’m a Master’s in Computer Science graduate from Virginia Tech (Dec 2024) with 5+ years of professional experience in software engineering, automation, and full-stack development.
      I’ve built enterprise-scale applications, API-driven microservices, and cloud-native deployments leveraging AWS, Docker, and Kubernetes. From creating citizen-science GIS platforms like “ShoreSync” to optimizing insurance workflows for Fortune 500 clients, I deliver measurable results.
    </p>
  </div>
</section>
        {/* Skills Section */}
        <Skills />

      {/* Projects Section */}
       <h2 className="about-title" id="projects">Projects</h2>
      <section className="section projects">
        
        <div className="projects-grid">
          <div className="project-card">
            <h3>ShoreSync</h3>
            <p>NSF-funded GIS platform improving shoreline data collection efficiency by 50x with GPS-tagged image and data input.</p>
            <p className="tech-stack">React.js, Node.js, PostgreSQL, AWS, Mapbox API</p>
          </div>
          <div className="project-card">
            <h3>PerfPort</h3>
            <p>Cloud-based SaaS for investment performance analysis on AWS with secure RBAC and sub-10 second analytics.</p>
            <p className="tech-stack">J2EE, PrimeFaces, AWS EC2, MySQL</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <h2 className="about-title" id="experience">Experience</h2>
      <section  className="section experience-section">

  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <h3>Full Stack Engineer — One Community Global <span className="date">(2025–Present)</span></h3>
        <p>Migrated 40+ components to modular CSS, cutting style conflicts by 75%. Built scalable backend services with 99.8% uptime.</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <h3>Graduate Assistant — ARC Lab, Virginia Tech <span className="date">(2024)</span></h3>
        <p>Developed “ShoreSync” for citizen-driven GIS data collection. Improved field data efficiency by 50x.</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <h3>Senior Software Developer — Capgemini <span className="date">(2017–2022)</span></h3>
        <p>Designed microservices for policy, claims, and billing. Reduced regression testing time by 50% with automation frameworks.</p>
      </div>
    </div>
  </div>
</section>

<h2 className="about-title">Education</h2>
<section id="education" className="section education">
  
  <div className="education-cards">
    
    <div className="education-card">
      <h3>VNR VJIET, Hyderabad, India</h3>
      <p><strong>Bachelor’s in Electronics & Communication Engineering</strong> — May 2017</p>
    </div>

    <div className="education-card">
      <h3>Virginia Tech, Blacksburg, US</h3>
      <p><strong>Master’s in Computer Science and Applications</strong> — Dec 2024</p>
      <p>Relevant coursework: Algorithms, Cloud Software Engineering, Data Structures, DBMS, Big Data Engineering, Machine Learning</p>
    </div>
  </div>
</section>


     <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-items">
        <a href="mailto:nrouth@vt.edu" className="contact-link" aria-label="Email">
          <FaEnvelope size={24} />
          <span>nrouth@vt.edu</span>
        </a>

        <a aria-label="Phone">
          <FaPhoneAlt size={24} />
          <span>+1(540)-541-9599</span>
        </a>
        <a href="https://www.linkedin.com/in/nikhil-routh/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
      </div>
    </section>
    </div>
  );
}
