import cn from 'shared/lib/helpers/classNames'
import { type DP } from '../../../shared/lib/types'
import s from './Carousel.module.scss'

interface CarouselProps extends DP {
  images: string[]
  currentIdx: number
  animDuration?: number
}

const Carousel = ({
  currentIdx,
  images,
  children,
  className,
  animDuration = 0.4,
  ...props
}: CarouselProps) => {
  return (
    <div {...props} className={cn(s.main, className)}>
      <div
        style={{
          transform: `translateX(-${currentIdx * 100}%)`,
          transition: `transform ${animDuration}s ease`,
        }}
        className={s.list}
      >
        {images.map((el) => (
          <span
            key={el}
            style={{ backgroundImage: `url(${el})` }}
            className={s.item}
          />
        ))}
      </div>
      {children}
    </div>
  )
}

export default Carousel
