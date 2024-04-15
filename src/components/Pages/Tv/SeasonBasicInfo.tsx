import DateDisplay from '@components/Base/DateDisplay';
import FieldView from '@components/Base/FieldView';
import Poster from '@components/Cards/Poster';
import GenreChipList from '@components/Genre/GenreChipList';
import { MediaTv } from '@lib/features/Tv/types';
import { Container, Divider, Flex, SimpleGrid, Text, Title } from '@mantine/core';
import { directorDetails, formatMovieDuration, getImgPath, getYearFromDate } from '@utils/common-utils';
import Link from 'next/link';
import classes from './SeasonBasicInfo.module.css';
import { Season } from '@lib/features/Tv/Season/types';

export interface SeasonBasicInfoProps {
  season: Season | undefined;
  language?: string;
}

function SeasonBasicInfo({ season, language = '' }: SeasonBasicInfoProps) {
  if (!season) {
    return '';
  }


  const { name, poster_path, air_date, overview } = season;
  const year = air_date ? ` (${getYearFromDate(air_date || '')})` : '';

  return (
    <Container
      fluid
      className={classes.header}
    >
      <Poster poster_path={poster_path} title={season.name}></Poster>
      <div className={classes.headerDetail}>
        <Title order={2} className={classes.title}>
          {name}
          <span className={classes.secondaryColor}>{year}</span>
        </Title>


        <Flex mt={4} align="center" gap={8}>
          {air_date && <DateDisplay date={air_date} size="xs" c={`gray.5`}></DateDisplay>}
        </Flex>

        

        {overview ? <FieldView styles={{ marginTop: '8px' }} label="Overview" value={overview} dark lineClamp></FieldView> : null}

       
      </div>
    </Container>
  );
}

export default SeasonBasicInfo;
