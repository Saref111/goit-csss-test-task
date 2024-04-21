import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalogSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: favoritesReducer,
  },
});

export default store;
