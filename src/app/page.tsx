import MediaCarousel from '@components/MediaCarousel/MediaCarousel';
import { getTrending } from '@lib/api';

export default async function HomePage() {
  const trending = await getTrending();
  
  return (
    <div>
      <MediaCarousel trending={trending.results}  />
    </div>
  );
}
