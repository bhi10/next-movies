import type { Meta, StoryObj } from '@storybook/react';

import PillButton from './PillButton';

const meta: Meta<typeof PillButton> = {
  component: PillButton,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;

type Story = StoryObj<typeof PillButton>;

export const Default: Story = {
  args: {
    label: 'Pill Button',
  },
};
