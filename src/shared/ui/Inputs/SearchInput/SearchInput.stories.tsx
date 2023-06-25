import { type Meta, type StoryObj } from '@storybook/react'
import SearchInput from './SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'shared/undefined/SearchInput',
  component: SearchInput,
}
export default meta
type S = StoryObj<typeof SearchInput>

export const Primary: S = {
  render: (props) => <SearchInput {...props} />,
}