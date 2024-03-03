import { getCartFromLS } from "@/shared/getCartFromLS";
import { createSlice } from "@reduxjs/toolkit";

const cartData = getCartFromLS();

const initialState = {
  totalPrice: cartData.totalPrice || 0,
  items: cartData,
  sameIdCount: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = findSameItem(state, action);
      if (!item) {
        state.items.push({ ...action.payload, count: 1 });
      } else {
        item.count++;
      }
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action) {
      const { id, size, type } = action.payload;
      const existingIndex = state.items.findIndex(
        (item: any) =>
          item.id === id && item.size === size && item.type === type
      );
      if (existingIndex !== -1) {
        const existingItem = state.items[existingIndex];
        if (existingItem.count > 1) {
          existingItem.count -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          state.totalPrice -= existingItem.price;
          state.items.splice(existingIndex, 1);
        }
      }
    },
    removeAllSimilarPizzas(state, action) {
      const { id, size, type } = action.payload;
      const priceReduction = state.items
        .filter(
          (item: any) =>
            item.id === id && item.size === size && item.type === type
        )
        .reduce((acc: any, item: any) => acc + item.price * item.count, 0);

      state.items = state.items.filter(
        (item: any) =>
          !(item.id === id && item.size === size && item.type === type)
      );
      state.totalPrice -= priceReduction;
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: any) => state.cart;

const findSameItem = (state: any, action: any) => {
  return (
    state.items.find(
      (obj: any) =>
        obj.id === action.payload.id &&
        obj.size === action.payload.size &&
        obj.type === action.payload.type
    ) || null
  );
};

export const { addItem, removeItem, clearItems, removeAllSimilarPizzas } =
  cartReducer.actions;

export default cartReducer.reducer;
