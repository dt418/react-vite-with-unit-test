import { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'multiple',
    items: [
      {
        value: '1',
        title: 'Accordion 1',
        content: 'Content',
      },
      {
        value: '2',
        title: 'Accordion 2',
        content: 'Content 2',
      },
      {
        value: '3',
        title: 'Accordion 3',
        content: 'Content 3',
      },
    ],
  },
};
