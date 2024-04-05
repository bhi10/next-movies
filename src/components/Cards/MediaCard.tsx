import { TrendingMedia } from '@app/types';
import { BackgroundImage, Paper, Text, Title } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';
import Link from 'next/link';
import classes from './MediaCard.module.css';

// TODO: linear-gradient(180deg, rgba(15,15,15,0.14) 0%, rgba(18,17,17,0.71) 100%)

export default function MediaCard({ media }: { media: TrendingMedia }) {
  return (
    <Link className="remove-text-decoration" href={`${media.media_type}/${media.id}`}>
      <BackgroundImage
        src={getImgPath(media.backdrop_path, 'w1066_and_h600_bestv2')}
        className={classes.card}
        radius="md"
        p="xl"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,15,15,0.14) 0%, rgba(18,17,17,0.71) 100%)`,
          backgroundSize: 'cover',
        }}
      >
        <Text className={classes.category} size="xs">
          {media.media_type}
        </Text>
        <Title order={3} className={classes.title}>
          {media.media_type === 'movie' ? media.title : media.name}
        </Title>
      </BackgroundImage>
    </Link>
  );
}
