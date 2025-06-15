import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CheckoutModal from "../components/CheckoutModal";
import "../styles/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);

    // Calculate total amount
    const total = savedCart.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);
    setTotalAmount(total);
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      const updatedCart = cartItems.map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Recalculate total
      const total = updatedCart.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
      }, 0);
      setTotalAmount(total);
    }
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total
    const total = updatedCart.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);
    setTotalAmount(total);
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
          items: cartItems.map((item) => ({
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            totalPrice: item.product.price * item.quantity,
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
        setCartItems([]);
        localStorage.setItem("cart", "[]");
        setTotalAmount(0);
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

  if (cartItems.length === 0) {
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
          {cartItems.map((item) => (
            <div key={item.product.id} className="cart-item">
              <div className="item-image">
                <img src={item.product.image} alt={item.product.name} />
              </div>
              <div className="item-details">
                <h3>{item.product.name}</h3>
                <div className="item-price">
                  ${item.product.price.toFixed(2)}
                </div>
                <div className="item-quantity">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.product.id, item.quantity - 1)
                    }
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.product.id, item.quantity + 1)
                    }
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  Total: ${(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
              <button
                className="remove-item"
                onClick={() => handleRemoveItem(item.product.id)}
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
