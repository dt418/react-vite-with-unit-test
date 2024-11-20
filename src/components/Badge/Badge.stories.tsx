import type { Meta, StoryObj } from '@storybook/react';

import Badge, { type BageVariant } from './Badge';

const variants: BageVariant[] = [
  'gray',
  'blue',
  'lightGray',
  'red',
  'teal',
  'white',
  'yellow',
];
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Bagde',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: variants,
      description: 'The variant to render badge color and background',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gray: Story = {
  args: {
    variant: 'gray',
    children: 'Badge',
  },
};

export const Blue: Story = {
  args: {
    ...Gray.args,
    variant: 'blue',
  },
};

export const LightGray: Story = {
  args: {
    ...Gray.args,
    variant: 'lightGray',
  },
};

export const Red: Story = {
  args: {
    ...Gray.args,
    variant: 'red',
  },
};

export const Teal: Story = {
  args: {
    ...Gray.args,
    variant: 'teal',
  },
};

export const White: Story = {
  args: {
    ...Gray.args,
    variant: 'white',
  },
};

export const Yellow: Story = {
  args: {
    ...Gray.args,
    variant: 'yellow',
  },
};
