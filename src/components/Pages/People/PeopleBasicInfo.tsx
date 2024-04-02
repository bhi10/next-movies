import { People } from '@app/types';
import FieldView from '@components/Base/FieldView';
import Poster from '@components/Cards/Poster';
import { Container, Flex, Title } from '@mantine/core';
import classes from './PeopleBasicInfo.module.css';

export interface MediaBasicInfoProps {
  people: People | undefined;
}

function PeopleBasicInfo({ people }: MediaBasicInfoProps) {
  if (!people) {
    return '';
  }

  return (
    <Container fluid className={classes.header}>
      <Poster poster_path={people.profile_path} title={people.name}></Poster>
      <div className={classes.headerDetail}>
        <Flex>
          <Title order={2}>{people.name}</Title>
        </Flex>

        <FieldView styles={{ marginTop: '20px' }} label="Biography" value={people.biography} lineClamp></FieldView>
      </div>
    </Container>
  );
}

export default PeopleBasicInfo;
