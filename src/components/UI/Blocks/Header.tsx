import { BsArrowLeftShort } from "react-icons/bs";
import {MdMoreHoriz} from 'react-icons/md'
import s from "./Header.module.scss";
import { PropsWithChildren, ReactElement } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Popup from "../Popups/Popup";
import { useNavigate } from "react-router-dom";

interface HeaderProps extends PropsWithChildren {
	title: string,
}

const Header = ({title, children}: HeaderProps) => {
	const navigate = useNavigate()

	const handleBackClick = () => {
		navigate(-1)
	}

  return (
    <div className={s.main}>
      <button onClick={handleBackClick} className={s.backBtn}>
        <BsArrowLeftShort />
      </button>
      <h3 className={s.title}>{title}</h3>
			{children}
    </div>
  );
};

export default Header;
