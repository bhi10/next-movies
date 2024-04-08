import type { Meta, StoryObj } from '@storybook/react';

import FieldView from './FieldView';

const meta: Meta<typeof FieldView> = {
  component: FieldView,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;
type Story = StoryObj<typeof FieldView>;

export const Default: Story = {
  args: {
    label: 'Director',
    value: 'Christopher Nolan',
  },
};

export const Children: Story = {
  args: {
    label: 'Director',
    children: <span>span</span>,
    value: 'Christopher Nolan',
  },
};

export const Biography: Story = {
  args: {
    label: 'Biography',
    lineClamp: true,
    value:
      'Ranbir Kapoor is an Indian actor who appears in Bollywood movies. He first appeared in the 2007 film Saawariya for which he won a Filmfare Best Male Debut Award.\n\nBorn to actors Rishi Kapoor and Neetu Singh, Kapoor is the great grandson of Prithviraj Kapoor and the grandson of actor and filmmaker Raj Kapoor. He is the brother of Riddhima Kapoor and his uncles are Randhir Kapoor and Rajiv Kapoor. Other notable family members include his cousins Karisma Kapoor, Kareena Kapoor and Nikhil Nanda. As a child, Kapoor studied at Bombay Scottish School in Mahim, Mumbai, and went on to pursue method acting at The Lee Strasberg Theatre and Film Institute in New York.\n\nKapoor currently lives with his parents in Pali Hill in Mumbai, Maharashtra. He announced that he was dating Bollywood actress Deepika Padukone in an interview in February 2008. The couple later broke up in October 2009.',
  },
};
