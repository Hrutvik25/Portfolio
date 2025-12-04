import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'REST APIs', icon: <FaDatabase />, color: '#2563eb' },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with to build modern applications</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3 className="additional-title">Additional Expertise</h3>
          <div className="skill-tags">
            <span className="skill-tag">Full-Stack Development</span>
            <span className="skill-tag">Database Design</span>
            <span className="skill-tag">API Development</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Agile/SDLC</span>
            <span className="skill-tag">Git Version Control</span>
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Team Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
