import type { Preview } from '@storybook/react'
import '../src/app/index.scss'
import '../src/app/styles/fonts.scss'
import '../src/app/styles/reset.scss'
import '../src/app/styles/theme.module.scss'
import '../src/app/styles/utils.scss'
import '../src/app/styles/vars.scss'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
}

export default preview
