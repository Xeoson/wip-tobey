import { useState } from 'react'
import cn from 'shared/lib/helpers/classNames'
import { type DP } from 'shared/lib/types'
import CarouselPagination from 'shared/ui/Blocks/CarouselPagination'
import Carousel from 'shared/ui/Carousels/Carousel'
import s from './HoveredImageCarousel.module.scss'

interface HoveredImageCarouselProps extends Pick<DP, 'className'> {
  images: string[]
}

const HoveredImageCarousel = ({
  images,
  className,
}: HoveredImageCarouselProps) => {
  const [idx, setIdx] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect()
    const imgArea = width / images.length
    const containerX = e.clientX - left
    setIdx(Math.floor(containerX / imgArea))
  }

  return (
    <Carousel
      onMouseMove={handleMouseMove}
      className={cn(s.main, className)}
      currentIdx={idx}
      images={images}
      animDuration={0.25}
    >
      <CarouselPagination
        style="minify"
        currentIdx={idx}
        itemsCount={images.length}
        onSetCurrentIdx={(idx) => {
          setIdx(idx)
        }}
      />
    </Carousel>
  )
}

export default HoveredImageCarousel
