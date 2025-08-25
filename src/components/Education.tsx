import useScrollReveal from '../hooks/useScrollReveal';

function Education() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} id="education" className={isVisible ? 'fade-in visible train-theme' : 'fade-in train-theme'}>
      <h2>Education</h2>
      <div className="train-track-container">
        <div className="train-track"></div>
        <div className="train-cars-wrapper">
          <div className="train-car">
            <div className="education-item">
              <h3>B Tech in computer Science and Engineering </h3>
              <p>Vellore institute of technology, Vellore Tamil Nadu</p>
              <p>Graduation: May 2026</p>
              <ul>
                <li>Specialization: IOT </li>
                <li>Grade: 7.56 upto 6th semester</li>
              </ul>
            </div>
          </div>
          <div className="train-car connector"></div>
          <div className="train-car">
            <div className="education-item">
              <h3>Higher Secondary (12th Grade)</h3>
              <p>Expert P U college, Mangalore, Karnataka</p>
              <p>Graduation: June 2022</p>
              <ul>
                <li>Major: PCMC</li>
                <li>Grade: 91.83%</li>
              </ul>
            </div>
          </div>
          <div className="train-car connector"></div>

          

          <div className="train-car">
            <div className="education-item">
              <h3>Secondary (10th Grade)</h3>
              <p>S T Francis School (ICSE), Bengaluru, Karnataka</p>
              <p>Graduation: March 2020</p>
              <ul>
                <li>Grade: 92.5%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
