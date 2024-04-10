import type { Meta, StoryObj } from '@storybook/react';

import Cast from './Cast';

const meta: Meta<typeof Cast> = {
  component: Cast,
};

export default meta;

type Story = StoryObj<typeof Cast>;

export const RanbirKapoor: Story = {
  args: {
    cast: {
      adult: false,
      gender: 2,
      id: 85034,
      known_for_department: 'Acting',
      name: 'Ranbir Kapoor',
      original_name: 'Ranbir Kapoor',
      popularity: 66.432,
      profile_path: '/ymYNHV9luwgyrw17NXHqbOWTQkg.jpg',
      cast_id: 10,
      character: 'Shiva',
      credit_id: '5cfd241ac3a3684e0822040d',
      order: 0,
    },
  },
};

export const SydneySweeney: Story = {
  args: {
    cast: {
      adult: false,
      gender: 1,
      id: 115440,
      known_for_department: 'Acting',
      name: 'Sydney Sweeney',
      original_name: 'Sydney Sweeney',
      popularity: 255.974,
      profile_path: '/wrPmsC9YATcnyAxvXEdGshccbqU.jpg',
      cast_id: 2,
      character: 'Bea',
      credit_id: '63bf14f4df857c0089269b1a',
      order: 0,
    },
  },
};
