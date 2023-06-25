import UserAddressList from '@/widgets/UserAddressList/UserAddressList'
import PageLayout from '../../app/ui/PageLayout'
import { memo } from 'react'

interface MobileAddressProps {}

const MobileAddress = (props: MobileAddressProps) => {
  return (
    <PageLayout mobileHeaderTitle="Address" withNavbarOn="tablet">
      <UserAddressList />
    </PageLayout>
  )
}

export default memo(MobileAddress)
