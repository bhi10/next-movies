import type { Meta, StoryObj } from '@storybook/react';

import SeasonCard from './SeasonCard';

const meta: Meta<typeof SeasonCard> = {
  component: SeasonCard,
};

export default meta;

type Story = StoryObj<typeof SeasonCard>;

export const Default: Story = {
  args: {
    season: {
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
  },
};
