import { type PropsWithChildren, useEffect, useRef } from "react"
import s from "./Modal.module.scss"

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
}

const Modal = ({ children, isOpen }: ModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute("style", 'overflow: hidden')
    } else {
      document.body.removeAttribute("style")
    }
  }, [isOpen])

  return (
    <dialog ref={ref} open={isOpen} className={s.main}>
      {children}
    </dialog>
  )
}

export default Modal
