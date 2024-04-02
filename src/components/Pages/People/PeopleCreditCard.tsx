import { getImgPath } from '@/lib/utils';
import { Card, Image, Text } from '@mantine/core';
import Link from 'next/link';
import classes from './PeopleCreditCard.module.css';

interface PeopleCreditCardProps {
  id: number;
  poster_path: string | null;
  title: string | undefined;
  character: string;
  media_type: 'movie' | 'tv';
}

function PeopleCreditCard({ id, poster_path, title, character, media_type }: PeopleCreditCardProps) {
  return (
    <Link className="remove-text-decoration" href={`/${media_type}/${id}`}>
      <Card className={classes.poster} shadow="sm" padding="xs" radius="md" withBorder>
        <Card.Section>
          <Image src={getImgPath(poster_path, 'w138_and_h175_face')} width={138} height={175} alt={title} />
        </Card.Section>

        <Text fw={500} size="sm" mt="xs" lineClamp={2}>
          {title}
        </Text>

        <Text c="dimmed" size="xs">
          {character}
        </Text>
      </Card>
    </Link>
  );
}

export default PeopleCreditCard;
