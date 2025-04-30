import React, { useState } from "react";
import "../../styles/AddToCartModal.css";

const AddToCartModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-body">
          <div className="modal-product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="modal-product-details">
            <h2>{product.name}</h2>
            <div className="modal-price">
              {product.discount > 0 ? (
                <>
                  <span className="original-price">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="discounted-price">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="price">${product.price.toFixed(2)}</span>
              )}
            </div>

            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button onClick={handleDecrement} className="quantity-btn">
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button onClick={handleIncrement} className="quantity-btn">
                  +
                </button>
              </div>
            </div>

            <button
              className="add-to-cart-btn"
              onClick={() => onAddToCart(quantity)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
