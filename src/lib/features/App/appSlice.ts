import { createAppSlice } from '@lib/createAppSlice';
import { PayloadAction } from '@reduxjs/toolkit';

export interface AppSliceState {
  imageViewerOpened: boolean;
  imageViewerImages: string[] | undefined;
  imageViewerCurrentIndex: number;
}

const initialState: AppSliceState = {
  imageViewerOpened: false,
  imageViewerImages: undefined,
  imageViewerCurrentIndex: 0,
};

export const appSlice = createAppSlice({
  name: 'app',
  initialState,
  reducers: create => ({
    openImageViewer: create.reducer((state, action: PayloadAction<{ images: string[]; currentIndex: number }>) => {
      state.imageViewerImages = action.payload.images;
      state.imageViewerOpened = true;
      state.imageViewerCurrentIndex = action.payload.currentIndex;
    }),
    closeImageViewer: create.reducer(state => {
      state.imageViewerOpened = false;
      state.imageViewerImages = undefined;
      state.imageViewerCurrentIndex = 0;
    }),
  }),

  selectors: {
    imageViewerOpened: state => state.imageViewerOpened,
    imageViewerImages: state => state.imageViewerImages,
    imageViewerCurrentIndex: state => state.imageViewerCurrentIndex,
  },
});

// Action creators are generated for each case reducer function.
export const { openImageViewer, closeImageViewer } = appSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { imageViewerOpened, imageViewerImages, imageViewerCurrentIndex } = appSlice.selectors;

export default appSlice;
