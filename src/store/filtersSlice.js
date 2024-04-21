import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  limit: 4,
  outOfLimit: false,
  location: '',
  details: [],
  type: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    loadMore: (state) => {
      state.limit += 4;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setOutOfLimit: (state) => {
      state.outOfLimit = true;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    addDetail: (state, action) => {
      state.details = [...state.details, action.payload];
    },
    removeDetail: (state, action) => {
      state.details = state.details.filter((detail) => detail !== action.payload);
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { 
  loadMore, 
  setLimit,
  setPage, 
  setOutOfLimit,
  setLocation,
  addDetail,
  removeDetail,
  setType,
} = filterSlice.actions;

export default filterSlice.reducer;
