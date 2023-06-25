import { type Meta, type StoryObj } from '@storybook/react'
import MinifyCarousel from './MinifyCarousel'
import categories from '@/shared/lib/mocks/categories'

const meta: Meta<typeof MinifyCarousel> = {
  title: 'shared/MinifyCarousel',
  component: MinifyCarousel,
}
export default meta
type S = StoryObj<typeof MinifyCarousel>

export const Primary: S = {
  render: (props) => <MinifyCarousel {...props} categories={categories} />,
}
