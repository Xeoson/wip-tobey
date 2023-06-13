import ProductCard from 'entities/product-card/ui/ProductCard'
import products from 'shared/lib/mocks/products'
import PageLayout from '../../app/ui/PageLayout'
import { memo } from 'react'

interface MobileFavoritesProps {}

const MobileFavorites = (props: MobileFavoritesProps) => {
  return (
    <PageLayout mobileHeaderTitle="Favorites">
      {/* <List Item={ProductCard} data={products} otherItemProps={{}} /> */}
    </PageLayout>
  )
}

export default memo(MobileFavorites)
