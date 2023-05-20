import { Outlet } from "react-router-dom"
import { profileSettings } from "../../common/const"
import LinksBlock from "../../components/UI/Blocks/LinksBlock"
import User from "../../components/UI/Cards/User"
import PageLayout from "../../components/UI/Containers/PageLayout"
import { userMock } from "../../mocks/user"
import s from "./Profile.module.scss"

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  return (
    <PageLayout withNavbarOn="tablet">
      <div className={s.main}>
        <div className={s.sideSection}>
          <User user={userMock} />
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
