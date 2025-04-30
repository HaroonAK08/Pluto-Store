import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/AdminSidebar.css';

function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    {
      title: 'Dashboard',
      icon: '📊',
      path: '/admin'
    },
    {
      title: 'Users',
      icon: '👥',
      path: '/admin/users'
    },
    {
      title: 'Products',
      icon: '📦',
      path: '/admin/products'
    },
    {
      title: 'Orders',
      icon: '🛒',
      path: '/admin/orders'
    },
    {
      title: 'Settings',
      icon: '⚙️',
      path: '/admin/settings'
    }
  ];

  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-header">
        <h2>Admin Portal</h2>
      </div>
      <div className="admin-sidebar-menu">
        {menuItems.map((item, index) => (
          <Link 
            to={item.path} 
            key={index} 
            className={`admin-sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="admin-sidebar-icon">{item.icon}</span>
            <span className="admin-sidebar-title">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar; 