import { useRef } from 'react'
import List, { type ListProps } from '../Blocks/List'
import s from './ScrollableProductCarousel.module.scss'

interface ScrollableProductCarouselProps {}

const ScrollableProductCarousel = <T extends { id: string }, D extends T>(
  props: ScrollableProductCarouselProps & ListProps<T, D>
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {}
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.pageX)
  }

  return (
    <List
      {...props}
      rotation="row"
      ref={containerRef}
      className={s.main}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    />
  )
}

export default ScrollableProductCarousel
