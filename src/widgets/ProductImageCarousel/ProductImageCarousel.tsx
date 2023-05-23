import { useState } from 'react'
import CarouselPagination from 'shared/ui/Blocks/CarouselPagination'
import MinifyImageList from 'shared/ui/Blocks/MinifyImageList'
import MobileScrollableCarousel from 'shared/ui/Carousels/MobileScrollableCarousel'
import s from './ProductImageCarousel.module.scss'
import MouseScrollableCarousel from 'shared/ui/Carousels/MouseScrollableCarousel'

interface ImageCarouselProps {
  images: string[]
}

const ImageCarousel = ({ images, ...props }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className={s.main}>
      {/* <MobileScrollableCarousel
        currentIdx={currentIndex}
        images={images}
        onSetIdx={(idx) => {
          setCurrentIndex(idx)
        }}
      /> */}
      <MouseScrollableCarousel
        currentIdx={currentIndex}
        images={images}
        onSetIdx={(idx) => {
          setCurrentIndex(idx)
        }}
      />
      <MinifyImageList
        currentIdx={currentIndex}
        images={images}
        onSetCurrentIdx={(idx) => {
          setCurrentIndex(idx)
        }}
      />
      <CarouselPagination
        currentIdx={currentIndex}
        itemsCount={images.length}
        onSetCurrentIdx={(idx) => {
          setCurrentIndex(idx)
        }}
      />
    </div>
  )
}

export default ImageCarousel
