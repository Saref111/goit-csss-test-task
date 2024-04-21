import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: null
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload;
    },
    removeItem: (state) => {
      state.item = null;
    },
  },
});

export const { setItem, removeItem } = modalSlice.actions;

export default modalSlice.reducer;
