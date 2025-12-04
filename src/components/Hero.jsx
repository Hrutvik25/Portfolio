import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Hrutvik Sudarshan Wayase</h1>
            <h2 className="hero-role">
              <span className="gradient-text">Full Stack Developer</span>
            </h2>
            <p className="hero-tech">Java • Spring Boot • ReactJS</p>
            <p className="hero-description">
              Passionate about building scalable web applications and AI-powered solutions. 
              Currently crafting seamless user experiences with modern technologies.
            </p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>

            <div className="hero-info">
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Pune, Maharashtra</span>
              </div>
              <div className="info-item">
                <FaEnvelope />
                <span>hrutvikwayase@gmail.com</span>
              </div>
              <div className="info-item">
                <FaPhone />
                <span>+91-9834202107</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Hrutvik25" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/hrutvik-wayase-1288bb306/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="mailto:hrutvikwayase@gmail.com" className="social-icon">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <div className="code-symbol">&lt;/&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
