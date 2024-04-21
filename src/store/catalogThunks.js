import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCatalogStart, fetchCatalogSuccess, fetchCatalogFailure } from './catalogSlice';
import { getCampers } from 'services/api';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async (_, { dispatch }) => {
    try {
      dispatch(fetchCatalogStart());
      const response = await getCampers();
      dispatch(fetchCatalogSuccess(response.data));
    } catch (error) {
      dispatch(fetchCatalogFailure(error.toString()));
    }
  }
);
