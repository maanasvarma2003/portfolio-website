import { FaUser, FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <h1 className="site-title"><FaLaptopCode className="header-title-icon" /> Portfolio</h1>
        <ul>
          <li><Link to="/about"><FaUser className="nav-icon" /> About</Link></li>
          <li><Link to="/education"><FaGraduationCap className="nav-icon" /> Education</Link></li>
          <li><Link to="/experience"><FaBriefcase className="nav-icon" /> Experience</Link></li>
          <li><Link to="/skills"><FaCode className="nav-icon" /> Skills</Link></li>
          <li><Link to="/projects"><FaLaptopCode className="nav-icon" /> Projects</Link></li>
          <li><Link to="/contact"><FaEnvelope className="nav-icon" /> Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
