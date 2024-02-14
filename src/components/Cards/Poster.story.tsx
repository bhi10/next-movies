import type { Meta, StoryObj } from '@storybook/react';

import Poster from './Poster';

const meta: Meta<typeof Poster> = {
  component: Poster,
};

export default meta;

type Story = StoryObj<typeof Poster>;

export const Oppenheimer: Story = {
  args: {
    mediaType: 'movie',
    media: {
      adult: false,
      backdrop_path: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
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
      popularity: 639.249,
      poster_path: '/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
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
      vote_average: 8.119,
      vote_count: 6641,
    },
  },
};

export const Loki: Story = {
  args: {
    mediaType: 'tv',
    media: {
      adult: false,
      backdrop_path: '/q3jHCb4dMfYF6ojikKuHd6LscxC.jpg',
      created_by: [
        {
          id: 2094567,
          credit_id: '6001713e7390c0003df730af',
          name: 'Michael Waldron',
          gender: 2,
          profile_path: '/5d6wkYnJgkVAzThqnnwOLNDzACM.jpg',
        },
      ],
      episode_run_time: [52],
      first_air_date: '2021-06-09',
      genres: [
        {
          id: 18,
          name: 'Drama',
        },
        {
          id: 10765,
          name: 'Sci-Fi & Fantasy',
        },
      ],
      homepage: 'https://www.disneyplus.com/series/wp/6pARMvILBGzF',
      id: '84958',
      in_production: false,
      languages: ['en'],
      last_air_date: '2023-11-09',
      last_episode_to_air: {
        id: 4447783,
        name: 'Glorious Purpose',
        overview: "Loki learns the true nature of 'glorious purpose' as he rectifies the past.",
        vote_average: 8.558,
        vote_count: 43,
        air_date: '2023-11-09',
        episode_number: 6,
        episode_type: 'finale',
        production_code: '',
        runtime: 59,
        season_number: 2,
        show_id: 84958,
        still_path: '/avCnQZPvHbqDLWMqlRNtayG732A.jpg',
      },
      name: 'Loki',
      next_episode_to_air: null,
      networks: [
        {
          id: 2739,
          logo_path: '/uzKjVDmQ1WRMvGBb7UNRE0wTn1H.png',
          name: 'Disney+',
          origin_country: '',
        },
      ],
      number_of_episodes: 12,
      number_of_seasons: 2,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Loki',
      overview:
        'After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant” or help fix the timeline and stop a greater threat.',
      popularity: 436.169,
      poster_path: '/rqDoCJEM3SNaX1h2PjCCVkgoql2.jpg',
      production_companies: [
        {
          id: 420,
          logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
          name: 'Marvel Studios',
          origin_country: 'US',
        },
        {
          id: 176762,
          logo_path: null,
          name: 'Kevin Feige Productions',
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
          air_date: '2021-06-09',
          episode_count: 6,
          id: 114355,
          name: 'Season 1',
          overview:
            'Loki, the God of Mischief, steps out of his brother\'s shadow to embark on an adventure that takes place after the events of "Avengers: Endgame."',
          poster_path: '/8uVqe9ThcuYVNdh4O0kuijIWMLL.jpg',
          season_number: 1,
          vote_average: 7.8,
        },
        {
          air_date: '2023-10-06',
          episode_count: 6,
          id: 341180,
          name: 'Season 2',
          overview:
            'In the aftermath of Season 1, Loki finds himself in a battle for the soul of the Time Variance Authority. Along with Mobius, Hunter B-15 and a team of new and returning characters, Loki navigates an ever-expanding and increasingly dangerous multiverse in search of Sylvie, Judge Renslayer, Miss Minutes and the truth of what it means to possess free will and glorious purpose.',
          poster_path: '/8vjTn0NGF5vM8BijlJxe6YZCRmU.jpg',
          season_number: 2,
          vote_average: 8.0,
        },
      ],
      spoken_languages: [
        {
          english_name: 'English',
          iso_639_1: 'en',
          name: 'English',
        },
      ],
      status: 'Ended',
      tagline: "Loki's time has come.",
      type: 'Scripted',
      vote_average: 8.182,
      vote_count: 10950,
    },
  },
};

