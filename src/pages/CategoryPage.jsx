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

  // Mock categories data - in a real app this would come from an API
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      count: 120,
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      count: 245,
    },
    {
      id: 3,
      name: "Home & Garden",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      count: 189,
    },
    {
      id: 4,
      name: "Beauty & Health",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      count: 156,
    },
    {
      id: 5,
      name: "Sports & Outdoors",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      count: 132,
    },
    {
      id: 6,
      name: "Toys & Kids",
      image:
        "https://images.unsplash.com/photo-1560859251-b3ef1c103176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
      count: 98,
    },
  ];

  // Mock products - in a real app these would come from an API
  const mockProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 129.99,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      discount: 15,
      categoryId: 1,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      discount: 0,
      categoryId: 1,
    },
    {
      id: 3,
      name: "Designer T-Shirt",
      price: 49.99,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      discount: 0,
      categoryId: 2,
    },
    {
      id: 4,
      name: "Stylish Sunglasses",
      price: 79.99,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      discount: 10,
      categoryId: 2,
    },
    {
      id: 5,
      name: "Modern Backpack",
      price: 89.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      discount: 0,
      categoryId: 5,
    },
  ];

  useEffect(() => {
    setLoading(true);

    try {
      // Find the category from our mock data
      const foundCategory = categories.find(
        (cat) => cat.id === parseInt(categoryId)
      );

      if (foundCategory) {
        setCategory(foundCategory);

        // Filter products by category ID
        const filteredProducts = mockProducts.filter(
          (product) => product.categoryId === parseInt(categoryId)
        );
        setProducts(filteredProducts);
      } else {
        setError("Category not found");
      }
    } catch (err) {
      setError("Error loading category: " + err.message);
    } finally {
      setLoading(false);
    }

    // In a real app, you would fetch from an API:
    // const fetchCategory = async () => {
    //   try {
    //     const categoryResponse = await axios.get(`http://localhost:3002/categories/${categoryId}`);
    //     setCategory(categoryResponse.data);
    //
    //     const productsResponse = await axios.get(`http://localhost:3002/products?categoryId=${categoryId}`);
    //     setProducts(productsResponse.data);
    //   } catch (err) {
    //     setError("Error loading data: " + err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    //
    // fetchCategory();
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
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="category-overlay">
            <h1>{category.name}</h1>
            <p>{category.count} Products</p>
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
