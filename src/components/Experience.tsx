import useScrollReveal from '../hooks/useScrollReveal';

function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} id="experience" className={isVisible ? 'slide-up visible' : 'slide-up'}>
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Front end Developer Intern</h3>
        <p>May 2024 - June 2024</p>
        <ul>
          <li>Designed a website for a company using frontend tools.</li>
          <li>Involves complete details of the company, their clients, about their owner, about the products they sell and distribute</li>
          <li>Tools used: React-js, HTML, Java script, CSS, Bootstrap</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
