import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCatalogStart, fetchCatalogSuccess, fetchCatalogFailure } from './catalogSlice';
import { getCampers } from 'services/api';
import { setOutOfLimit } from './filtersSlice';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async (_, { dispatch, getState }) => {
    const { filter, catalog } = getState();
    try {
      dispatch(fetchCatalogStart());
      const response = await getCampers(filter.page, filter.limit);

      if (response.data.length < catalog.items.length + 4) {
        dispatch(setOutOfLimit());
      }
      dispatch(fetchCatalogSuccess(response.data));
    } catch (error) {
      dispatch(fetchCatalogFailure(error.toString()));
    }
  }
);
