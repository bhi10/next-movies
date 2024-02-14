import type { Meta, StoryObj } from '@storybook/react';

import GenreChipList from './GenreChipList';

const meta: Meta<typeof GenreChipList> = {
  component: GenreChipList,
};

export default meta;
type Story = StoryObj<typeof GenreChipList>;

export const Primary: Story = {
  args: {
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 36,
        name: 'History',
      },
    ],
  },
};
