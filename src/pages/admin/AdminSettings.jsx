import React from 'react';
import '../../styles/AdminPages.css';

function AdminSettings() {
  return (
    <div className="admin-page">
      <h1>Admin Settings</h1>
      <p>This is the settings page. Here administrators can configure system settings and preferences.</p>
      
      <div className="admin-card">
        <h2>General Settings</h2>
        <form className="settings-form">
          <div className="form-group">
            <label>Store Name</label>
            <input type="text" defaultValue="MyEcommerce Store" />
          </div>
          
          <div className="form-group">
            <label>Contact Email</label>
            <input type="email" defaultValue="contact@myecommerce.com" />
          </div>
          
          <div className="form-group">
            <label>Currency</label>
            <select defaultValue="USD">
              <option value="USD">US Dollar ($)</option>
              <option value="EUR">Euro (€)</option>
              <option value="GBP">British Pound (£)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Tax Rate (%)</label>
            <input type="number" defaultValue="8.5" />
          </div>
          
          <div className="form-group">
            <label>Maintenance Mode</label>
            <div className="toggle-switch">
              <input type="checkbox" id="maintenance-mode" />
              <label htmlFor="maintenance-mode"></label>
            </div>
          </div>
          
          <button type="submit" className="btn-primary">Save Settings</button>
        </form>
      </div>
    </div>
  );
}

export default AdminSettings; 