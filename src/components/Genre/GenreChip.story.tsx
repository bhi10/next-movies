import type { Meta, StoryObj } from '@storybook/react';

import GenreChip from './GenreChip';

const meta: Meta<typeof GenreChip> = {
  component: GenreChip,
};

export default meta;
type Story = StoryObj<typeof GenreChip>;

export const Default: Story = {
  args: {
    id: 36,
    name: 'History',
  },
};
