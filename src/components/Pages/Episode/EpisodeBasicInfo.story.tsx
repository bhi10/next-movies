import type { Meta, StoryObj } from '@storybook/react';

import EpisodeBasicInfo from './EpisodeBasicInfo';

const meta: Meta<typeof EpisodeBasicInfo> = {
  component: EpisodeBasicInfo,
};

export default meta;
type Story = StoryObj<typeof EpisodeBasicInfo>;

export const Default: Story = {
  args: {
    episode: {
      air_date: '2021-06-09',
      crew: [],
      episode_number: 1,
      guest_stars: [],
      name: 'Glorious Purpose',
      overview: 'After stealing the Tesseract in "Avengers: Endgame," Loki lands before the Time Variance Authority.',
      id: 2534997,
      production_code: '',
      runtime: 53,
      season_number: 1,
      still_path: '/gxh0k3aADsYkt9tgkfm2kGn2qQj.jpg',
      vote_average: 7.198,
      vote_count: 154,
    },
  },
};
