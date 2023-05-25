import BannerCarousel from 'shared/ui/Carousels/BannerCarousel'
import ProductCarousel from 'widgets/ProductCarousel/ProductCarousel'
import PageLayout from '../../app/ui/PageLayout'
import banners from '../../shared/lib/mocks/banners'
import products from '../../shared/lib/mocks/products'
import Categories from '../../widgets/Categories/Categories'

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <PageLayout withNavbarOn="all">
      <Categories />
      <BannerCarousel images={banners} />
      <ProductCarousel size="lg" title="Hot Sales" products={products} />
      <ProductCarousel size="lg" title="Recently Viewed" products={products} />
      <ProductCarousel size="lg" title="Recently Viewed" products={products} />
    </PageLayout>
  )
}

export default Home
