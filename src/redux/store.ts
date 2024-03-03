import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Filter/filterSlice";
import cartReducer from "./Cart/cartSlice";
import pizzaReducer from "./Pizza/pizzaSlice";

export const store = configureStore({
  reducer: {
    filterReducer,
    cartReducer,
    pizzaReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
