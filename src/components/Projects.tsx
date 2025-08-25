import useScrollReveal from '../hooks/useScrollReveal';

function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} id="projects" className={isVisible ? 'slide-up visible' : 'slide-up'}>
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-item">
          <h3>Project HEXA</h3>
          <p>Tools: [HTML,CSS,JS,react-js]</p>
          <p>a website of a company designed in react is library using the frontend tools like HTML CSS and JAVA SCRIPT</p>
          <p>Involves complete details of the company, their clients, about their owner, about the products they sell and distribute</p>
          <a href="https://github.com/maanasvarma2003/Hexapro-Technologies" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
