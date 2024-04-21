import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalogSlice';
import favoritesReducer from './favoritesSlice';
import filterReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
  },
});

export default store;
