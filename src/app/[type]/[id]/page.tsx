'use client';

import ImagesCarousel from '@components/Carousel/ImagesCarousel';
import { MediaType } from '@app/types';
import CastCarousel from '@components/Carousel/CastCarousel';
import RecommendationsCarousel from '@components/Carousel/RecommendationsCarousel';
import MediaBasicInfo from '@components/Pages/Media/MediaBasicInfo';
import { language } from '@lib/features/Config/selectors';
import { getImages, imagesList } from '@lib/features/imagesSlice';
import { getMedia, mediaDetail } from '@lib/features/mediaSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Container, Flex } from '@mantine/core';
import { useEffect } from 'react';

interface MediaProps {
  params: { type: MediaType; id: string };
}

function Media({ params }: MediaProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMedia({ type: params.type, id: params.id }));
    dispatch(getImages({ type: params.type, id: params.id }));
  }, []);

  const media = useAppSelector(mediaDetail);
  const images = useAppSelector(imagesList);
  const lang = language(media?.original_language);

  if (!media) return '';

  return (
    <Flex direction="column" pb={32}>
      <MediaBasicInfo mediaType={params.type} media={media} language={lang?.english_name}></MediaBasicInfo>
      <Container fluid style={{ width: '100%' }}>
        <CastCarousel casts={media?.credits?.cast || []}></CastCarousel>
        <ImagesCarousel label="Backdrops" images={images?.backdrops} path='file_path' imageSizes="w1066_and_h600_bestv2"></ImagesCarousel>
        <ImagesCarousel
          label="Posters"
          images={images?.posters}
          path='file_path'
          imageSizes="w440_and_h660_face"
          slideSize={{ xs: '100%', sm: '100%', md: '33.333333%', lg: '20%', xl: '12.5%' }}
        ></ImagesCarousel>
        <RecommendationsCarousel recommendations={media.recommendations?.results} media_type={params.type}></RecommendationsCarousel>
        <RecommendationsCarousel title="Similar" recommendations={media.similar?.results} media_type={params.type}></RecommendationsCarousel>
      </Container>
    </Flex>
  );
}

export default Media;
