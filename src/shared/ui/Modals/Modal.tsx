import { useEffect, useState } from 'react'
import cn from 'shared/lib/helpers/classNames'
import { type DP } from 'shared/lib/types'
import s from './Modal.module.scss'

interface ModalProps extends DP {
  onClose: () => void
  isOpen: boolean
}

const Modal = ({
  children,
  className,
  onClose,
  isOpen,
  ...props
}: ModalProps) => {
  const [closed, setClosed] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setClosed(false)
      document.body.setAttribute(
        'style',
        'overflow: hidden; margin-right: 15px'
      )
    } else {
      setTimeout(() => {
        setClosed(true)
        document.body.removeAttribute('style')
      }, 150)
    }
  }, [isOpen])

  if (closed) return null

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div onClick={onClose} className={cn(s.main, !isOpen && s.clousing)}>
      <div onClick={handleContentClick} className={cn(s.content, className)}>
        {children}
      </div>
    </div>
  )
}

export default Modal
