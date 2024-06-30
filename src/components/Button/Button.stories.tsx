import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive", "link", "ghost"],
    },
    size: {
      control: "radio",
      options: ["default", "small", "large"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    children: "Button",
    variant: "primary",
    size: "default",
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
export const PrimarySmall: Story = {
  args: {
    ...Primary.args,
    size: "small",
  },
};
export const PrimaryLarge: Story = {
  args: {
    ...Primary.args,
    size: "large",
  },
};
export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};
export const PrimaryLoading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
};
export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};
export const SecondarySmall: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
    size: "small",
  },
};
export const SecondaryLarge: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
    size: "large",
  },
};
export const SecondaryDisabled: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
    disabled: true,
  },
};
export const SecondaryLoading: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
    loading: true,
  },
};
export const Destructive: Story = {
  args: {
    ...Primary.args,
    variant: "destructive",
  },
};
export const DestructiveSmall: Story = {
  args: {
    ...Primary.args,
    variant: "destructive",
    size: "small",
  },
};
export const DestructiveLarge: Story = {
  args: {
    ...Primary.args,
    variant: "destructive",
    size: "large",
  },
};
export const DestructiveDisabled: Story = {
  args: {
    ...Primary.args,
    variant: "destructive",
    disabled: true,
  },
};
export const DestructiveLoading: Story = {
  args: {
    ...Primary.args,
    variant: "destructive",
    loading: true,
  },
};
export const Ghost: Story = {
  args: {
    ...Primary.args,
    variant: "ghost",
  },
};
export const GhostSmall: Story = {
  args: {
    ...Primary.args,
    variant: "ghost",
    size: "small",
  },
};
export const GhostLarge: Story = {
  args: {
    ...Primary.args,
    variant: "ghost",
    size: "large",
  },
};
export const GhostDisabled: Story = {
  args: {
    ...Primary.args,
    variant: "ghost",
    disabled: true,
  },
};
export const GhostLoading: Story = {
  args: {
    ...Primary.args,
    variant: "ghost",
    loading: true,
  },
};
export const Link: Story = {
  args: {
    ...Primary.args,
    variant: "link",
  },
};
export const LinkSmall: Story = {
  args: {
    ...Primary.args,
    variant: "link",
    size: "small",
  },
};
export const LinkLarge: Story = {
  args: {
    ...Primary.args,
    variant: "link",
    size: "large",
  },
};
export const LinkDisabled: Story = {
  args: {
    ...Primary.args,
    variant: "link",
    disabled: true,
  },
};
export const LinkLoading: Story = {
  args: {
    ...Primary.args,
    variant: "link",
    loading: true,
  },
};
