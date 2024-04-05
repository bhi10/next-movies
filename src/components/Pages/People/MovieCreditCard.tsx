import { Card, Image, Text } from '@mantine/core';
import { getImgPath } from '@utils/common-utils';
import Link from 'next/link';
import classes from './MovieCreditCard.module.css';
import { MediaType } from '@app/types';

interface MovieCreditCardProps {
  id: number | string;
  poster_path: string | null;
  title: string | undefined;
  character?: string;
  media_type: MediaType;
}

function MovieCreditCard({ id, poster_path, title, character, media_type }: MovieCreditCardProps) {
  return (
    <Link className="remove-text-decoration" href={`/${media_type}/${id}`}>
      <Card className={classes.poster} shadow="sm" padding="xs" radius="md" withBorder>
        <Card.Section>
          <Image src={getImgPath(poster_path, 'w150_and_h225_bestv2')} width={150} height={225} alt={title} />
        </Card.Section>

        <Text ta="center" fw={500} size="sm" mt="xs" truncate="end">
          {title}
        </Text>

        {character ? <Text ta="center" c="dimmed" size="xs" truncate="end">
          {character}
        </Text> : null}
      </Card>
    </Link>
  );
}

export default MovieCreditCard;
