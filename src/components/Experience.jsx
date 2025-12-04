import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'HashedBit Innovations',
      location: 'Remote',
      duration: 'Jan 2025 – Jul 2025',
      current: true,
      responsibilities: [
        'Developing full-stack applications using Java backend and React frontend',
        'Building and optimizing Learning Management System (LMS) modules',
        'Implementing MySQL database optimization strategies for improved performance',
        'Working on RESTful API integrations and microservices architecture',
        'Enhancing UI components in React for better user experience',
        'Collaborating with cross-functional teams in Agile environment'
      ]
    },
    {
      role: 'Infosys Springboard Intern',
      company: 'Infosys',
      location: 'Remote',
      duration: 'Dec 2024 – Feb 2025',
      current: false,
      responsibilities: [
        'Built a comprehensive full-stack e-commerce website for pet services',
        'Implemented grooming booking system with payment integration',
        'Developed product listing and catalogue management features',
        'Created user authentication and authorization system',
        'Utilized HTML, CSS, JavaScript for frontend and Python for backend',
        'Followed complete Software Development Life Cycle (SDLC)',
        'Applied UI/UX principles for enhanced user experience',
        'Worked collaboratively in team environment with version control'
      ]
    }
  ];

  return (
    <section className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My journey in software development</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-content">
                <div className="exp-header">
                  <div className="exp-main">
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  {exp.current && <span className="current-badge">Current</span>}
                </div>

                <div className="exp-meta">
                  <div className="meta-item">
                    <FaCalendar />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>
                      <FaCheckCircle />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
