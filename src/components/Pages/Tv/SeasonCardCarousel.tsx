import { TvSeasons } from '@lib/features/Tv/types';
import SeasonCard from './SeasonCard';
import { Title } from '@mantine/core';
import HorizontalScroller from '@components/Base/HorizontalScroller';

interface SeasonCardCarouselProps {
  tvId: number;
  seasons: TvSeasons[];
}

function SeasonCardCarousel({ tvId, seasons }: SeasonCardCarouselProps) {
  if (!seasons || seasons.length === 0) return '';

  const slides = seasons.map((season, index) => <SeasonCard key={index} tvId={tvId} season={season} />);
  return (
    <>
      <Title order={4} mt="sm" mb="sm">
        Seasons
      </Title>
      <HorizontalScroller gap="md">{slides}</HorizontalScroller>
    </>
  );
}

export default SeasonCardCarousel;
