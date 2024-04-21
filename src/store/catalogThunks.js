import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCatalogStart, fetchCatalogSuccess, fetchCatalogFailure } from './catalogSlice';
import { getCampers } from 'services/api';
import { setOutOfLimit } from './filtersSlice';

const buildQueryString = ({location, type, details}) => {
  const query = [];
  if (location) {
    query.push(`location=${location}`);
  }
  if (type) {
    query.push(`form=${type}`);
  }
  if (details.length) {
    query.push(`details.${details.join(',details=')}`);
  }

  return query.join('&');
};

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async (_, { dispatch, getState }) => {
    const { filter, catalog } = getState();
    const queryString = buildQueryString(filter);
    try {
      dispatch(fetchCatalogStart());
      const response = await getCampers(filter.page, filter.limit, queryString);

      if (response.data.length < catalog.items.length + 4) {
        dispatch(setOutOfLimit());
      }
      dispatch(fetchCatalogSuccess(response.data));
    } catch (error) {
      dispatch(fetchCatalogFailure(error.toString()));
    }
  }
);
