import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import '../../styles/AdminComponents.css';

function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  
  return (
    <AdminLayout>
      <div className="admin-settings">
        <div className="admin-section-header">
          <h2>Store Settings</h2>
        </div>
        
        <div className="settings-container">
          <div className="settings-tabs">
            <button 
              className={`settings-tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General
            </button>
            <button 
              className={`settings-tab ${activeTab === 'appearance' ? 'active' : ''}`}
              onClick={() => setActiveTab('appearance')}
            >
              Appearance
            </button>
            <button 
              className={`settings-tab ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping
            </button>
            <button 
              className={`settings-tab ${activeTab === 'payment' ? 'active' : ''}`}
              onClick={() => setActiveTab('payment')}
            >
              Payment
            </button>
            <button 
              className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </button>
          </div>
          
          <div className="settings-content">
            {activeTab === 'general' && (
              <div className="settings-form">
                <h3>General Settings</h3>
                
                <div className="form-group">
                  <label>Store Name</label>
                  <input type="text" defaultValue="My E-Commerce Store" />
                </div>
                
                <div className="form-group">
                  <label>Store Email</label>
                  <input type="email" defaultValue="contact@mystore.com" />
                </div>
                
                <div className="form-group">
                  <label>Store Phone</label>
                  <input type="text" defaultValue="+1 (555) 123-4567" />
                </div>
                
                <div className="form-group">
                  <label>Store Address</label>
                  <textarea defaultValue="123 E-Commerce St., Online City, WEB 12345" rows="3"></textarea>
                </div>
                
                <div className="form-group">
                  <label>Currency</label>
                  <select defaultValue="usd">
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="gbp">GBP (£)</option>
                    <option value="jpy">JPY (¥)</option>
                    <option value="cad">CAD ($)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Timezone</label>
                  <select defaultValue="utc-8">
                    <option value="utc-12">UTC-12:00</option>
                    <option value="utc-8">UTC-08:00 (Pacific Standard Time)</option>
                    <option value="utc-5">UTC-05:00 (Eastern Standard Time)</option>
                    <option value="utc+0">UTC+00:00 (Greenwich Mean Time)</option>
                    <option value="utc+1">UTC+01:00 (Central European Time)</option>
                    <option value="utc+8">UTC+08:00 (China Standard Time)</option>
                  </select>
                </div>
                
                <div className="settings-actions">
                  <button className="cancel-button">Cancel</button>
                  <button className="save-button">Save Changes</button>
                </div>
              </div>
            )}
            
            {activeTab === 'appearance' && (
              <div className="settings-form">
                <h3>Appearance Settings</h3>
                <p>Configure the look and feel of your store</p>
                {/* Appearance settings content */}
              </div>
            )}
            
            {activeTab === 'shipping' && (
              <div className="settings-form">
                <h3>Shipping Settings</h3>
                <p>Configure shipping methods and rates</p>
                {/* Shipping settings content */}
              </div>
            )}
            
            {activeTab === 'payment' && (
              <div className="settings-form">
                <h3>Payment Settings</h3>
                <p>Configure payment gateways and methods</p>
                {/* Payment settings content */}
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div className="settings-form">
                <h3>Notification Settings</h3>
                <p>Configure email and SMS notifications</p>
                {/* Notifications settings content */}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Settings; 