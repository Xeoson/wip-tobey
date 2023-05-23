import { useEffect, useRef } from 'react'
import cn from 'shared/lib/helpers/classNames'
import { type DP } from 'shared/lib/types'
import s from './Modal.module.scss'

interface ModalProps extends Pick<DP, 'className' | 'children'> {
  isOpen: boolean
}

const Modal = ({ children, className, isOpen }: ModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute('style', 'overflow: hidden')
    }
    return () => {
      document.body.removeAttribute('style')
    }
  }, [isOpen])

  return (
    <dialog ref={ref} open={isOpen} className={cn(s.main, className)}>
      {children}
    </dialog>
  )
}

export default Modal
