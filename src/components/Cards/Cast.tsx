'use client';

import { CastMember } from '@app/types';
import { Card, Image, Text } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';
import Link from 'next/link';
import classes from './Cast.module.css';

interface CastProps {
  cast: CastMember;
}

export default function Cast({ cast }: CastProps) {
  return (
    <Link className="remove-text-decoration" href={`/people/${cast.id}`}>
      <Card className={classes.poster} shadow="sm" padding="xs" radius="md" withBorder>
        <Card.Section>
          <Image src={getImgPath(cast.profile_path, 'w150_and_h225_bestv2')} width={150} height={225} alt={cast.name} />
        </Card.Section>

        <Text ta="center" fw={500} size="sm" mt="xs" truncate="end">
          {cast.name}
        </Text>

        <Text ta="center" c="dimmed" size="xs" truncate="end">
          {cast.character}
        </Text>
      </Card>
    </Link>
  );
}
