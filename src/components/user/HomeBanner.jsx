import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const HomeBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target date here
  const targetDate = new Date("2025-05-10T23:59:59");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="home-banner">
      <div className="banner-content">
        <span className="banner-label">Limited Time Offer</span>
        <h2 className="banner-title">Summer Sale</h2>
        <p className="banner-description">
          Up to 50% off on selected items. Free shipping on all orders over $50.
        </p>
        <div className="banner-cta">
          <Link to="/products" className="banner-button">Shop Now</Link>
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-image-container">
        <img 
          src="https://images.unsplash.com/photo-1594488518065-832318c2405b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Summer Sale" 
          className="banner-image" 
        />
      </div>
    </div>
  );
};

export default HomeBanner;
