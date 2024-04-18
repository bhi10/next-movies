'use client';

import ImagesCarousel from '@components/Carousel/ImagesCarousel';
import { episodeDetail, getEpisode } from '@lib/features/Tv/Episode/episodeSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Container, Flex } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';
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

  const { name, still_path, images } = episode;

  return (
    <Flex direction="column" pb={32}>
      <Container fluid className="">
        <img src={getImgPath(still_path, 'w1000_and_h563_face')} title={name}></img>
      </Container>
      <Container fluid style={{ width: '100%' }}>
        <ImagesCarousel label="Backdrops" images={images?.stills} path="file_path" imageSizes="w1066_and_h600_bestv2" loop showCount></ImagesCarousel>
      </Container>
    </Flex>
  );
}

export default Episode;
