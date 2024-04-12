import { MediaType } from '@app/types';
import HorizontalScroller from '@components/Base/HorizontalScroller';
import { Title } from '@mantine/core';
import { compareDates } from '@utils/common-utils';
import PeopleCreditCard from '../Pages/People/MovieCreditCard';

interface RecommendationsCarouselProps<T, K extends keyof T, L extends keyof T, M extends keyof T, N extends keyof T> {
  title?: string;
  recommendations: T[] | undefined;
  poster_path: K;
  release_date_path: L;
  id_path: M;
  name_path: N;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  media_type?: MediaType;
}

function RecommendationsCarousel<T, K extends keyof T, L extends keyof T, M extends keyof T, N extends keyof T>({
  title = 'Recommendations',
  recommendations,
  poster_path,
  release_date_path,
  id_path,
  name_path,
  gap = 'md',
  media_type = 'movie',
}: RecommendationsCarouselProps<T, K, L, M, N>) {
  if (!recommendations || recommendations?.length === 0) return '';

  const filteredCasts = recommendations.filter(recommendation => recommendation[poster_path] as string);
  const sortedCasts = filteredCasts.sort((a, b) => compareDates(a[release_date_path] as string, b[release_date_path] as string));

  const slides = sortedCasts.map((credit, index) => (
    <PeopleCreditCard
      key={index}
      id={credit[id_path] as number}
      poster_path={credit[poster_path] as string}
      title={credit[name_path] as string}
      media_type={media_type}
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

export default RecommendationsCarousel;
