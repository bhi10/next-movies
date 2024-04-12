'use client';

import { MediaType } from '@app/types';
import CastCarousel from '@components/Carousel/CastCarousel';
import ImagesCarousel from '@components/Carousel/ImagesCarousel';
import RecommendationsCarousel from '@components/Carousel/RecommendationsCarousel';
import TvBasicInfo from '@components/Pages/Tv/TvBasicInfo';
import { language } from '@lib/features/Config/selectors';
import { getTv, tvDetail } from '@lib/features/Tv/tvSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Container, Flex } from '@mantine/core';
import { useEffect } from 'react';

interface MediaProps {
  params: { id: string };
}

const media_type: MediaType = 'tv';

function Media({ params }: MediaProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTv(params.id));
  }, []);

  const media = useAppSelector(tvDetail);
  const images = media?.images;
  const lang = language(media?.original_language);

  if (!media) return '';

  return (
    <Flex direction="column" pb={32}>
      <TvBasicInfo media={media} language={lang?.english_name}></TvBasicInfo>
      <Container fluid style={{ width: '100%' }}>
        <CastCarousel
          casts={media?.credits?.cast || []}
          id_path="id"
          profile_path="profile_path"
          name_path="name"
          character_path="character"
        ></CastCarousel>
        <ImagesCarousel label="Backdrops" images={images?.backdrops} path="file_path" imageSizes="w1066_and_h600_bestv2"></ImagesCarousel>
        <ImagesCarousel
          label="Posters"
          images={images?.posters}
          path="file_path"
          imageSizes="w440_and_h660_face"
          slideSize={{ base: '50%', xs: '50%', sm: '33.3333333%', md: '25%', lg: '20%', xl: '10%' }}
          slideGap={{ base: 'xs' }}
        ></ImagesCarousel>
        <RecommendationsCarousel
          recommendations={media.recommendations?.results}
          media_type={media_type}
          poster_path="poster_path"
          release_date_path="first_air_date"
          id_path="id"
          name_path="name"
        ></RecommendationsCarousel>
        <RecommendationsCarousel
          title="Similar"
          recommendations={media.similar?.results}
          media_type={media_type}
          poster_path="poster_path"
          release_date_path="first_air_date"
          id_path="id"
          name_path="name"
        ></RecommendationsCarousel>
      </Container>
    </Flex>
  );
}

export default Media;
