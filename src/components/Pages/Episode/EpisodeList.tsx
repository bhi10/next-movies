import { SeasonEpisode } from '@lib/features/Tv/Season/types';
import { Flex, Title } from '@mantine/core';
import React from 'react';
import EpisodeListItem from './EpisodeListItem';

export interface EpisodeListProps {
  episodes: SeasonEpisode[];
  label?: string;
  showCount?: boolean;
  tvId: string;
  seasonNo: string;
}

function EpisodeList({ episodes = [], label = 'Episodes', showCount, tvId, seasonNo }: EpisodeListProps) {
  const list = episodes.map((episode, index) => {
    const {} = episode;

    return <EpisodeListItem key={index} episode={episode} tvId={tvId} seasonNo={seasonNo}></EpisodeListItem>;
  });

  return (
    <React.Fragment>
      {label ? (
        <Title order={4} mt="sm" mb="sm">
          {label} {showCount ? `(${episodes.length})` : null}
        </Title>
      ) : null}

      <Flex direction={'column'} gap={16} mb={24}>
        {list}
      </Flex>
    </React.Fragment>
  );
}

export default EpisodeList;
