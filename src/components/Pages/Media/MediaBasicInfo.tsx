import { Media, MediaType } from '@app/types';
import DateDisplay from '@components/Base/DateDisplay';
import FieldView from '@components/Base/FieldView';
import Poster from '@components/Cards/Poster';
import GenreChipList from '@components/Genre/GenreChipList';
import { Container, Divider, Flex, SimpleGrid, Text, Title } from '@mantine/core';
import { directorDetails, formatMovieDuration, getImgPath, getYearFromDate, moneyFormat } from '@utils/common-utils';
import Link from 'next/link';
import classes from './MediaBasicInfo.module.css';

export interface MediaBasicInfoProps {
  mediaType: MediaType;
  media: Media | undefined;
  language?: string;
}

function MediaBasicInfo({ mediaType = 'movie', media, language = '' }: MediaBasicInfoProps) {
  if (!media) {
    return '';
  }

  const title = mediaType === 'movie' ? media.title : media.name;
  const releaseDate = mediaType === 'movie' ? media.release_date : media.first_air_date;
  const year = releaseDate ? ` (${getYearFromDate(releaseDate || '')})` : '';

  const director = media && media.credits && directorDetails(media.credits.crew)[0];

  const { status, release_date, genres, spoken_languages, budget, revenue, overview } = media;

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
      <Poster poster_path={media.poster_path} title={mediaType === 'movie' ? media.title : media.name}></Poster>
      <div className={classes.headerDetail}>
        <Title order={2} className={classes.title}>
          {title}
          <span className={classes.secondaryColor}>{year}</span>
        </Title>

        {genres ? <GenreChipList genres={genres}></GenreChipList> : null}

        <Flex mt={4} align="center" gap={8}>
          {release_date && <DateDisplay date={release_date} size="xs" c={`gray.5`}></DateDisplay>}
          {release_date && <Divider orientation="vertical" color="gray.5"></Divider>}
          <Text span size="xs" c={`gray.5`}>
            {formatMovieDuration(media.runtime)}
          </Text>
        </Flex>

        {media.tagline ? (
          <Text mt={8} fs={'italic'} c={`gray.4`}>
            {media.tagline}
          </Text>
        ) : null}

        {overview ? <FieldView styles={{ marginTop: '8px' }} label="Overview" value={overview} dark lineClamp></FieldView> : null}

        <SimpleGrid mt={12} cols={2} spacing="sm">
          {director ? (
            <Link className="remove-text-decoration" href={`/people/${director.id}`}>
              <FieldView label={director.job} value={director.name} dark></FieldView>
            </Link>
          ) : null}

          {status ? <FieldView label={'Status'} value={status} dark></FieldView> : null}

          {language ? <FieldView label={'Original Language'} value={language} dark></FieldView> : null}

          {spoken_languages && spoken_languages.length !== 0 ? (
            <FieldView label={'Spoken Languages'} value={spoken_languages.map(lang => lang.english_name).join(', ')} dark></FieldView>
          ) : null}

          {budget ? <FieldView label={'Budget'} value={moneyFormat(budget)} dark></FieldView> : null}

          {revenue ? <FieldView label={'Revenue'} value={moneyFormat(revenue)} dark></FieldView> : null}
        </SimpleGrid>
      </div>
    </Container>
  );
}

export default MediaBasicInfo;
