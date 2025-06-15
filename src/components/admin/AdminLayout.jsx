import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./Sidebar";
import "../../styles/AdminLayout.css";

function AdminLayout() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
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
