import useScrollReveal from '../hooks/useScrollReveal';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} id="contact" className={isVisible ? 'fade-in visible' : 'fade-in'}>
      <h2>Contact Me</h2>
      <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
      <div className="contact-info">
        <p><FaEnvelope className="contact-icon" /> Email: <a href="mailto:sh.maanasvarma@gmail.com">sh.maanasvarma@gmail.com</a></p>
        <p><FaPhone className="contact-icon" /> Phone: <a href="tel:+91 6362847181">+91 6362847181</a></p>
        <p><FaLinkedin className="contact-icon" /> LinkedIn: <a href="https://www.linkedin.com/in/maanas-varma-59429327b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNyzzOA35T2mGF0WR%2Bv%2FcgQ%3D%3D" target="_blank" rel="noopener noreferrer">Maanas Varma</a></p>
        <p><FaGithub className="contact-icon" /> GitHub: <a href="https://github.com/maanasvarma2003" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        <p><FaInstagram className="contact-icon" /> Instagram: <a href="https://www.instagram.com/maanas_varma/#" target="_blank" rel="noopener noreferrer">maanas_varma</a></p>
      </div>
    </section>
  );
}

export default Contact;
