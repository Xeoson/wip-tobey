import BannerCarousel from '@/shared/ui/Carousels/BannerCarousel'
import ProductCarousel from '@/widgets/ProductCarousel/ProductCarousel'
import PageLayout from '../../app/ui/PageLayout'
import products from '../../shared/lib/mocks/products'
import Categories from '../../widgets/Categories/Categories'
import { memo } from 'react'

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <PageLayout withNavbarOn="all">
      <Categories />
      <BannerCarousel />
      <ProductCarousel size="lg" title="Hot Sales" products={products} />
      <ProductCarousel size="lg" title="Recently Viewed" products={products} />
      <ProductCarousel size="lg" title="Recently Viewed" products={products} />
    </PageLayout>
  )
}

export default memo(Home)
