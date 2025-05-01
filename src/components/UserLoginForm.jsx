import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import axios from "axios";

function UserLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Fetch users from json-server
      const response = await axios.get("http://localhost:3002/users");
      const users = response.data;

      // Find user with matching email and password
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Create user object without password for security
        const userForAuth = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          profilePicture: user.profilePicture,
          lastLogin: new Date().toISOString(),
        };

        // Dispatch login action to Redux store
        dispatch(login(userForAuth));

        // Save user to localStorage
        localStorage.setItem("currentUser", JSON.stringify(userForAuth));

        // Navigate to home page
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="login-title">User Login</h2>
      <p className="login-subtitle">Sign in to your account</p>

      {error && <div className="error-message">{error}</div>}

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group stacked">
          <div>
            <label htmlFor="user-email" className="sr-only">
              Email address
            </label>
            <input
              id="user-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="form-input form-input-top"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="user-password" className="sr-only">
              Password
            </label>
            <input
              id="user-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="form-input form-input-bottom"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* <div className="remember-forgot">
          <div className="remember-me">
            <input
              id="user-remember-me"
              name="remember-me"
              type="checkbox"
              className="checkbox"
            />
            <label htmlFor="user-remember-me" className="checkbox-label">
              Remember me
            </label>
          </div>

          <div>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </div>
        </div> */}

        <div>
          <button type="submit" className="signin-button" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <div className="register-link-container">
          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register" className="register-link">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default UserLoginForm;
