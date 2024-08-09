import { worldMill } from '@react-jvectormap/world';
import { Meta, StoryObj } from '@storybook/react';

import WorldMap from './WorldMap';

const meta = {
  title: 'Components/WorldMap',
  component: WorldMap,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    map: worldMill,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#A9BDFF',
      },
      hover: {
        fill: '#3056d3',
      },
      selected: {
        fill: '#2d3436',
      },
    },
  },
} satisfies Meta<typeof WorldMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
