import { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import banners from 'shared/lib/mocks/banners'
import CarouselPagination from '../Blocks/CarouselPagination'
import { type ISource } from '../Blocks/Image'
import s from './BannerCarousel.module.scss'
import Carousel from './Carousel'

const bannerSources: ISource[] = [
  { media: '(max-width: 767px)', transf: 'ar_2:1,w_400' },
  { media: '(min-width: 768px)', transf: 'ar_3:1,w_1000,c_fill' },
]
const publicPaths = ['banner1_chvnu2.jpg', 'banner_2_tobey_ydg0o5.webp']

interface BannerCarouselProps {}

const BannerCarousel = (props: BannerCarouselProps) => {
  const [idx, setIdx] = useState(0)

  const onPrev = () => {
    if (idx > 0) {
      setIdx((prev) => prev - 1)
    } else {
      setIdx(publicPaths.length - 1)
    }
  }

  const onNext = () => {
    if (idx >= publicPaths.length - 1) {
      setIdx(0)
    } else {
      setIdx((prev) => prev + 1)
    }
  }

  return (
    <div className={s.main}>
      <Carousel
        currentIdx={idx}
        publicPaths={publicPaths}
        sources={bannerSources}
      >
        <button onClick={onPrev} className={s.prevBtn}>
          <AiOutlineRight />
        </button>
        <button onClick={onNext} className={s.nextBtn}>
          <AiOutlineRight />
        </button>
      </Carousel>
      <CarouselPagination
        currentIdx={idx}
        itemsCount={publicPaths.length}
        onSetCurrentIdx={(i) => {
          setIdx(i)
        }}
      />
    </div>
  )
}

export default BannerCarousel
