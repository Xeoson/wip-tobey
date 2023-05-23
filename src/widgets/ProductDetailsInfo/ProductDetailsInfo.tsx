import AddToCartButton from 'features/cart/ui/AddToCartButton'
import AddToFavoriteButton from 'features/favorite/ui/AddToFavoriteButton'
import products from 'shared/lib/mocks/products'
import { colorVariants } from 'shared/lib/mocks/variants'
import Button from 'shared/ui/Buttons/Button'
import Sticker from 'shared/ui/Stickers/Sticker'
import ColorVariants from 'shared/ui/Variants/ColorVariants'
import CouponInput from 'widgets/CouponInput/CouponInput'
import s from './ProductDetailsInfo.module.scss'

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
      <Button size="md" color="secondary" className={s.continue}>
        Continue
      </Button>
    </div>
  )
}

export default ProductDetailsInfo
