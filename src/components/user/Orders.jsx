import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Orders.css";

function Orders() {
  const { currentUser } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Fetch orders from json-server
        const response = await axios.get(
          `http://localhost:3002/orders?email=${currentUser.email}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to load orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (currentUser) {
      fetchOrders();
    }
  }, [currentUser]);

  if (loading) {
    return <div className="orders-loading">Loading orders...</div>;
  }

  if (error) {
    return <div className="orders-error">{error}</div>;
  }

  return (
    <div className="orders-container">
      <h1>My Orders</h1>
      {orders?.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders?.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h3>Order #{order.orderNumber || order.id}</h3>
                <span
                  className={`order-status ${order?.status?.toLowerCase()}`}
                >
                  {order?.status}
                </span>
              </div>
              <div className="order-details">
                <p>Date: {new Date(order?.date)?.toLocaleDateString()}</p>
                <p>Total: ${order?.totalAmount || order?.total?.toFixed(2)}</p>
                {order?.paymentMethod && <p>Payment: {order.paymentMethod}</p>}
              </div>
              <div className="order-items">
                {order?.items?.map((item) => (
                  <div key={item?.id} className="order-item">
                    <img
                      src={
                        item?.image ||
                        `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500`
                      }
                      alt={item?.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500";
                      }}
                    />
                    <div className="item-details">
                      <h4>{item?.name}</h4>
                      <p>Quantity: {item?.quantity}</p>
                      <p>
                        Price: $
                        {item?.price?.toFixed(2) ||
                          item?.totalPrice?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
