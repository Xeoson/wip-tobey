import { ReactElement, useEffect, useRef, useState } from "react";
import s from "./Popup.module.scss";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { BsArrowLeftShort } from "react-icons/bs";

interface PopupProps {
  buttonContent: ReactElement;
	buttonClassName: string,
  content: ReactElement;
}

const Popup = ({ buttonContent, buttonClassName, content, ...props }: PopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

	const contentRef = useOutsideClick(() => setIsOpen(false));

  return (
    <div className={s.main}>
      <button className={buttonClassName} onClick={() => setIsOpen(true)}>
        {buttonContent}
      </button>
      {isOpen && (
        <div ref={contentRef} className={s.content}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Popup;
