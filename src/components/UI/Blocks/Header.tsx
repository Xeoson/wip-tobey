import { BsArrowLeftShort } from "react-icons/bs";
import {MdMoreHoriz} from 'react-icons/md'
import s from "./Header.module.scss";
import { ReactElement } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Popup from "../Popups/Popup";

interface HeaderProps {
	title: string,
	popupContent?: ReactElement,
	onBack: () => void;
}

const Header = ({title, popupContent, onBack}: HeaderProps) => {

	const handleBackClick = () => {
		onBack()
	}

  return (
    <div className={s.main}>
      <button onClick={handleBackClick} className={s.backBtn}>
        <BsArrowLeftShort />
      </button>
      <h3 className={s.title}>{title}</h3>
      {popupContent && (
        <Popup buttonContent={<MdMoreHoriz />} buttonClassName={s.popupBtn} content={popupContent} />
      )}
    </div>
  );
};

export default Header;
