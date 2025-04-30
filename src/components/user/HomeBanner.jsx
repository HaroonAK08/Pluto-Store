import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="banner-content">
        <span className="banner-label">Limited Time Offer</span>
        <h2 className="banner-title">Summer Sale</h2>
        <p className="banner-description">
          Up to 50% off on selected items. Free shipping on all orders over $50.
        </p>
        <div className="banner-cta">
          <Link to="/sale" className="banner-button">Shop Now</Link>
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">2</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">18</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">45</span>
              <span className="countdown-label">Minutes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-image-container">
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Summer Sale" 
          className="banner-image" 
        />
      </div>
    </div>
  );
};

export default HomeBanner; 