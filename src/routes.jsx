import { Navigate, useRoutes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";
import AdminLayout from "./components/admin/AdminLayout";
import MainLayout from "./components/MainLayout";
import ProductManagement from "./pages/admin/ProductManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/users/ProductsPage";
import ProductDetailsPage from "./pages/users/ProductDetailsPage";
import AboutPage from "./pages/users/AboutPage";
import ContactPage from "./pages/users/ContactPage";
import Cart from "./pages/Cart";

// Auth guard HOC for protected routes
const RequireAuth = ({ children, redirectTo = "/login" }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

// Admin guard HOC for admin routes
const RequireAdmin = ({ children }) => {
  const { isAuthenticated, isAdmin } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return isAdmin ? children : <Navigate to="/home" />;
};

// Routes component that uses hooks
function AppRoutes() {
  const { isAuthenticated, isAdmin } = useAuth();

  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Start />,
        },
        {
          path: "products",
          element: (
            <RequireAuth>
              <ProductsPage />
            </RequireAuth>
          ),
        },
        {
          path: "product/:id",
          element: (
            <RequireAuth>
              <ProductDetailsPage />
            </RequireAuth>
          ),
        },
        {
          path: "about",
          element: (
            <RequireAuth>
              <AboutPage />
            </RequireAuth>
          ),
        },
        {
          path: "contact",
          element: (
            <RequireAuth>
              <ContactPage />
            </RequireAuth>
          ),
        },
        {
          path: "cart",
          element: (
            <RequireAuth>
              <Cart />
            </RequireAuth>
          ),
        },
        {
          path: "login",
          element: isAuthenticated ? (
            isAdmin ? (
              <Navigate to="/admin" />
            ) : (
              <Navigate to="/home" />
            )
          ) : (
            <Login />
          ),
        },
        {
          path: "register",
          element: isAuthenticated ? <Navigate to="/home" /> : <Register />,
        },
        {
          path: "home",
          element: (
            <RequireAuth>
              <Home />
            </RequireAuth>
          ),
        },
        // Category routes
        {
          path: "categories",
          element: (
            <RequireAuth>
              <CategoriesPage />
            </RequireAuth>
          ),
        },
        {
          path: "category/:categoryId",
          element: (
            <RequireAuth>
              <CategoryPage />
            </RequireAuth>
          ),
        },
      ],
    },
    // Admin routes with nested children
    {
      path: "/admin",
      element: (
        <RequireAdmin>
          <AdminLayout />
        </RequireAdmin>
      ),
      children: [
        {
          path: "", // Default admin route (dashboard)
          element: <AdminPanel />,
        },
        {
          path: "products",
          element: <ProductManagement />,
        },
        {
          path: "orders",
          element: <OrderManagement />,
        },
      ],
    },
    // Catch-all route
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  return useRoutes(routes);
}

export default AppRoutes;
