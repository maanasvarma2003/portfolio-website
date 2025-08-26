import useScrollReveal from '../hooks/useScrollReveal';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRadstudio,
  SiC,
  SiCplusplus,
  SiBootstrap,
  SiMysql,
  SiOracle,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiHuggingface,
  SiGooglecolab,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} id="skills" className={isVisible ? 'fade-in visible' : 'fade-in'}>
      <h2>Skills</h2>
      <div className="skills-category">
        <h3>Programming Languages</h3>
        <ul>
          <li><SiTypescript className="skill-icon ts" /> TypeScript</li>
          <li><FaPython className="skill-icon python" /> Python</li>
          <li><FaJava className="skill-icon java" /> Java</li>
          <li><SiC className="skill-icon c" /> C</li>
          <li><SiCplusplus className="skill-icon cpp" /> C++</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Frontend Technologies</h3>
        <ul>
          <li><FaJs className="skill-icon js" /> JavaScript (ES6+)</li>
          <li><FaReact className="skill-icon react" /> React</li>
          <li><FaHtml5 className="skill-icon html" /> HTML5</li>
          <li><FaCss3Alt className="skill-icon css" /> CSS3</li>
          <li><SiBootstrap className="skill-icon bootstrap" /> Bootstrap</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Backend Technologies</h3>
        <ul>
          <li><FaNodeJs className="skill-icon nodejs" /> Node.js</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Databases</h3>
        <ul>
          <li><SiMongodb className="skill-icon mongodb" /> MongoDB</li>
          <li><SiPostgresql className="skill-icon postgresql" /> PostgreSQL</li>
          <li><SiMysql className="skill-icon mysql" /> MySQL</li>
          <li><SiOracle className="skill-icon oracle" /> SQL Plus</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Data Science/Machine learning</h3>
        <ul>
          <li><SiPandas className="skill-icon pandas" /> Pandas</li>
          <li><SiNumpy className="skill-icon numpy" /> NumPy</li>
          <li><SiTensorflow className="skill-icon tensorflow" /> TensorFlow</li>
          <li><SiHuggingface className="skill-icon huggingface" /> HuggingFace Transformers</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3>Tools & Platforms</h3>
        <ul>
          <li><FaGitAlt className="skill-icon git" /> Git & GitHub</li>
          <li><VscCode className="skill-icon vscode" /> VS Code</li>
          <li><FaAws className="skill-icon aws" /> AWS</li>
          <li><SiGooglecolab className="skill-icon googlecolab" /> Google Colab</li>
          <li><SiRadstudio className="skill-icon rstudio" /> R Studio</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
