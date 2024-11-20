import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
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
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading',
  },
};

export const WithAsProps: Story = {
  args: {
    ...Default.args,
    as: 'h2',
  },
};

export const WithWeight: Story = {
  args: {
    ...Default.args,
    weight: 'light',
  },
};

export const WithColor: Story = {
  args: {
    ...Default.args,
    color: 'red',
  },
};

export const WithMargin: Story = {
  args: {
    ...Default.args,
    margin: 'md',
  },
};

export const Combined: Story = {
  args: {
    ...Default.args,
    as: 'h3',
    weight: 'medium',
    margin: 'md',
    color: 'green',
  },
};
