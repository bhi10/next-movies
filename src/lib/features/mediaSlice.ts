import { Media, MediaType } from '@app/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../api';
import { createAppSlice } from '../createAppSlice';
import { RootState } from '../store';

export interface MediaSliceState {
  detail: Media | undefined;
  status: 'loading' | 'success' | 'failed';
}

const initialState: MediaSliceState = {
  detail: undefined,
  status: 'success',
};

export const getMedia = createAsyncThunk(`media`, async ({ type, id }: { type: MediaType; id: string | number }) => {
  try {
    const media = await fetchApi(`/${type}/${id}`, {
      append_to_response: 'credits,images,videos,recommendations,episodes,similar',
      include_image_language: 'en',
    });
    return media;
  } catch (error) {
    console.log(error);
  }
});

export const mediaSlice = createAppSlice({
  name: 'media',
  initialState,

  reducers: create => ({}),

  extraReducers(TrendingData) {
    TrendingData.addCase(getMedia.pending, state => {
      state.status = 'loading';
      state.detail = undefined;
    })
      .addCase(getMedia.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.status = 'success';
      })
      .addCase(getMedia.rejected, state => {
        state.status = 'failed';
        state.detail = undefined;
      });
  },
});

export const mediaDetail = (state: RootState) => state.media.detail;

export default mediaSlice;
