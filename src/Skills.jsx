import React from "react";
import "./Skills.css"; // we'll put CSS here

export default function Skills() {
  const coreSkills = [
 { name: "Java", logoSvg: "/src/logos/java.svg", level: 90, note: "5+ yrs backend, microservices, concurrency" },
  { name: "Spring Boot", logoSvg: "src/logos/spring.svg", level: 88, note: "REST APIs, microservices, security" },
  { name: "AWS", logoSvg: "src/logos/aws.svg", level: 85, note: "Lambda, EC2, S3, cloud-native deployments" },
  { name: "React.js", logoSvg: "src/logos/react.svg", level: 80, note: "Hooks, Redux, modular architecture" },
  { name: "Docker", logoSvg: "src/logos/docker.svg", level: 82, note: "Containerization & deployments" },
  { name: "Kubernetes", logoSvg: "src/logos/kubernetes.svg", level: 78, note: "Orchestration & scaling" },
    
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
          <div
      key={name}
      className="skill-card core"
    >
      <h3
      >{name}</h3>
      <div className="progress-bar-background">
        <div
          className="progress-bar-fill"
          style={{ width: `${level}%` }}
          aria-label={`${name} skill level ${level}%`}
        />
      </div>
      <p className="skill-note">{note}</p>
    </div>
        ))}
      </div>

     <div className="skills-grid">
  {otherSkills.map(({ category, skills }) => (
    <div key={category} className="skill-card">
      <h3 style={{ 
        marginBottom: "1rem",
    fontSize: "1.5rem",
    paddingBottom: "0.25rem",
    color: "black",
    borderBottom: "1px solid rgba(128, 128, 128, 0.4)", // thin and 40% opaque gray
       }} >{category}</h3>
      <ul className="skills-list">
        {skills.split(",").map((skill) => (
          <li key={skill.trim()} className="skill-item">
            {skill.trim()}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
    </section>
  );
}
