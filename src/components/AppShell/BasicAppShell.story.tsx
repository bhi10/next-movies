import type { Meta, StoryObj } from '@storybook/react';
import BasicAppShell from './BasicAppShell';

const meta: Meta<typeof BasicAppShell> = {
  component: BasicAppShell,
};

export default meta;

type Story = StoryObj<typeof BasicAppShell>;

export const Default: Story = {
  args: {
    children: 'Main',
  },
};
