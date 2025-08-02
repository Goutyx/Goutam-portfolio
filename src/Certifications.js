import React, { useRef, useEffect, useState } from "react";

function Certifications() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  function viewCertificate(pdfFile) {
    window.open(pdfFile, '_blank');
  }

  return (
    <section id="Certification" ref={sectionRef}>
      <h1>CERTIFICATIONS</h1>
      <div className="cert-row">
        <div className={`cert-card${active ? " active" : ""}`}>
          <h3>Computer programming</h3>
          <p><strong>Issued By:</strong> Neo Colab</p>
          <p><strong>Date:</strong> May 2024</p>
          <button onClick={()=>viewCertificate('/CERTIFICATES/C Programming.pdf')}>View Certificate</button>
        </div>
        <div className={`cert-card${active ? " active" : ""}`}>
          <h3>OBJECT-ORIENTED PROGRAMMING</h3>
          <p><strong>Issued By:</strong> Neo Colab</p>
          <p><strong>Date:</strong> Dec 2024</p>
          <button onClick={()=>viewCertificate('/CERTIFICATES/CPP Programming Language.pdf')}>View Certificate</button>
        </div>
        <div className={`cert-card${active ? " active" : ""}`}>
          <h3>Data Structures & Algorithms</h3>
          <p><strong>Issued By:</strong> Neo Colab</p>
          <p><strong>Date:</strong> Dec 2024</p>
          <button onClick={()=>viewCertificate('/CERTIFICATES/Data Structures and Algorithm.pdf')}>View Certificate</button>
        </div>
        <div className={`cert-card${active ? " active" : ""}`}>
          <h3>JAVA PROGRAMMING</h3>
          <p><strong>Issued By:</strong> Neo Colab</p>
          <p><strong>Date:</strong> May 2025</p>
          <button onClick={()=>viewCertificate('/CERTIFICATES/Java Programming.pdf')}>View Certificate</button>
        </div>
      </div>
      <div className="cert-row">
        <div className={`cert-card${active ? " active" : ""}`}>
          <h3>computer communications</h3>
          <p><strong>Issued By:</strong> University of Colorado</p>
          <p><strong>Date:</strong> Jan 2025</p>
          <button onClick={()=>viewCertificate('/CERTIFICATES/University of Colorado(4).pdf')}>View Certificate</button>
        </div>
        <div className={`cert-card${active ? " active" : ""}`}>
          <h3>The Bits and Bytes of Computer Networking</h3>
          <p><strong>Issued By:</strong> Coursera</p>
          <p><strong>Date:</strong> Sep 2024</p>
          <button onClick={()=>viewCertificate('/CERTIFICATES/The Bits and Bytes of Computer Networking.pdf')}>View Certificate</button>
        </div>
        <div className={`cert-card${active ? " active" : ""}`}>
          <h3> Introduction to Hardware and Operating Systems</h3>
          <p><strong>Issued By:</strong> Coursera</p>
          <p><strong>Date:</strong> Sep 2024</p>
          <button onClick={()=>viewCertificate('/CERTIFICATES/Introduction to Hardware and Operating Systems.pdf')}>View Certificate</button>
        </div>
        <div className={`cert-card${active ? " active" : ""}`}>
          <h3> Digital Systems</h3>
          <p><strong>Issued By:</strong> Universitat Autònoma de Barcelona</p>
          <p><strong>Date:</strong> Nov 2024</p>
          <button onClick={()=>viewCertificate('/CERTIFICATES/Digital Logic Gates.pdf')}>View Certificate</button>
        </div>
      </div>
    </section>
  );
}

export default Certifications;