import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
  };
  
  return (
    <div className="signuppp">
      <div className="signup">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="signup-btn">Signup</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;
