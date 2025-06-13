import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CategoriesPage.css";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3002/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="categories-page">
      <div className="categories-header">
        <h1>Shop by Category</h1>
        <p>Browse our wide selection of products by category</p>
      </div>

      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> &gt; <span>Categories</span>
        </div>

        <div className="categories-grid-all">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card-large"
            >
              <div className="category-image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                {/* <div className="category-overlay"></div> */}
              </div>
              <div className="category-info-large">
                <h3 className="category-name">{category.name}</h3>
                <span className="category-count">
                  {category.count} Products
                </span>
                <p className="category-description">{category.description}</p>
                <button className="browse-button">Browse Products</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
