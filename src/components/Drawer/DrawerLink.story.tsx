import type { Meta, StoryObj } from '@storybook/react';

import { IconHome2 } from '@tabler/icons-react';
import DrawerLink from './DrawerLink';

const meta: Meta<typeof DrawerLink> = {
  component: DrawerLink,
  argTypes: { onClick: { action: 'clicked' } }
};

export default meta;

type Story = StoryObj<typeof DrawerLink>;

export const Default: Story = {
  args: {
    icon: IconHome2,
    label: 'Home',
    active: false
  },
};
