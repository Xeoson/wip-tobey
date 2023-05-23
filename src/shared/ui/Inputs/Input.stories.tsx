import { type Meta, type StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
}
export default meta
type S = StoryObj<typeof Input>

export const Primary: S = {
  render: (props) => <Input {...props} />,
}
