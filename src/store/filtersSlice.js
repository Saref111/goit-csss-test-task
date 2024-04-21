import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  limit: 4,
  outOfLimit: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    loadMore: (state) => {
      state.limit += 4;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPagesCount: (state, action) => {
      state.pagesCount = action.payload;
    },
    setOutOfLimit: (state) => {
      state.outOfLimit = true;
    },
  },
});

export const { loadMore, setPage, setPagesCount, setOutOfLimit } = filterSlice.actions;

export default filterSlice.reducer;
