import { TvSeasons } from '@lib/features/Tv/types';
import { Card, Image, Text, Tooltip } from '@mantine/core';
import { getImgPath, getYearFromDate } from '@utils/common-utils';
import Link from 'next/link';
import classes from './SeasonCard.module.css';

export interface SeasonCardProps {
  tvId: number;
  season: TvSeasons;
}

function SeasonCard({ tvId, season }: SeasonCardProps) {
  const { name, poster_path, episode_count, air_date, season_number } = season;

  const year = air_date ? ` ${getYearFromDate(air_date || '')}` : '';
  const secondaryText = `${year} • ${episode_count} Episodes`;

  return (
    <Link className="remove-text-decoration" href={`/tv/${tvId}/season/${season_number}`}>
      <Card className={classes.poster} shadow="sm" padding="xs" radius="md" withBorder>
        <Card.Section>
          <Image src={getImgPath(poster_path, 'w130_and_h195_bestv2')} width={150} height={225} alt={name} />
        </Card.Section>

        <Tooltip label={name}>
          <Text ta="center" fw={500} size="sm" mt="xs" truncate="end">
            {name}
          </Text>
        </Tooltip>

        <Tooltip label={secondaryText}>
          <Text ta="center" c="dimmed" size="xs" truncate="end">
            {secondaryText}
          </Text>
        </Tooltip>
      </Card>
    </Link>
  );
}

export default SeasonCard;
