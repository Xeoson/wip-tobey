import UserAddressList from 'widgets/UserAddressList/UserAddressList'
import PageLayout from '../../app/ui/PageLayout'

interface MobileAddressProps {}

const MobileAddress = (props: MobileAddressProps) => {
  return (
    <PageLayout mobileHeaderTitle="Address" withNavbarOn="tablet">
      <UserAddressList />
    </PageLayout>
  )
}

export default MobileAddress
