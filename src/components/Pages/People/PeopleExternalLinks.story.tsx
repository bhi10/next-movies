import type { Meta, StoryObj } from '@storybook/react';

import PeopleExternalLinks from './PeopleExternalLinks';

const meta: Meta<typeof PeopleExternalLinks> = {
  component: PeopleExternalLinks,
};

export default meta;
type Story = StoryObj<typeof PeopleExternalLinks>;

export const SelenaGomez: Story = {
  args: {
    external: {
      id: 77948,
      freebase_mid: '/m/0gs6vr',
      freebase_id: '/en/selena_gomez',
      imdb_id: 'nm1411125',
      tvrage_id: 50004,
      wikidata_id: 'Q83287',
      facebook_id: 'Selena',
      instagram_id: 'selenagomez',
      tiktok_id: 'selenagomez',
      twitter_id: 'selenagomez',
      youtube_id: 'selenagomez',
    },
    homepage: 'http://www.selenagomez.com',
  },
};

export const MargotRobbie: Story = {
  args: {
    external: {
      id: 234352,
      freebase_mid: '/m/04yddgx',
      freebase_id: '/en/margot_robbie',
      imdb_id: 'nm3053338',
      tvrage_id: null,
      wikidata_id: 'Q1924847',
      facebook_id: 'MargotRobbie',
      instagram_id: '@margotrobbielookalike',
      tiktok_id: null,
      twitter_id: '',
      youtube_id: null,
    },
  },
};

export const RanbirKapoor: Story = {
  args: {
    external: {
      id: 85034,
      freebase_mid: '/m/08knbm',
      freebase_id: '/en/ranbir_kapoor',
      imdb_id: 'nm1633541',
      tvrage_id: null,
      wikidata_id: 'Q1063412',
      facebook_id: null,
      instagram_id: 'ranbir_kapoooor',
      tiktok_id: null,
      twitter_id: 'iamranbirkapoor',
      youtube_id: null,
    },
  },
};

export const SushantSinghRajput: Story = {
  args: {
    external: {
      id: 1192902,
      freebase_mid: '/m/0bbxlkv',
      freebase_id: null,
      imdb_id: 'nm3818286',
      tvrage_id: null,
      wikidata_id: 'Q10296530',
      facebook_id: 'SushantSinghRajput',
      instagram_id: 'sushantsinghrajput',
      tiktok_id: null,
      twitter_id: 'itsSSR',
      youtube_id: null,
    },
  },
};
