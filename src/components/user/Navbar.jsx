import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">PlutoX</Link>
        </div>

        <div className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-auth">
          <Link to="/cart" className="cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </Link>
          {currentUser ? (
            <div className="user-menu">
              <div className="user-avatar">
                <img
                  src={currentUser.profilePicture}
                  alt={currentUser.name}
                  className="avatar-small"
                />
                <span className="user-name">{currentUser.name}</span>
              </div>
              <div className="dropdown-menu">
                <Link to="/profile">My Profile</Link>
                <Link to="/orders">My Orders</Link>
                {currentUser.role === "admin" && (
                  <Link to="/admin">Admin Panel</Link>
                )}
                <button onClick={handleLogout} className="logout-link">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="login-link">
                Login
              </Link>
              <Link to="/register" className="register-link">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
