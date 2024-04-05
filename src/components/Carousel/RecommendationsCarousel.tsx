import { MediaType, RecommendationMedia } from '@app/types';
import HorizontalScroller from '@components/Base/HorizontalScroller';
import { Title } from '@mantine/core';
import { compareDates } from '@utils/common-utils';
import PeopleCreditCard from '../Pages/People/MovieCreditCard';

interface RecommendationsCarouselProps {
  title?: string;
  recommendations: RecommendationMedia[] | undefined;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  media_type?: MediaType;
}

function RecommendationsCarousel({ title = 'Recommendations', recommendations, gap = 'md', media_type = 'movie' }: RecommendationsCarouselProps) {
  if (!recommendations || recommendations?.length === 0) return '';

  const filteredCasts = recommendations.filter(recommendation => recommendation.poster_path);
  const sortedCasts = filteredCasts.sort((a, b) => compareDates(a.release_date, b.release_date));

  const slides = sortedCasts.map((credit, index) => (
    <PeopleCreditCard key={index} id={credit.id} poster_path={credit.poster_path} title={credit.title || credit.name} media_type={media_type} />
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

export default RecommendationsCarousel;
