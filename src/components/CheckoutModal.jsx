import React, { useState } from "react";
import "../styles/CheckoutModal.css";

function CheckoutModal({ isOpen, onClose, totalAmount, onConfirmOrder }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      totalAmount,
      paymentMethod: "Cash on Delivery",
      orderNumber: `ORD-${Date.now()}`,
      status: "Pending",
      paymentStatus: "Pending",
      date: new Date().toISOString(),
    };
    onConfirmOrder(orderData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content checkout-modal">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Delivery Address *</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="payment-method">
            <h3>Payment Method</h3>
            <div className="payment-option">
              {/* <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked
                readOnly
              /> */}
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Total Amount:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
          <button type="submit" className="confirm-order-btn">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutModal;
