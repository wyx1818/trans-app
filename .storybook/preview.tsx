import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

addDecorator((storyFn) => <ThemeProvider theme={{ mode: 'light' }}>{storyFn()}</ThemeProvider>);

addParameters({
  options: {
    showRoots: true,
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
});
