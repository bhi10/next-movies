import type { Meta, StoryObj } from '@storybook/react';

import Poster from './Poster';

const meta: Meta<typeof Poster> = {
  component: Poster,
};

export default meta;

type Story = StoryObj<typeof Poster>;

export const Oppenheimer: Story = {
  args: {
    poster_path: '/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
    title: 'Oppenheimer',
  },
};

export const Loki: Story = {
  args: {
    poster_path: '/rqDoCJEM3SNaX1h2PjCCVkgoql2.jpg',
    title: 'Loki',
  },
};
