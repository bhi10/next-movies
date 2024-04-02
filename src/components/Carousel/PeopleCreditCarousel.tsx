import { CombinedCreditsCast } from '@app/types';
import HorizontalScroller from '../Base/HorizontalScroller';
import PeopleCreditCard from '../Pages/People/PeopleCreditCard';

interface PersonCreditCarouselProps {
  credits: CombinedCreditsCast[] | undefined;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function PersonCreditCarousel({ credits, gap = 'md' }: PersonCreditCarouselProps) {
  if (!credits) return '';

  const filteredCasts = credits.filter(credit => credit.poster_path);
  console.log(filteredCasts);

  const slides = filteredCasts.map((credit, index) => (
    <PeopleCreditCard
      id={credit.id}
      poster_path={credit.poster_path}
      title={credit.media_type === 'tv' ? credit.name : credit.title}
      character={credit.character}
      media_type={credit.media_type}
    />
  ));
  return <HorizontalScroller gap={gap}>{slides}</HorizontalScroller>;
}

export default PersonCreditCarousel;
