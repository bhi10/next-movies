'use client';

import ImagesCarousel from '@components/Carousel/ImagesCarousel';
import EpisodeList from '@components/Pages/Episode/EpisodeList';
import SeasonBasicInfo from '@components/Pages/Season/SeasonBasicInfo';
import { getSeason, seasonDetail } from '@lib/features/Tv/Season/seasonSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Container, Flex } from '@mantine/core';
import { useEffect } from 'react';

interface SeasonProps {
  params: { id: string; seasonNo: string };
}

function Season({ params }: SeasonProps) {
  const { id, seasonNo } = params;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSeason({ tvId: id, seasonNo: seasonNo }));
  }, []);

  const season = useAppSelector(seasonDetail);

  if (!season) return null;

  const { episodes } = season;

  return (
    <Flex direction="column" pb={32}>
      <SeasonBasicInfo season={season}></SeasonBasicInfo>
      <Container fluid style={{ width: '100%' }}>
        <EpisodeList episodes={episodes} tvId={id} seasonNo={seasonNo}></EpisodeList>
        <ImagesCarousel
          label="Posters"
          images={season?.images?.posters}
          path="file_path"
          imageSizes="w440_and_h660_face"
          slideSize={{ base: '50%', xs: '50%', sm: '33.3333333%', md: '25%', lg: '20%', xl: '10%' }}
          slideGap={{ base: 'xs' }}
          loop
          showCount
        ></ImagesCarousel>
      </Container>
    </Flex>
  );
}

export default Season;
