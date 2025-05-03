import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/FeaturedProduct.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setProducts(data.products.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (loading) return <div className="loading-text">Loading products...</div>;

  return (
    <div className="featured-section">
      <div className="header">
        <h2 className="title">✨ Featured Products</h2>
        <Link to="/products" className="view-all">
          View All ➤
        </Link>
      </div>

      <div className="slider-container">
        <button className="nav-button left" onClick={() => scroll("left")}>
          &#10094;
        </button>
        <div className="slider" ref={scrollRef}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="card-link">
                <div className="image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                  {product.discount > 0 && (
                    <span className="badge">-{product.discount}%</span>
                  )}
                </div>
                <div className="details">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="price">
                    {product.discount > 0 ? (
                      <>
                        <span className="old-price">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="new-price">
                          $
                          {(
                            product.price *
                            (1 - product.discount / 100)
                          ).toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="new-price">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="rating">
                    <div
                      className="stars"
                      style={{ "--rating": product.rating }}
                    ></div>
                    <span className="rating-value">({product.rating})</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={() => scroll("right")}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
