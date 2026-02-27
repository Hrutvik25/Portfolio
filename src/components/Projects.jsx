import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Prasu Soft Lab - Official Website',
      description: 'Contributed to the development of the company\'s official website. Implemented frontend components and ensured cross-browser compatibility. Assisted in deployment and post-deployment fixes.',
      technologies: ['React.js', 'Frontend Development'],
      live: 'https://prasusoftlab.in/',
      category: 'Frontend'
    },
    {
      title: 'SkillBridge - Learning & Mentorship Platform',
      description: 'Developed a full-stack learning platform featuring course listings, mentor profiles, and admin dashboards. Designed and implemented RESTful APIs for managing users, courses, and mentor data. Built secure CRUD operations and ensured smooth communication between frontend and backend.',
      technologies: ['Spring Boot', 'React.js', 'MySQL'],
      live: 'https://skillbridgehub.co.in/',
      category: 'Full-Stack'
    },
    {
      title: 'Bank Management System',
      description: 'Developed a console-based banking application supporting account creation, deposits, withdrawals, and balance inquiry. Designed modular components using object-oriented programming principles such as encapsulation, inheritance, abstraction, and polymorphism. Implemented input validation and logical flow to ensure accurate transaction handling.',
      technologies: ['Core Java', 'OOP'],
      github: 'https://github.com/Hrutvik25/Bank-Management-System-Core-Java-.git',
      category: 'Backend'
    },
    {
      title: 'Student CRUD Application',
      description: 'Developed a student management system with complete CRUD (Create, Read, Update, Delete) functionality. Integrated MySQL database for persistent data storage and efficient data retrieval.',
      technologies: ['Spring Boot', 'MySQL'],
      github: 'https://github.com/Hrutvik25/Student_Crud_SpringBoot.git',
      category: 'Full-Stack'
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Professional Projects</h2>
          <p className="section-subtitle">Showcasing my contributions to real-world applications and systems</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-header">
                <span className="project-category">{project.category}</span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> View Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                    <FaExternalLinkAlt /> Live Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="github-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub profile for additional projects and contributions</p>
          <a href="https://github.com/Hrutvik25" target="_blank" rel="noopener noreferrer" className="github-btn">
            <FaGithub /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
