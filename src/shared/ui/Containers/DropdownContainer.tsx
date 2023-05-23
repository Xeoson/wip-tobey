import { useLayoutEffect, useRef } from 'react'
import { type DP } from '../../../shared/lib/types'
import s from './DropdownContainer.module.scss'
import cn from 'shared/lib/helpers/classNames'

interface DropdownContainerProps extends Pick<DP, 'children' | 'className'> {}

const DropdownContainer = ({ children, className }: DropdownContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (el != null) {
      const { left, right, bottom } = el.getBoundingClientRect()
      const sWidth = window.innerWidth
      const sHeigth = window.innerHeight

      if (right > sWidth) {
        const diff = right - sWidth
        el.style.transform = `translate(-${diff}px, 101%)`
      } else if (left < 0) {
        const diff = Math.abs(left)
        el.style.transform = `translate(${diff}px, 101%)`
      } else if (bottom > sHeigth) {
        el.style.transform = `translateY(-101%)`
      }
    }
  }, [containerRef.current])

  return (
    <div
      data-testid={'dropdown'}
      ref={containerRef}
      className={cn(s.main, className)}
    >
      {children}
    </div>
  )
}
export default DropdownContainer
