import { type Meta, type StoryObj } from '@storybook/react'
import TextError from './TextError'

const meta: Meta<typeof TextError> = {
  title: 'shared/undefined/TextError',
  component: TextError,
}
export default meta
type S = StoryObj<typeof TextError>

export const Primary: S = {
  render: (props) => <TextError {...props} />,
}