export const TheCreator: Story = {
  args: {
    mediaType: 'movie',
    media: {
      adult: false,
      backdrop_path: '/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg',
      belongs_to_collection: null,
      budget: 80000000,
      genres: [
        {
          id: 28,
          name: 'Action',
        },
        {
          id: 12,
          name: 'Adventure',
        },
        {
          id: 878,
          name: 'Science Fiction',
        },
      ],
      homepage: 'https://www.20thcenturystudios.com/movies/the-creator',
      id: 670292,
      imdb_id: 'tt11858890',
      original_language: 'en',
      original_title: 'The Creator',
      overview:
        'Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.',
      popularity: 528.151,
      poster_path: '/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg',
      production_companies: [
        {
          id: 10104,
          logo_path: '/wRn5HnYMGeJHmItRypgOZOC6gwY.png',
          name: 'New Regency Pictures',
          origin_country: 'US',
        },
        {
          id: 8147,
          logo_path: '/q6HOAdSNgCbeOqwoMVRc6REgbXF.png',
          name: 'Entertainment One',
          origin_country: 'CA',
        },
        {
          id: 508,
          logo_path: '/7cxRWzi4LsVm4Utfpr1hfARNurT.png',
          name: 'Regency Enterprises',
          origin_country: 'US',
        },
        {
          id: 206867,
          logo_path: null,
          name: 'Bad Dreams',
          origin_country: '',
        },
      ],
      production_countries: [
        {
          iso_3166_1: 'CA',
          name: 'Canada',
        },
        {
          iso_3166_1: 'US',
          name: 'United States of America',
        },
      ],
      release_date: '2023-09-27',
      revenue: 104000000,
      runtime: 134,
      spoken_languages: [
        {
          english_name: 'English',
          iso_639_1: 'en',
          name: 'English',
        },
        {
          english_name: 'Japanese',
          iso_639_1: 'ja',
          name: '日本語',
        },
        {
          english_name: 'Thai',
          iso_639_1: 'th',
          name: 'ภาษาไทย',
        },
        {
          english_name: 'Vietnamese',
          iso_639_1: 'vi',
          name: 'Tiếng Việt',
        },
      ],
      status: 'Released',
      tagline: 'This is a fight for our very existence.',
      title: 'The Creator',
      video: false,
      vote_average: 7.13,
      vote_count: 2175,
    },
  },
};

export const TheLastOfUs: Story = {
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
        vote_average: 8.1,
        vote_count: 81,
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
      popularity: 220.63,
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
          logo_path: '/wHs44fktdoj6c378ZbSWfzKsM2Z.png',
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
      vote_average: 8.627,
      vote_count: 4482,
    },
  },
};

export const Tamasha: Story = {
  args: {
    mediaType: 'movie',
    media: {
      adult: false,
      backdrop_path: '/1um3EJQlJoSiRI34MVIoG610OzR.jpg',
      belongs_to_collection: null,
      budget: 0,
      genres: [
        {
          id: 10749,
          name: 'Romance',
        },
        {
          id: 18,
          name: 'Drama',
        },
        {
          id: 35,
          name: 'Comedy',
        },
      ],
      homepage: '',
      id: 339274,
      imdb_id: 'tt3148502',
      original_language: 'hi',
      original_title: 'तमाशा',
      overview:
        'Meeting while on vacation, Ved and Tara sense a connection but vow to keep their real identities a secret. Years later, their paths cross again.',
      popularity: 8.559,
      poster_path: '/9hjYvub3LekTTEs1KV0a9QF1NNC.jpg',
      production_companies: [
        {
          id: 84618,
          logo_path: null,
          name: 'Window Seat Films',
          origin_country: '',
        },
        {
          id: 2320,
          logo_path: '/nSAXfUCy16cNRiPlBMHeb700t9p.png',
          name: 'UTV Motion Pictures',
          origin_country: 'IN',
        },
        {
          id: 60536,
          logo_path: '/chMIfiURhqvr6eWCrzxIwuaWVeN.png',
          name: 'Nadiadwala Grandson Entertainment',
          origin_country: 'IN',
        },
      ],
      production_countries: [
        {
          iso_3166_1: 'IN',
          name: 'India',
        },
      ],
      release_date: '2015-11-27',
      revenue: 0,
      runtime: 139,
      spoken_languages: [
        {
          english_name: 'Hindi',
          iso_639_1: 'hi',
          name: 'हिन्दी',
        },
      ],
      status: 'Released',
      tagline: 'Why Always The Same Story?',
      title: 'Tamasha',
      video: false,
      vote_average: 6.688,
      vote_count: 133,
    },
  },
};

