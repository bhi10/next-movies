import { combineSlices, configureStore } from '@reduxjs/toolkit';
import imagesSlice from './features/imagesSlice';
import mediaSlice from './features/mediaSlice';
import peopleSlice from './features/peopleSlice';
import trendingSlice from './features/trendingSlice';

const rootReducer = combineSlices(trendingSlice, mediaSlice, imagesSlice, peopleSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
