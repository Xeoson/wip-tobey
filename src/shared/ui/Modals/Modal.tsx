import { useEffect, useState } from 'react'
import cn from 'shared/lib/helpers/classNames'
import { type DP } from 'shared/lib/types'
import s from './Modal.module.scss'

interface ModalProps extends DP {
  onBackdropClick?: () => void
  isOpen: boolean
}

const Modal = ({
  children,
  className,
  onBackdropClick,
  isOpen,
  ...props
}: ModalProps) => {
  const [closed, setClosed] = useState(true)

  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute(
        'style',
        'overflow: hidden; margin-right: 15px'
      )
      setClosed(false)
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
    <div
      onClick={onBackdropClick}
      className={cn(s.main, !isOpen && s.clousing)}
    >
      <div onClick={handleContentClick} className={cn(s.content, className)}>
        {children}
      </div>
    </div>
  )
}

export default Modal
