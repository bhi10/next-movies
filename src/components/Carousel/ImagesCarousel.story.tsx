import type { Meta, StoryObj } from '@storybook/react';

import { ImageObject } from '@app/types';
import ImagesCarousel from './ImagesCarousel';

const meta: Meta<typeof ImagesCarousel> = {
  component: ImagesCarousel,
};

export default meta;

type Story = StoryObj<typeof ImagesCarousel<ImageObject, keyof ImageObject>>;

const backDropsImages = [
  {
    aspect_ratio: 1.778,
    height: 1455,
    iso_639_1: null,
    file_path: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
    vote_average: 5.634,
    vote_count: 43,
    width: 2587,
  },
  {
    aspect_ratio: 1.778,
    height: 2160,
    iso_639_1: null,
    file_path: '/8ohejkcQkNgkJgLn71Ws6Kd35g0.jpg',
    vote_average: 5.622,
    vote_count: 20,
    width: 3840,
  },
  {
    aspect_ratio: 1.778,
    height: 2160,
    iso_639_1: null,
    file_path: '/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
    vote_average: 5.61,
    vote_count: 28,
    width: 3840,
  },
  {
    aspect_ratio: 1.778,
    height: 2160,
    iso_639_1: 'en',
    file_path: '/cUIqZd6jJCbO94Txt1CkTs7MSeP.jpg',
    vote_average: 5.588,
    vote_count: 5,
    width: 3840,
  },
  {
    aspect_ratio: 1.778,
    height: 2160,
    iso_639_1: null,
    file_path: '/ycnO0cjsAROSGJKuMODgRtWsHQw.jpg',
    vote_average: 5.56,
    vote_count: 29,
    width: 3840,
  },
  {
    aspect_ratio: 1.778,
    height: 2160,
    iso_639_1: null,
    file_path: '/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg',
    vote_average: 5.456,
    vote_count: 11,
    width: 3840,
  },
  {
    aspect_ratio: 1.778,
    height: 2160,
    iso_639_1: null,
    file_path: '/7CENyUim29IEsaJhUxIGymCRvPu.jpg',
    vote_average: 5.39,
    vote_count: 6,
    width: 3840,
  },
];

export const BackDrops: Story = {
  args: {
    label: 'Backdrops',
    path: 'file_path',
    images: backDropsImages,
    showCount: true,
  },
};

const postersImages: ImageObject[] = [
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: 'en',
    file_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    vote_average: 5.062,
    vote_count: 126,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 1500,
    iso_639_1: 'en',
    file_path: '/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
    vote_average: 6.254,
    vote_count: 92,
    width: 1000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: 'en',
    file_path: '/q2uyutja5fBQJ595oEAfticrcfU.jpg',
    vote_average: 5.876,
    vote_count: 126,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: 'en',
    file_path: '/e5H3wpl1t4EOzad9LpjJAhNPka4.jpg',
    vote_average: 5.79,
    vote_count: 19,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: 'en',
    file_path: '/aqZ75oN6yd7UTShYIMNlpSdDbbH.jpg',
    vote_average: 5.568,
    vote_count: 70,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: 'uk',
    file_path: '/iAv3HAlrrIgjcf2yCFvedJzekXT.jpg',
    vote_average: 5.538,
    vote_count: 61,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: 'en',
    file_path: '/2y48XTa483LRFIb5fDKOwr8DHWz.jpg',
    vote_average: 5.534,
    vote_count: 69,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: 'fr',
    file_path: '/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg',
    vote_average: 5.52,
    vote_count: 8,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: null,
    file_path: '/eHjIEiEKTnb9euehI7IbCxtGH5N.jpg',
    vote_average: 5.454,
    vote_count: 3,
    width: 2000,
  },
  {
    aspect_ratio: 0.666,
    height: 3000,
    iso_639_1: 'pt',
    file_path: '/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg',
    vote_average: 5.454,
    vote_count: 3,
    width: 1999,
  },
];

export const Posters: Story = {
  args: {
    label: 'Posters',
    path: 'file_path',
    slideSize: { base: '50%', xs: '50%', sm: '33.3333333%', md: '25%', lg: '20%', xl: '10%' },
    slideGap: { base: 'xs' },
    align: 'start',
    loop: true,
    images: postersImages,
    showCount: true,
  },
};
