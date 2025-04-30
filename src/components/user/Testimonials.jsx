import React, { useState, useEffect } from 'react';
import '../../styles/Home.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Fashion Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
      text: 'The quality of products on this store is exceptional. I\'ve been shopping here for years and have never been disappointed. The customer service is also fantastic!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Tech Blogger',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
      text: 'As someone who reviews tech products professionally, I can say this store has the best selection and prices. Their shipping is lightning fast and the products are always as described.'
    },
    {
      id: 3,
      name: 'Olivia Martinez',
      position: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80',
      text: 'I source a lot of home decor items from this store for my clients. The quality is consistently high and the unique selection helps me create distinctive spaces for my clients.'
    }
  ];
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div className="testimonials-section">
      <div className="section-header centered">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Trusted by thousands of satisfied shoppers</p>
      </div>
      
      <div className="testimonials-slider">
        <div className="testimonials-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">❝</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="slider-controls">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 