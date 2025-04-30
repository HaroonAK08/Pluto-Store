import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const Categories = () => {
  // Mock data for categories
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      count: 120
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      count: 245
    },
    {
      id: 3,
      name: 'Home & Garden',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
      count: 189
    },
    {
      id: 4,
      name: 'Beauty & Health',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      count: 156
    },
    {
      id: 5,
      name: 'Sports & Outdoors',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      count: 132
    },
    {
      id: 6,
      name: 'Toys & Kids',
      image: 'https://images.unsplash.com/photo-1560859251-b3ef1c103176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80',
      count: 98
    }
  ];
  
  return (
    <div className="categories-section">
      <div className="section-header">
        <h2 className="section-title">Shop by Category</h2>
        <Link to="/categories" className="view-all-link">All Categories</Link>
      </div>
      
      <div className="categories-grid">
        {categories.map(category => (
          <Link key={category.id} to={`/category/${category.id}`} className="category-card">
            <div className="category-image-container">
              <img src={category.image} alt={category.name} className="category-image" />
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