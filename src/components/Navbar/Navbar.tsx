import AddToCartButton from "../UI/Buttons/AddToCartButton";
import AddToFavoriteButton from "../UI/Buttons/AddToFavoriteButton";
import MainLogo from "../UI/Buttons/MainLogo";
import MobileSearch from "../UI/MobileSearch";
import s from "./Navbar.module.scss";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className={s.main}>
      <MainLogo />
      <MobileSearch />
    </nav>
  );
};

export default Navbar;
