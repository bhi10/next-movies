import { fetchApi } from '@lib/api';
import { createAppSlice } from '@lib/createAppSlice';
import { RootState } from '@lib/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { MediaTv } from './types';

export interface TvSliceState {
  detail: MediaTv | undefined;
  status: 'loading' | 'success' | 'failed';
}

const initialState: TvSliceState = {
  detail: undefined,
  status: 'success',
};

const mediaType = 'tv';

export const getTv = createAsyncThunk(`tv`, async (id: string) => {
  try {
    const media = await fetchApi(`/${mediaType}/${id}`, {
      append_to_response: 'credits,images,recommendations,similar',
      include_image_language: 'en',
    });
    return media;
  } catch (error) {
    console.log(error);
  }
});

export const tvSlice = createAppSlice({
  name: 'tv',
  initialState,

  reducers: create => ({}),

  extraReducers(TvData) {
    TvData.addCase(getTv.pending, state => {
      state.status = 'loading';
      state.detail = undefined;
    })
      .addCase(getTv.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.status = 'success';
      })
      .addCase(getTv.rejected, state => {
        state.status = 'failed';
        state.detail = undefined;
      });
  },
});

export const tvDetail = (state: RootState) => state.tv.detail;

export default tvSlice;
