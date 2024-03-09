import type { Meta, StoryObj } from '@storybook/react';

import { IconHome2 } from '@tabler/icons-react';
import NavbarLink from './NavbarLink';

const meta: Meta<typeof NavbarLink> = {
  component: NavbarLink,
  argTypes: { onClick: { action: 'clicked' } }
};

export default meta;

type Story = StoryObj<typeof NavbarLink>;

export const Default: Story = {
  args: {
    icon: IconHome2,
    label: 'Home',
    active: false
  },
};
