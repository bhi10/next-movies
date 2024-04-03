import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.(stories|story).@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode', '@storybook/addon-styling-webpack'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async config => {
    config.resolve = config.resolve ?? {};

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@lib': path.resolve(__dirname, '../src/lib/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
    };
    return config;
  },
};

export default config;
