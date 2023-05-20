import DateGrouppedOrders from '../../components/Sections/DateGrouppedList'
import PageLayout from '../../components/UI/Containers/PageLayout'

interface MobileOrderHistoryProps {}

const MobileOrderHistory = (props: MobileOrderHistoryProps) => {
  return (
    <PageLayout mobileHeaderTitle="Order History">
      <DateGrouppedOrders />
    </PageLayout>
  )
}

export default MobileOrderHistory
