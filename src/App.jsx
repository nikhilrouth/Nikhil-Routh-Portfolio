import React from "react";
import "./App.css";  // We'll add basic styles here
import Skills from "./Skills";
import ResumePDF from '/src/Resume/Nikhil Routh Software Developer 3.pdf';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaPhoneAlt } from "react-icons/fa";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="app" >
      <Navbar  />
      {/* Hero Section */}
  <section className="hero" id="home">
   
  {/* Floating badge */}
  <div className="open-to-work-badge" >
    <span className="dot"></span>
    <span>Open to Work</span>
  </div>

  <h1 className="hero-title">Nikhil Routh</h1>
  <h2 className="hero-subtitle"><strong>Software Engineer | Full-Stack & Cloud Solutions | 5+ Years Experience</strong></h2>
  <p className="hero-pitch">
    I build scalable, high-performance applications that deliver measurable business impact, from enterprise-grade microservices to AI-powered platforms. My work blends clean, maintainable code with a strong focus on user experience and product value.
  </p>
  <div className="hero-buttons">
    
    <a
      href={ResumePDF}
      className="btn secondary"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Resume
    </a>
    
  </div>

 
 <a
  href="#about"
  style={{
    display: "block",
    textAlign: "center",
    marginTop: "2rem",
    opacity: 0.5,
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "1rem",
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
    animation: "fadeMoveUp 4s ease-in-out infinite",
  }}
>
  Scroll for more
</a>
  
</section>

      {/* About Section */}
      <section id="about">
  <h2 className="about-title">About Me</h2>
  
  <div className="about-card">
    <p>
  I’m a Master’s in Computer Science graduate from <strong>Virginia Tech</strong> (Dec 2024) with 5+ years of experience in software engineering, automation, and full-stack development. 
  I’m passionate about solving problems, curious by nature, and detail-oriented when turning ideas into real, working products. 
  I love building things — whether it is enterprise-scale systems, clever automation scripts, or something fun on a weekend.
</p>
<p>
  From building <strong>ShoreSync</strong>, a citizen-science GIS platform improving shoreline data collection efficiency by <strong>50x</strong>, to architecting microservices for Fortune 500 insurance clients with <strong>99.95% uptime</strong>, I enjoy taking even simple concepts and making them impactful, scalable, and polished.
</p>
<p>
  Outside of work, I’m a fun-loving, goal-driven guy who believes in giving back and finding humor in just about anything.  
  I can dance (was pretty good at it), binge sitcoms and movies, get competitive on LeetCode, and disappear into either beaches or mountains depending on my mood.  
  I’m also proud to be the first in my family to pursue a Master’s in the U.S., and yes, I’ll happily trade code reviews for travel recommendations.
</p>

<p>I am currently seeking full-time software engineering roles where I can contribute my skills and continue growing.</p>
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
          <div className="project-card">
            <h3>Ecom-Pulse</h3>
            <p>Full-stack microservices-based eCommerce platform with real-time order processing, secure authentication, and event-driven inventory updates using Kafka.</p>
            <p className="tech-stack">Spring Boot, React, Redux, Docker, Kafka, Microservices</p>
          </div>
          
          <div className="project-card">
            <h3>Viscape</h3>
            <p>Kotlin Android app with location-based image discovery, offline caching, and custom map markers for interactive travel exploration.</p>
            <p className="tech-stack">Kotlin, MapView, REST APIs</p>
          </div>
          <div className="project-card">
            <h3>Batch to Stream Processing</h3>
            <p>Converted batch data pipelines to real-time stream processing, improving performance by 70% and achieving 97.5% accuracy in live analytics.</p>
            <p className="tech-stack">Scala, Kafka, Scalameta</p>
          </div>
          <div className="project-card coming-soon">
              <h3> More Projects Coming Soon!</h3>
              <p>I’m building something awesome! watch this space for my next launch.</p>
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
      <p>Relevant coursework: Data Structures, Java, Computer Programming, Databases, Operating Systems</p>

    </div>

    <div className="education-card">
      <h3>Virginia Tech, Blacksburg, US</h3>
      <p><strong>Master’s in Computer Science and Applications</strong> — Dec 2024</p>
      <p >Relevant coursework: Algorithms, Cloud Software Engineering, Data Structures, DBMS, Big Data Engineering, Machine Learning</p>
    </div>
  </div>
</section>


     <section id="contact" className="contact-section">
      <h2>Let's Connect</h2>
      <div className="contact-items">
        <a href="mailto:nrouth@vt.edu" className="contact-link" aria-label="Email">
          <FaEnvelope size={24} />
          <span>nrouth@vt.edu</span>
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

    <footer className="footer">
  <p>© {new Date().getFullYear()} Nikhil Routh. All rights reserved.</p>
</footer>
    </div>

    
  );
  
}
