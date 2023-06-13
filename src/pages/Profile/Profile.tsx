import UserArea from 'features/login/ui/UserArea/UserArea'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import ColumnButtonList from 'shared/ui/Blocks/ColumnButtonList'
import PageLayout from '../../app/ui/PageLayout'
import s from './Profile.module.scss'
import { profileSettings } from './lib/const'
import { type IProfileLink } from './lib/types'

interface ProfileProps {}

const ColumnButtonListItemStyles: ButtonStyles = {
  gapX: 'sm',
}

const Profile = (props: ProfileProps) => {
  return (
    <PageLayout withNavbarOn="tablet">
      <div className={s.main}>
        <div className={s.sideSection}>
          <UserArea withLogOutBtn />
          <ColumnButtonList items={profileSettings} title="Account">
            {(props: IProfileLink) => (
              <Button type="button" styles={ColumnButtonListItemStyles}>
                {props.icon}
                <span>{props.title}</span>
              </Button>
            )}
          </ColumnButtonList>
        </div>
        <div className={s.section}>
          <Outlet />
        </div>
      </div>
    </PageLayout>
  )
}

export default memo(Profile)
