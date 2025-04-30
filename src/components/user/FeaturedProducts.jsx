import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import AddToCartModal from "./AddToCartModal";
import "../../styles/Home.css";

const FeaturedProducts = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (quantity) => {
    if (selectedProduct) {
      dispatch(
        addToCart({
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          image: selectedProduct.image,
          quantity: quantity,
        })
      );
      setIsModalOpen(false);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="featured-products-section">
      <div className="section-header">
        <h2 className="section-title">Featured Products</h2>
        <Link to="/products" className="view-all-link">
          View All
        </Link>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              {product.discount > 0 && (
                <span className="product-discount-badge">
                  -{product.discount}%
                </span>
              )}
              <button className="quick-view-button">Quick View</button>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price-container">
                {product.discount > 0 ? (
                  <>
                    <span className="product-price discounted">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="product-price">
                      $
                      {(product.price * (1 - product.discount / 100)).toFixed(
                        2
                      )}
                    </span>
                  </>
                ) : (
                  <span className="product-price">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="product-rating">
                <div
                  className="stars"
                  style={{ "--rating": product.rating }}
                ></div>
                <span className="rating-text">({product.rating})</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCartClick(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <AddToCartModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default FeaturedProducts;
