// localStorage.js
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("appState");
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
    } catch (err) {
      console.warn("Could not load state", err);
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify({
        cart: state.cart,
        auth: state.auth,
      });
      localStorage.setItem("appState", serializedState);
    } catch (err) {
      console.warn("Could not save state", err);
    }
  };
  