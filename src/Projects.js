import React, { useRef, useEffect, useState } from "react";

function Projects() {
  const projRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (projRef.current) observer.observe(projRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="Projects" ref={projRef}>
      <h1>PROJECTS</h1>
      <div id="outer">
        <div id="project1" className={active ? "active" : ""}>
          <div id="imgaes"></div>
          <h3>ROCK-PAPER-SCISSORS</h3>
          <p>A simple browser-based game built with HTML, CSS, and JavaScript.
            Play against the computer with real-time score updates and results and have fun.
            Responsive design with clean UI and smooth interactions which runs on any device.</p>
          <div id="btn">
            <a href="https://github.com/Goutyx/Rock-Paper-Scissor.git" target="_main">GitHub</a>
            <a href="https://goutyx.github.io/Rock-Paper-Scissor/" target="_main">Live Demo</a>
          </div>
        </div>

        <div id="project1" className={active ? "active" : ""}>
          <div id="imgaes1"></div>
          <h3>CURRENCY CONVERTOR</h3>
          <p>A simple Currency Converter that allows users to convert between multiple global currencies in real-time.
            It uses live exchange rate APIs to provide accurate conversion values.
            Built with HTML, CSS, and JavaScript for seamless performance.</p>
          <div id="btn">
            <a href="https://github.com/Goutyx/Currency-Generator.git" target="_main">GitHub</a>
            <a href="https://goutyx.github.io/Currency-Generator/" target="_main">Live Demo</a>
          </div>
        </div>

        <div id="project1" className={active ? "active" : ""}>
          <div id="imgaes2"></div>
          <h3>MODERN CALCULATOR</h3>
          <p>A responsive web-based calculator developed using HTML, CSS, and JavaScript.
            Supports precise arithmetic operations with an intuitive and minimalistic interface.
            Optimized for both desktop and mobile devices for seamless usability.</p>
          <div id="btn">
            <a href="https://github.com/Goutyx/Simple-Calculator.git" target="_main">GitHub</a>
            <a href="https://goutyx.github.io/Simple-Calculator/" target="_main">Live Demo</a>
          </div>
        </div>

        <div id="project1" className={active ? "active" : ""}>
          <div id="imgaes3"></div>
          <h3>AMAZON'S CLONE</h3>
          <p>A responsive Amazon Clone built using HTML, CSS, and JavaScript.
            It replicates the layout and features of Amazon’s homepage and product pages.
            Includes interactive elements like search bar, product cards, and cart section.</p>
          <div id="btn">
            <a href="https://github.com/Goutyx/Amazon-clone.git" target="_main">GitHub</a>
            <a href="https://goutyx.github.io/Amazon-clone/" target="_main">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;