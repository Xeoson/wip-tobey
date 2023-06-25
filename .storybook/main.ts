import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        cssModules: true,
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
		config.resolve = config.resolve || {}
    config.resolve.modules?.push(path.resolve(__dirname, '..', 'src'))
		config.resolve.alias = {
      '@': path.resolve(__dirname, '..', 'src'),
      app: path.resolve(__dirname, '..', 'src', 'app'),
    }
    return config
  },
}
export default config
