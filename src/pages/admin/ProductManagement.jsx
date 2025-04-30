import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/AdminPages.css";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3002/products");
      setProducts(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Not Found");
    }
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:3002/products/${productId}`);
        // Update the local state after successful deletion
        setProducts(products.filter((product) => product.id !== productId));
        setError(null);
      } catch (error) {
        console.error("Error deleting product:", error);
        setError("Not Found");
      }
    }
  };

  return (
    <div className="admin-page">
      <h1>Product Management</h1>
      <p>
        This is the product management page. Here administrators can view, add,
        edit, and delete products.
      </p>

      <div className="admin-card">
        <h2>Product List</h2>
        {error && <div className="error-message">{error}</div>}
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.categoryName}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button className="table-btn edit">Edit</button>
                  <button
                    className="table-btn delete"
                    onClick={() => handleDelete(product.id)}
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

export default ProductManagement;
