import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkAuthState } from './store/authSlice'
import getRoutes from './routes'

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
    </BrowserRouter>
  )
}

export default App