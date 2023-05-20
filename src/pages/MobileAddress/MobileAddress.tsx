import UserAddressList from "../../components/Sections/UserAddressList"
import PageLayout from "../../components/UI/Containers/PageLayout"

interface MobileAddressProps {}

const MobileAddress = (props: MobileAddressProps) => {
  return (
    <PageLayout mobileHeaderTitle="Address" withNavbarOn="tablet">
      <UserAddressList />
    </PageLayout>
  )
}

export default MobileAddress
