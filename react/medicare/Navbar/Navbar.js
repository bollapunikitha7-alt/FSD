// import "./Navbar.css";
// function Navbar() {
//   return (
//     <>
//     <nav>
//       <ul>
//     <li><a href="home.html">Home</a></li>
//     <li><a href="Doctors.html">doctors</a></li>
//     <li><a href="Appointments.html">appointments</a></li>
//     <li><a href="About.html">about</a></li>
//     <li><a href="Contact.html">contact</a></li>
//     <li><a href="Login.html">login</a></li>
//     <li><a href="signup.html">Signup</a></li>
//     </ul>
//     </nav>
//     </>
//   );
// }
// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <Link to="/">MyApp</Link>
      </div> */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
