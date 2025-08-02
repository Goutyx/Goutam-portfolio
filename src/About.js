import React, { useRef, useEffect, useState } from "react";

function About() {
  const aboutRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="About" ref={aboutRef}>
      <h1 id="hui">ABOUT ME</h1>
      <div className="about-wrapper">
        <div className={`about-text${active ? " active" : ""}`}>
          <h1>Driven by Curiosity, Defined by Code</h1>
          <p>
            Hi, I’m Goutam Pareek – a Computer Science student driven by curiosity
            and a passion for creating impactful solutions. What began as a fascination
            with how systems work has grown into a journey of exploring logic,
            creativity, and innovation in technology. I see every challenge as an
            opportunity to learn, adapt, and craft solutions that feel seamless yet
            powerful. My goal is to contribute to work that drives real-world impact
            and inspires progress. I believe technology is more than code — it’s about
            building experiences that matter. I look forward to contributing my skills
            to projects that drive real-world impact while continuing to evolve as a
            developer.
          </p>
        </div>
        <div className={`about-img${active ? " active" : ""}`}></div>
      </div>
    </div>
  );
}

export default About;