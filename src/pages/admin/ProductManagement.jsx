import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/AdminPages.css";
import AddProductModal from "../../components/AddProductModal";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  console.log("products", products[0]);
  const handleDelete = async (productId) => {
    console.log("productId", productId);
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

  const handleAddProduct = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/products",
        product
      );
      setProducts((prev) => [...prev, response.data]);
      setIsModalOpen(false);
      setError(null);
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product.");
    }
  };

  return (
    <div className="admin-page">
      <h1>Product Management</h1>
      <p>
        This is the product management page. Here administrators can view, add,
        edit, and delete products.
      </p>

      <div className="add-product-section">
        <button
          className="add-product-button"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="plus-icon">+</span>
          <span className="button-text">Add New Product</span>
        </button>
      </div>

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
                <td style={{ color: "black" }}>{product.id}</td>
                <td style={{ color: "black" }}>{product.name}</td>
                <td style={{ color: "black" }}>{product.categoryName}</td>
                <td style={{ color: "black" }}>${product.price}</td>
                <td style={{ color: "black" }}>{product.quantity}</td>
                <td>
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
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
}

export default ProductManagement;
