import { CombinedCreditsCast } from '@app/types';
import { compareDates } from '@utils/common-utils';
import HorizontalScroller from '../Base/HorizontalScroller';
import PeopleCreditCard from '../Pages/People/MovieCreditCard';
import { Title } from '@mantine/core';

interface MovieCreditCarouselProps {
  title?: string;
  credits: CombinedCreditsCast[] | undefined;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function MovieCreditCarousel({ title = 'Known For', credits, gap = 'md' }: MovieCreditCarouselProps) {
  if (!credits) return '';

  const filteredCasts = credits.filter(credit => credit.poster_path);
  const sortedCasts = filteredCasts.sort((a, b) => compareDates(a.release_date || a.first_air_date, b.release_date || b.first_air_date));

  const slides = sortedCasts.map((credit, index) => (
    <PeopleCreditCard
      id={credit.id}
      poster_path={credit.poster_path}
      title={credit.media_type === 'tv' ? credit.name : credit.title}
      character={credit.character}
      media_type={credit.media_type}
    />
  ));

  return (
    <>
      <Title order={4} mt="sm" mb="sm">
        {title}
      </Title>
      <HorizontalScroller gap={gap}>{slides}</HorizontalScroller>
    </>
  );
}

export default MovieCreditCarousel;
