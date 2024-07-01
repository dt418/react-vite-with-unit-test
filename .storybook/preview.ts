import type { Preview, ReactRenderer } from '@storybook/react';
import {
  withThemeByClassName,
  withThemeByDataAttribute,
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
  withThemeByDataAttribute<ReactRenderer>({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
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
