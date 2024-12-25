# Storybook Development Guide

To add Storybook to your React Vite project, follow these steps:

1. **Install Storybook:**

   Run the following command to install Storybook and its dependencies:

   ```sh
   npx sb init
   ```

2. **Configure Storybook:**

   Storybook should automatically detect your project setup and configure itself. However, you may need to adjust the configuration files located in the `.storybook` directory.

3. **Add Stories:**

   When create new a component by using `bun run generate` or `npm run generate` and fill `Component name` and `Subfolder(optional)`. After run the scrpint we will create a storybook with template by plop file. By default the storybook is same level of the component and contained in `src/components`. We will update stories to matching with compoent by provide args.

   ```javascript
    import { Meta, StoryObj } from '@storybook/react';

    import Button from './Button';

    const meta = {
        title: 'Components/Button',
        component: Button,
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
    } satisfies Meta<typeof Button>;

    export default meta;
    type Story = StoryObj<typeof meta>;

    export const Default: Story = {
        args: {},
    };

   ```

4. **Example:**
   Here is an example of Button component

   ```javascript
   import type { Meta, StoryObj } from '@storybook/react';

   import Button from './Button';

   const meta = {
   title: 'Components/Button',
   component: Button,
   parameters: {
       // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
       layout: 'centered',
   },
   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
   tags: ['autodocs'],
   // More on argTypes: https://storybook.js.org/docs/api/argtypes
   argTypes: {
       variant: {
            control: 'select',
            options: ['primary', 'secondary', 'destructive', 'link', 'ghost'],
       },
       roundness: {
            control: 'radio',
            options: ['none', 'default', 'large', 'full'],
       },
       size: {
            control: 'radio',
            options: ['default', 'small', 'large'],
       },
   },
   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
   args: {
       children: 'Button',
       variant: 'primary',
       size: 'default',
       roundness: 'default',
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
            size: 'small',
        },
   };
   export const PrimaryLarge: Story = {
       args: {
           ...Primary.args,
           size: 'large',
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
           variant: 'secondary',
       },
   };
   export const SecondarySmall: Story = {
       args: {
           ...Primary.args,
           variant: 'secondary',
           size: 'small',
       },
   };
   export const SecondaryLarge: Story = {
        args: {
            ...Primary.args,
            variant: 'secondary',
            size: 'large',
        },
   };
   export const SecondaryDisabled: Story = {
        args: {
            ...Primary.args,
            variant: 'secondary',
            disabled: true,
        },
   };
   export const SecondaryLoading: Story = {
        args: {
            ...Primary.args,
            variant: 'secondary',
            loading: true,
        },
   };
   export const Destructive: Story = {
        args: {
            ...Primary.args,
            variant: 'destructive',
            className: 'bg-danger',
        },
   };
   export const DestructiveSmall: Story = {
        args: {
            ...Primary.args,
            variant: 'destructive',
            size: 'small',
        },
   };
   export const DestructiveLarge: Story = {
        args: {
            ...Primary.args,
            variant: 'destructive',
            size: 'large',
        },
   };
   export const DestructiveDisabled: Story = {
        args: {
            ...Primary.args,
            variant: 'destructive',
            disabled: true,
        },
   };
   export const DestructiveLoading: Story = {
        args: {
            ...Primary.args,
            variant: 'destructive',
            loading: true,
        },
   };
   export const Ghost: Story = {
        args: {
            ...Primary.args,
            variant: 'ghost',
        },
   };
   export const GhostSmall: Story = {
        args: {
            ...Primary.args,
            variant: 'ghost',
            size: 'small',
        },
   };
   export const GhostLarge: Story = {
        args: {
            ...Primary.args,
            variant: 'ghost',
            size: 'large',
        },
   };
   export const GhostDisabled: Story = {
        args: {
            ...Primary.args,
            variant: 'ghost',
            disabled: true,
        },
   };
   export const GhostLoading: Story = {
        args: {
            ...Primary.args,
            variant: 'ghost',
            loading: true,
        },
   };
   export const Link: Story = {
        args: {
            ...Primary.args,
            variant: 'link',
        },
   };
   export const LinkSmall: Story = {
        args: {
            ...Primary.args,
            variant: 'link',
            size: 'small',
        },
   };
   export const LinkLarge: Story = {
        args: {
            ...Primary.args,
            variant: 'link',
            size: 'large',
        },
   };
   export const LinkDisabled: Story = {
        args: {
            ...Primary.args,
            variant: 'link',
            disabled: true,
        },
   };
   export const LinkLoading: Story = {
        args: {
            ...Primary.args,
            variant: 'link',
            loading: true,
        },
   };

   ```

5. **Run Storybook:**

   Start Storybook by running the following command:

   ```sh
   bun run storybook
   ```

   This will start the Storybook server and open it in your default web browser.

6. **View Your Stories:**

   You can now view your stories in the Storybook interface. Any changes you make to your stories or components will be automatically reflected in Storybook.

7. **Additional Configuration:**

   For more advanced configuration and usage, refer to the [Storybook documentation](https://storybook.js.org/docs/react/get-started/introduction).
