import { profileSettings } from '../../common/const'
import LinksBlock from '../../components/UI/Blocks/LinksBlock'
import User from '../../components/UI/Cards/User'
import PageLayout from '../../components/UI/Containers/PageLayout'
import { userMock } from '../../mocks/user'

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
