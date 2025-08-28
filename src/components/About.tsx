import useScrollReveal from '../hooks/useScrollReveal';
import React from 'react'; // Import React for React.Ref

function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref as React.Ref<HTMLElement>} id="about" className={isVisible ? 'fade-in visible' : 'fade-in'}>
      <div className="about-content">
        <img src="/profilepic.jpg" alt="My Profile" className="profile-photo" />
        <h2>About Me</h2>
        <p>We don't wait for a better future, we create it.</p>
        <p className="author-name">MAANAS VARMA</p>
        <p>A student pursuing Btech degree in computer science and engineering at Vellore Institute of technology, Vellore. have
a strong aptitude and problem solving skills. I am passionate about innovation, utilizing my technical expertise and creativity to solve real-world problems. I thrive in collaborative settings, enjoy learning new tools and frameworks, and consistently deliver high-quality outcomes under tight timelines</p>
        <p>Hobbies: Sports like Football, Badminton and cricket. I am also into trading and investing in stocks and equities . I have 'A' certificate in NCC and a black belt in karate.</p>
        <p>I like to travel and explore new places. I have visited many places in india and abroad</p>
        <p>I like to dive into challenges and learn new things. I am a quick learner and I am always looking for new challenges and opportunities to grow.</p>
        <a href="https://drive.google.com/file/d/1nsw1qwuktIHsD1Y1XvrGBQFwFYAJl29B/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-link">View Resume</a>
      </div>
    </section>
  );
}

export default About;
