import CartPaymentInfo from '../../components/UI/Blocks/CartPaymentInfo'
import ProductList from '../../components/UI/Blocks/ProductList'
import PageLayout from '../../components/UI/Containers/PageLayout'
import DeliveryAddress from '../../components/UI/DeliveryAddress'
import CouponInput from '../../components/UI/Inputs/CouponInput'
import products from '../../mocks/products'

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <PageLayout withNavbarOn="tablet">
      <DeliveryAddress />
      <ProductList products={products} size="cart" withCart withFavorite />
      <CouponInput />
      <CartPaymentInfo />
    </PageLayout>
  )
}

export default Cart
