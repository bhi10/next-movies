'use client';

import { TrendingMedia } from '@app/types';
import { Carousel } from '@mantine/carousel';
import MediaCard from '../../Cards/MediaCard';

export interface MediaCarouselProps {
  trending: TrendingMedia[];
}

export default function MediaCarousel({ trending }: MediaCarouselProps) {
  const slides = trending.map((media, index) => (
    <Carousel.Slide key={index}>
      <MediaCard media={media} />
    </Carousel.Slide>
  ));
  return (
    <Carousel slideSize={{ base: '100%', xl: '50%', lg: '60%', md: '80%', sm: '90%', xs: '100%' }} height={500} slideGap="xs" loop dragFree>
      {slides}
    </Carousel>
  );
}
