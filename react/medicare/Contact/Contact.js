import "./Contact.css";

function Contact() {
  return (
    <div>
     
      <section className="contact">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out to us anytime and our team will
          get back to you as soon as possible.
        </p>
      </section>

     
      <section className="contact-details">
        <div className="detail">
          <h3> Address</h3>
          <p>123 Health Street</p>
          <p>Bangalore, Karnataka</p>
          <p>India - 560001</p>
        </div>

        <div className="detail">
          <h3> Phone</h3>
          <p>+91 98765 43210</p>
          <p>+91 91234 56789</p>
          <p>Mon - Sat (9:00 AM - 7:00 PM)</p>
        </div>

        <div className="detail">
          <h3>✉ Email</h3>
          <p>support@yourhospital.com</p>
          <p>info@yourhospital.com</p>
          <p>help@yourhospital.com</p>
        </div>
      </section>
      <section className="contacts">
        <h2>Why Contact Us?</h2>
        <p>
          Our team is available to assist you with appointments, emergencies,
          feedback, and general inquiries. We value your time and trust.
        </p>

        <ul>
          <li> 24/7 Emergency Support</li>
          <li> Experienced Medical Professionals</li>
          <li> Fast Appointment Scheduling</li>
          <li> Patient-Friendly Services</li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
