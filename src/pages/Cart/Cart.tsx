import ProductCard from 'entities/product-card/ui/ProductCard'
import List from 'shared/ui/Blocks/List'
import CouponInput from 'widgets/CouponInput/CouponInput'
import DeliveryAddress from 'widgets/DeliveryAddress/DeliveryAddress'
import PaymentInfo from 'widgets/PaymentInfo/PaymentInfo'
import PageLayout from '../../app/ui/PageLayout'
import products from '../../shared/lib/mocks/products'
import { memo } from 'react'

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <PageLayout withNavbarOn="tablet">
      <DeliveryAddress />
      <List
        Item={ProductCard}
        data={products}
        otherItemProps={{ size: 'sm', withFavorite: true, withCart: true }}
      />
      <CouponInput />
      <PaymentInfo />
    </PageLayout>
  )
}

export default memo(Cart)
