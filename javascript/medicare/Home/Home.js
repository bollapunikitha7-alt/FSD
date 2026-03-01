import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRly4gmpJsHTLzwvjrizPy49gwI3yrwnzIH2w&s"
          alt="home page"
          className="homeimg"
        />
      </div>

      <div className="about">
        <h2>About Medicare Clinic</h2>
         <p>
          Our hospital has been a trusted healthcare provider for over 20 years.
          We combine medical excellence with personalized care to ensure the best
          outcomes for our patients.
          </p>
          <p>
          Equipped with modern infrastructure, cutting-edge technology, and a
          dedicated team of specialists, we are committed to your well-being.
          </p>
      </div>

      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
      <section className="stats">
        <div className="stat">
          <h3>20+</h3>
          <h2>Years of Experience</h2>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <h2>Qualified Doctors</h2>
        </div>
        <div className="stat">
          <h3>50k+</h3>
          <h2>Happy Patients</h2>
        </div>
        <div className="stat">
          <h3>24/7</h3>
          <h2>Emergency Care</h2>
        </div>
      </section>

      <div className="tips">
        <h2>Health Tips</h2>
        <ul>
          <li>Drink at least 8 glasses of water daily</li>
          <li>Exercise for 30 minutes every day</li>
          <li>Eat fresh fruits and vegetables</li>
          <li>Get enough sleep (7-8 hours)</li>
        </ul>
      </div>
      
       
    </>
  );
}

export default Home;
