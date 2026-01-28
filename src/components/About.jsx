import { FaGraduationCap, FaCertificate, FaCode, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = [
    {
      degree: 'B.Tech – Computer Science & Engineering (AI & Analytics)',
      institution: 'MIT ADT University',
      duration: '2021 – 2025',
      cgpa: '60%'
    },
    {
      degree: '12th Grade',
      institution: 'MSBSHSE',
      duration: '2021',
      cgpa: '68%'
    },
    {
      degree: '10th Grade',
      institution: 'MSBSHSE',
      duration: '2019',
      cgpa: '77%'
    }
  ];

  const certifications = [
    'Cloud Computing Applications',
    'Exploratory Data Analysis',
    'Python Programming Fundamentals',
    'Python Foundation Certification'
  ];

  return (
    <section className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about my background and journey</p>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <div className="intro-icon">
              <FaCode />
            </div>
            <p>
              Hello! I'm <strong>Hrutvik Sudarshan Wayase</strong>, a passionate Full Stack Developer from Pune, Maharashtra. 
              Born on March 25, 2003, I specialize in building scalable web applications using modern technologies like 
              Java, Spring Boot, and React.js.
            </p>
            <p>
              With hands-on experience in full-stack development, I've worked on diverse projects ranging from 
              AI-powered attendance systems to e-commerce platforms. I'm proficient in both frontend and backend 
              technologies, with a strong foundation in database design and RESTful API development.
            </p>
            <p>
              I'm fluent in <strong>English, Marathi, and Hindi</strong>, which helps me collaborate effectively 
              in diverse team environments. Currently, I'm working as a Software Developer Intern at HashedBit 
              Innovations, where I continue to expand my skills and contribute to innovative projects.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <FaLightbulb />
              <h3>Problem Solver</h3>
              <p>Passionate about tackling complex challenges with creative and efficient solutions</p>
            </div>
            <div className="highlight-card">
              <FaCode />
              <h3>Clean Code Advocate</h3>
              <p>Committed to writing maintainable, scalable, and well-documented code</p>
            </div>
            <div className="highlight-card">
              <FaGraduationCap />
              <h3>Continuous Learner</h3>
              <p>Always exploring new technologies and best practices in software development</p>
            </div>
          </div>

          <div className="education-section">
            <h3 className="subsection-title">
              <FaGraduationCap /> Education
            </h3>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <div className="edu-details">
                    <span>{edu.duration}</span>
                    <span className="cgpa">{edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certification-section">
            <h3 className="subsection-title">
              <FaCertificate /> Certifications
            </h3>
            <div className="certification-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <FaCertificate />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
