import type { Meta, StoryObj } from '@storybook/react';

import DateDisplay from './DateDisplay';

const meta: Meta<typeof DateDisplay> = {
  component: DateDisplay,
};

export default meta;
type Story = StoryObj<typeof DateDisplay>;

export const Primary: Story = {
  args: {
    date: '2024-01-19',
  },
};
