import { type ReactElement, useState } from "react"
import DropdownContainer from "../Containers/DropdownContainer"
import s from "./Popup.module.scss"
import useOutsideClick from "../../../hooks/useOutsideClick"

interface PopupProps {
  buttonContent: ReactElement
  buttonClassName: string
  content: ReactElement
}

const Popup = ({
  buttonContent,
  buttonClassName,
  content,
  ...props
}: PopupProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOutsideClick = () => {
    setIsOpen(false)
  }

  const containerRef = useOutsideClick(handleOutsideClick)

  return (
    <div ref={containerRef} className={s.main}>
      <button
        className={buttonClassName}
        disabled={isOpen}
        onClick={() => { setIsOpen(true) }}
      >
        {buttonContent}
      </button>
      {isOpen && <DropdownContainer>{content}</DropdownContainer>}
    </div>
  )
}

export default Popup
