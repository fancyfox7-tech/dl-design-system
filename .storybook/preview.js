import '../src/tokens/globals.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'DL_ White',
      values: [
        { name: 'DL_ White', value: '#FFFFFF' },
        { name: 'DL_ Surface', value: '#F5F5F5' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
