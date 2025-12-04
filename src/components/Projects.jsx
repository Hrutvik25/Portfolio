import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Online Attendance System Using Facial Recognition',
      description: 'AI-powered attendance tracking system using facial recognition technology. Built with Python and machine learning libraries to automate attendance management with high accuracy.',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Flask'],
      github: 'https://github.com/Hrutvik25/Online-Attendance-System-Using-Facial-Recognition-.git',
      category: 'AI/ML'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Intelligent voice-activated assistant capable of understanding natural language commands and performing various tasks. Features speech recognition and text-to-speech capabilities.',
      technologies: ['Python', 'NLP', 'Speech Recognition', 'AI'],
      github: 'https://github.com/Hrutvik25/AI-VOICE-ASSISTENT-.git',
      category: 'AI/ML'
    },
    {
      title: 'Pet Haven - Pet Service E-commerce',
      description: 'Full-stack e-commerce platform for pet services including grooming bookings, product listings, and user authentication. Complete SDLC implementation with modern UI/UX.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Database'],
      github: 'https://github.com/Hrutvik25/Pet-Haven.git',
      category: 'Full-Stack'
    },
    {
      title: 'Calculator Using Spring Boot',
      description: 'RESTful calculator application built with Spring Boot framework. Demonstrates backend API development and mathematical operations handling.',
      technologies: ['Java', 'Spring Boot', 'REST API'],
      github: 'https://github.com/Hrutvik25/Calculator_SpringBoot',
      category: 'Backend'
    },
    {
      title: 'Student CRUD App',
      description: 'Complete student management system with CRUD operations. Built using Spring Boot backend with MySQL database integration for data persistence.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
      github: 'https://github.com/Hrutvik25/Student_Crud_SpringBoot',
      category: 'Full-Stack'
    },
    {
      title: 'Employee CRUD App',
      description: 'Modern employee management application built with React.js. Features include add, update, delete, and view employee records with a responsive user interface.',
      technologies: ['React.js', 'JavaScript', 'CSS', 'REST API'],
      github: 'https://github.com/Hrutvik25/Employee_Crud_App_React',
      category: 'Frontend'
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my development work and technical capabilities</p>
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
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View Code
                </a>
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
