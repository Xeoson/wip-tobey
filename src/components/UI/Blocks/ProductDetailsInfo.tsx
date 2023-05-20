import products from '../../../mocks/products'
import { colorVariants } from '../../../mocks/variants'
import AddToCartButton from '../Buttons/AddToCartButton'
import AddToFavoriteButton from '../Buttons/AddToFavoriteButton'
import Button from '../Buttons/Button'
import CouponInput from '../Inputs/CouponInput'
import Sticker from '../Stickers/Sticker'
import ColorVariants from '../Variants/ColorVariants'
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
