import React, { useState, useEffect } from "react";
import "../../styles/AdminPages.css";
import axios from "axios";

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from db.json
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        // Delete user from the database
        await axios.delete(`http://localhost:3002/users/${userId}`);
        // Update the local state after successful deletion
        setUsers(users.filter((user) => user.id !== userId));
        alert("User deleted successfully");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      }
    }
  };

  return (
    <div className="admin-page">
      <h1>User Management</h1>
      <p>
        This is the user management page. Here administrators can view, add,
        edit, and delete users.
      </p>

      <div className="admin-card">
        <h2>User List</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ color: "black" }}>{user.id}</td>
                <td style={{ color: "black" }}>{user.name}</td>
                <td style={{ color: "black" }}>{user.email}</td>
                <td style={{ color: "black" }}>{user.role}</td>
                <td style={{ color: "black" }}>
                  {new Date(user.lastLogin).toLocaleDateString()}
                </td>
                <td>
                  <button
                    className="table-btn delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;
