import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";
import AdminLayout from "./components/admin/AdminLayout";
import MainLayout from "./components/MainLayout";
import UserManagement from "./pages/admin/UserManagement";
import ProductManagement from "./pages/admin/ProductManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import AdminSettings from "./pages/admin/AdminSettings";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/users/ProductsPage";
import AboutPage from "./pages/users/AboutPage";
import ContactPage from "./pages/users/ContactPage";
import Cart from "./pages/Cart";
// Auth guard HOC for protected routes
const RequireAuth = ({ children, isAuthenticated, redirectTo = "/login" }) => {
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

// Admin guard HOC for admin routes
const RequireAdmin = ({ children, user, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return user?.role === "admin" ? children : <Navigate to="/home" />;
};

// Main routes configuration
const getRoutes = (isAuthenticated, user) => [
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
          <RequireAuth isAuthenticated={isAuthenticated}>
            <ProductsPage />
          </RequireAuth>
        ),
      },
      {
        path: "about",
        element: (
          <RequireAuth isAuthenticated={isAuthenticated}>
            <AboutPage />
          </RequireAuth>
        ),
      },
      {
        path: "contact",
        element: (
          <RequireAuth isAuthenticated={isAuthenticated}>
            <ContactPage />
          </RequireAuth>
        ),
      },
      {
        path: "cart",
        element: (
          <RequireAuth isAuthenticated={isAuthenticated}>
            <Cart />
          </RequireAuth>
        ),
      },
      {
        path: "login",
        element: isAuthenticated ? (
          user?.role === "admin" ? (
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
          <RequireAuth isAuthenticated={isAuthenticated}>
            <Home />
          </RequireAuth>
        ),
      },
      // Category routes
      {
        path: "categories",
        element: (
          <RequireAuth isAuthenticated={isAuthenticated}>
            <CategoriesPage />
          </RequireAuth>
        ),
      },
      {
        path: "category/:categoryId",
        element: (
          <RequireAuth isAuthenticated={isAuthenticated}>
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
      <RequireAdmin isAuthenticated={isAuthenticated} user={user}>
        <AdminLayout />
      </RequireAdmin>
    ),
    children: [
      {
        path: "", // Default admin route (dashboard)
        element: <AdminPanel />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
      {
        path: "products",
        element: <ProductManagement />,
      },
      {
        path: "orders",
        element: <OrderManagement />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
    ],
  },
  // Catch-all route
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default getRoutes;
