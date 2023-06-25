import { type Meta, type StoryObj } from '@storybook/react'
import BannerCarousel from './BannerCarousel'
import images from '@/shared/lib/mocks/images'

const meta: Meta<typeof BannerCarousel> = {
  title: 'shared/BannerCarousel',
  component: BannerCarousel,
}
export default meta
type S = StoryObj<typeof BannerCarousel>

export const Primary: S = {
  render: (props) => <BannerCarousel {...props} images={images} />,
}
