import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Login.css";
import LoginForm from "../components/LoginForm";

function Login() {
  const [loginType, setLoginType] = useState("user");
  const location = useLocation();

  // Check if we have a login type from the query string
  // e.g., /login?type=admin
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");
    if (type === "admin" || type === "user") {
      setLoginType(type);
    }
  }, [location]);

  // Handle tab change
  const handleTypeChange = (type) => {
    setLoginType(type);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-tabs">
          <button
            className={`login-tab ${loginType === "user" ? "active" : ""}`}
            onClick={() => handleTypeChange("user")}
          >
            User Login
          </button>
          <button
            className={`login-tab ${loginType === "admin" ? "active" : ""}`}
            onClick={() => handleTypeChange("admin")}
          >
            Admin Login
          </button>
        </div>

        <LoginForm isAdmin={loginType === "admin"} />

        <div className="back-link-container">
          <Link to="/" className="back-link">
            Back to Start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
