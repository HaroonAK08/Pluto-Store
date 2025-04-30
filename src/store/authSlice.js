import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      // No need to save to localStorage here as we're doing it in the Login component
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      // Remove from localStorage
      localStorage.removeItem('currentUser');
    },
    checkAuthState: (state) => {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        state.isAuthenticated = true;
        state.currentUser = JSON.parse(storedUser);
      }
    }
  }
});

export const { login, logout, checkAuthState } = authSlice.actions;
export default authSlice.reducer; 