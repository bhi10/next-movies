import type { Meta, StoryObj } from '@storybook/react';

import MediaCarousel from './MediaCarousel';

const meta: Meta<typeof MediaCarousel> = {
  component: MediaCarousel,
};

export default meta;

type Story = StoryObj<typeof MediaCarousel>;

export const Default: Story = {
  args: {
    trending: [
      {
        adult: false,
        backdrop_path: '/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg',
        id: 572802,
        title: 'Aquaman and the Lost Kingdom',
        original_language: 'en',
        original_title: 'Aquaman and the Lost Kingdom',
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        poster_path: '/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg',
        media_type: 'movie',
        genre_ids: [28, 12, 14],
        popularity: 1542.493,
        release_date: '2023-12-20',
        video: false,
        vote_average: 6.5,
        vote_count: 360,
      },
      {
        adult: false,
        backdrop_path: '/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
        id: 872585,
        title: 'Oppenheimer',
        original_language: 'en',
        original_title: 'Oppenheimer',
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
        media_type: 'movie',
        genre_ids: [18, 36],
        popularity: 889.087,
        release_date: '2023-07-19',
        video: false,
        vote_average: 8.118,
        vote_count: 5856,
      },
      {
        adult: false,
        backdrop_path: '/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg',
        id: 695721,
        title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
        original_language: 'en',
        original_title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
        overview:
          '64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.',
        poster_path: '/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg',
        media_type: 'movie',
        genre_ids: [18, 878, 28],
        popularity: 2750.026,
        release_date: '2023-11-15',
        video: false,
        vote_average: 7.245,
        vote_count: 1296,
      },
      {
        adult: false,
        backdrop_path: '/xuCHkaxkkm9pPum1SByC0dhvR2U.jpg',
        id: 91363,
        name: 'What If...?',
        original_language: 'en',
        original_name: 'What If...?',
        overview:
          'Taking inspiration from the comic books of the same name, each episode of this animated anthology series questions, revisits and twists classic Marvel Cinematic moments.',
        poster_path: '/zaqfFDUrSfIljdD0OBxSjcutX8n.jpg',
        media_type: 'tv',
        genre_ids: [16, 10759, 10765],
        popularity: 1274.997,
        first_air_date: '2021-08-11',
        vote_average: 8.2,
        vote_count: 3876,
        origin_country: ['US'],
      },
      {
        adult: false,
        backdrop_path: '/1jITxVJhkiFJuQuj8NcPLmDNtJg.jpg',
        id: 930564,
        title: 'Saltburn',
        original_language: 'en',
        original_title: 'Saltburn',
        overview:
          "Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family's sprawling estate, for a summer never to be forgotten.",
        poster_path: '/qjhahNLSZ705B5JP92YMEYPocPz.jpg',
        media_type: 'movie',
        genre_ids: [18, 35, 53],
        popularity: 488.94,
        release_date: '2023-11-16',
        video: false,
        vote_average: 7.177,
        vote_count: 696,
      },
      {
        adult: false,
        backdrop_path: '/nI8uQAU8KFXYIIRz6jdL0pmC3eL.jpg',
        id: 103540,
        name: 'Percy Jackson and the Olympians',
        original_language: 'en',
        original_name: 'Percy Jackson and the Olympians',
        overview:
          "Percy Jackson is on a dangerous quest. Outrunning monsters and outwitting gods, he must journey across America to return Zeus' master bolt and stop an all-out war. With the help of his quest mates Annabeth and Grover, Percy's journey will lead him closer to the answers he seeks: how to fit into a world where he feels out of place, and find out who he's destined to be.",
        poster_path: '/c9loCTYWZpzYBTJBvE3DtRw4DBb.jpg',
        media_type: 'tv',
        genre_ids: [10759, 10765, 18, 10751],
        popularity: 1227.791,
        first_air_date: '2023-12-19',
        vote_average: 7.7,
        vote_count: 146,
        origin_country: ['US'],
      },
      {
        adult: false,
        backdrop_path: '/nHf61UzkfFno5X1ofIhugCPus2R.jpg',
        id: 346698,
        title: 'Barbie',
        original_language: 'en',
        original_title: 'Barbie',
        overview:
          'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
        poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
        media_type: 'movie',
        genre_ids: [35, 12, 14],
        popularity: 468.971,
        release_date: '2023-07-19',
        video: false,
        vote_average: 7.154,
        vote_count: 6681,
      },
      {
        adult: false,
        backdrop_path: '/1X7vow16X7CnCoexXh4H4F2yDJv.jpg',
        id: 466420,
        title: 'Killers of the Flower Moon',
        original_language: 'en',
        original_title: 'Killers of the Flower Moon',
        overview:
          'When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.',
        poster_path: '/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
        media_type: 'movie',
        genre_ids: [80, 18, 36],
        popularity: 360.704,
        release_date: '2023-10-18',
        video: false,
        vote_average: 7.535,
        vote_count: 1722,
      },
      {
        adult: false,
        backdrop_path: '/vcFW09U4834DyFOeRZpsx9x1D3S.jpg',
        id: 57243,
        name: 'Doctor Who',
        original_language: 'en',
        original_name: 'Doctor Who',
        overview:
          "The Doctor is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living—more of a hobby actually, and the Doctor's very, very good at it.",
        poster_path: '/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg',
        media_type: 'tv',
        genre_ids: [10759, 18, 10765],
        popularity: 751.004,
        first_air_date: '2005-03-26',
        vote_average: 7.5,
        vote_count: 2756,
        origin_country: ['GB'],
      },
      {
        adult: false,
        backdrop_path: '/yOm993lsJyPmBodlYjgpPwBjXP9.jpg',
        id: 787699,
        title: 'Wonka',
        original_language: 'en',
        original_title: 'Wonka',
        overview:
          'Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.',
        poster_path: '/qhb1qOilapbapxWQn9jtRCMwXJF.jpg',
        media_type: 'movie',
        genre_ids: [35, 10751, 14],
        popularity: 931.227,
        release_date: '2023-12-06',
        video: false,
        vote_average: 7.123,
        vote_count: 808,
      },
      {
        adult: false,
        backdrop_path: '/gDtZQmfzvErZpeXOVeCBQE9WkSF.jpg',
        id: 239770,
        name: 'Doctor Who',
        original_language: 'en',
        original_name: 'Doctor Who',
        overview:
          'The Doctor and friends travel from the dawn of human history to distant alien worlds. And everywhere they go, they find adventure, terror, fun, chases, joy and monsters.',
        poster_path: '/91wVL2amQouWhbMfvrVeFNrrHmR.jpg',
        media_type: 'tv',
        genre_ids: [10759, 18, 10765],
        popularity: 421.617,
        first_air_date: '',
        vote_average: 7.4,
        vote_count: 60,
        origin_country: ['GB'],
      },
      {
        adult: false,
        backdrop_path: '/wrhLyiY7ksW0fQCqNpa52qiOAH8.jpg',
        id: 108978,
        name: 'Reacher',
        original_language: 'en',
        original_name: 'Reacher',
        overview:
          'Jack Reacher, a veteran military police investigator, has just recently entered civilian life. Reacher is a drifter, carrying no phone and the barest of essentials as he travels the country and explores the nation he once served.',
        poster_path: '/jFuH0md41x5mB4qj5344mSmtHrO.jpg',
        media_type: 'tv',
        genre_ids: [10759, 80, 18],
        popularity: 2424.414,
        first_air_date: '2022-02-03',
        vote_average: 8.095,
        vote_count: 1075,
        origin_country: ['US'],
      },
      {
        adult: false,
        backdrop_path: '/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg',
        id: 1071215,
        title: 'Thanksgiving',
        original_language: 'en',
        original_title: 'Thanksgiving',
        overview:
          'After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.',
        poster_path: '/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg',
        media_type: 'movie',
        genre_ids: [27, 9648, 53],
        popularity: 1154.175,
        release_date: '2023-11-16',
        video: false,
        vote_average: 6.679,
        vote_count: 414,
      },
      {
        adult: false,
        backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
        id: 569094,
        title: 'Spider-Man: Across the Spider-Verse',
        original_language: 'en',
        original_title: 'Spider-Man: Across the Spider-Verse',
        overview:
          'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
        poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        media_type: 'movie',
        genre_ids: [16, 28, 12, 878],
        popularity: 408.875,
        release_date: '2023-05-31',
        video: false,
        vote_average: 8.4,
        vote_count: 5395,
      },
      {
        adult: false,
        backdrop_path: '/t9i4Icf1LsGIgkpnokQaC4hzxLa.jpg',
        id: 202411,
        name: 'Monarch: Legacy of Monsters',
        original_language: 'en',
        original_name: 'Monarch: Legacy of Monsters',
        overview:
          "After surviving Godzilla's attack on San Francisco, Cate is shaken yet again by a shocking secret. Amid monstrous threats, she embarks on a globetrotting adventure to learn the truth about her family—and the mysterious organization known as Monarch.",
        poster_path: '/uwrQHMnXD2DA1rvaMZk4pavZ3CY.jpg',
        media_type: 'tv',
        genre_ids: [10759, 18, 10765],
        popularity: 1190.512,
        first_air_date: '2023-11-16',
        vote_average: 8.176,
        vote_count: 375,
        origin_country: ['US'],
      },
      {
        adult: false,
        backdrop_path: '/gmECX1DvFgdUPjtio2zaL8BPYPu.jpg',
        id: 95479,
        name: 'Jujutsu Kaisen',
        original_language: 'ja',
        original_name: '呪術廻戦',
        overview:
          'Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.',
        poster_path: '/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg',
        media_type: 'tv',
        genre_ids: [16, 10759, 10765],
        popularity: 1184.347,
        first_air_date: '2020-10-03',
        vote_average: 8.6,
        vote_count: 3028,
        origin_country: ['JP'],
      },
      {
        adult: false,
        backdrop_path: '/179sUCj5AcFKdQpvDhkIX15NRgy.jpg',
        id: 146176,
        name: 'Berlin',
        original_language: 'es',
        original_name: 'Berlín',
        overview:
          "During his glory days, Berlin and a gang assembled in Paris for one of his greatest plans ever: stealing 44 million euros' worth of jewels in one night.",
        poster_path: '/69YuvoiWTtK6oyYH2Jl4Q6SgZ59.jpg',
        media_type: 'tv',
        genre_ids: [18, 10759, 80],
        popularity: 1484.704,
        first_air_date: '2023-12-29',
        vote_average: 7.877,
        vote_count: 110,
        origin_country: ['ES'],
      },
      {
        adult: false,
        backdrop_path: '/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg',
        id: 670292,
        title: 'The Creator',
        original_language: 'en',
        original_title: 'The Creator',
        overview:
          'Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.',
        poster_path: '/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg',
        media_type: 'movie',
        genre_ids: [28, 12, 878],
        popularity: 1021.825,
        release_date: '2023-09-27',
        video: false,
        vote_average: 7.15,
        vote_count: 1714,
      },
      {
        adult: false,
        backdrop_path: '/5cRw2QHQz5bp7W2KLdSpZoFoTTw.jpg',
        id: 726209,
        title: 'Leave the World Behind',
        original_language: 'en',
        original_title: 'Leave the World Behind',
        overview:
          "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices—and two strangers appear at their door.",
        poster_path: '/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg',
        media_type: 'movie',
        genre_ids: [18, 9648, 53, 878],
        popularity: 375.39,
        release_date: '2023-11-22',
        video: false,
        vote_average: 6.5,
        vote_count: 1404,
      },
      {
        adult: false,
        backdrop_path: '/9jPoyxjiEYPylUIMI3Ntixf8z3M.jpg',
        id: 520758,
        title: 'Chicken Run: Dawn of the Nugget',
        original_language: 'en',
        original_title: 'Chicken Run: Dawn of the Nugget',
        overview:
          "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
        poster_path: '/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg',
        media_type: 'movie',
        genre_ids: [16, 12, 35, 10751],
        popularity: 602.308,
        release_date: '2023-12-08',
        video: false,
        vote_average: 7.257,
        vote_count: 380,
      },
    ],
  },
};
