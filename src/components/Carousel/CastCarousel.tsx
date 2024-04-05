import { CastMember } from '@app/types';
import HorizontalScroller from '@components/Base/HorizontalScroller';
import Cast from '@components/Cards/Cast';
import { Title } from '@mantine/core';

interface CastCarouselProps {
  casts: CastMember[] | undefined;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function CastCarousel({ casts, gap = 'md' }: CastCarouselProps) {
  if (!casts || casts.length === 0) return '';

  const filteredCasts = casts.filter(cast => cast.profile_path);
  const slides = filteredCasts.map((cast, index) => <Cast cast={cast} key={index} />);
  return (
    <>
      <Title order={4} mt="sm" mb="sm">
        Top Cast
      </Title>
      <HorizontalScroller gap={gap}>{slides}</HorizontalScroller>
    </>
  );
}
