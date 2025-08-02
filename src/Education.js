import React, { useRef, useEffect, useState } from "react";

function Education() {
  const eduRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.2 }
    );
    if (eduRef.current) observer.observe(eduRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="Education" ref={eduRef}>
      <br />
      <h1>EDUCATION</h1>
      <div id="all">
        <div className={`college-box left${active ? " active" : ""}`}>
          <p id="first">B.Tech in Computer Science and Engineering</p>
          <p id="second">Lovely Professional University, Punjab</p>
          <p id="third">2023 - 2027</p>
          <p id="fourth">CGPA: 7.95</p>
        </div>
        <div className={`college-box right${active ? " active" : ""}`}>
          <p id="first">Senior Secondary (Class 12) – CBSE</p>
          <p id="second">Maharishi Vidya Mandir, Chennai</p>
          <p id="third">2022 - 2023</p>
          <p id="fourth">Marks: 90%</p>
        </div>
        <div className={`college-box bottom${active ? " active" : ""}`}>
          <p id="first">Secondary (Class 10) – CBSE</p>
          <p id="second">Maharishi Vidya Mandir, Chennai</p>
          <p id="third">2020 – 2021</p>
          <p id="fourth">Marks: 92%</p>
        </div>
      </div>
    </div>
  );
}

export default Education;