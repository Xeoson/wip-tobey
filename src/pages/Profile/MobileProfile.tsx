import UserArea from 'features/login/ui/UserArea/UserArea'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import ColumnButtonList from 'shared/ui/Blocks/ColumnButtonList'
import PageLayout from '../../app/ui/PageLayout'
import { type IProfileLink } from './lib/types'
import { profileSettings } from './lib/const'

interface MobileProfileProps {}

const MobileProfile = (props: MobileProfileProps) => {
  return (
    <PageLayout withNavbarOn="tablet" mobileHeaderTitle="Profile">
      <UserArea />
      <ColumnButtonList items={profileSettings} title="Account">
        {(props: IProfileLink) => (
          <Link to={props.url}>
            {props.icon}
            <span>{props.title}</span>
          </Link>
        )}
      </ColumnButtonList>
    </PageLayout>
  )
}

export default memo(MobileProfile)
