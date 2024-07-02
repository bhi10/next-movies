'use client';

import { Card, Image } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';

export interface PosterProps {
  poster_path: string;
  title: string | undefined;
}

export default function Poster({ poster_path, title }: PosterProps) {
  return (
    <Card shadow="sm" padding="" radius="md" withBorder style={{ height: 'min-content' }}>
      <Card.Section>
        <Image src={getImgPath(poster_path, 'w600_and_h900_bestv2')} height={450} width={300} alt={title} />
      </Card.Section>
    </Card>
  );
}
