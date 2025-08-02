import React, { useRef, useEffect, useState } from "react";

function Skills() {
  const skillsRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="Skills" ref={skillsRef}>
      <h1>SKILLS</h1>
      <div className="skills-container">

        <div className="skill-category">
          <h3>PROGRAMMING <br />LANGUAGES</h3>
          <div className="skills">
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-html5-plain colored"></i>
              <span>HTML</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-css3-plain colored"></i>
              <span>CSS</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-javascript-plain colored"></i>
              <span>JavaScript</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-cplusplus-plain colored"></i>
              <span>C++</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-python-plain colored"></i>
              <span>Python</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-java-plain colored"></i>
              <span>Java</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>TECHNOLOGIES &<br /> FRAMEWORKS</h3>
          <div className="skills">
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-react-original colored"></i>
              <span>React</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-bootstrap-plain colored"></i>
              <span>Bootstrap</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-nodejs-plain colored"></i>
              <span>Node.js</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-express-original colored"></i>
              <span>Express</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-mongodb-plain colored"></i>
              <span>MongoDB</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-tailwindcss-original colored"></i>
              <span>Tailwind</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>PLATFORMS & <br />TOOLS</h3>
          <div className="skills">
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-git-plain colored"></i>
              <span>Git</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-github-original"></i>
              <span>GitHub</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
              <span>AWS</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="devicon-linux-plain colored"></i>
              <span>Linux</span>
            </div>
            <div className={`skill-box${active ? " active" : ""}`}>
              <i className="fa-solid fa-code"></i>
              <span>VS Code</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;