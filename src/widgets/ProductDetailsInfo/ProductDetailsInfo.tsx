import AddToCartButton from 'features/cart/ui/AddToCartButton'
import AddToFavoriteButton from 'features/favorite/ui/AddToFavoriteButton'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import products from 'shared/lib/mocks/products'
import { colorVariants } from 'shared/lib/mocks/variants'
import Sticker from 'shared/ui/Stickers/Sticker'
import ColorVariants from 'shared/ui/Variants/ColorVariants'
import CouponInput from 'widgets/CouponInput/CouponInput'
import s from './ProductDetailsInfo.module.scss'

const continueButtonStyles: ButtonStyles = {
  size: 'md',
  theme: 'secondary',
}

interface ProductDetailsInfoProps {}

const ProductDetailsInfo = (props: ProductDetailsInfoProps) => {
  const product = products[0]
  const variantsId = true
  return (
    <div className={`${s.main} ${s.mobile}`}>
      <div className={s.stickers}>
        <Sticker text={'Free delivery'} color="secondary" />
      </div>
      <AddToFavoriteButton className={s.favorite} productId={product.id} />
      <div className={s.title}>{product.title}</div>
      <div className={s.desc}>{product.description}</div>
      <div className={s.price}>{product.price}</div>
      <div className={s.variants}>
        {variantsId && (
          <ColorVariants onSetVariant={() => {}} variants={colorVariants} />
        )}
      </div>
      <div className={s.coupon}>
        <CouponInput />
      </div>

      <AddToCartButton
        productId={product.id}
        rotation="horizontal"
        className={s.add}
      />
      <Button styles={continueButtonStyles}>
        Continue
      </Button>
    </div>
  )
}

export default ProductDetailsInfo
