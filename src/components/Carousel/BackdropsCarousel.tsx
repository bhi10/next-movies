'use client';

import { ImageObject } from '@app/types';
import { getImgPath } from '@lib/utils';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

interface BackdropsCarouselProps {
  backdrops: ImageObject[] | undefined;
}

export default function BackdropsCarousel({ backdrops }: BackdropsCarouselProps) {
  if (!backdrops) return '';

  const slides = backdrops.map((backdrop, index) => {
    const imagePath = getImgPath(backdrop.file_path, 'w1066_and_h600_bestv2');
    return (
      <Carousel.Slide key={index}>
        <Image src={imagePath}></Image>
      </Carousel.Slide>
    );
  });
  return (
    <Carousel slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }} slideGap={{ base: 0, sm: 'md' }} align="start" loop>
      {slides}
    </Carousel>
  );
}
