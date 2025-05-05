import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddToCartModal from "./AddToCartModal";
import "../../styles/ProductList.css";

const ProductList = ({ products }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortedProducts = [...products]

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product, quantity) => {
    console.log("Adding to cart:", product, "Quantity:", quantity);
  };

  return (
    <div className="product-list-container">
      <div className="product-list-controls">
        <div className="product-count">
          {products.length} {products.length === 1 ? "Product" : "Products"}{" "}
          found
        </div>
      </div>

      <div
        className={`products-wrapper ${
          viewMode === "list" ? "list-view" : "grid-view"
        }`}
      >
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-item">
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
              <div className="product-actions">
                <button className="quick-view-button">Quick View</button>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCartClick(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h3>
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
              {viewMode === "list" && (
                <div className="product-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, diam quis aliquam tincidunt, nunc nunc ultrices
                    nunc, vitae aliquam nisl nisl vitae nisl.
                  </p>
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCartClick(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <AddToCartModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ProductList;
