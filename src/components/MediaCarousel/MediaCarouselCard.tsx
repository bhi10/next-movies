import { getImgPath } from '@lib/utils';
import { Button, Paper, Text, Title } from '@mantine/core';
import classes from './MediaCarousel.module.css';
import Link from 'next/link';

export default function MediaCarousel({ media }: { media: TrendingMedia }) {
  return (
    <Link className="remove-text-decoration" href={`${media.media_type}/${media.id}`}>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(15,15,15,0.8057816876750701) 0%, rgba(25,24,24,0.7217480742296919) 18%, rgba(255,255,255,0) 100%), 
            linear-gradient(180deg, rgba(15,15,15,0.8057816876750701) 0%, rgba(14,14,14,0.3828125) 17%, rgba(18,17,17,0) 100%),
            url(${getImgPath(media.backdrop_path)})`,
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
        <Button variant="white" color="dark">
          Read article
        </Button>
      </Paper>
    </Link>
  );
}
