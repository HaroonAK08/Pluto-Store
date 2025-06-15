import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status on mount
    const auth = localStorage.getItem("auth");
    if (auth) {
      const { isAuthenticated, isAdmin, user } = JSON.parse(auth);
      setIsAuthenticated(isAuthenticated);
      setIsAdmin(isAdmin);
      setCurrentUser(user);
    }
  }, []);

  const login = (userData, isAdminUser = false) => {
    const authData = {
      isAuthenticated: true,
      isAdmin: isAdminUser,
      user: userData,
    };
    localStorage.setItem("auth", JSON.stringify(authData));
    setIsAuthenticated(true);
    setIsAdmin(isAdminUser);
    setCurrentUser(userData);

    // Navigate based on user type
    if (isAdminUser) {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    setIsAdmin(false);
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAdmin,
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
