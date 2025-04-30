import React from 'react';
import '../../styles/AdminPages.css';

function UserManagement() {
  return (
    <div className="admin-page">
      <h1>User Management</h1>
      <p>This is the user management page. Here administrators can view, add, edit, and delete users.</p>
      
      <div className="admin-card">
        <h2>User List</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>User</td>
              <td>Active</td>
              <td>
                <button className="table-btn edit">Edit</button>
                <button className="table-btn delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <button className="table-btn edit">Edit</button>
                <button className="table-btn delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement; 