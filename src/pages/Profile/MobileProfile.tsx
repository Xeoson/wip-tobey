import User from 'entities/user-card/ui/User'
import LinksBlock from 'shared/ui/Blocks/LinksBlock'
import { profileSettings } from '../../app/lib/const'
import PageLayout from '../../app/ui/PageLayout'

import { userMock } from '../../shared/lib/mocks/user'

interface MobileProfileProps {}

const MobileProfile = (props: MobileProfileProps) => {
  return (
    <PageLayout withNavbarOn="tablet" mobileHeaderTitle="Profile">
      <User user={userMock} />
      <LinksBlock items={profileSettings} title="Account" />
    </PageLayout>
  )
}

export default MobileProfile
