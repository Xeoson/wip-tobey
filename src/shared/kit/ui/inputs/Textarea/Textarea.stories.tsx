import { type Meta, type StoryObj } from '@storybook/react'
import Textarea from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'shared/undefined/Textarea',
  component: Textarea,
}
export default meta
type S = StoryObj<typeof Textarea>

export const Primary: S = {
  render: (props) => <Textarea {...props} />,
}