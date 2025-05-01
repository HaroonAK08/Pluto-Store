import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Hero.css'; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Discover Premium Products</h1>
        <p className="hero-subtitle">Shop the latest trends with exclusive deals and fast delivery</p>
        <div className="hero-cta">
          <Link to="/products" className="cta-button primary">Shop Now</Link>
          <Link to="/categories" className="cta-button secondary">Browse Categories</Link>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
        </div>
        <div className="discount-badge">
          <span className="discount-text">20% OFF</span>
          <span className="discount-subtext">First Order</span>
        </div>
      </div>
    </div>
  );
};

export default Hero; 