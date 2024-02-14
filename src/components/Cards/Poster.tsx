'use client';

import { Media, MediaType } from '@/app/types';
import { getImgPath } from '@lib/utils';
import { Card, Image } from '@mantine/core';
import classes from './Poster.module.css';

export default function Poster({ mediaType = 'movie', media }: { mediaType: MediaType; media: Media }) {
  return (
    <Card className={classes.posterSize} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={getImgPath(media.poster_path, 'w600_and_h900_bestv2')}
          height={450}
          width={300}
          alt={mediaType === 'movie' ? media.title : media.name}
        />
      </Card.Section>

      {/* <RingProgress
        size={60}
        thickness={6}
        roundCaps
        sections={[{ value: media.vote_average * 10, color: '#099CFF' }]}
      /> */}

      {/* <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
    </Card>
  );
}
