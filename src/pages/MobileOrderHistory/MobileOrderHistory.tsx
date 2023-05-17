import DateGrouppedOrders from "../../components/Sections/DateGrouppedList";
import PageLayout from "../../components/UI/Containers/PageLayout";
import groupByDate from "../../helpers/groupByDate";
import { orders } from "../../mocks/orders";

interface MobileOrderHistoryProps {}

const MobileOrderHistory = (props: MobileOrderHistoryProps) => {

  return (
    <PageLayout mobileHeaderTitle="Order History">
      <DateGrouppedOrders />
    </PageLayout>
  );
};

export default MobileOrderHistory;
