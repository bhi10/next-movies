import { createAsyncThunk } from '@reduxjs/toolkit';
import { Season } from './types';
import { fetchApi } from '@lib/api';
import { createAppSlice } from '@lib/createAppSlice';
import { RootState } from '@lib/store';

export interface SeasonSliceState {
  detail: Season | undefined;
  status: 'loading' | 'success' | 'failed';
}

const initialState: SeasonSliceState = {
  detail: undefined,
  status: 'success',
};

export const getSeason = createAsyncThunk(`season`, async ({ tvId, seasonNo }: { tvId: string; seasonNo: string }) => {
  try {
    const season = await fetchApi(`/tv/${tvId}/season/${seasonNo}`, {
      append_to_response: 'images',
    });
    return season;
  } catch (error) {
    console.log(error);
  }
});

export const seasonSlice = createAppSlice({
  name: 'season',
  initialState,

  reducers: create => ({}),

  extraReducers(SeasonData) {
    SeasonData.addCase(getSeason.pending, state => {
      state.status = 'loading';
      state.detail = undefined;
    })
      .addCase(getSeason.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.status = 'success';
      })
      .addCase(getSeason.rejected, state => {
        state.status = 'failed';
        state.detail = undefined;
      });
  },
});

export const seasonDetail = (state: RootState) => state.season.detail;

export default seasonSlice;
