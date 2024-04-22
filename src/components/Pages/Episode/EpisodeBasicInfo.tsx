import DateDisplay from '@components/Base/DateDisplay';
import FieldView from '@components/Base/FieldView';
import { Episode } from '@lib/features/Tv/Episode/types';
import { Card, Flex, Grid, SimpleGrid, Title } from '@mantine/core';
import { directorDetails, getImgPath, getYearFromDate } from '@utils/common-utils';
import Link from 'next/link';
import classes from './EpisodeBasicInfo.module.css';

interface EpisodeBasicInfoProps {
  episode: Episode;
}

function EpisodeBasicInfo({ episode }: EpisodeBasicInfoProps) {
  const { still_path, name, air_date, overview, crew } = episode;
  const year = air_date ? ` (${getYearFromDate(air_date || '')})` : '';
  const directors = crew && directorDetails(crew);

  return (
    <Grid className={classes.header}>
      <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
        <Card shadow="sm" p={0} radius="md" withBorder>
          <Card.Section p={0}>
            <img src={getImgPath(still_path)} width={'100%'} alt={name} />
          </Card.Section>
        </Card>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
        <div className={classes.headerDetail}>
          <Title order={2} className={classes.title}>
            {name}
            <span className={classes.secondaryColor}>{year}</span>
          </Title>

          <Flex mt={4} align="center" gap={8}>
            {air_date && <DateDisplay date={air_date} size="xs" c={`gray.5`}></DateDisplay>}
          </Flex>

          {overview ? <FieldView styles={{ marginTop: '8px' }} label="Overview" value={overview} dark lineClamp></FieldView> : null}

          <SimpleGrid mt={12} cols={2} spacing="sm">
            {directors
              ? directors.map((director, index) => (
                  <Link key={index} className="remove-text-decoration" href={`/people/${director.id}`}>
                    <FieldView label={director.job} value={director.name} dark></FieldView>
                  </Link>
                ))
              : null}
          </SimpleGrid>
        </div>
      </Grid.Col>
    </Grid>
  );
}

export default EpisodeBasicInfo;
