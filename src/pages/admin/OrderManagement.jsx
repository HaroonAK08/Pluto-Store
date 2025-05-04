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

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      // Update the status in the database
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        // Update the local state
        setOrders(
          orders.map((order) =>
            order.id === orderId ? { ...order, status: newStatus } : order
          )
        );
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

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
                <td style={{ color: "black" }}>{order.orderNumber}</td>
                <td style={{ color: "black" }}>{order.name}</td>
                <td style={{ color: "black" }}>
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td style={{ color: "black" }}>${order.totalAmount}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    style={{
                      padding: "5px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      color: "black",
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td style={{ color: "black" }}>{order.paymentStatus}</td>
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
