import React from 'react';
import '../../styles/AdminPages.css';

function ProductManagement() {
  return (
    <div className="admin-page">
      <h1>Product Management</h1>
      <p>This is the product management page. Here administrators can view, add, edit, and delete products.</p>
      
      <div className="admin-card">
        <h2>Product List</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Smartphone X</td>
              <td>Electronics</td>
              <td>$999.99</td>
              <td>50</td>
              <td>
                <button className="table-btn edit">Edit</button>
                <button className="table-btn delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Designer Watch</td>
              <td>Accessories</td>
              <td>$299.99</td>
              <td>25</td>
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

export default ProductManagement; 