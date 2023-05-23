import { type Meta, type StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
}
export default meta
type S = StoryObj<typeof Button>

export const Primary: S = {
  render: (props) => <Button {...props}>Button Text</Button>,
}
