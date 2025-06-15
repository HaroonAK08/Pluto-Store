import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

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
        // Check if user has admin role
        if (user.role === "admin") {
          // Create user object without password for security
          const userForAuth = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            profilePicture: user.profilePicture,
            lastLogin: new Date().toISOString(),
          };

          // Use the login function from AuthContext
          login(userForAuth, true);
        } else {
          setError("Access denied. Only admin users can login here.");
        }
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
      <h2 className="login-title">Admin Login</h2>
      <p className="login-subtitle">Sign in with your admin credentials</p>

      {error && <div className="error-message">{error}</div>}

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group stacked">
          <div>
            <label htmlFor="admin-email" className="sr-only">
              Email address
            </label>
            <input
              id="admin-email"
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
            <label htmlFor="admin-password" className="sr-only">
              Password
            </label>
            <input
              id="admin-password"
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
              id="admin-remember-me"
              name="remember-me"
              type="checkbox"
              className="checkbox"
            />
            <label htmlFor="admin-remember-me" className="checkbox-label">
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
      </form>
    </div>
  );
}

export default AdminLoginForm;
