import { Media, MediaType } from '@app/types';
import DateDisplay from '@components/Base/DateDisplay';
import FieldView from '@components/Base/FieldView';
import GenreChipList from '@components/Genre/GenreChipList';
import { directorDetails, formatMovieDuration } from '@/utils/common-utils';
import Poster from '@/components/Cards/Poster';
import { getImgPath, getYearFromDate } from '@lib/utils';
import { Container, Flex, Text, Title } from '@mantine/core';
import classes from './page.module.css';

export default function Header({ mediaType = 'movie', media }: { mediaType: MediaType; media: Media }) {
  const title = mediaType === 'movie' ? media.title : media.name;
  const releaseDate = mediaType === 'movie' ? media.release_date : media.first_air_date;
  const year = ` (${getYearFromDate(releaseDate || '')})`;

  const director = media && media.credits && directorDetails(media.credits.crew)[0];

  return (
    <Container
      fluid
      className={classes.header}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.84) 30%, rgba(31.5, 31.5, 52.5, 0.84) 100%), url(${getImgPath(
          media.backdrop_path
        )})`,
        backgroundSize: 'cover',
      }}
    >
      <Poster mediaType={mediaType} media={media}></Poster>
      <div className={classes.headerDetail}>
        <Flex>
          <Title order={2} className={classes.title}>
            {title}
            <span className={classes.secondaryColor}>{year}</span>
          </Title>
        </Flex>

        {media.genres && <GenreChipList genres={media.genres}></GenreChipList>}

        {media.release_date && <DateDisplay date={media.release_date} size="xs" c={`gray.5`}></DateDisplay>}
        {media.release_date && (
          <Text span size="md" c={`gray.5`}>
            {' | '}
          </Text>
        )}

        <Text span size="xs" c={`gray.5`}>
          {formatMovieDuration(media.runtime)}
        </Text>

        {media.tagline && (
          <Text mt={8} fs={'italic'} c={`gray.4`}>
            {media.tagline}
          </Text>
        )}

        <Title order={4} mt={8}>
          Overview
        </Title>
        <Text size="" mt={4}>
          {media.overview}
        </Text>

        {director && <FieldView styles={{ marginTop: '20px' }} label={director.job} value={director.name}></FieldView>}
      </div>
    </Container>
  );
}
