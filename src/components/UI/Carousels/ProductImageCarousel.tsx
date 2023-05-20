import { useState } from "react"
import CarouselPagination from "../Blocks/CarouselPagination"
import MinifyImageList from "../Blocks/MinifyImageList"
import s from "./ProductImageCarousel.module.scss"
import ScrollableImageCarousel from "./ScrollableImageCarousel"

interface ImageCarouselProps {
  images: string[]
}

const ImageCarousel = ({ images, ...props }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const onNext = () => {
    if (currentIndex >= images.length - 1) return
    setCurrentIndex((prev) => prev + 1)
  }

  return (
    <div className={s.main}>
      <ScrollableImageCarousel
        currentIdx={currentIndex}
        images={images}
        onNext={onNext}
        onPrev={onPrev}
      />
      <MinifyImageList
        currentIdx={currentIndex}
        images={images}
        onSetCurrentIdx={(idx) => { setCurrentIndex(idx) }}
      />
      <CarouselPagination
        currentIdx={currentIndex}
        itemsCount={images.length}
        onSetCurrentIdx={(idx) => { setCurrentIndex(idx) }}
      />
    </div>
  )
}

export default ImageCarousel
