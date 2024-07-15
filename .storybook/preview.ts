import type { Preview, ReactRenderer } from '@storybook/react';
import {
  withThemeByClassName,
} from '@storybook/addon-themes';
import '../src/css/style.css';

const decorators = [
  withThemeByClassName<ReactRenderer>({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: decorators,
};

export default preview;
