import { MediaType, MoviesImages } from '@/app/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../api';
import { createAppSlice } from '../createAppSlice';
import { RootState } from '../store';

export interface ImagesSliceState {
  list: MoviesImages | undefined;
  status: 'loading' | 'success' | 'failed';
}

const initialState: ImagesSliceState = {
  list: undefined,
  status: 'success',
};

export const getImages = createAsyncThunk('media/images', async ({ type, id }: { type: MediaType; id: string | number }) => {
  try {
    const images = await fetchApi(`/${type}/${id}/images`);
    return images;
  } catch (error) {
    console.log(error);
  }
});

export const imagesSlice = createAppSlice({
  name: 'images',
  initialState,

  reducers: create => ({}),

  extraReducers(TrendingData) {
    TrendingData.addCase(getImages.pending, state => {
      state.status = 'loading';
      state.list = undefined;
    })
      .addCase(getImages.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'success';
      })
      .addCase(getImages.rejected, state => {
        state.status = 'failed';
        state.list = undefined;
      });
  },
});

export const imagesList = (state: RootState) => state.images.list;

export default imagesSlice;
