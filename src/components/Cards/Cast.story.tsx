import type { Meta, StoryObj } from '@storybook/react';

import Cast from './Cast';

const meta: Meta<typeof Cast> = {
  component: Cast,
};

export default meta;

type Story = StoryObj<typeof Cast>;

export const RanbirKapoor: Story = {
  args: {
    name: 'Ranbir Kapoor',
    id: 85034,
    profile_path: '/ymYNHV9luwgyrw17NXHqbOWTQkg.jpg',
    character: 'Shiva',
  },
};

export const SydneySweeney: Story = {
  args: {
    name: 'Sydney Sweeney',
    id: 115440,
    profile_path: '/wrPmsC9YATcnyAxvXEdGshccbqU.jpg',
    character: 'Bea',
  },
};
