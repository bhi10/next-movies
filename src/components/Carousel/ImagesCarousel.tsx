'use client';

import { ImageSizes } from '@app/types';
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
}: ImagesCarouselProps<T, K>) {
  if (images.length === 0) return '';


  const slides = images.map((image, index) => {
    const imagePath = image[path] as string;
    const imageUrl = getImgPath(imagePath, imageSizes);
    return (
      <Carousel.Slide key={index}>
        <Image src={imageUrl}></Image>
      </Carousel.Slide>
    );
  });
  return (
    <>
      {label ? (
        <Title order={4} mt="sm" mb="sm">
          {label}
        </Title>
      ) : null}
      <Carousel slideSize={slideSize} slideGap={slideGap} align={align} dragFree={dragFree}>
        {slides}
      </Carousel>
    </>
  );
}

export default ImagesCarousel