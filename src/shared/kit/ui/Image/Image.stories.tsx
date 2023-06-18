import { type Meta, type StoryObj } from '@storybook/react'
import Image from './Image'

const meta: Meta<typeof Image> = {
  title: 'shared/undefined/Image',
  component: Image,
}
export default meta
type S = StoryObj<typeof Image>

export const Primary: S = {
  render: (props) => <Image {...props} />,
}