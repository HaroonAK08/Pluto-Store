import { Link } from 'react-router-dom';
import '../styles/Start.css';

const Index = () => {
  return (
    <div className="start-container">
      {/* Decorative floating shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>
      
      <div className="start-content">
      <h1 className="start-title">Welcome to PlutoX</h1>
      <p className="start-description">
  Discover premium products and unbeatable deals with PlutoX – curated collections tailored to your lifestyle.
</p>


        <div className="start-actions">
          <div className="login-options">
            <Link to="/login?type=admin" className="start-button admin-login">
              Admin Portal
            </Link>
            <Link to="/login?type=user" className="start-button user-login">
              Customer Login
            </Link>
          </div>
          <Link to="/register" className="start-button register">
            Create Account
          </Link>
          {/* <Link to="/shop" className="start-button browse">
            Browse Collection
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Index;