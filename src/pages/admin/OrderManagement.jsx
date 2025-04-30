import React from 'react';
import '../../styles/AdminPages.css';

function OrderManagement() {
  return (
    <div className="admin-page">
      <h1>Order Management</h1>
      <p>This is the order management page. Here administrators can view, process, and manage customer orders.</p>
      
      <div className="admin-card">
        <h2>Order List</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#5432</td>
              <td>John Doe</td>
              <td>2023-06-15</td>
              <td>$529.99</td>
              <td>Processing</td>
              <td>
                <button className="table-btn view">View</button>
                <button className="table-btn edit">Update</button>
              </td>
            </tr>
            <tr>
              <td>#5431</td>
              <td>Jane Smith</td>
              <td>2023-06-14</td>
              <td>$129.99</td>
              <td>Delivered</td>
              <td>
                <button className="table-btn view">View</button>
                <button className="table-btn edit">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagement; 