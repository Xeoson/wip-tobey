import cn from '@/shared/lib/helpers/classNames'
import { type DP } from '../../../shared/lib/types'
import Image, { type ISource } from '../Blocks/Image'
import s from './Carousel.module.scss'

interface CarouselProps extends DP {
  publicPaths: string[]
  sources: ISource[]
  currentIdx: number
  animDuration?: number
}

const Carousel = ({
  currentIdx,
  publicPaths,
  sources,
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
        {publicPaths.map((el, i) => (
          <Image
            isVisible={currentIdx === i}
            className={s.item}
            publicPath={el}
            sources={sources}
            key={i}
          />
        ))}
      </div>
      {children}
    </div>
  )
}

export default Carousel
