import MediaCarousel from '@components/Carousel/MediaCarousel';
import { getTrending } from '@lib/api';

export default async function HomePage() {
  const trending = await getTrending();

  return (
    <div>
      <MediaCarousel trending={trending.results} />
    </div>
  );
}
