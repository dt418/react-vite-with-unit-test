import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
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
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Alert',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis ratione ut possimus hic mollitia incidunt dolorem consequatur laborum aspernatur deleniti est impedit consectetur, eaque earum nulla? Beatae, corporis minima.',
    type: 'info',
  },
};
export const Success: Story = {
  args: {
    ...Default.args,
    type: 'success',
  },
};
export const Danger: Story = {
  args: {
    ...Default.args,
    type: 'danger',
  },
};
export const Warning: Story = {
  args: {
    ...Default.args,
    type: 'warning',
  },
};
export const Info: Story = {
  args: {
    ...Default.args,
    type: 'info',
  },
};
