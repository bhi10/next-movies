import { People } from '@app/types';
import DateDisplay from '@components/Base/DateDisplay';
import FieldView from '@components/Base/FieldView';
import Poster from '@components/Cards/Poster';
import { Container, Flex, Text, Title } from '@mantine/core';
import { calculateAge, getGender } from '@utils/common-utils';
import classes from './PeopleBasicInfo.module.css';
import PeopleExternalLinks from './PeopleExternalLinks';

export interface MediaBasicInfoProps {
  people: People | undefined;
}

function PeopleBasicInfo({ people }: MediaBasicInfoProps) {
  if (!people) {
    return '';
  }

  let ageString: number = 0;
  const { birthday, deathday, known_for_department, gender, place_of_birth, external_ids, homepage, biography } = people;

  if (birthday && deathday) {
    ageString = calculateAge(birthday, deathday);
  }

  if (birthday && !deathday) {
    ageString = calculateAge(birthday);
  }

  return (
    <Container fluid className={classes.header}>
      <Poster poster_path={people.profile_path} title={people.name}></Poster>
      <Flex gap={8} direction="column" className={classes.headerDetail}>
        <Title order={2}>{people.name}</Title>

        {known_for_department && <FieldView label="Known For" value={known_for_department}></FieldView>}

        {gender ? <FieldView label="Gender" value={getGender(gender)}></FieldView> : ''}

        {birthday && (
          <FieldView label="Birthdate">
            <Flex gap={4}>
              <DateDisplay date={birthday} size="sm"></DateDisplay>
              {!deathday && <Text size="sm">({ageString} years old)</Text>}
            </Flex>
          </FieldView>
        )}

        {deathday && (
          <FieldView label="Day of Death">
            <Flex gap={4}>
              <DateDisplay date={deathday} size="sm"></DateDisplay>
              <Text size="sm">({ageString} years old)</Text>
            </Flex>
          </FieldView>
        )}

        {place_of_birth && <FieldView label="Place of Birth" value={place_of_birth}></FieldView>}

        {biography && <FieldView label="Biography" value={biography} lineClamp></FieldView>}

        {external_ids && <PeopleExternalLinks external={external_ids} homepage={homepage}></PeopleExternalLinks>}
      </Flex>
    </Container>
  );
}

export default PeopleBasicInfo;
