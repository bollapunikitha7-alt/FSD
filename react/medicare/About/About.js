import "./About.css";

function About() {
  return (
    <>
    <div className="about">
      <h1>About Our Hospital</h1>

      <p>
        <strong>CityCare Hospital</strong> is a trusted healthcare institution
        committed to providing high-quality, compassionate, and affordable
        medical care to our community.
      </p>

      <p>
        Our hospital is equipped with modern medical technology, advanced
        diagnostic facilities, and a team of experienced doctors, nurses, and
        healthcare professionals who work together to deliver excellent patient
        care.
      </p>

      <p>
        We offer a wide range of medical services across multiple specialties,
        focusing on patient safety, comfort, and well-being. Our patient-centered
        approach ensures personalized treatment and continuous support.
      </p>

      <div className="mission-vision">
        <div>
          <h3>Our Mission</h3>
          <p>
            To provide accessible, affordable, and quality healthcare services
            with compassion and integrity.
          </p>
        </div>

        <div>
          <h3>Our Vision</h3>
          <p>
            To be a leading healthcare provider recognized for trust, innovation,
            and excellence in patient care.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
