import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { toast } from "react-toastify";
import CheckoutModal from "../components/CheckoutModal";
import "../styles/Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleConfirmOrder = async (orderData) => {
    try {
      const response = await fetch("http://localhost:3002/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...orderData,
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            totalPrice: item.totalPrice,
          })),
        }),
      });

      if (response.ok) {
        // Show success toast
        toast.success("Order placed successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Clear the cart after successful order
        items.forEach((item) => dispatch(removeFromCart(item.id)));
        setIsCheckoutModalOpen(false);

        // Show order confirmed message after 1 second
        setTimeout(() => {
          toast.info("Order confirmed! Thank you for shopping with us.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }, 1000);
      } else {
        throw new Error("Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Failed to place order. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p>Add some products to your cart to see them here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <div className="item-price">${item.price.toFixed(2)}</div>
                <div className="item-quantity">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  Total: ${item.totalPrice.toFixed(2)}
                </div>
              </div>
              <button
                className="remove-item"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        totalAmount={totalAmount}
        onConfirmOrder={handleConfirmOrder}
      />
    </div>
  );
}

export default Cart;
