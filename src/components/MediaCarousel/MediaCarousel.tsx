'use client';

import { Carousel } from '@mantine/carousel';
import MediaCarouselCard from './MediaCarouselCard';

export default function MediaCarousel({ trending }: { trending: TrendingMedia[] }) {
  console.log(trending);

  const slides = trending.map((media) => (
    <Carousel.Slide>
      <MediaCarouselCard media={media} />
    </Carousel.Slide>
  ));
  return (
    <Carousel slideSize="70%" height={500} slideGap="xs" loop>
      {slides}
    </Carousel>
  );
}
