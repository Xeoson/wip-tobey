import products from '../../mocks/products'
import ProductCard from '../UI/Cards/ProductCard'
import s from './FavoriteProducts.module.scss'

interface FavoriteProductsProps {}

const FavoriteProducts = (props: FavoriteProductsProps) => {
  return (
    <div className={s.main}>
      {products.map((el) => (
        <ProductCard key={el.id} {...el} withFavorite withCart size="cart" />
      ))}
    </div>
  )
}

export default FavoriteProducts
