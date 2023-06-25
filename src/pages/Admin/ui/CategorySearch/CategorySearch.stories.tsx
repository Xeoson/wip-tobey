import { type Meta, type StoryObj } from '@storybook/react'
import CategorySearch from './CategorySearch'

const meta: Meta<typeof CategorySearch> = {
  title: 'pages/undefined/CategorySearch',
  component: CategorySearch,
}
export default meta
type S = StoryObj<typeof CategorySearch>

export const Primary: S = {
  render: (props) => <CategorySearch {...props} />,
}