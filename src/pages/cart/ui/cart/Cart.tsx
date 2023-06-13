import PageLayout from 'app/ui/PageLayout'
import { memo } from 'react'
import CouponInput from 'widgets/CouponInput/CouponInput'
import DeliveryAddress from 'widgets/DeliveryAddress/DeliveryAddress'
import PaymentInfo from 'widgets/PaymentInfo/PaymentInfo'

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <PageLayout withNavbarOn="tablet">
      <DeliveryAddress />
      {/* <List
        Item={ProductCard}
        data={products}
        otherItemProps={{ size: 'sm', withFavorite: true, withCart: true }}
      /> */}
      <CouponInput />
      <PaymentInfo />
    </PageLayout>
  )
}

export default memo(Cart)
