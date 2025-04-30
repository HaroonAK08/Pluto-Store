import React from 'react';
import AdminLayout from './AdminLayout';
import '../../styles/AdminComponents.css';

function Orders() {
  const mockOrders = [
    { 
      id: '#ORD-5432', 
      customer: 'John Doe', 
      date: '2023-06-15', 
      items: 3, 
      total: 349.97, 
      status: 'Delivered',
      paymentStatus: 'Paid'
    },
    { 
      id: '#ORD-5433', 
      customer: 'Jane Smith', 
      date: '2023-06-16', 
      items: 2, 
      total: 129.98, 
      status: 'Processing',
      paymentStatus: 'Paid'
    },
    { 
      id: '#ORD-5434', 
      customer: 'Mike Johnson', 
      date: '2023-06-17', 
      items: 5, 
      total: 599.95, 
      status: 'Shipped',
      paymentStatus: 'Paid'
    },
    { 
      id: '#ORD-5435', 
      customer: 'Sarah Williams', 
      date: '2023-06-18', 
      items: 1, 
      total: 799.99, 
      status: 'Pending',
      paymentStatus: 'Pending'
    },
    { 
      id: '#ORD-5436', 
      customer: 'Alex Brown', 
      date: '2023-06-19', 
      items: 4, 
      total: 249.96, 
      status: 'Cancelled',
      paymentStatus: 'Refunded'
    },
  ];
  
  return (
    <AdminLayout>
      <div className="admin-orders">
        <div className="admin-section-header">
          <h2>Manage Orders</h2>
        </div>
        
        <div className="admin-filters">
          <div className="admin-search">
            <input type="text" placeholder="Search by order ID or customer..." />
            <button>Search</button>
          </div>
          <div className="admin-filter-options">
            <select defaultValue="">
              <option value="" disabled>Order Status</option>
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select defaultValue="">
              <option value="" disabled>Payment Status</option>
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="refunded">Refunded</option>
            </select>
            <input type="date" placeholder="From Date" />
            <input type="date" placeholder="To Date" />
          </div>
        </div>
        
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.items}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${order.paymentStatus.toLowerCase()}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="action-buttons">
                    <button className="view-button">View</button>
                    <button className="edit-button">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Orders; 