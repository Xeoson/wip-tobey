import cn from '@/shared/lib/helpers/classNames'
import s from './GridSkeletonLoader.module.scss'

export interface GridSkeletonLoaderProps {
  gridTemplate: string
  width?: string
  height?: string
}
const GridSkeletonLoader = ({
  gridTemplate,
  width,
  height,
}: GridSkeletonLoaderProps) => {
  const els = [
    ...new Set([...gridTemplate.matchAll(/\b(?:[ib]\d*)\b/g)].map((e) => e[0])),
  ]

  return (
    <div style={{ width, height, gridTemplate }} className={s.main}>
      {els.map((type, i) => (
        <div
          style={{ gridArea: type }}
          key={i}
          className={cn(s.item, type.startsWith('i') ? s.img : s.block)}
        />
      ))}
    </div>
  )
}

export default GridSkeletonLoader
