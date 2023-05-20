import { render, type RenderOptions } from '@testing-library/react'
import { type ReactElement } from 'react'
import { AppProviders } from '../../app/AppProviders'

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { ...options, wrapper: AppProviders })

export { customRender as render }
