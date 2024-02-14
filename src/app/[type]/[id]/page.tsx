import BackdropsCarousel from '@/components/Carousel/BackdropsCarousel';
import { MediaType } from '@app/types';
import CastCarousel from '@components/Carousel/CastCarousel';
import { getImages, getMedia } from '@lib/api';
import { Container, Title } from '@mantine/core';
import Header from './Header';

interface MediaProps {
  params: { type: MediaType; id: string };
}

export default async function Media({ params }: MediaProps) {
  const media = await getMedia(params.type, params.id);
  const images = await getImages(params.type, params.id);
  return (
    <>
      <Header mediaType={params.type} media={media}></Header>
      <Container fluid>
        <Title order={4} mt="sm" mb="sm">
          Top Cast
        </Title>
        <CastCarousel casts={media.credits?.cast || []}></CastCarousel>

        <Title order={4} mt="sm" mb="sm">
          Backdrops
        </Title>
        <BackdropsCarousel backdrops={images.backdrops}></BackdropsCarousel>
      </Container>
    </>
  );
}
