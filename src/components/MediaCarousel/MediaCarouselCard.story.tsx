import type { Meta, StoryObj } from '@storybook/react';

import MediaCarouselCard from './MediaCarouselCard';

const meta: Meta<typeof MediaCarouselCard> = {
  component: MediaCarouselCard,
};

export default meta;

type Story = StoryObj<typeof MediaCarouselCard>;

export const Default: Story = {
  args: {
    media: {
      adult: false,
      backdrop_path: '/a7u1CU5wb05PSd1IWuP57rSx8zt.jpg',
      id: 1163258,
      title: '12th Fail',
      original_language: 'hi',
      original_title: '12th Fail',
      overview:
        "Based on the true story of IPS officer Manoj Kumar Sharma, 12th Fail sheds limelight on fearlessly embracing the idea of restarting the academic journey despite the setbacks and challenges and reclaiming one's destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC.",
      poster_path: '/eebUPRI4Z5e1Z7Hev4JZAwMIFkX.jpg',
      media_type: 'movie',
      genre_ids: [18],
      popularity: 87.919,
      release_date: '2023-10-27',
      video: false,
      vote_average: 8.139,
      vote_count: 18,
    },
  },
};
