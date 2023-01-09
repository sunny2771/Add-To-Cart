import { createSlice } from "@reduxjs/toolkit";
import cartData from "../../CartData";

const initialState = {
  cartItems: cartData,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },

    addAmount: (state, action) => {
      const getId = action.payload;
      const increase = state.cartItems.find((val) => {
        return val.id === getId;
      });
      increase.amount = increase.amount + 1;
    },

    deleteAmount: (state, action) => {
      const delId = action.payload;
      const decrease = state.cartItems.find((item) => {
        return item.id === delId;
      });
      decrease.amount = decrease.amount - 1;
    },

    calculatePrice: (state) => {
      let total = 0;
      let amount = 0;
      for (const element of state.cartItems) {
        total += element.amount * element.price;
        amount += element.amount;
      }
      state.total = total;
      state.amount = amount;
    },
  },
});

export const {
  clearCart,
  removeItem,
  addAmount,
  deleteAmount,
  calculatePrice,
} = cartSlice.actions;

export default cartSlice.reducer;

// , removeItem, increase, decrease, calculateTotals
