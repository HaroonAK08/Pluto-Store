import { Outlet } from "react-router-dom";
import Navbar from "./user/Navbar";
import { useAuth } from "../context/AuthContext";
import "../styles/MainLayout.css";

function MainLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <Navbar />}
      <main className={`main-content ${!isAuthenticated ? "no-navbar" : ""}`}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
