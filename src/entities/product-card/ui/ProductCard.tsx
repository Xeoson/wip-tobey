import browserRoutes from 'app/lib/browserRoutes'
import AddToCartButton from 'features/cart/ui/AddToCartButton'
import AddToFavoriteButton from 'features/favorite/ui/AddToFavoriteButton'
import { Suspense, lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'shared/lib/helpers/classNames'
import usePointerClick from 'shared/lib/hooks/usePointerClick'
import { phonePublicPathMock } from 'shared/lib/mocks/images'
import Image, { type ISource } from 'shared/ui/Blocks/Image'
import { type IProduct } from '../../../app/api/firestore/types'
import s from './ProductCard.module.scss'

const HoveredImageCarouselAsync = lazy(
  async () => await import('./HoveredImageCarousel')
)

export interface ProductCardProps {
  size?: 'sm' | 'md' | 'lg'
  imgType?: 'static' | 'carousel'
  withCart?: boolean
  withFavorite?: boolean
}

const productImageSources: ISource[] = [{ transf: 'w_300' }]

const ProductCard = ({
  size = 'md',
  withCart = true,
  withFavorite = true,
  imgType = 'static',
  ...props
}: ProductCardProps & IProduct) => {
  const navigate = useNavigate()

  const events = usePointerClick(() => {
    navigate(browserRoutes.product(props.id))
  })

  return (
    <div {...events} className={cn(s.main, s[size])}>
      {imgType === 'carousel' ? (
        <Suspense>
          <HoveredImageCarouselAsync
            sources={productImageSources}
            publicPaths={[
              phonePublicPathMock,
              phonePublicPathMock,
              phonePublicPathMock,
              phonePublicPathMock,
            ]}
            className={s.imgBlock}
            images={props.images}
          />
        </Suspense>
      ) : (
        <Image
          className={s.imgBlock}
          isVisible
          publicPath={phonePublicPathMock}
          sources={productImageSources}
        />
      )}
      <p className={s.title}>{props.title}</p>
      <p className={s.subtitle}>{props.description}</p>
      <span className={s.price}>{props.price}$</span>
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
