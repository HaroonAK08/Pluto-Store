import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { logout } from '../../store/authSlice';
import '../../styles/AdminLayout.css';

function AdminLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <div className="admin-topbar">
          <div className="admin-topbar-title">
            <h1>Admin Dashboard</h1>
          </div>
          <div className="admin-topbar-actions">
            <button onClick={handleLogout} className="logout-button">
              <span className="logout-icon">🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </div>
        <div className="admin-content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout; 