
import Categories from "../../components/Sections/Categories"
import BannerCarousel from "../../components/UI/Carousels/BannerCarousel"
import ProductCarousel from "../../components/UI/Carousels/ProductCarousel"
import PageLayout from "../../components/UI/Containers/PageLayout"
import banners from "../../mocks/banners"
import products from "../../mocks/products"

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <PageLayout withNavbarOn="all">
      <Categories />
      <BannerCarousel images={banners} />
      <ProductCarousel size="md" title="Hot Sales" products={products} />
      <ProductCarousel size="lg" title="Recently Viewed" products={products} />
      <ProductCarousel size="lg" title="Recently Viewed" products={products} />
    </PageLayout>
  )
}

export default Home
