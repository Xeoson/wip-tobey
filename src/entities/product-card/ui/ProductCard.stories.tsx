import { type Meta, type StoryObj } from '@storybook/react'
import products from 'shared/lib/mocks/products'
import ProductCard from './ProductCard'

export const meta: Meta<typeof ProductCard> = {
  title: 'ProductCard',
  component: ProductCard,
}
export default meta

export const Small: StoryObj<typeof ProductCard> = {
  render: (props) => (
    <ProductCard {...products[0]} {...props} />
  ),
}
