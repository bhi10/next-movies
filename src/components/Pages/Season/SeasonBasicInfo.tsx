import DateDisplay from '@components/Base/DateDisplay';
import FieldView from '@components/Base/FieldView';
import Poster from '@components/Cards/Poster';
import { Season } from '@lib/features/Tv/Season/types';
import { Container, Flex, Title } from '@mantine/core';
import { getYearFromDate } from '@utils/common-utils';
import classes from './SeasonBasicInfo.module.css';

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
    <Container fluid className={classes.header}>
      <Poster poster_path={poster_path} title={name}></Poster>
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
