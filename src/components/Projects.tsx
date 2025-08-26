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
        <div className="project-item">
          <h3>AI Trading BOT </h3>
          <p>Tools: [Random Forest, XGBoost, Deep Reinforcement Learning]</p>
          <p>Aims to develop a fully automated trading bot that uses machine learning to execute buy/sell orders on SENSEX stocks, improving trade accuracy and speed while reducing human error. </p>
          <p>The bot is designed with an aggressive risk tolerance.</p>
          <a href="https://github.com/maanasvarma2003/AI-Trading-Bot" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
