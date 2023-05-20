import { type IProduct } from '../../../types/model'
import ProductCard from '../Cards/ProductCard'
import s from './ProductCarousel.module.scss'

interface ProductCarouselProps {
  title: string
  subtitle?: string
  products: IProduct[]
  size: 'md' | 'lg'
}

const ProductCarousel = ({
  title,
  subtitle = 'See all',
  products,
  size,
  ...props
}: ProductCarouselProps) => {
  return (
    <div className={s.main}>
      <div className={s.headerBlock}>
        <h3 className={s.title}>{title}</h3>
        <button className={s.more}>{subtitle}</button>
      </div>
      <div className={s.itemList}>
        {products.map((el) => (
          <ProductCard
            key={el.id}
            {...el}
            size={size}
            withFavorite={size === 'lg'}
            withCart={size === 'lg'}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel
