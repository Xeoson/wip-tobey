import ProductDetailsInfo from "../../components/UI/Blocks/ProductDetailsInfo"
import ImageCarousel from "../../components/UI/Carousels/ProductImageCarousel"
import PageLayout from "../../components/UI/Containers/PageLayout"
import products from "../../mocks/products"

interface ProductProps {}

const product = products[0]

const Product = (props: ProductProps) => {
  return (
    <PageLayout withNavbarOn="tablet" mobileHeaderTitle="Product Details">
      <ImageCarousel images={product.images} />
      <ProductDetailsInfo />
    </PageLayout>
  )
}

export default Product
