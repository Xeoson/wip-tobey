import { type PropsWithChildren } from 'react'
import s from './ScrollableContainer.module.scss'

interface ScrollableContainerProps extends PropsWithChildren {}

const ScrollableContainer = ({ children }: ScrollableContainerProps) => {
  return <div className={s.main}>{children}</div>
}

export default ScrollableContainer
