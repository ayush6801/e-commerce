import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of { id, title, price, quantity, ... }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Selector to get total number of items in cart
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
