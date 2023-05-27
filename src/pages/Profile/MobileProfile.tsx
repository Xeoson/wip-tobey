import LinksBlock from 'shared/ui/Blocks/LinksBlock'
import { profileSettings } from '../../app/lib/const'
import PageLayout from '../../app/ui/PageLayout'

import UserArea from 'features/login/ui/UserArea/UserArea'

interface MobileProfileProps {}

const MobileProfile = (props: MobileProfileProps) => {
  return (
    <PageLayout withNavbarOn="tablet" mobileHeaderTitle="Profile">
      <UserArea />
      <LinksBlock items={profileSettings} title="Account" />
    </PageLayout>
  )
}

export default MobileProfile
