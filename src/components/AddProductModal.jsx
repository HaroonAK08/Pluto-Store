import React, { useState, useEffect } from "react";
import axios from "axios";

function AddProductModal({ isOpen, onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    categoryId: "",
    categoryName: "",
    price: "",
    quantity: "",
    description: "",
    specifications: {
      format: "",
      pages: "",
      language: "",
    },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3002/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "categoryId") {
      const selectedCategory = categories.find((cat) => cat.id === value);
      setForm((prev) => ({
        ...prev,
        categoryId: value,
        categoryName: selectedCategory ? selectedCategory.name : "",
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSpecificationChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      specifications: {
        ...prev.specifications,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.categoryId || !form.price || !form.quantity) {
      setError("Name, category, price, and quantity are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3002/products", form);
      onAdd(response.data);
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal product-modal">
        <div className="modal-header">
          <h2>Add New Product</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Product Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="form-group">
              <label>Category *</label>
              <select
                name="categoryId"
                value={form.categoryId}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Price *</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="Enter price"
                required
              />
            </div>

            <div className="form-group">
              <label>Quantity *</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                min="0"
                placeholder="Enter quantity"
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter product description"
                required
              />
            </div>

            <div className="form-group full-width">
              <h3>Specifications (Optional)</h3>
              <div className="specifications-grid">
                <div className="form-group">
                  <label>Format</label>
                  <input
                    type="text"
                    name="format"
                    value={form.specifications.format}
                    onChange={handleSpecificationChange}
                    placeholder="e.g., Paperback"
                  />
                </div>
                <div className="form-group">
                  <label>Pages</label>
                  <input
                    type="text"
                    name="pages"
                    value={form.specifications.pages}
                    onChange={handleSpecificationChange}
                    placeholder="e.g., 256"
                  />
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <input
                    type="text"
                    name="language"
                    value={form.specifications.language}
                    onChange={handleSpecificationChange}
                    placeholder="e.g., English"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
