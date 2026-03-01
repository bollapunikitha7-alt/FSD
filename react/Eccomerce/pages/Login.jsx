import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="login-card">
        <h2 className="subtitle">Please login to your account</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
