import React from "react";
import "./Skills.css"; // we'll put CSS here

export default function Skills() {
  const coreSkills = [
    { name: "Java", level: 90, note: "5+ years backend microservices" },
    { name: "AWS", level: 85, note: "Cloud deployments & Lambda" },
    { name: "React.js", level: 80, note: "Frontend with hooks & Redux" },
    
  ];

  const otherSkills = [
    { category: "API & Integrations", skills: "RESTful APIs, OAuth2, Postman, Swagger/OpenAPI" },
    { category: "Testing", skills: "JUnit, Mockito, Selenium WebDriver" },
    { category: "Frameworks", skills: "Spring Boot, Hibernate, Spring MVC, Node.js, Kafka" },
    { category: "Cloud & DevOps", skills: "Jenkins, GitHub Actions, Docker, Kubernetes, CI/CD" },
    { category: "Databases", skills: "Oracle, MySQL, PostgreSQL, MongoDB" },
    { category: "Tools", skills: "Git, Maven, Gradle, Jira, Confluence" },
    { category: "IDEs", skills: "IntelliJ IDEA, VSCode, Eclipse, Android Studio" },
    { category: "Methodologies", skills: "Agile (Scrum, Kanban), SDLC, System Design" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="core-skills-grid">
        {coreSkills.map(({ name, level, note }) => (
          <div key={name} className="skill-card core">
            <h3>{name}</h3>
            <div className="progress-bar-background">
              <div
                className="progress-bar-fill"
                style={{ width: `${level}%` }}
                aria-label={`${name} skill level ${level}%`}
              ></div>
            </div>
            <p className="skill-note">{note}</p>
          </div>
        ))}
      </div>

      <div className="skills-grid">
        {otherSkills.map(({ category, skills }) => (
          <div key={category} className="skill-card">
            <h3>{category}</h3>
            <p>{skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
