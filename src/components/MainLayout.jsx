import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './user/Navbar';
import '../styles/MainLayout.css';

function MainLayout() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  return (
    <>
      {isAuthenticated && <Navbar />}
      <main className={`main-content ${!isAuthenticated ? 'no-navbar' : ''}`}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout; 