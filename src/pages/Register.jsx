import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      // Check if email already exists in the database
      const response = await axios.get(
        `http://localhost:3002/users?email=${email}`
      );
      if (response.data.length > 0) {
        setError("Email already registered");
        setLoading(false);
        return;
      }

      // Get users to calculate next ID
      const usersResponse = await axios.get("http://localhost:3002/users");
      const users = usersResponse.data;

      // Create new user with ID based on last user
      const newUser = {
        id:
          users.length > 0
            ? Math.max(...users.map((user) => Number(user.id))) + 1
            : 1,
        name,
        email,
        password,
        role: "user",
        profilePicture: `https://randomuser.me/api/portraits/men/${
          (users.length % 30) + 1
        }.jpg`,
        lastLogin: new Date().toISOString(),
      };

      // Save user to json-server database
      await axios.post("http://localhost:3002/users", newUser);

      console.log("New user registered:", newUser);

      // Show success message
      alert("Registration successful! Please login to continue.");

      // Navigate to login page
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Failed to register user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div>
          <h2 className="login-title">Create your account</h2>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group stacked">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="form-input form-input-top"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-input"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="form-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="form-input form-input-bottom"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button type="submit" className="signin-button" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

          <div className="register-link-container">
            <p className="register-text">
              Already have an account?{" "}
              <Link to="/login" className="register-link">
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
