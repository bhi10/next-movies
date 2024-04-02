import { CastMember } from '@app/types';
import HorizontalScroller from '@components/Base/HorizontalScroller';
import Cast from '@components/Cards/Cast';

interface CastCarouselProps {
  casts: CastMember[] | undefined;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function CastCarousel({ casts, gap = 'md' }: CastCarouselProps) {
  if (!casts) return '';
  
  const filteredCasts = casts.filter(cast => cast.profile_path);
  const slides = filteredCasts.map((cast, index) => <Cast cast={cast} key={index} />);
  return <HorizontalScroller gap={gap}>{slides}</HorizontalScroller>;
}
