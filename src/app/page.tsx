import MediaCarousel from '@components/Carousel/MediaCarousel';
import { getTrending } from '@lib/api';

export default async function HomePage() {
  const maxRetries = 3;
  let retries = 0;
  let trending;

  while (retries < maxRetries) {
    try {
      trending = await getTrending();
      // If successful, break out of the loop
      break;
    } catch (error) {
      // Log the error or handle it as needed
      console.error(`Error connecting (retry ${retries + 1}):`, error);
      retries++;
    }
  }

  if (!trending) {
    return ''
  }

  return (
    <div>
      <MediaCarousel trending={trending.results} />
    </div>
  );
}
