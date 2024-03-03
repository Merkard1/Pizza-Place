import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  categoryId: number;
  sort: string;
}

const initialState: IinitialState = {
  categoryId: 0,
  sort: "rating",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortId(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSortId } = filterSlice.actions;

export default filterSlice.reducer;
