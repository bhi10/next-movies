import { TrendingMedia } from '@app/types';
import { Paper, Text, Title } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';
import Link from 'next/link';
import classes from './MediaCard.module.css';

export default function MediaCard({ media }: { media: TrendingMedia }) {
  const bgImage = `linear-gradient(to right,rgb(4,28,50,.8),rgb(4,41,58,.4)),url('${getImgPath(media.backdrop_path, 'w1066_and_h600_bestv2')}')`;
  return (
    <Link className="remove-text-decoration" href={`${media.media_type}/${media.id}`}>
      <Paper
        className={classes.card}
        radius="md"
        p="xl"
        style={{
          backgroundImage: bgImage,
          backgroundSize: 'cover',
        }}
      >
        <Text className={classes.category} size="xs">
          {media.media_type}
        </Text>
        <Title order={3} className={classes.title}>
          {media.media_type === 'movie' ? media.title : media.name}
        </Title>
      </Paper>
    </Link>
  );
}
