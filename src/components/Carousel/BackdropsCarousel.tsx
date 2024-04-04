'use client';

import { ImageObject } from '@app/types';
import { Carousel } from '@mantine/carousel';
import { Image, Title } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';

interface BackdropsCarouselProps {
  backdrops: ImageObject[] | undefined;
}

export default function BackdropsCarousel({ backdrops = [] }: BackdropsCarouselProps) {
  if (backdrops.length === 0) return '';

  const slides = backdrops.map((backdrop, index) => {
    const imagePath = getImgPath(backdrop.file_path, 'w1066_and_h600_bestv2');
    return (
      <Carousel.Slide key={index}>
        <Image src={imagePath}></Image>
      </Carousel.Slide>
    );
  });
  return (
    <>
      <Title order={4} mt="sm" mb="sm">
        Backdrops
      </Title>
      <Carousel slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }} slideGap={{ base: 0, sm: 'md' }} align="start" dragFree>
        {slides}
      </Carousel>
    </>
  );
}
