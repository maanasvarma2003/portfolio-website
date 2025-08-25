import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>Made with ❤️ by Maanas Varma </p>
        <div className="footer-contact-links">
          <a href="mailto:sh.maanasvarma@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="footer-icon" />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/maanas-varma-59429327b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0qRnPn8CQYKPS6Dxs%2FW%2F3A%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/maanasvarma2003" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
            <span>GitHub</span>
          </a>
          <a href="https://www.instagram.com/maanas_varma/#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
