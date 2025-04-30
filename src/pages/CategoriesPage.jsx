import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CategoriesPage.css";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();

        // Process products to get unique categories with counts and descriptions
        const categoryMap = data.products.reduce((acc, product) => {
          if (!acc[product.categoryId]) {
            acc[product.categoryId] = {
              id: product.categoryId,
              name: product.categoryName,
              count: 1,
              image: product.image,
              description: `Explore our collection of ${product.categoryName.toLowerCase()} products.`,
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
  console.log("categories", categories);

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
                <div className="category-overlay"></div>
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
