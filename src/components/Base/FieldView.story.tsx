import type { Meta, StoryObj } from '@storybook/react';

import FieldView from './FieldView';

const meta: Meta<typeof FieldView> = {
  component: FieldView,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;
type Story = StoryObj<typeof FieldView>;

export const Default: Story = {
  args: {
    label: 'Director',
    value: 'Christopher Nolan',
  },
};

export const Children: Story = {
  args: {
    label: 'Director',
    children: <span>span</span>,
    value: 'Christopher Nolan',
  },
};
