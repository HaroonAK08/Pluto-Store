import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoriesPage.css';

function CategoriesPage() {
  // Mock data for categories - in a real app this would come from an API
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      count: 120,
      description: 'Discover the latest gadgets, computers, smartphones, and more with our extensive collection of electronic devices.'
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      count: 245,
      description: 'Stay ahead of the trends with our stylish collection of clothing, footwear, and accessories for men and women.'
    },
    {
      id: 3,
      name: 'Home & Garden',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
      count: 189,
      description: 'Transform your living space with our wide range of furniture, decor, kitchenware, and garden essentials.'
    },
    {
      id: 4,
      name: 'Beauty & Health',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      count: 156,
      description: 'Enhance your natural beauty and wellness with our premium range of skincare, makeup, and health products.'
    },
    {
      id: 5,
      name: 'Sports & Outdoors',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      count: 132,
      description: 'Equip yourself for adventure with our selection of sports gear, fitness equipment, and outdoor essentials.'
    },
    {
      id: 6,
      name: 'Toys & Kids',
      image: 'https://images.unsplash.com/photo-1560859251-b3ef1c103176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80',
      count: 98,
      description: 'Find joy and entertainment with our range of toys, games, and children\'s products for all ages.'
    },
    {
      id: 7,
      name: 'Books & Media',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      count: 210,
      description: 'Explore our vast collection of books, music, movies, and digital content across various genres and formats.'
    },
    {
      id: 8,
      name: 'Automotive',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80',
      count: 75,
      description: 'Keep your vehicle in perfect condition with our range of automotive parts, accessories, and maintenance tools.'
    }
  ];

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
          {categories.map(category => (
            <Link key={category.id} to={`/category/${category.id}`} className="category-card-large">
              <div className="category-image-container">
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-overlay"></div>
              </div>
              <div className="category-info-large">
                <h3 className="category-name">{category.name}</h3>
                <span className="category-count">{category.count} Products</span>
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