import React, { useRef } from 'react'

import Carousel from './Carousel'

interface ScrollableImageCarouselProps {
  images: string[]
  currentIdx: number
  onPrev: () => void
  onNext: () => void
}

const ScrollableImageCarousel = ({
  currentIdx,
  images,
  onNext,
  onPrev,
}: ScrollableImageCarouselProps) => {
  const pointerDownPositionRef = useRef<number | null>(null)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerDownPositionRef.current = e.clientX
  }
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDownPositionRef.current) return

    const diff = pointerDownPositionRef.current - e.clientX

    if (diff < -10) {
      onPrev()
      pointerDownReset()
    } else if (diff > 10) {
      onNext()
      pointerDownReset()
    }
  }

  const pointerDownReset = () => {
    pointerDownPositionRef.current = null
  }

  return (
    <Carousel
      currentIdx={currentIdx}
      images={images}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={pointerDownReset}
      onPointerOut={pointerDownReset}
    />
  )
}

export default ScrollableImageCarousel
