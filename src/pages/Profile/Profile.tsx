import { profileSettings } from "../../common/const";
import SettingsList from "../../components/UI/Blocks/SettingsList";
import User from "../../components/UI/Cards/User";
import PageLayout from "../../components/UI/Containers/PageLayout";
import { userMock } from "../../mocks/user";
import s from './Profile.module.scss'

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  return (
    <PageLayout withNavbarOn="tablet" mobileHeaderTitle="Profile">
      <div className={s.main}>
        <User user={userMock} />
        <SettingsList
          onItemClick={() => {}}
          items={profileSettings}
          title="Account"
        />
      </div>
    </PageLayout>
  );
};

export default Profile;
