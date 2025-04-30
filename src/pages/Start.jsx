import { Link } from 'react-router-dom';
import '../styles/Start.css';

function Start() {
  return (
    <div className="start-container">
      <div className="start-content">
        <h1 className="start-title">Welcome to Our E-Commerce Store</h1>
        <p className="start-description">
          Find amazing products at competitive prices. Shop with us today!
        </p>
        
        <div className="start-actions">
          <div className="login-options">
            <Link to="/login?type=admin" className="start-button admin-login">
              Admin Login
            </Link>
            <Link to="/login?type=user" className="start-button user-login">
              User Login
            </Link>
          </div>
          <Link to="/register" className="start-button register">
            Register
          </Link>
          <Link to="/home" className="start-button browse">
            Continue as Guest
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start; 