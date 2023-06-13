import { type Meta, type StoryObj } from '@storybook/react'
import Cart from './Cart'

const meta: Meta<typeof Cart> = {
  title: 'pages/Cart',
  component: Cart,
}
export default meta
type S = StoryObj<typeof Cart>

export const Primary: S = {
  render: (props) => <Cart {...props} />,
}