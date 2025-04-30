import React, { useState } from 'react';
import '../../styles/Home.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      // In a real app, you would send this to your API
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };
  
  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
          <p className="newsletter-text">
            Get exclusive offers, new product alerts, and discount codes straight to your inbox!
          </p>
          
          {subscribed ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <p>Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="subscribe-button">
                  Subscribe
                </button>
              </div>
              <p className="privacy-note">
                By subscribing, you agree to our <a href="/privacy">Privacy Policy</a>
              </p>
            </form>
          )}
        </div>
        <div className="newsletter-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 