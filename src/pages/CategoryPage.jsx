import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductList from "../components/user/ProductList";
import "../styles/CategoryPage.css";
import axios from "axios";

function CategoryPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch category data
        const categoryResponse = await axios.get(
          `http://localhost:3002/categories/${categoryId}`
        );
        setCategory(categoryResponse.data);

        // Fetch products for this category
        const productsResponse = await axios.get(
          `http://localhost:3002/products?categoryId=${categoryId}`
        );
        setProducts(productsResponse.data);
      } catch (err) {
        setError("Error loading data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!category) {
    return <div className="not-found">Category not found</div>;
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <div
          className="category-banner"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="category-overlay1">
            <h1>{category.name}</h1>
            <p>{products.length} Products</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> &gt; <Link to="/categories">Categories</Link>{" "}
          &gt; <span>{category.name}</span>
        </div>

        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