export const Mahabharat: Story = {
  args: {
    mediaType: 'tv',
    media: {
      adult: false,
      backdrop_path: '/a7oZ4AMrR7y3q0xm6VHb4FxXGED.jpg',
      created_by: [
        {
          id: 228989,
          credit_id: '62371237209f180072d560b4',
          name: 'Ravi Chopra',
          gender: 2,
          profile_path: null,
        },
        {
          id: 1043908,
          credit_id: '60bc4e70b0460500295cb308',
          name: 'B.R. Chopra',
          gender: 0,
          profile_path: null,
        },
      ],
      episode_run_time: [45],
      first_air_date: '1988-10-02',
      genres: [
        {
          id: 18,
          name: 'Drama',
        },
      ],
      homepage: '',
      id: 12605,
      in_production: false,
      languages: ['te', 'ta', 'hi'],
      last_air_date: '1990-06-24',
      last_episode_to_air: {
        id: 484679,
        name: 'End',
        overview:
          "After the mourning period is over, Krishna leads Yudhishthir to the throne. Yudhishthir crowns Bheem the Yuvraj and appoints Vidur as the Prime Minister of Hastinapur. Arjun is made the commander of the army, Nakul is made Arjun's assistant and Sahadev is made the personal protector of the King. After the affairs of the state are in order, Krishna takes the Pandava brothers to Bheeshma. Bheeshma gives them a discourse on Dharma and his soul leaves for the Heavens.",
        vote_average: 0.0,
        vote_count: 0,
        air_date: '1990-06-24',
        episode_number: 94,
        episode_type: 'finale',
        production_code: '',
        runtime: 45,
        season_number: 1,
        show_id: 12605,
        still_path: null,
      },
      name: 'Mahabharat',
      next_episode_to_air: null,
      networks: [
        {
          id: 177,
          logo_path: '/mXNmU8Ya7ljkap8P9F5wm717CvS.png',
          name: 'DD National',
          origin_country: 'IN',
        },
      ],
      number_of_episodes: 94,
      number_of_seasons: 1,
      origin_country: ['IN'],
      original_language: 'hi',
      original_name: 'महाभारत',
      overview:
        'A dynastic struggle occurs for the throne of Hastinapur, the kingdom ruled by the Kuru clan, between the Kauravas and Pandavas, collateral branches of the clan, which causes the Kurukshetra War.',
      popularity: 29.374,
      poster_path: '/850vJ2Is5zTYh7lnwhMvwovwRSe.jpg',
      production_companies: [],
      production_countries: [
        {
          iso_3166_1: 'IN',
          name: 'India',
        },
      ],
      seasons: [
        {
          air_date: null,
          episode_count: 12,
          id: 23500,
          name: 'Specials',
          overview: '',
          poster_path: null,
          season_number: 0,
          vote_average: 0.0,
        },
        {
          air_date: '1988-10-02',
          episode_count: 94,
          id: 23499,
          name: 'Season 1',
          overview: '',
          poster_path: '/wQLCIUAVqnWDYaIzRxI1CuDolJo.jpg',
          season_number: 1,
          vote_average: 8.5,
        },
      ],
      spoken_languages: [
        {
          english_name: 'Telugu',
          iso_639_1: 'te',
          name: 'తెలుగు',
        },
        {
          english_name: 'Tamil',
          iso_639_1: 'ta',
          name: 'தமிழ்',
        },
        {
          english_name: 'Hindi',
          iso_639_1: 'hi',
          name: 'हिन्दी',
        },
      ],
      status: 'Ended',
      tagline: '',
      type: 'Scripted',
      vote_average: 7.5,
      vote_count: 29,
    },
  },
};
