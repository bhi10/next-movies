import type { Meta, StoryObj } from '@storybook/react';

import Poster from './Poster';

const meta: Meta<typeof Poster> = {
  component: Poster,
};

export default meta;

type Story = StoryObj<typeof Poster>;

export const Movie: Story = {
  args: {
    mediaType: 'movie',
    media: {
      adult: false,
      backdrop_path: '/a7u1CU5wb05PSd1IWuP57rSx8zt.jpg',
      budget: 0,
      genres: [
        {
          id: 18,
          name: 'Drama',
        },
      ],
      homepage: 'https://www.hotstar.com/in/movies/12th-fail/1260161273',
      id: '1163258',
      imdb_id: 'tt23849204',
      original_language: 'hi',
      original_title: '12th Fail',
      overview:
        "Based on the true story of IPS officer Manoj Kumar Sharma, 12th Fail sheds limelight on fearlessly embracing the idea of restarting the academic journey despite the setbacks and challenges and reclaiming one's destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC.",
      popularity: 87.919,
      poster_path: '/eebUPRI4Z5e1Z7Hev4JZAwMIFkX.jpg',
      production_companies: [
        {
          id: 3781,
          logo_path: null,
          name: 'Vidhu Vinod Chopra Productions',
          origin_country: 'IN',
        },
        {
          id: 86347,
          logo_path: '/ir79iQBhrXk9PJ5Pr9vlLjM4viO.png',
          name: 'Zee Studios',
          origin_country: 'IN',
        },
        {
          id: 167940,
          logo_path: null,
          name: 'KRG Studios',
          origin_country: '',
        },
      ],
      production_countries: [
        {
          iso_3166_1: 'IN',
          name: 'India',
        },
      ],
      release_date: '2023-10-27',
      revenue: 0,
      runtime: 146,
      spoken_languages: [
        {
          english_name: 'Hindi',
          iso_639_1: 'hi',
          name: 'हिन्दी',
        },
      ],
      status: 'Released',
      tagline: '#RESTART',
      title: '12th Fail',
      video: false,
      vote_average: 8.139,
      vote_count: 18,
    },
  },
};

export const Tv: Story = {
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
