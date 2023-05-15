import { MdOutlineFavoriteBorder, MdOutlineShoppingCart, MdSettings } from "react-icons/md";
import { userMock } from "../../../mocks/user";
import User from "../Cards/User";
import s from "./NavbarUserBlock.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import browserRoutes from "../../../common/browserRoutes";

interface NavbarUserBlockProps {}

const NavbarUserBlock = (props: NavbarUserBlockProps) => {

  return (
    <div className={s.main}>
      <button>
        <MdOutlineFavoriteBorder />
        <span>Favorites</span>
      </button>
      <button>
        <MdOutlineShoppingCart />
        <span>Cart</span>
      </button>
      <Link to={browserRoutes.userProfile}>
        <User size="sm" user={{ avatar: userMock.avatar }} />
      </Link>
    </div>
  );
};

export default NavbarUserBlock;
