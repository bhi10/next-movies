'use client';

import { CombinedCreditsCast, CombinedCreditsCrew } from '@app/types';
import PersonCreditCarousel from '@components/Carousel/MovieCreditCarousel';
import ProfilesCarousel from '@components/Carousel/ProfilesCarousel';
import PeopleBasicInfo from '@components/Pages/People/PeopleBasicInfo';
import { getPeople, peopleDetail } from '@lib/features/peopleSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Container, Flex } from '@mantine/core';
import { removeDuplicateIds } from '@utils/common-utils';
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

  let combined: (CombinedCreditsCast | CombinedCreditsCrew)[] = [];

  if (people.combined_credits) {
    const { cast, crew } = people.combined_credits;
    combined = [...cast, ...crew];
  }

  const final = removeDuplicateIds(combined, 'id');

  return (
    <Flex direction="column" pb={32}>
      <PeopleBasicInfo people={people}></PeopleBasicInfo>
      <Container style={{ width: '100%' }} fluid>
        {final.length !== 0 ? <PersonCreditCarousel credits={final}></PersonCreditCarousel> : null}

        <ProfilesCarousel profiles={people.images?.profiles || []}></ProfilesCarousel>
      </Container>
    </Flex>
  );
}

export default People;
