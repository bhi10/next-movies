import { fetchApi } from '@lib/api';
import { createAppSlice } from '@lib/createAppSlice';
import { RootState } from '@lib/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { MediaMovie } from './types';

export interface MovieSliceState {
  detail: MediaMovie | undefined;
  status: 'loading' | 'success' | 'failed';
}

const initialState: MovieSliceState = {
  detail: undefined,
  status: 'success',
};

const mediaType = 'movie';

export const getMovie = createAsyncThunk(`movie`, async (id: string) => {
  try {
    const media = await fetchApi(`/${mediaType}/${id}`, {
      append_to_response: 'credits,recommendations,similar',
      include_image_language: 'en',
    });
    return media;
  } catch (error) {
    console.log(error);
  }
});

export const movieSlice = createAppSlice({
  name: 'movie',
  initialState,

  reducers: create => ({}),

  extraReducers(MovieData) {
    MovieData.addCase(getMovie.pending, state => {
      state.status = 'loading';
      state.detail = undefined;
    })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.status = 'success';
      })
      .addCase(getMovie.rejected, state => {
        state.status = 'failed';
        state.detail = undefined;
      });
  },
});

export const movieDetail = (state: RootState) => state.movie.detail;

export default movieSlice;
