import type { Meta, StoryObj } from '@storybook/react';

import PeopleCreditCard from './PeopleCreditCard';

const meta: Meta<typeof PeopleCreditCard> = {
  component: PeopleCreditCard,
};

export default meta;
type Story = StoryObj<typeof PeopleCreditCard>;

export const WakeUpSid: Story = {
  args: {
    id: 21297,
    poster_path: '/1UpgW67W6Do0xizTuE26bMQFLdL.jpg',
    title: 'Wake Up Sid',
    character: 'Sidharth (Sid) Mehra',
  },
};

export const RanbirKapoor: Story = {
  args: {
    id: 79464,
    poster_path: '/ujbsLMrUKtlPdjBdXtGqrjEhD3r.jpg',
    title: 'Rockstar',
    character: 'Janardan Jakhar / Jordan',
  },
};
