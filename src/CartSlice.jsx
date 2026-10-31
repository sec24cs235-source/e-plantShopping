import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        product => product.name === item.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const item = state.items.find(
        product => product.name === name
      );

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            product => product.name !== name
          );
        } else {
          item.quantity = quantity;
        }
      }
    }
  }
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
