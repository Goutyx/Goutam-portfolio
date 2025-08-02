import React, { useRef, useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch("https://formsubmit.co/el/zokemo", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setSubmitted(true);
        formRef.current.reset();
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div id="Contact">
      <h1>LET'S GET IN TOUCH</h1>
      {submitted ? (
        <div style={{ color: "#ff7b00", textAlign: "center", fontSize: "1.3rem", marginTop: "2rem" }}>
          Thank you! Your form has been submitted.
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;