import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useMatchTablet } from "../../main";
import { userMock } from "../../mocks/user";
import MainLogo from "../UI/Buttons/MainLogo";
import User from "../UI/Cards/User";
import MobileSearch from "../UI/MobileSearch";
import Search from "../UI/TabletSearch";
import s from "./Navbar.module.scss";
import NavbarUserBlock from "../UI/Blocks/NavbarUserBlock";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const matchTablet = useMatchTablet();

  return (
    <nav className={s.main}>
      <MainLogo />
      {matchTablet ? (
        <>
          <Search />
					<NavbarUserBlock />
        </>
      ) : (
        <MobileSearch />
      )}
    </nav>
  );
};

export default Navbar;
