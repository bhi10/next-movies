'use client';

import { TrendingMedia } from '@app/types';
import { Carousel } from '@mantine/carousel';
import MediaCard from '../Cards/MediaCard';

interface MediaCarouselProps {
  trending: TrendingMedia[];
}

export default function MediaCarousel({ trending = [] }: MediaCarouselProps) {
  const slides = trending.map((media, index) => (
    <Carousel.Slide key={index}>
      <MediaCard media={media} />
    </Carousel.Slide>
  ));
  return (
    <Carousel slideSize="70%" height={500} slideGap="xs" loop>
      {slides}
    </Carousel>
  );
}
