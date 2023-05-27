import { Outlet } from 'react-router-dom'
import LinksBlock from 'shared/ui/Blocks/LinksBlock'
import { profileSettings } from '../../app/lib/const'
import PageLayout from '../../app/ui/PageLayout'
import { userMock } from '../../shared/lib/mocks/user'
import s from './Profile.module.scss'
import User from 'shared/ui/Blocks/User'
import UserArea from 'features/login/ui/UserArea/UserArea'

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  return (
    <PageLayout withNavbarOn="tablet">
      <div className={s.main}>
        <div className={s.sideSection}>
					<UserArea withLogOutBtn />
          <LinksBlock items={profileSettings} title="Account" />
        </div>
        <div className={s.section}>
          <Outlet />
        </div>
      </div>
    </PageLayout>
  )
}

export default Profile
