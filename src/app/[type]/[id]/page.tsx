'use client';

import BackdropsCarousel from '@/components/Carousel/BackdropsCarousel';
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
import ModalImage from 'react-modal-image';

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
        <BackdropsCarousel backdrops={images?.backdrops}></BackdropsCarousel>
        <RecommendationsCarousel recommendations={media.recommendations?.results} media_type={params.type}></RecommendationsCarousel>
        <RecommendationsCarousel title="Similar" recommendations={media.similar?.results} media_type={params.type}></RecommendationsCarousel>
      </Container>
      <ModalImage
        small={'https://image.tmdb.org/t/p/w300/lmm35G3BAAtTkLSI9yVWZUVyvWi.jpg'}
        large={'https://image.tmdb.org/t/p/original/lmm35G3BAAtTkLSI9yVWZUVyvWi.jpg'}
        alt="Hello World!"
        
      />
      
    </Flex>
  );
}

export default Media;
