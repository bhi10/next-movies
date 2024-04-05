'use client';

import PersonCreditCarousel from '@components/Carousel/PeopleCreditCarousel';
import ProfilesCarousel from '@components/Carousel/ProfilesCarousel';
import PeopleBasicInfo from '@components/Pages/People/PeopleBasicInfo';
import { getPeople, peopleDetail } from '@lib/features/peopleSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Container, Flex } from '@mantine/core';
import { useEffect } from 'react';

export interface PeopleProps {
  params: { id: string };
}

function People({ params }: PeopleProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPeople(params.id));
  }, []);

  const people = useAppSelector(peopleDetail);

  if (!people) return '';

  return (
    <Flex direction="column" pb={32}>
      <PeopleBasicInfo people={people}></PeopleBasicInfo>
      <Container style={{ width: '100%' }} fluid>
        {people.combined_credits?.cast.length !== 0 && <PersonCreditCarousel credits={people.combined_credits?.cast || []}></PersonCreditCarousel>}

        <ProfilesCarousel profiles={people.images?.profiles || []}></ProfilesCarousel>
      </Container>
    </Flex>
  );
}

export default People;
