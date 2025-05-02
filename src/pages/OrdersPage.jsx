// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import Orders from "../components/user/Orders";
import "../styles/OrdersPage.css";

function OrdersPage() {
  // const { currentUser } = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Redirect to login if user is not authenticated
  //   if (!currentUser) {
  //     navigate("/login");
  //   }
  // }, [currentUser, navigate]);

  // if (!currentUser) {
  //   return null; // Don't render anything while redirecting
  // }

  return (
    <div className="orders-page">
      <div className="orders-page-header">
        <h1>My Orders</h1>
        <p>View and track your order history</p>
      </div>
      <Orders />
    </div>
  );
}

export default OrdersPage;
