'use client';

import CastCarousel from '@components/Carousel/CastCarousel';
import ImagesCarousel from '@components/Carousel/ImagesCarousel';
import EpisodeBasicInfo from '@components/Pages/Episode/EpisodeBasicInfo';
import { episodeDetail, getEpisode } from '@lib/features/Tv/Episode/episodeSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Container, Flex } from '@mantine/core';
import { useEffect } from 'react';

export interface EpisodeProps {
  params: { id: string; seasonNo: string; episodeNo: string };
}

function Episode({ params }: EpisodeProps) {
  const { id, seasonNo, episodeNo } = params;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEpisode({ tvId: id, seasonNo: seasonNo, episodeNo: episodeNo }));
  }, []);

  const episode = useAppSelector(episodeDetail);

  if (!episode) return null;

  const { images, guest_stars, crew } = episode;

  return (
    <Flex direction="column" pb={32}>
      <EpisodeBasicInfo episode={episode}></EpisodeBasicInfo>
      <Container fluid style={{ width: '100%' }}>
        <CastCarousel
          label="Guest Stars"
          casts={guest_stars}
          id_path="id"
          profile_path="profile_path"
          name_path="name"
          character_path="character"
        ></CastCarousel>
        <CastCarousel label="Crew" casts={crew} id_path="id" profile_path="profile_path" name_path="name" character_path="job"></CastCarousel>
        <ImagesCarousel label="Backdrops" images={images?.stills} path="file_path" imageSizes="w1066_and_h600_bestv2" loop showCount></ImagesCarousel>
      </Container>
    </Flex>
  );
}

export default Episode;
