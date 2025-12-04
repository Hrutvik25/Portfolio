import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">HW</h3>
            <p className="footer-tagline">
              Building digital experiences with code and creativity
            </p>
            <div className="footer-social">
              <a href="https://github.com/Hrutvik25" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/hrutvik-wayase-1288bb306/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="mailto:hrutvikwayase@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experience">Experience</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>Pune, Maharashtra</li>
              <li>
                <a href="mailto:hrutvikwayase@gmail.com">hrutvikwayase@gmail.com</a>
              </li>
              <li>
                <a href="tel:+919834202107">+91-9834202107</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Technologies</h4>
            <div className="footer-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MySQL</span>
              <span>Python</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Hrutvik Wayase. Made with <FaHeart className="heart-icon" /> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
