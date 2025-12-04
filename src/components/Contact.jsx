import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_a0j4prl';
  const EMAILJS_PUBLIC_KEY = 'Q-kMa7snFxZfaVYR7';
  const TEMPLATE_TO_ME = 'template_p218hue'; // Template for messages to you
  const TEMPLATE_AUTO_REPLY = 'template_g8wia26'; // Auto-reply template

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Template parameters for the message to you
      const templateParamsToMe = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      // Template parameters for auto-reply to sender
      const templateParamsAutoReply = {
        to_name: formData.name,
        to_email: formData.email,
        reply_to: formData.email
      };

      // Send notification to you
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATE_TO_ME,
        templateParamsToMe,
        EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply to the sender
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATE_AUTO_REPLY,
        templateParamsAutoReply,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <a href="mailto:hrutvikwayase@gmail.com">hrutvikwayase@gmail.com</a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <a href="tel:+919834202107">+91-9834202107</a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>Pune, Maharashtra, India</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaGithub />
              </div>
              <h3>GitHub</h3>
              <a href="https://github.com/Hrutvik25" target="_blank" rel="noopener noreferrer">
                github.com/Hrutvik25
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/hrutvik-wayase-1288bb306/" target="_blank" rel="noopener noreferrer">
                Connect with me
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitStatus.message && (
              <div className={`status-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
