import UserArea from 'features/login/ui/UserArea/UserArea'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import LinksBlock from 'shared/ui/Blocks/LinksBlock'
import { profileSettings } from '../../app/lib/const'
import PageLayout from '../../app/ui/PageLayout'
import s from './Profile.module.scss'

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

export default memo(Profile)
