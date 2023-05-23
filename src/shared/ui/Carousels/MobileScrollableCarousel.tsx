import { useEffect, useRef } from 'react'
import { type DPof } from 'shared/lib/types'
import s from './MobileScrollableCarousel.module.scss'

export interface MobileScrollableCarouselProps extends DPof<HTMLUListElement> {
  images: string[]
  currentIdx: number
  onSetIdx: (idx: number) => void
}

const MobileScrollableCarousel = ({
  currentIdx,
  images,
  onSetIdx,
  ...props
}: MobileScrollableCarouselProps) => {
  const ref = useRef<HTMLUListElement | null>(null)

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const { scrollLeft, offsetWidth } = e.currentTarget
    const isScrollEnding = Math.round(scrollLeft) % offsetWidth === 0
    if (isScrollEnding) {
      const idx = Math.trunc((scrollLeft + offsetWidth / 2) / offsetWidth)
      onSetIdx(idx)
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.children[currentIdx].scrollIntoView()
    }
  }, [currentIdx])

  return (
    <ul
      {...props}
      ref={ref}
      onScroll={handleScroll}
      className={s.main}
    >
      {images.map((el) => (
        <li
          style={{ backgroundImage: `url(${el})` }}
          className={s.item}
          key={el}
        ></li>
      ))}
    </ul>
  )
}

export default MobileScrollableCarousel
