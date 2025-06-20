import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import "../styles/AdminPanel.css";

function AdminPanel() {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0,
  });

  async function fetchStats() {
    const [usersResponse, productsResponse, ordersResponse] = await Promise.all(
      [
        fetch("http://localhost:3002/users"),
        fetch("http://localhost:3002/products"),
        fetch("http://localhost:3002/orders"),
      ]
    );
    const users = await usersResponse.json();
    const products = await productsResponse.json();
    const orders = await ordersResponse.json();
    const revenue = orders.reduce(
      (sum, order) => sum + order.totalAmount || order.total,
      0
    );
    setStats({
      users: users.length,
      products: products.length,
      orders: orders.length,
      revenue: revenue,
    });
  }

  useEffect(() => {
    // Fetch data from db.json
    fetchStats();
  }, []);
  console.log("stats", stats);
  return (
    <div className="admin-dashboard">
      <div className="admin-stats-row">
        <div className="admin-stat-card">
          <div className="admin-stat-icon users">👥</div>
          <div className="admin-stat-info">
            <h3>Total Users</h3>
            <p className="admin-stat-value">{stats.users}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon products">📦</div>
          <div className="admin-stat-info">
            <h3>Products</h3>
            <p className="admin-stat-value">{stats.products}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon orders">🛒</div>
          <div className="admin-stat-info">
            <h3>Orders</h3>
            <p className="admin-stat-value">{stats.orders}</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon revenue">💰</div>
          <div className="admin-stat-info">
            <h3>Revenue</h3>
            <p className="admin-stat-value">
              ${stats.revenue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
