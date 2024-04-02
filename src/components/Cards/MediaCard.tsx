import { TrendingMedia } from '@app/types';
import { getImgPath } from '@lib/utils';
import { Paper, Text, Title } from '@mantine/core';
import Link from 'next/link';
import classes from './MediaCard.module.css';

export default function MediaCard({ media }: { media: TrendingMedia }) {
  return (
    <Link className="remove-text-decoration" href={`${media.media_type}/${media.id}`}>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,15,15,0.14) 0%, rgba(18,17,17,0.71) 100%),
            url(${getImgPath(media.backdrop_path, 'w1066_and_h600_bestv2')})`,
          backgroundSize: 'cover',
        }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {media.media_type}
          </Text>
          <Title order={3} className={classes.title}>
            {media.media_type === 'movie' ? media.title : media.name}
          </Title>
        </div>
      </Paper>
    </Link>
  );
}
