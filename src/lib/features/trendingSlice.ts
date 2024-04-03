import { TrendingMedia } from '@app/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../api';
import { createAppSlice } from '../createAppSlice';
import { RootState } from '../store';

export interface TrendingSliceState {
  list: TrendingMedia[];
  status: 'loading' | 'success' | 'failed';
}

const initialState: TrendingSliceState = {
  list: [],
  status: 'success',
};

export const getTrending = createAsyncThunk('home/trending', async () => {
  try {
    const apiData = await fetchApi('/trending/all/week');
    const list = apiData.results;
    return list;
  } catch (error) {
    console.log(error);
  }
});

export const trendingSlice = createAppSlice({
  name: 'trending',
  initialState,

  reducers: create => ({}),

  extraReducers(TrendingData) {
    TrendingData.addCase(getTrending.pending, state => {
      state.status = 'loading';
    })
      .addCase(getTrending.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'success';
      })
      .addCase(getTrending.rejected, state => {
        state.status = 'failed';
        state.list = [];
      });
  },
});

export const trendingList = (state: RootState) => state.trending.list;

export default trendingSlice;
