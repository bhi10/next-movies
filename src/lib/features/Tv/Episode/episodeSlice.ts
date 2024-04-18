import { fetchApi } from '@lib/api';
import { createAppSlice } from '@lib/createAppSlice';
import { RootState } from '@lib/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Episode } from './types';

export interface EpisodeSliceState {
  detail: Episode | undefined;
  status: 'loading' | 'success' | 'failed';
}

const initialState: EpisodeSliceState = {
  detail: undefined,
  status: 'success',
};

export const getEpisode = createAsyncThunk(
  'episode',
  async ({ tvId, seasonNo, episodeNo }: { tvId: string; seasonNo: string; episodeNo: string }) => {
    try {
      const episode = await fetchApi(`/tv/${tvId}/season/${seasonNo}/episode/${episodeNo}`, {
        append_to_response: 'images',
      });
      return episode;
    } catch (error) {
      console.log(error);
    }
  }
);

export const episodeSlice = createAppSlice({
  name: 'episode',
  initialState,

  reducers: create => ({}),

  extraReducers(EpisodeDate) {
    EpisodeDate.addCase(getEpisode.pending, state => {
      state.status = 'loading';
      state.detail = undefined;
    })
      .addCase(getEpisode.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.status = 'success';
      })
      .addCase(getEpisode.rejected, state => {
        state.status = 'failed';
        state.detail = undefined;
      });
  },
});

export const episodeDetail = (state: RootState) => state.episode.detail;

export default episodeSlice;
