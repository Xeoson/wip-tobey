import browserRoutes from 'app/lib/browserRoutes'
import AddToCartButton from 'features/cart/ui/AddToCartButton'
import AddToFavoriteButton from 'features/favorite/ui/AddToFavoriteButton'
import { Suspense, lazy, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'shared/lib/helpers/classNames'
import { type IProduct } from '../../../app/model/db/types'
import s from './ProductCard.module.scss'
import { useMatchHover } from 'app/lib/const'

const HoveredImageCarouselAsync = lazy(
  async () => await import('./HoveredImageCarousel')
)

export interface ProductCardProps {
  size?: 'sm' | 'md' | 'lg'
  withCart?: boolean
  withFavorite?: boolean
}

const ProductCard = ({
  size = 'md',
  withCart = false,
  withFavorite = false,
  ...props
}: ProductCardProps & IProduct) => {
  const navigate = useNavigate()
  const matchHover = useMatchHover()

  const isScrollingRef = useRef(false)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isScrollingRef.current = false
    setTimeout(() => {
      isScrollingRef.current = true
    }, 120)
  }
  const handlePointerUp = () => {
    if (!isScrollingRef.current) {
      navigate(browserRoutes.product(props.id))
    }
  }
  const handleLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    isScrollingRef.current = false
  }

  return (
    <div
      onPointerUp={handlePointerUp}
      onPointerLeave={handleLeave}
      onPointerDown={handlePointerDown}
      className={cn(s.main, s[size])}
    >
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
      <div className={s.title}>{props.title}</div>
      <div className={s.subtitle}>{props.description}</div>
      <div className={s.price}>{props.price}$</div>
      {withCart && (
        <AddToCartButton
          className={s.cartBtn}
          rotation={size === 'sm' ? 'vertical' : 'horizontal'}
          productId={props.id}
        />
      )}
      {withFavorite && (
        <AddToFavoriteButton className={s.favorite} productId={props.id} />
      )}
    </div>
  )
}

export default ProductCard
