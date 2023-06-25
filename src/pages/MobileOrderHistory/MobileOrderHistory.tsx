import DateGrouppedOrders from '@/widgets/DateGrouppedOrders/DateGrouppedList'
import PageLayout from '../../app/ui/PageLayout'
import { memo } from 'react'

interface MobileOrderHistoryProps {}

const MobileOrderHistory = (props: MobileOrderHistoryProps) => {
  return (
    <PageLayout mobileHeaderTitle="Order History">
      <DateGrouppedOrders />
    </PageLayout>
  )
}

export default memo(MobileOrderHistory)
