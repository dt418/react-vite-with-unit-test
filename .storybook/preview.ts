import '../src/css/style.css';
import '../src/css/montserrat.css';

import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';

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
