import { IconType } from "react-icons";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import browserRoutes from "../../common/browserRoutes";
import s from "./TabBar.module.scss";
import Popup from "../UI/Popups/Popup";

interface IVariant {
  title: string;
  icon: IconType;
  path: string;
}

const variants: IVariant[] = [
  { title: "Home", icon: HiOutlineHome, path: browserRoutes.home },
  { title: "Profile", icon: HiOutlineUser, path: browserRoutes.profile("") },
  {
    title: "Cart",
    icon: HiOutlineShoppingCart,
    path: browserRoutes.cart,
  },
];

interface TabBarProps {}

const TabBar = (props: TabBarProps) => {
  const { pathname } = useLocation();

  return (
    <nav className={s.main}>
      {variants.map((el) => (
        <Link
          className={`${s.item} ${pathname == el.path ? s.active : ""}`}
          to={el.path}
        >
          <el.icon />
          <span>{el.title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default TabBar;
