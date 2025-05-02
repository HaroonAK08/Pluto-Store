import React, { useState, useEffect } from "react";
import "../../styles/AdminPages.css";

function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from db.json
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setOrders(data.orders))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div className="admin-page">
      <h1>Order Management</h1>
      <p>
        This is the order management page. Here administrators can view,
        process, and manage customer orders.
      </p>

      <div className="admin-card">
        <h2>Order List</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.orderNumber}</td>
                <td>{order.name}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>${order.totalAmount}</td>
                <td>{order.status}</td>
                <td>{order.paymentStatus}</td>
                <td>
                  <button className="table-btn view">View</button>
                  <button className="table-btn edit">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagement;
