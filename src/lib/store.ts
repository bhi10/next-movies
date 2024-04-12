import { combineSlices, configureStore } from '@reduxjs/toolkit';
import appSlice from './features/App/appSlice';
import configSlice from './features/Config/configSlice';
import trendingSlice from './features/Home/trendingSlice';
import movieSlice from './features/Movie/movieSlice';
import peopleSlice from './features/People/peopleSlice';
import tvSlice from './features/Tv/tvSlice';

const rootReducer = combineSlices(appSlice, trendingSlice, peopleSlice, configSlice, movieSlice, tvSlice);

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
