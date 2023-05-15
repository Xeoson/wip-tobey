import { MdOutlineFavoriteBorder, MdOutlineLocationOn } from "react-icons/md";
import { IProfileSettingItem } from "../types";
import { BsBoxSeam } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

export const hexColorRegex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;

export const profileSettings: IProfileSettingItem[] = [
  { icon: <GoLocation />, title: "Delivery address", id: 'address' },
  { icon: <BsBoxSeam />, title: "Order history", id: 'history' },
  { icon: <MdOutlineFavoriteBorder />, title: "Favorite", id: 'favorite' },
];

export const defaultAvatarUrl =
  "https://res.cloudinary.com/ds3ctqoro/image/upload/v1681982298/blank_avatar_egolkc.png";
