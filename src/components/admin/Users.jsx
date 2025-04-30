import React from 'react';
import AdminLayout from './AdminLayout';
import '../../styles/AdminComponents.css';

function Users() {
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer', status: 'Active', joinDate: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer', status: 'Active', joinDate: '2023-02-22' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Admin', status: 'Active', joinDate: '2022-11-05' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Customer', status: 'Inactive', joinDate: '2023-03-10' },
    { id: 5, name: 'Alex Brown', email: 'alex@example.com', role: 'Customer', status: 'Active', joinDate: '2023-04-18' },
  ];
  
  return (
    <AdminLayout>
      <div className="admin-users">
        <div className="admin-section-header">
          <h2>Manage Users</h2>
          <button className="admin-action-button">
            <span>+</span> Add New User
          </button>
        </div>
        
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`status-badge ${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joinDate}</td>
                  <td className="action-buttons">
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
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

export default Users; 