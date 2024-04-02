'use client';

import PersonCreditCarousel from '@/components/Carousel/PeopleCreditCarousel';
import PeopleBasicInfo from '@components/Pages/People/PeopleBasicInfo';
import { getPeople, peopleDetail } from '@lib/features/peopleSlice';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import { Container, Title } from '@mantine/core';
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
    <>
      <PeopleBasicInfo people={people}></PeopleBasicInfo>
      <Container fluid>
        <Title order={4} mt="sm" mb="sm">
          Known For
        </Title>
        <PersonCreditCarousel credits={people.combined_credits?.cast || []}></PersonCreditCarousel>
      </Container>
    </>
  );
}

export default People;
