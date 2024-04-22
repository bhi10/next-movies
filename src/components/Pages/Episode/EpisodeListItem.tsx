import DateDisplay from '@components/Base/DateDisplay';
import { SeasonEpisode } from '@lib/features/Tv/Season/types';
import { Card, Divider, Flex, Text, Title, Tooltip } from '@mantine/core';
import { formatMovieDuration, getImgPath } from '@utils/common-utils';
import Link from 'next/link';
import classes from './EpisodeListItem.module.css';

export interface EpisodeListItemProps {
  episode: SeasonEpisode;
  tvId: string;
  seasonNo: string;
}

function EpisodeListItem({ episode, tvId, seasonNo }: EpisodeListItemProps) {
  const { name, still_path, episode_number, air_date, runtime, overview } = episode;

  return (
    <Link className="remove-text-decoration" href={`/tv/${tvId}/season/${seasonNo}/episode/${episode_number}`}>
      <Card p={0}>
        <Flex gap={12}>
          <img src={getImgPath(still_path, 'w300')} width={300} height={169} alt={name} />
          <div style={{ paddingTop: '16px' }}>
            <Tooltip label={name}>
              <Title order={4} className={classes.title} mb={8}>
                {episode_number} {name}
              </Title>
            </Tooltip>
            <Flex align="center" gap={8}>
              {air_date && <DateDisplay date={air_date} size="xs" c={`gray.5`}></DateDisplay>}
              {air_date && <Divider orientation="vertical" color="gray.5"></Divider>}
              <Text span size="xs" c={`gray.5`}>
                {formatMovieDuration(runtime)}
              </Text>
            </Flex>
            {overview ? (
              <Text mt={16} size="md">
                {overview}
              </Text>
            ) : null}
          </div>
        </Flex>
      </Card>
    </Link>
  );
}

export default EpisodeListItem;
