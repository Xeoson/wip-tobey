import { useNavigate } from "react-router-dom";
import { profileSettings } from "../../common/const";
import LinksBlock from "../../components/UI/Blocks/LinksBlock";
import User from "../../components/UI/Cards/User";
import PageLayout from "../../components/UI/Containers/PageLayout";
import { userMock } from "../../mocks/user";
import s from "./MobileProfile.module.scss";

interface MobileProfileProps {}

const MobileProfile = (props: MobileProfileProps) => {

  return (
    <PageLayout withNavbarOn="tablet" mobileHeaderTitle="Profile">
      <div className={s.main}>
        <User user={userMock} />
        <LinksBlock
          items={profileSettings}
          title="Account"
        />
      </div>
    </PageLayout>
  );
};

export default MobileProfile;
