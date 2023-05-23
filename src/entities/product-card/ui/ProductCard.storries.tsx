import { type Meta, type StoryObj } from '@storybook/react'
import products from 'shared/lib/mocks/products'
import ProductCard from './ProductCard'

export default { title: 'ProductCard', component: ProductCard } as Meta<
  typeof ProductCard
>

export const Small: StoryObj<typeof ProductCard> = {
  render: () => (
    <ProductCard {...products[0]} size="sm" withCart withFavorite />
  ),
}
