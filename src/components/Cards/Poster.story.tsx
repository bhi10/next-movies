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

export const TheCreator: Story = {
  args: {
    poster_path: '/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg',
    title: 'The Creator',
  },
};

export const TheLastOfUs: Story = {
  args: {
    poster_path: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
    title: 'The Last of Us',
  },
};

export const Tamasha: Story = {
  args: {
    poster_path: '/9hjYvub3LekTTEs1KV0a9QF1NNC.jpg',
    title: 'Tamasha',
  },
};

export const Mahabharat: Story = {
  args: {
    poster_path: '/850vJ2Is5zTYh7lnwhMvwovwRSe.jpg',
    title: 'Mahabharat',
  },
};
