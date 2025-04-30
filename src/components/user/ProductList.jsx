import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddToCartModal from "./AddToCartModal";
import "../../styles/ProductList.css";

const ProductList = ({ products }) => {
  const [sortOption, setSortOption] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "featured":
      default:
        return 0; // Keep original order
    }
  });

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product, quantity) => {
    // TODO: Implement actual add to cart functionality
    console.log("Adding to cart:", product, "Quantity:", quantity);
  };

  return (
    <div className="product-list-container">
      <div className="product-list-controls">
        <div className="product-count">
          {products.length} {products.length === 1 ? "Product" : "Products"}{" "}
          found
        </div>

        <div className="sorting-controls">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>

          <div className="view-toggles">
            <button
              className={`view-toggle ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <span className="view-icon">⊞</span>
            </button>
            <button
              className={`view-toggle ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              <span className="view-icon">≡</span>
            </button>
          </div>
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
