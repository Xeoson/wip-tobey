import DateGrouppedOrders from 'widgets/DateGrouppedOrders/DateGrouppedList'
import PageLayout from '../../app/ui/PageLayout'

interface MobileOrderHistoryProps {}

const MobileOrderHistory = (props: MobileOrderHistoryProps) => {
  return (
    <PageLayout mobileHeaderTitle="Order History">
      <DateGrouppedOrders />
    </PageLayout>
  )
}

export default MobileOrderHistory
