'use client';

import { ImageSizes } from '@app/types';
import { openImageViewer } from '@lib/features/App/appSlice';
import { useAppDispatch } from '@lib/hooks';
import { Carousel } from '@mantine/carousel';
import { Image, MantineSpacing, StyleProp, Title } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';

interface ImagesCarouselProps<T, K extends keyof T> {
  images: T[] | undefined;
  path: K;
  label?: string;
  imageSizes?: ImageSizes;
  slideSize?: StyleProp<string | number>;
  slideGap?: StyleProp<MantineSpacing>;
  align?: number | 'center' | 'end' | 'start';
  dragFree?: boolean;
  loop?: boolean;
  showCount?: boolean;
}

function ImagesCarousel<T, K extends keyof T>({
  label,
  images = [],
  path,
  imageSizes = 'original',
  slideSize = { base: '100%', sm: '50%', md: '33.333333%' },
  slideGap = { base: 0, sm: 'md' },
  align = 'start',
  dragFree = true,
  loop = false,
  showCount = false,
}: ImagesCarouselProps<T, K>) {
  const dispatch = useAppDispatch();

  const onImageClick = (index: number) => {
    const arr = images.map(img => getImgPath(img[path] as string));
    dispatch(openImageViewer({ images: arr, currentIndex: index }));
  };

  if (images.length === 0) return '';

  const slides = images.map((image, index) => {
    const imagePath = image[path] as string;
    const imageUrl = getImgPath(imagePath, imageSizes);
    return (
      <Carousel.Slide key={index} onClick={() => onImageClick(index)}>
        <Image style={{ cursor: 'pointer' }} src={imageUrl}></Image>
      </Carousel.Slide>
    );
  });
  return (
    <>
      {label ? (
        <Title order={4} mt="sm" mb="sm">
          {label} {showCount ? `(${images.length})` : null}
        </Title>
      ) : null}
      <Carousel slideSize={slideSize} slideGap={slideGap} align={align} dragFree={dragFree} loop={loop}>
        {slides}
      </Carousel>
    </>
  );
}

export default ImagesCarousel;
