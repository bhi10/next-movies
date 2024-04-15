'use client';

import { Card, Image, Text, Tooltip } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';
import Link from 'next/link';
import classes from './Cast.module.css';

interface CastProps {
  id: number;
  profile_path: string;
  name: string;
  character: string;
}

export default function Cast({ id, profile_path, name, character }: CastProps) {
  return (
    <Link className="remove-text-decoration" href={`/people/${id}`}>
      <Card className={classes.poster} shadow="sm" padding="xs" radius="md" withBorder>
        <Card.Section>
          <Image src={getImgPath(profile_path, 'w150_and_h225_bestv2')} width={150} height={225} alt={name} />
        </Card.Section>

        <Tooltip label={name}>
          <Text ta="center" fw={500} size="sm" mt="xs" truncate="end">
            {name}
          </Text>
        </Tooltip>

        <Tooltip label={character}>
          <Text ta="center" c="dimmed" size="xs" truncate="end">
            {character}
          </Text>
        </Tooltip>
      </Card>
    </Link>
  );
}
