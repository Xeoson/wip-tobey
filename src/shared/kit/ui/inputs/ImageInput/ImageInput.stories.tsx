import { type Meta, type StoryObj } from '@storybook/react'
import ImageInput from './ImageInput'

const meta: Meta<typeof ImageInput> = {
  title: 'shared/undefined/ImageInput',
  component: ImageInput,
}
export default meta
type S = StoryObj<typeof ImageInput>

export const Primary: S = {
  render: (props) => <ImageInput {...props} />,
}