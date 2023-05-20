import { type IProduct } from '../../../types/model'
import ProductCard, { type ProductCardProps } from '../Cards/ProductCard'
import s from './ProductList.module.scss'

interface ProductListProps extends ProductCardProps {
  products: IProduct[]
}

const ProductList = ({ products, ...props }: ProductListProps) => {
  return (
    <div className={s.main}>
      {products.map((el) => (
        <ProductCard key={el.id} {...el} {...props} />
      ))}
    </div>
  )
}

export default ProductList
