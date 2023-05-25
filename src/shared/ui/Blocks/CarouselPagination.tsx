import cn from 'shared/lib/helpers/classNames'
import s from './CarouselPagination.module.scss'

interface CarouselPaginationProps {
  itemsCount: number
  currentIdx: number
  onSetCurrentIdx: (idx: number) => void
  style?: 'default' | 'minify'
}

const CarouselPagination = ({
  currentIdx,
  itemsCount,
  onSetCurrentIdx,
  style = 'default',
}: CarouselPaginationProps) => {
  return (
    <div className={cn(s.main, s[style])}>
      {Array(itemsCount)
        .fill('')
        .map((el, i) => (
          <span
            key={i}
            className={`${s.item} ${i === currentIdx ? s.current : ''}`}
            onClick={() => {
              onSetCurrentIdx(i)
            }}
          ></span>
        ))}
    </div>
  )
}

export default CarouselPagination
