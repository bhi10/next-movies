import type { Meta, StoryObj } from '@storybook/react';

import MediaBasicInfo from './MediaBasicInfo';

const meta: Meta<typeof MediaBasicInfo> = {
  component: MediaBasicInfo,
};

export default meta;
type Story = StoryObj<typeof MediaBasicInfo>;

export const Movie: Story = {
  args: {
    mediaType: 'movie',
    media: {
      adult: false,
      backdrop_path: '/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg',
      belongs_to_collection: null,
      budget: 100000000,
      genres: [
        {
          id: 18,
          name: 'Drama',
        },
        {
          id: 36,
          name: 'History',
        },
      ],
      homepage: 'http://www.oppenheimermovie.com',
      id: 872585,
      imdb_id: 'tt15398776',
      original_language: 'en',
      original_title: 'Oppenheimer',
      overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      popularity: 638.964,
      poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      production_companies: [
        {
          id: 9996,
          logo_path: '/3tvBqYsBhxWeHlu62SIJ1el93O7.png',
          name: 'Syncopy',
          origin_country: 'GB',
        },
        {
          id: 33,
          logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
          name: 'Universal Pictures',
          origin_country: 'US',
        },
        {
          id: 507,
          logo_path: '/aRmHe6GWxYMRCQljF75rn2B9Gv8.png',
          name: 'Atlas Entertainment',
          origin_country: 'US',
        },
      ],
      production_countries: [
        {
          iso_3166_1: 'GB',
          name: 'United Kingdom',
        },
        {
          iso_3166_1: 'US',
          name: 'United States of America',
        },
      ],
      release_date: '2023-07-19',
      revenue: 952000000,
      runtime: 181,
      spoken_languages: [
        {
          english_name: 'Dutch',
          iso_639_1: 'nl',
          name: 'Nederlands',
        },
        {
          english_name: 'English',
          iso_639_1: 'en',
          name: 'English',
        },
      ],
      status: 'Released',
      tagline: 'The world forever changes.',
      title: 'Oppenheimer',
      video: false,
      vote_average: 8.11,
      vote_count: 7486,
    },
  },
};

export const Tv: Story = {
  args: {
    mediaType: 'tv',
    media: {
      adult: false,
      backdrop_path: '/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
      created_by: [
        {
          id: 35796,
          credit_id: '5e84f06a3344c600153f6a57',
          name: 'Craig Mazin',
          gender: 2,
          profile_path: '/uEhna6qcMuyU5TP7irpTUZ2ZsZc.jpg',
        },
        {
          id: 1295692,
          credit_id: '5e84f03598f1f10016a985c0',
          name: 'Neil Druckmann',
          gender: 2,
          profile_path: '/bVUsM4aYiHbeSYE1xAw2H5Z1ANU.jpg',
        },
      ],
      episode_run_time: [],
      first_air_date: '2023-01-15',
      genres: [
        {
          id: 18,
          name: 'Drama',
        },
      ],
      homepage: 'https://www.hbo.com/the-last-of-us',
      id: 100088,
      in_production: true,
      languages: ['en'],
      last_air_date: '2023-03-12',
      last_episode_to_air: {
        id: 4071047,
        name: 'Look for the Light',
        overview:
          'After being pursued by Infected, a pregnant Anna places her trust in a lifelong friend. Years later, Ellie is forced to grapple with the emotional toll of her journey, while Joel faces a devastating decision of his own.',
        vote_average: 8.143,
        vote_count: 84,
        air_date: '2023-03-12',
        episode_number: 9,
        episode_type: 'finale',
        production_code: '',
        runtime: 46,
        season_number: 1,
        show_id: 100088,
        still_path: '/qFouIBgN3Jgba7LnuRmkTAohh07.jpg',
      },
      name: 'The Last of Us',
      next_episode_to_air: null,
      networks: [
        {
          id: 49,
          logo_path: '/tuomPhY2UtuPTqqFnKMVHvSb724.png',
          name: 'HBO',
          origin_country: 'US',
        },
      ],
      number_of_episodes: 9,
      number_of_seasons: 1,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Last of Us',
      overview:
        'Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.',
      popularity: 328.263,
      poster_path: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      production_companies: [
        {
          id: 125281,
          logo_path: '/3hV8pyxzAJgEjiSYVv1WZ0ZYayp.png',
          name: 'PlayStation Productions',
          origin_country: 'US',
        },
        {
          id: 11073,
          logo_path: '/aCbASRcI1MI7DXjPbSW9Fcv9uGR.png',
          name: 'Sony Pictures Television Studios',
          origin_country: 'US',
        },
        {
          id: 23217,
          logo_path: '/kXBZdQigEf6QiTLzo6TFLAa7jKD.png',
          name: 'Naughty Dog',
          origin_country: 'US',
        },
        {
          id: 119645,
          logo_path: null,
          name: 'Word Games',
          origin_country: 'US',
        },
        {
          id: 115241,
          logo_path: null,
          name: 'The Mighty Mint',
          origin_country: 'US',
        },
        {
          id: 3268,
          logo_path: '/tuomPhY2UtuPTqqFnKMVHvSb724.png',
          name: 'HBO',
          origin_country: 'US',
        },
      ],
      production_countries: [
        {
          iso_3166_1: 'US',
          name: 'United States of America',
        },
      ],
      seasons: [
        {
          air_date: '2023-01-15',
          episode_count: 9,
          id: 144593,
          name: 'Season 1',
          overview: '',
          poster_path: '/pMfG5XIlmvCL9bQQiJKdTvmF2FW.jpg',
          season_number: 1,
          vote_average: 7.8,
        },
      ],
      spoken_languages: [
        {
          english_name: 'English',
          iso_639_1: 'en',
          name: 'English',
        },
      ],
      status: 'Returning Series',
      tagline: "When you're lost in the darkness, look for the light.",
      type: 'Scripted',
      vote_average: 8.614,
      vote_count: 4615,
    },
  },
};
