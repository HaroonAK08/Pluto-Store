import React from 'react';
import AdminLayout from './AdminLayout';
import '../../styles/AdminComponents.css';

function Products() {
  const mockProducts = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, stock: 45, status: 'In Stock' },
    { id: 2, name: 'Cotton T-Shirt', category: 'Clothing', price: 24.99, stock: 120, status: 'In Stock' },
    { id: 3, name: 'Smartphone X', category: 'Electronics', price: 799.99, stock: 12, status: 'Low Stock' },
    { id: 4, name: 'Running Shoes', category: 'Footwear', price: 129.99, stock: 0, status: 'Out of Stock' },
    { id: 5, name: 'Smart Watch', category: 'Electronics', price: 249.99, stock: 30, status: 'In Stock' },
  ];
  
  return (
    <AdminLayout>
      <div className="admin-products">
        <div className="admin-section-header">
          <h2>Manage Products</h2>
          <button className="admin-action-button">
            <span>+</span> Add New Product
          </button>
        </div>
        
        <div className="admin-filters">
          <div className="admin-search">
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
          </div>
          <div className="admin-filter-options">
            <select defaultValue="">
              <option value="" disabled>Category</option>
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="footwear">Footwear</option>
            </select>
            <select defaultValue="">
              <option value="" disabled>Status</option>
              <option value="all">All Status</option>
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
        </div>
        
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.stock}</td>
                  <td>
                    <span className={`status-badge ${product.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {product.status}
                    </span>
                  </td>
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

export default Products; 