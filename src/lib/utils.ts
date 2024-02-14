import { ImageWidthSizes } from '@app/types';
import { apiImgUrl } from './api';

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
