import PageLayout from 'app/ui/PageLayout'
import ProductCard from 'entities/product-card/ui/ProductCard'
import { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import products from 'shared/lib/mocks/products'
import s from './Demo.module.scss'
import cn from 'shared/lib/helpers/classNames'

interface DemoProps {
  columns: "1" | "3" | "5"
}

const Demo = ({ columns = "5" }: DemoProps) => {
  const [idx, setIdx] = useState(0)

  return (
    <PageLayout>
      <div className={cn(s.main, columns)}>
        <ul
          // style={{
          //   gridTemplateColumns: `repeat(${columns}, ${100 / columns}%)`,
          // }}
          className={s.list}
        >
          {products.map((el, i) => (
            <li key={i} className={s.item}>
              <ProductCard {...el} size="lg" withCart withFavorite />
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setIdx((prev) => prev - 1)
          }}
          className={s.prevBtn}
        >
          <AiOutlineRight />
        </button>
        <button
          onClick={() => {
            setIdx((prev) => prev + 1)
          }}
          className={s.nextBtn}
        >
          <AiOutlineRight />
        </button>
      </div>
    </PageLayout>
  )
}

export default Demo
