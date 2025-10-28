import { ProductModel } from "@/types/ProductModel";
import { createSlice } from "@reduxjs/toolkit";
interface CartState {
  items: ProductModel[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // item should have at least an id
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
