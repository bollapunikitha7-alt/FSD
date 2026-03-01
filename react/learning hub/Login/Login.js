import './Login.css';
import { useState } from "react";
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav>
      {isLoggedIn ? (
        <>
          <a>Home</a> {" | "}
          <a>Profile</a> {" | "}
          <a>Contact</a> {" | "}
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </nav>
  );
}
export default Login;