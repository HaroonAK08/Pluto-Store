import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/AdminPanel.css';

function AdminPanel() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  
  return (
    <div className="admin-dashboard">
      <div className="admin-stats-row">
        <div className="admin-stat-card">
          <div className="admin-stat-icon users">👥</div>
          <div className="admin-stat-info">
            <h3>Total Users</h3>
            <p className="admin-stat-value">1,254</p>
            <p className="admin-stat-change positive">+12% this month</p>
          </div>
        </div>
        
        <div className="admin-stat-card">
          <div className="admin-stat-icon products">📦</div>
          <div className="admin-stat-info">
            <h3>Products</h3>
            <p className="admin-stat-value">532</p>
            <p className="admin-stat-change positive">+8% this month</p>
          </div>
        </div>
        
        <div className="admin-stat-card">
          <div className="admin-stat-icon orders">🛒</div>
          <div className="admin-stat-info">
            <h3>Orders</h3>
            <p className="admin-stat-value">256</p>
            <p className="admin-stat-change positive">+24% this month</p>
          </div>
        </div>
        
        <div className="admin-stat-card">
          <div className="admin-stat-icon revenue">💰</div>
          <div className="admin-stat-info">
            <h3>Revenue</h3>
            <p className="admin-stat-value">$45,260</p>
            <p className="admin-stat-change positive">+18% this month</p>
          </div>
        </div>
      </div>
      
      <div className="admin-recent-activity">
        <h2>Recent Activity</h2>
        <div className="admin-activity-list">
          <div className="admin-activity-item">
            <div className="admin-activity-dot"></div>
            <div className="admin-activity-content">
              <p className="admin-activity-text"><strong>John Doe</strong> placed a new order (#5432)</p>
              <p className="admin-activity-time">10 minutes ago</p>
            </div>
          </div>
          <div className="admin-activity-item">
            <div className="admin-activity-dot"></div>
            <div className="admin-activity-content">
              <p className="admin-activity-text"><strong>Mary Smith</strong> registered a new account</p>
              <p className="admin-activity-time">45 minutes ago</p>
            </div>
          </div>
          <div className="admin-activity-item">
            <div className="admin-activity-dot"></div>
            <div className="admin-activity-content">
              <p className="admin-activity-text"><strong>Product Update:</strong> 5 new products added</p>
              <p className="admin-activity-time">2 hours ago</p>
            </div>
          </div>
          <div className="admin-activity-item">
            <div className="admin-activity-dot"></div>
            <div className="admin-activity-content">
              <p className="admin-activity-text"><strong>System:</strong> Database backup completed</p>
              <p className="admin-activity-time">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel; 