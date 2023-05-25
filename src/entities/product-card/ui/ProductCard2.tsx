import { useMatchHover } from 'main'
import { Suspense, lazy, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'shared/lib/helpers/classNames'
import browserRoutes from '../../../app/lib/browserRoutes'
import { type IProduct } from '../../../app/model/firestore/types'
import s from './ProductCard2.module.scss'

const HoveredImageCarouselAsync = lazy(
  async () => await import('./HoveredImageCarousel')
)

type SizeTypes = 'sm' | 'md' | 'lg'

export interface ProductCardProps<S extends SizeTypes> {
  size: S
  children?: S extends 'md' | 'lg' ? ReactNode : never
}

const ProductCard2 = <S extends SizeTypes>({
  size,
  children,
  ...props
}: ProductCardProps<S> & IProduct) => {
  const matchHover = useMatchHover()
  const navigate = useNavigate()

  const handleClick = (e: React.PointerEvent<HTMLDivElement>) => {
    navigate(browserRoutes.product(props.id))
  }

  return (
    <div onClick={handleClick} className={cn(s.main, s[size])}>
      {matchHover ? (
        <Suspense>
          <HoveredImageCarouselAsync
            className={s.imgBlock}
            images={props.images}
          />
        </Suspense>
      ) : (
        <div className={s.imgBlock}>
          <img src={props.images[0]} />
        </div>
      )}
      <p className={s.title}>{props.title}</p>
      <p className={s.subtitle}>{props.description}</p>
      <span className={s.price}>{props.price}$</span>
    </div>
  )
}

export default ProductCard2
