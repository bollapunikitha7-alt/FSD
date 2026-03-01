import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import About from "./About/About";
import Doctors from "./Doctors/Doctors";
import Contact from "./Contact/Contact";
import Signup from "./Signup/Signup";

import Landing from "./Landing/Landing";

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      
      <footer>
        <p>© CityCarehospital.</p>
        <p>Email: support@CityCarehospital.com | Phone: +91 98765 43210</p>
      </footer>
    </div>
   
  );
}

export default App;
