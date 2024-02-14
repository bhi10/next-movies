import { CrewMember } from '@/app/types';

export const formatMovieDuration = (durationInMinutes: number | undefined): string => {
  if (!durationInMinutes) return 'TBA';
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  // Use template literals to format the output
  const formattedDuration = `${hours}h ${minutes}m`;

  return formattedDuration;
};

export const directorDetails = (crew: CrewMember[] | undefined): CrewMember[] => {
  if (!crew) return [];
  return crew.filter(member => member.job === 'Director');
};
