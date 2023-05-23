import { type IProduct } from 'app/model/db/types'
import ProductCard from 'entities/product-card/ui/ProductCard'
import useTapMouseScroll from 'shared/lib/hooks/useTapMouseScroll'
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
  const events = useTapMouseScroll()

  return (
    <div className={s.main}>
      <div className={s.headerBlock}>
        <h3 className={s.title}>{title}</h3>
        <button className={s.more}>{subtitle}</button>
      </div>
      <div className={s.itemList} {...events}>
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
