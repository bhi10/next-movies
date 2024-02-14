'use client';

import { CastMember } from '@app/types';
import { getImgPath } from '@lib/utils';
import { Card, Image, Text } from '@mantine/core';
import classes from './Cast.module.css';

interface PeopleProps {
  cast: CastMember;
}

export default function People({ cast }: PeopleProps) {
  return (
    <Card className={classes.poster} shadow="sm" padding="xs" radius="md" withBorder>
      <Card.Section>
        <Image src={getImgPath(cast.profile_path, 'w138_and_h175_face')} width={138} height={175} alt={cast.name} />
      </Card.Section>

      <Text fw={500} size="sm" mt="xs" lineClamp={2}>
        {cast.name}
      </Text>

      <Text c="dimmed" size="xs">
        {cast.character}
      </Text>
    </Card>
  );
}
