import type { Meta, StoryObj } from '@storybook/react';

import SeasonCardCarousel from './SeasonCardCarousel';

const meta: Meta<typeof SeasonCardCarousel> = {
  component: SeasonCardCarousel,
};

export default meta;

type Story = StoryObj<typeof SeasonCardCarousel>;

export const Default: Story = {
  args: {
    seasons: [
      {
        air_date: '2021-06-09',
        episode_count: 6,
        id: 114355,
        name: 'Season 1',
        overview:
          'Loki, the God of Mischief, steps out of his brother\'s shadow to embark on an adventure that takes place after the events of "Avengers: Endgame."',
        poster_path: '/ciAfVxYhRfttiitTHZ7LcVr0WIT.jpg',
        season_number: 1,
        vote_average: 7.8,
      },
      {
        air_date: '2023-10-06',
        episode_count: 6,
        id: 341180,
        name: 'Season 2',
        overview:
          'In the aftermath of Season 1, Loki finds himself in a battle for the soul of the Time Variance Authority. Along with Mobius, Hunter B-15 and a team of new and returning characters, Loki navigates an ever-expanding and increasingly dangerous multiverse in search of Sylvie, Judge Renslayer, Miss Minutes and the truth of what it means to possess free will and glorious purpose.',
        poster_path: '/6VcSRtdYz5B3xVb8zofFt2TCJLV.jpg',
        season_number: 2,
        vote_average: 8.1,
      },
    ],
  },
};
