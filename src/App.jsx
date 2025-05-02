import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthState } from "./store/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getRoutes from "./routes";

function AppRoutes() {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const routes = getRoutes(isAuthenticated, currentUser);
  return useRoutes(routes);
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check authentication state from localStorage on app load
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
