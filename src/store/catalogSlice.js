import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    fetchCatalogStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCatalogSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchCatalogFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchCatalogStart, fetchCatalogSuccess, fetchCatalogFailure } = catalogSlice.actions;

export default catalogSlice.reducer;
