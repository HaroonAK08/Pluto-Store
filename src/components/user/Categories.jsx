import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3002/products");
        const data = await response.json();

        // Process products to get unique categories with counts
        const categoryMap = data.reduce((acc, product) => {
          if (!acc[product.categoryId]) {
            acc[product.categoryId] = {
              id: product.categoryId,
              name: product.categoryName,
              count: 1,
              image: product.image, // Using the first product's image as category image
            };
          } else {
            acc[product.categoryId].count++;
          }
          return acc;
        }, {});

        // Convert map to array and sort by id
        const categoriesArray = Object.values(categoryMap).sort(
          (a, b) => a.id - b.id
        );
        setCategories(categoriesArray);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className="categories-section">
      <div className="section-header">
        <h2 className="section-title">Shop by Category</h2>
        <Link to="/categories" className="view-all-link">
          All Categories
        </Link>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="category-card"
          >
            <div className="category-image-container">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <div className="category-overlay"></div>
            </div>
            <div className="category-info">
              <h3 className="category-name">{category.name}</h3>
              <span className="category-count">{category.count} Products</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
