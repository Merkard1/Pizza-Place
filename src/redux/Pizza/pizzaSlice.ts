import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  // @ts-ignore
  async ({ categoryParams, sortParams }) => {
    try {
      let searchParameters = `?category=${categoryParams || 0}&sortBy=${
        sortParams || "rating"
      }&order=asc`;
      const { data } = await axios.get(
        `https://${
          import.meta.env.VITE_PIZZA_API
        }.mockapi.io/PizzaData${searchParameters}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  items: [],
  isLoading: true,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.items = [];
        state.isLoading = true;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.isLoading = true;
        console.log("Api error", action.payload);
      });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
