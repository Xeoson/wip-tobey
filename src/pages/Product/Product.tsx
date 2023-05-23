import ProductDetailsInfo from 'widgets/ProductDetailsInfo/ProductDetailsInfo'
import ImageCarousel from 'widgets/ProductImageCarousel/ProductImageCarousel'
import PageLayout from '../../app/ui/PageLayout'

import products from '../../shared/lib/mocks/products'

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
