import { type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps extends PropsWithChildren {
  parent: HTMLElement
}

const Portal = ({ children, parent = document.body }: PortalProps) => {
  return createPortal(children, parent)
}

export default Portal
