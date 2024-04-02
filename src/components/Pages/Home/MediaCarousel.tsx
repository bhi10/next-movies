'use client';

import { getTrending, trendingList } from '@lib/features/trendingSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Carousel } from '@mantine/carousel';
import { useEffect } from 'react';
import MediaCard from '../../Cards/MediaCard';
import { TrendingMedia } from '@app/types';

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
    <Carousel slideSize="70%" height={500} slideGap="xs" loop>
      {slides}
    </Carousel>
  );
}
