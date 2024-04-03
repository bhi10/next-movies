import { CrewMember, ImageWidthSizes } from '@app/types';
import { apiImgUrl, faceBookBaseUrl, instagramBaseUrl, tiktokBaseUrl, twitterBaseUrl, youtubeBaseUrl } from './constants';

// Social Links
export const faceBookLink = (id: string): string => `${faceBookBaseUrl}/${id}`;
export const instagramLink = (id: string): string => `${instagramBaseUrl}/${id}`;
export const twitterLink = (id: string): string => `${twitterBaseUrl}/${id}`;
export const tiktokLink = (id: string): string => `${tiktokBaseUrl}/@${id}`;
export const youtubeLink = (id: string): string => `${youtubeBaseUrl}/${id}`;

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

export const getImgPath = (path: string | null, widthSize: ImageWidthSizes = 'original'): string => {
  if (!path) return '';
  return apiImgUrl + '/' + widthSize + path;
};

export const getYearFromDate = (dateString: string): number | string => {
  // Parse the date string into a Date object
  const dateObject = new Date(dateString);

  // Check if the date is valid
  if (isNaN(dateObject.getTime())) {
    return 'Invalid date';
  }

  // Get the year from the Date object
  const year: number = dateObject.getFullYear();

  return year;
};

export const calculateAge = (birthday: string, deathday: string = new Date().toISOString().slice(0, 10)): number => {
  const birthDate: Date = new Date(birthday);
  const deathDate: Date = new Date(deathday);
  let age: number = deathDate.getFullYear() - birthDate.getFullYear();
  const monthDiff: number = deathDate.getMonth() - birthDate.getMonth();

  // If the birth month is greater than the death month or
  // if the birth month equals the death month but the birth day is greater than the death day
  // then the person hasn't reached the deathday yet
  if (monthDiff < 0 || (monthDiff === 0 && deathDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

interface GenderMap {
  [key: number]: string;
}

const genderMap: GenderMap = {
  0: 'Not set / not specified',
  1: 'Female',
  2: 'Male',
  3: 'Non-binary',
};

export const getGender = (id: number): string => {
  return genderMap[id];
};

export function compareDates(dateA: string | undefined, dateB: string | undefined): number {
  if (!dateA || !dateB) return -1;

  const date1 = new Date(dateA);
  const date2 = new Date(dateB);
  return date2.getTime() - date1.getTime();
}
