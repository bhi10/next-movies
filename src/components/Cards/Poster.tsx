'use client';

import { getImgPath } from '@lib/utils';
import { Card, Image } from '@mantine/core';
import classes from './Poster.module.css';

export interface PosterProps {
  poster_path: string;
  title: string | undefined;
}

export default function Poster({ poster_path, title }: PosterProps) {
  return (
    <Card className={classes.posterSize} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={getImgPath(poster_path, 'w600_and_h900_bestv2')} height={450} width={300} alt={title} />
      </Card.Section>
    </Card>
  );
}
