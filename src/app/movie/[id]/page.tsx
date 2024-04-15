'use client';

import { MediaType } from '@app/types';
import CastCarousel from '@components/Carousel/CastCarousel';
import ImagesCarousel from '@components/Carousel/ImagesCarousel';
import RecommendationsCarousel from '@components/Carousel/RecommendationsCarousel';
import MovieBasicInfo from '@components/Pages/Movie/MovieBasicInfo';
import { imagesList, language } from '@lib/features/Config/selectors';
import { getMovie, movieDetail } from '@lib/features/Movie/movieSlice';
import { getImages } from '@lib/features/imagesSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Container, Flex } from '@mantine/core';
import { useEffect } from 'react';

export interface MediaMovieProps {
  params: { id: string };
}

const media_type: MediaType = 'movie';

function MediaMovie({ params }: MediaMovieProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMovie(params.id));
    dispatch(getImages({type: media_type, id: params.id}))
  }, []);

  const movie = useAppSelector(movieDetail);
  const images = useAppSelector(imagesList);
  const lang = language(movie?.original_language);

  if (!movie) return '';

  return (
    <Flex direction="column" pb={32}>
      <MovieBasicInfo media={movie} language={lang?.english_name}></MovieBasicInfo>
      <Container fluid style={{ width: '100%' }}>
        <CastCarousel
          casts={movie?.credits?.cast || []}
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
          recommendations={movie.recommendations?.results}
          media_type={media_type}
          poster_path="poster_path"
          release_date_path="release_date"
          id_path="id"
          name_path="title"
        ></RecommendationsCarousel>
        <RecommendationsCarousel
          title="Similar"
          recommendations={movie.similar?.results}
          media_type={media_type}
          poster_path="poster_path"
          release_date_path="release_date"
          id_path="id"
          name_path="title"
        ></RecommendationsCarousel>
      </Container>
    </Flex>
  );
}

export default MediaMovie;
