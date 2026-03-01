import "./Doctors.css";

function Doctors() {
  return (
    <div className="doctors-page">
      <h1>Contact Our Doctors</h1>
      
      <p><strong>Our experienced doctors are here to provide the best medical care.</strong></p>
      

      <div className="doctors-container">
        <div className="doctor-card">
          <h3>Dr. Anil Kumar</h3>
          <p className="dept">General Physician</p>
          <p>Experience: 10+ Years</p>
          <p>Timing: 9:00 AM-5:00 PM</p>
          <button>Book Appointment</button>
        </div>
        <div className="doctor-card">
          <h3>Dr. Divya Sharma</h3>
          <p className="dept">Pediatrician</p>
          <p>Experience: 8+ Years</p>
          <p>Timing: 10:00 AM-4:00 PM</p>
          <button>Book Appointment</button>
        </div>
        <div className="doctor-card">
          <h3>Dr. Ajith Rao</h3>
          <p className="dept">Cardiologist</p>
          <p>Experience: 12+ Years</p>
          <p>Timing: 11:00 AM-6:00 PM</p>
          <button>Book Appointment</button>
        </div>
        <div className="doctor-card">
          <h3>Dr. Sneha Patel</h3>
          <p className="dept">Gynecologist</p>
          <p>Experience: 9+ Years</p>
          <p>Timing: 9:30 AM-3:30 PM</p>
          <button>Book Appointment</button>
        </div>
        <div className="doctor-card">
          <h3>Dr. Ramesh Singh</h3>
          <p className="dept">Orthopedic Surgeon</p>
          <p>Experience: 15+ Years</p>
          <p>Timing: 12:00 PM-7:00 PM</p>
          <button>Book Appointment</button>
        </div>
        <div className="doctor-card">
          <h3>Dr. Neha Verma</h3>
          <p className="dept">Dermatologist</p>
          <p>Experience: 7+ Years</p>
          <p>Timing: 10:00 AM-2:00 PM</p>
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
