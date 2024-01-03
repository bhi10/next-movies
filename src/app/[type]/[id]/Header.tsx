import Poster from '@components/Poster/Poster';
import { getImgPath, getYearFromDate } from '@lib/utils';
import classes from './page.module.css';
import { Container, Flex, Title } from '@mantine/core';

export default function Header({
  mediaType = 'movie',
  media,
}: {
  mediaType: MediaType;
  media: Media;
}) {
  const title = mediaType === 'movie' ? media.title : media.name;
  const releaseDate = mediaType === 'movie' ? media.release_date : media.first_air_date;
  const year = ` (${getYearFromDate(releaseDate || '')})`;

  return (
    <Container
      fluid
      className={classes.header}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.84) 30%, rgba(31.5, 31.5, 52.5, 0.84) 100%), url(${getImgPath(
          media.backdrop_path
        )})`,
        backgroundSize: 'cover',
      }}
    >
      <Poster mediaType={mediaType} media={media}></Poster>
      <div className={classes.headerDetail}>
        <Flex>
          <Title order={2}>
            {title}
            <span className={classes.secondaryColor}>{year}</span>
          </Title>
        </Flex>
        <Flex>
          
        </Flex>
      </div>
    </Container>
  );
}
