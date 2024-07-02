'use client';

import { closeImageViewer, imageViewerCurrentIndex, imageViewerImages, imageViewerOpened } from '@lib/features/App/appSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import ImageViewer from 'react-simple-image-viewer';

function AppImageViewer() {
  const dispatch = useAppDispatch();
  const isViewerOpen = useAppSelector(imageViewerOpened);
  const images = useAppSelector(imageViewerImages);
  const currentImage = useAppSelector(imageViewerCurrentIndex);

  const onCloseImageViewer = () => {
    dispatch(closeImageViewer());
  };

  if (!images || images.length === 0) return null;

  return (
    <div style={{ zIndex: 9999 }}>
      {isViewerOpen && (
        <ImageViewer src={images} currentIndex={currentImage} disableScroll={true} closeOnClickOutside={true} onClose={onCloseImageViewer} />
      )}
    </div>
  );
}

export default AppImageViewer;
