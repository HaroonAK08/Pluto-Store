import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import AddToCartModal from "./AddToCartModal";
import "../../styles/Home.css";

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        // Get only the first 6 products
        setProducts(data.products.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (quantity) => {
    if (selectedProduct) {
      dispatch(
        addToCart({
          product: selectedProduct,
          quantity: quantity,
        })
      );
      setIsModalOpen(false);
      setSelectedProduct(null);
    }
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

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
