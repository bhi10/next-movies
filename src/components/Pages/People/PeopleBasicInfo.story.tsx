import type { Meta, StoryObj } from '@storybook/react';

import PeopleBasicInfo from './PeopleBasicInfo';

const meta: Meta<typeof PeopleBasicInfo> = {
  component: PeopleBasicInfo,
};

export default meta;
type Story = StoryObj<typeof PeopleBasicInfo>;

export const MargotRobbie: Story = {
  args: {
    people: {
      adult: false,
      also_known_as: [],
      biography:
        "Margot Elise Robbie (born July 2, 1990) is an Australian actress and producer. Known for her work in both blockbuster and independent films, she has received several accolades, including nominations for two Academy Awards, four Golden Globe Awards, and five British Academy Film Awards. Time magazine named her one of the 100 most influential people in the world in 2017 and she was ranked as one of the world's highest-paid actresses by Forbes in 2019.\n\nBorn and raised in Queensland, Robbie began her career in 2008 on the television series Neighbours, on which she was a regular until 2011. After moving to America, she led the television series Pan Am (2011–2012), and had her breakthrough in 2013 with the black comedy film The Wolf of Wall Street. She achieved wider recognition with starring roles as Jane Porter in The Legend of Tarzan (2016), Harley Quinn in the DC superhero films Suicide Squad (2016), Birds of Prey (2020) and The Suicide Squad (2021). Robbie also starred in Amsterdam (2022), Babylon (2022), Asteroid City (2023) and the titular role of Barbie in Barbie (2023).\n\nRobbie received critical acclaim and a nomination for the Academy Award for Best Actress for her portrayal of disgraced figure skater Tonya Harding in the biopic I, Tonya (2017). This acclaim continued with her roles as Queen Elizabeth I in the period drama Mary Queen of Scots (2018), Sharon Tate in the comedy-drama Once Upon a Time in Hollywood (2019), and a fictional Fox News employee in the drama Bombshell (2019); she received BAFTA Award nominations for all three and a nomination for the Academy Award for Best Supporting Actress for the lattermost.\n\nRobbie is married to filmmaker Tom Ackerley. They are co-founders of the production company LuckyChap Entertainment, under which they have produced several films, including I, Tonya and Promising Young Woman (2020), as well as the television series Dollface (2019–2022) and the miniseries Maid (2021).",
      birthday: '1990-07-02',
      deathday: null,
      gender: 1,
      homepage: null,
      id: 234352,
      imdb_id: 'nm3053338',
      known_for_department: 'Acting',
      name: 'Margot Robbie',
      place_of_birth: 'Dalby, Queensland, Australia',
      popularity: 20.664,
      profile_path: '/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg',
    },
  },
};

export const RanbirKapoor: Story = {
  args: {
    people: {
      adult: false,
      also_known_as: [],
      biography:
        'Ranbir Kapoor is an Indian actor who appears in Bollywood movies. He first appeared in the 2007 film Saawariya for which he won a Filmfare Best Male Debut Award.\n\nBorn to actors Rishi Kapoor and Neetu Singh, Kapoor is the great grandson of Prithviraj Kapoor and the grandson of actor and filmmaker Raj Kapoor. He is the brother of Riddhima Kapoor and his uncles are Randhir Kapoor and Rajiv Kapoor. Other notable family members include his cousins Karisma Kapoor, Kareena Kapoor and Nikhil Nanda. As a child, Kapoor studied at Bombay Scottish School in Mahim, Mumbai, and went on to pursue method acting at The Lee Strasberg Theatre and Film Institute in New York.\n\nKapoor currently lives with his parents in Pali Hill in Mumbai, Maharashtra. He announced that he was dating Bollywood actress Deepika Padukone in an interview in February 2008. The couple later broke up in October 2009.',
      birthday: '1982-09-28',
      deathday: null,
      gender: 2,
      homepage: 'https://www.13377.org/ranbir-kapoor/',
      id: 85034,
      imdb_id: 'nm1633541',
      known_for_department: 'Acting',
      name: 'Ranbir Kapoor',
      place_of_birth: 'Mumbai, Maharashtra, India',
      popularity: 14.549,
      profile_path: '/ymYNHV9luwgyrw17NXHqbOWTQkg.jpg',
    },
  },
};
