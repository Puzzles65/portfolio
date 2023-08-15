import '../Contact/Contact.scss'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:chitrungnguyen12@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Puzzles65" target="_blank" rel="noreferrer">
          <FaGithub /> 
        </a>
        <a href="https://www.linkedin.com/in/chi-trung-nguyen/" target="_blank" rel="noreferrer">
          <FaLinkedin /> 
        </a>
      </div>
    </section>
  );
}

export default Contact;
